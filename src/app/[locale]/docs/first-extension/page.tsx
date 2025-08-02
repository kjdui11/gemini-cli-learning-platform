import { Metadata } from 'next'
import { redirect } from 'next/navigation'

interface FirstExtensionPageProps {
  params: Promise<{
    locale: string
  }>
}

export async function generateMetadata({ params }: FirstExtensionPageProps): Promise<Metadata> {
  const { locale } = await params
  
  const titles = {
    "en": "First Extension",
    "zh": "第一个扩展",
    "hi": "पहला एक्सटेंशन",
    "fr": "Première extension",
    "de": "Erste Erweiterung",
    "ja": "最初の拡張",
    "ko": "첫 번째 확장",
    "es": "Primera extensión",
    "ru": "Первое расширение"
}

  const descriptions = {}

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
  }
}

export default async function LocaleFirstExtensionPage({ params }: FirstExtensionPageProps) {
  const { locale } = await params
  
  // Redirect to English version for now
  redirect('/docs/first-extension')
}

export async function generateStaticParams() {
  const locales = ['zh', 'hi', 'fr', 'de', 'ja', 'ko', 'es', 'ru']
  
  return locales.map((locale) => ({
    locale,
  }))
}