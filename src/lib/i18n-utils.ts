import { headers } from 'next/headers'
import { defaultLocale, isValidLocale, getLocaleFromCountry, type Locale } from '@/i18n/config'

export function detectLocale(): Locale {
  // For server-side rendering, we'll use the default locale
  // The actual locale detection happens on the client side
  return defaultLocale
}

export async function detectLocaleFromHeaders(): Promise<Locale> {
  try {
    const headersList = await headers()
    
    // Try to get locale from Accept-Language header
    const acceptLanguage = headersList.get('accept-language')
    if (acceptLanguage) {
      const languages = acceptLanguage
        .split(',')
        .map(lang => lang.split(';')[0].trim())
        .map(lang => lang.split('-')[0].toLowerCase())
      
      for (const lang of languages) {
        if (isValidLocale(lang)) {
          return lang as Locale
        }
      }
    }
    
    // Try to get country from CF-IPCountry header (Cloudflare)
    const cfCountry = headersList.get('cf-ipcountry')
    if (cfCountry) {
      return getLocaleFromCountry(cfCountry)
    }
    
    // Try to get country from X-Vercel-IP-Country header (Vercel)
    const vercelCountry = headersList.get('x-vercel-ip-country')
    if (vercelCountry) {
      return getLocaleFromCountry(vercelCountry)
    }
    
  } catch (error) {
    // Headers might not be available in some contexts
    console.warn('Could not access headers for locale detection:', error)
  }
  
  return defaultLocale
}
