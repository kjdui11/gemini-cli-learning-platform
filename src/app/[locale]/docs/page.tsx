import { redirect } from 'next/navigation'
import { isValidLocale, locales } from '@/i18n/config'
import DocsContent from '@/components/pages/DocsContent'

interface LocaleDocsPageProps {
  params: Promise<{
    locale: string
  }>
}

export default async function LocaleDocsPage({ params }: LocaleDocsPageProps) {
  const { locale } = await params

  // Validate locale
  if (!isValidLocale(locale)) {
    redirect('/docs')
  }

  // Render the docs page with locale context
  return <DocsContent locale={locale} />
}

export async function generateStaticParams() {
  // Generate static params for all locales including default for static export
  return locales.map((locale) => ({
    locale,
  }))
}
