import { Metadata } from 'next'
import { redirect } from 'next/navigation'

interface ExtensionArchitecturePageProps {
  params: Promise<{
    locale: string
  }>
}

export async function generateMetadata({ params }: ExtensionArchitecturePageProps): Promise<Metadata> {
  const { locale } = await params
  
  const titles = {
    "en": "Extension Architecture",
    "zh": "扩展架构",
    "hi": "एक्सटेंशन आर्किटेक्चर",
    "fr": "Architecture d'extension",
    "de": "Erweiterungsarchitektur",
    "ja": "拡張アーキテクチャ",
    "ko": "확장 아키텍처",
    "es": "Arquitectura de extensión",
    "ru": "Архитектура расширений"
}

  const descriptions = {
    "en": "Learn about Gemini CLI extension architecture and development",
    "zh": "了解 Gemini CLI 扩展架构和开发",
    "hi": "Gemini CLI एक्सटेंशन आर्किटेक्चर और विकास के बारे में जानें",
    "fr": "Découvrez l'architecture et le développement des extensions Gemini CLI",
    "de": "Erfahren Sie mehr über die Gemini CLI-Erweiterungsarchitektur und -entwicklung",
    "ja": "Gemini CLI 拡張アーキテクチャと開発について学ぶ",
    "ko": "Gemini CLI 확장 아키텍처 및 개발에 대해 알아보기",
    "es": "Aprenda sobre la arquitectura y el desarrollo de extensiones de Gemini CLI",
    "ru": "Изучите архитектуру и разработку расширений Gemini CLI"
  }

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
  }
}

export default async function LocaleExtensionArchitecturePage({ params }: ExtensionArchitecturePageProps) {
  const { locale } = await params
  
  // Redirect to English version for now
  redirect('/docs/extension-architecture')
}

export async function generateStaticParams() {
  const locales = ['zh', 'hi', 'fr', 'de', 'ja', 'ko', 'es', 'ru']
  
  return locales.map((locale) => ({
    locale,
  }))
}