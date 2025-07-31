import { redirect } from 'next/navigation'
import { isValidLocale, locales } from '@/i18n/config'
import EnhancedFAQContent from '@/components/pages/EnhancedFAQContent'

interface LocaleFaqPageProps {
  params: Promise<{
    locale: string
  }>
}

export default async function LocaleFaqPage({ params }: LocaleFaqPageProps) {
  const { locale } = await params

  // Validate locale
  if (!isValidLocale(locale)) {
    redirect('/faq')
  }

  // Render the faq page with locale context
  return <EnhancedFAQContent locale={locale} />
}

export async function generateStaticParams() {
  // Generate static params for all locales including default for static export
  return locales.map((locale) => ({
    locale,
  }))
}
