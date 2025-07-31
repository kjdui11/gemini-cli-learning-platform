'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import {
  defaultLocale,
  isValidLocale,
  removeLocaleFromPath,
  type Locale
} from '@/i18n/config';

// Translation messages cache
const messagesCache: Partial<Record<Locale, Record<string, unknown>>> = {};

export function useTranslation() {
  const pathname = usePathname();
  const router = useRouter();
  const [messages, setMessages] = useState<Record<string, unknown>>({});
  const [currentLocale, setCurrentLocale] = useState<Locale>(defaultLocale);
  const [isLoading, setIsLoading] = useState(true);

  // Get current locale from pathname or localStorage
  useEffect(() => {
    const { locale: pathLocale } = removeLocaleFromPath(pathname);

    // If we have a locale in the path, use it
    if (pathLocale !== defaultLocale) {
      setCurrentLocale(pathLocale);
      return;
    }

    // Otherwise, check localStorage for saved preference
    const savedLocale = localStorage.getItem('preferred-locale');
    if (savedLocale && isValidLocale(savedLocale)) {
      setCurrentLocale(savedLocale as Locale);
    } else {
      setCurrentLocale(defaultLocale);
    }
  }, [pathname]);

  // Load messages for current locale
  useEffect(() => {
    async function loadMessages() {
      setIsLoading(true);
      
      if (messagesCache[currentLocale]) {
        setMessages(messagesCache[currentLocale]);
        setIsLoading(false);
        return;
      }

      try {
        const messageModule = await import(`@/messages/${currentLocale}.json`);
        messagesCache[currentLocale] = messageModule.default;
        setMessages(messageModule.default);
      } catch (error) {
        console.error(`Failed to load messages for locale ${currentLocale}:`, error);
        // Fallback to default locale
        if (currentLocale !== defaultLocale) {
          try {
            const fallbackModule = await import(`@/messages/${defaultLocale}.json`);
            setMessages(fallbackModule.default);
          } catch (fallbackError) {
            console.error('Failed to load fallback messages:', fallbackError);
            setMessages({});
          }
        }
      } finally {
        setIsLoading(false);
      }
    }

    loadMessages();
  }, [currentLocale]);

  // Translation function
  const t = (key: string, params?: Record<string, string | number>): string => {
    const keys = key.split('.');
    let value: unknown = messages;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key; // Return key if translation not found
      }
    }

    if (typeof value !== 'string') {
      return key;
    }

    // Replace parameters
    if (params) {
      return value.replace(/\{(\w+)\}/g, (match, paramKey) => {
        return params[paramKey]?.toString() || match;
      });
    }

    return value;
  };

  // Change locale function
  const changeLocale = (newLocale: Locale) => {
    if (!isValidLocale(newLocale)) return;

    // Save preference
    localStorage.setItem('preferred-locale', newLocale);
    document.cookie = `locale=${newLocale}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;

    // Update current locale state
    setCurrentLocale(newLocale);

    // Navigate to the new locale path
    const { pathname: currentPath } = removeLocaleFromPath(pathname);
    const newPath = newLocale === defaultLocale ? currentPath : `/${newLocale}${currentPath}`;
    router.push(newPath);
  };

  return {
    t,
    currentLocale,
    changeLocale,
    isLoading,
    messages,
  };
}

// Hook for getting current locale only
export function useCurrentLocale(): Locale {
  const pathname = usePathname();
  const { locale } = removeLocaleFromPath(pathname);
  return locale;
}
