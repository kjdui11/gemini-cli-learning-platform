export const locales = [
  'en',    // English (default)
  'zh',    // Chinese (Simplified)
  'ru',    // Russian
  'hi',    // Hindi (India)
  'de',    // German
  'fr',    // French
  'ja',    // Japanese
  'ko',    // Korean
  'es',    // Spanish
] as const;

export type Locale = typeof locales[number];

export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  zh: '中文',
  ru: 'Русский',
  hi: 'हिन्दी',
  de: 'Deutsch',
  fr: 'Français',
  ja: '日本語',
  ko: '한국어',
  es: 'Español',
};

export const localeFlags: Record<Locale, string> = {
  en: '🇺🇸',
  zh: '🇨🇳',
  ru: '🇷🇺',
  hi: '🇮🇳',
  de: '🇩🇪',
  fr: '🇫🇷',
  ja: '🇯🇵',
  ko: '🇰🇷',
  es: '🇪🇸',
};

// Country to locale mapping for IP-based detection
export const countryToLocale: Record<string, Locale> = {
  // English-speaking countries
  'US': 'en', 'GB': 'en', 'AU': 'en', 'NZ': 'en', 'IE': 'en',
  'ZA': 'en', 'SG': 'en', 'MY': 'en', 'PH': 'en', 'IN': 'hi', // India defaults to Hindi
  
  // Chinese-speaking regions
  'CN': 'zh', 'TW': 'zh', 'HK': 'zh', 'MO': 'zh',
  
  // Russian-speaking countries
  'RU': 'ru', 'BY': 'ru', 'KZ': 'ru', 'KG': 'ru', 'TJ': 'ru', 'UZ': 'ru',
  'AM': 'ru', 'AZ': 'ru', 'GE': 'ru', 'MD': 'ru', 'UA': 'ru',
  
  // German-speaking countries
  'DE': 'de', 'AT': 'de', 'LI': 'de',

  // French-speaking countries
  'FR': 'fr', 'BE': 'fr', 'MC': 'fr', 'LU': 'fr', 'CH': 'fr',
  'CA': 'fr', 'SN': 'fr', 'CI': 'fr', 'ML': 'fr', 'BF': 'fr',
  'NE': 'fr', 'TD': 'fr', 'MG': 'fr', 'CM': 'fr', 'CG': 'fr',
  'CF': 'fr', 'GA': 'fr', 'DJ': 'fr', 'KM': 'fr', 'VU': 'fr',
  
  // Japanese
  'JP': 'ja',
  
  // Korean
  'KR': 'ko', 'KP': 'ko',
  
  // Spanish-speaking countries
  'ES': 'es', 'MX': 'es', 'AR': 'es', 'CO': 'es', 'PE': 'es',
  'VE': 'es', 'CL': 'es', 'EC': 'es', 'GT': 'es', 'CU': 'es',
  'BO': 'es', 'DO': 'es', 'HN': 'es', 'PY': 'es', 'SV': 'es',
  'NI': 'es', 'CR': 'es', 'PA': 'es', 'UY': 'es', 'PR': 'es',
  'GQ': 'es',
};

export function getLocaleFromCountry(countryCode: string): Locale {
  return countryToLocale[countryCode.toUpperCase()] || defaultLocale;
}

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export function getLocaleDirection(locale: Locale): 'ltr' | 'rtl' {
  // All supported languages use left-to-right direction
  // If Arabic or Hebrew are added later, they would be 'rtl'
  console.log('Getting direction for locale:', locale);
  return 'ltr';
}

export function getLocalePath(locale: Locale, path: string = ''): string {
  if (locale === defaultLocale) {
    return path || '/';
  }
  return `/${locale}${path}`;
}

export function removeLocaleFromPath(path: string): { locale: Locale; pathname: string } {
  const segments = path.split('/').filter(Boolean);
  
  if (segments.length === 0) {
    return { locale: defaultLocale, pathname: '/' };
  }
  
  const firstSegment = segments[0];
  
  if (isValidLocale(firstSegment)) {
    const pathname = '/' + segments.slice(1).join('/');
    return { locale: firstSegment, pathname: pathname || '/' };
  }
  
  return { locale: defaultLocale, pathname: path };
}
