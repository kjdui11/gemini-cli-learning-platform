'use client';

import { useEffect } from 'react';
import {
  getLocaleFromCountry,
  isValidLocale,
  type Locale
} from '@/i18n/config';

interface LanguageDetectorProps {
  children: React.ReactNode;
}

export default function LanguageDetector({ children }: LanguageDetectorProps) {
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    // Check for saved language preference in localStorage
    const savedLocale = localStorage.getItem('preferred-locale');
    if (savedLocale && isValidLocale(savedLocale)) {
      return; // Already have a preference
    }

    // Check for saved language preference in cookie
    const cookieLocale = getCookieValue('locale');
    if (cookieLocale && isValidLocale(cookieLocale)) {
      localStorage.setItem('preferred-locale', cookieLocale);
      return;
    }

    // Try to detect language from browser
    const browserLanguage = detectBrowserLanguage();
    if (browserLanguage) {
      // Save preference
      localStorage.setItem('preferred-locale', browserLanguage);
      document.cookie = `locale=${browserLanguage}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
      return;
    }

    // Try to detect from IP (using a free service)
    detectLocationLanguage().then((detectedLocale) => {
      if (detectedLocale) {
        // Save preference
        localStorage.setItem('preferred-locale', detectedLocale);
        document.cookie = `locale=${detectedLocale}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
      }
    }).catch(() => {
      // Silently fail if IP detection doesn't work
    });
  }, []);

  return <>{children}</>;
}

function getCookieValue(name: string): string | null {
  if (typeof document === 'undefined') return null;
  
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop()?.split(';').shift() || null;
  }
  return null;
}

function detectBrowserLanguage(): Locale | null {
  if (typeof navigator === 'undefined') return null;

  // Get browser languages in order of preference
  const languages = navigator.languages || [navigator.language];
  
  for (const lang of languages) {
    // Extract language code (e.g., 'en-US' -> 'en')
    const langCode = lang.split('-')[0].toLowerCase();
    
    // Check if we support this language
    if (isValidLocale(langCode)) {
      return langCode as Locale;
    }
  }
  
  return null;
}

async function detectLocationLanguage(): Promise<Locale | null> {
  try {
    // Use a free IP geolocation service
    const response = await fetch('https://ipapi.co/json/', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch location');
    }
    
    const data = await response.json();
    const countryCode = data.country_code;
    
    if (countryCode) {
      return getLocaleFromCountry(countryCode);
    }
  } catch {
    // Try alternative service
    try {
      const response = await fetch('https://api.country.is/', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        const countryCode = data.country;

        if (countryCode) {
          return getLocaleFromCountry(countryCode);
        }
      }
    } catch {
      // Both services failed, return null
    }
  }
  
  return null;
}
