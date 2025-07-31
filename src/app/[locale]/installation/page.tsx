import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { isValidLocale, type Locale, locales, defaultLocale } from '@/i18n/config'
import { generateLocalizedMetadata, pageMetadata } from '@/lib/seo-i18n'
import InstallationContent from '@/components/pages/InstallationContent'

interface InstallationPageProps {
  params: Promise<{ locale: string }>
}

export async function generateStaticParams() {
  const nonDefaultLocales = locales.filter(locale => locale !== defaultLocale)
  return nonDefaultLocales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: InstallationPageProps): Promise<Metadata> {
  const { locale } = await params

  if (!isValidLocale(locale)) {
    return {}
  }

  const pageMeta = pageMetadata.installation[locale as Locale]
  const metadata = generateLocalizedMetadata(
    locale as Locale,
    pageMeta.title,
    pageMeta.description,
    pageMeta.keywords
  )

  // Add hreflang and language-specific meta tags
  return {
    ...metadata,
    other: {
      'language': locale,
      'locale': locale,
    },
    alternates: {
      ...metadata.alternates,
      languages: Object.fromEntries(
        locales.map(loc => [
          loc,
          loc === 'en' ? '/installation' : `/${loc}/installation`
        ])
      ),
    },
  }
}

export default async function InstallationPage({ params }: InstallationPageProps) {
  const { locale } = await params

  if (!isValidLocale(locale)) {
    notFound()
  }

  return <InstallationContent locale={locale as Locale} />
}
