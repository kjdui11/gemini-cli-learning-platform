import { redirect } from 'next/navigation'
import { isValidLocale, locales } from '@/i18n/config'
import EnhancedCommandsContent from '@/components/pages/EnhancedCommandsContent'

interface LocaleCommandsPageProps {
  params: Promise<{
    locale: string
  }>
}

export default async function LocaleCommandsPage({ params }: LocaleCommandsPageProps) {
  const { locale } = await params

  // Validate locale
  if (!isValidLocale(locale)) {
    redirect('/commands')
  }

  // Render the commands page with locale context
  return <EnhancedCommandsContent locale={locale} />
}

export async function generateStaticParams() {
  // Generate static params for all locales including default for static export
  return locales.map((locale) => ({
    locale,
  }))
}
