import { redirect } from 'next/navigation'
import { isValidLocale, defaultLocale, locales } from '@/i18n/config'
import HomePage from '@/app/page'

interface LocalePageProps {
  params: Promise<{
    locale: string
  }>
}

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params

  // Skip processing for special files that shouldn't be treated as locales
  if (locale.includes('.') || locale.includes('manifest') || locale.includes('robots') || locale.includes('sitemap')) {
    redirect('/')
  }

  // Validate locale
  if (!isValidLocale(locale)) {
    redirect('/')
  }

  // If it's the default locale, redirect to root
  if (locale === defaultLocale) {
    redirect('/')
  }

  // Render the home page with locale context
  return <HomePage />
}

export async function generateStaticParams() {
  // Generate static params for all locales except default
  // Filter out any non-locale paths that might be caught by this route
  const nonDefaultLocales = locales.filter(locale => locale !== defaultLocale)

  return nonDefaultLocales.map((locale) => ({
    locale,
  }))
}
