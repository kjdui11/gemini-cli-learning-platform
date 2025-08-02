import { Metadata } from 'next'
import { redirect } from 'next/navigation'

interface ExtensionPublishingPageProps {
  params: Promise<{
    locale: string
  }>
}

export async function generateMetadata({ params }: ExtensionPublishingPageProps): Promise<Metadata> {
  const { locale } = await params
  
  const titles = {
    "en": "Extension Publishing",
    "zh": "扩展发布",
    "hi": "एक्सटेंशन प्रकाशन",
    "fr": "Publication d'extension",
    "de": "Erweiterungsveröffentlichung",
    "ja": "拡張の公開",
    "ko": "확장 게시",
    "es": "Publicación de extensión",
    "ru": "Публикация расширений"
}

  const descriptions = {
    "en": "Learn how to publish and distribute Gemini CLI extensions",
    "zh": "了解如何发布和分发 Gemini CLI 扩展",
    "hi": "Gemini CLI एक्सटेंशन को प्रकाशित और वितरित करना सीखें",
    "fr": "Apprenez à publier et distribuer les extensions Gemini CLI",
    "de": "Erfahren Sie, wie Sie Gemini CLI-Erweiterungen veröffentlichen und verteilen",
    "ja": "Gemini CLI 拡張の公開と配布方法を学ぶ",
    "ko": "Gemini CLI 확장을 게시하고 배포하는 방법 알아보기",
    "es": "Aprenda a publicar y distribuir extensiones de Gemini CLI",
    "ru": "Узнайте, как публиковать и распространять расширения Gemini CLI"
  }

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
  }
}

export default async function LocaleExtensionPublishingPage({ params }: ExtensionPublishingPageProps) {
  const { locale } = await params
  
  // Redirect to English version for now
  redirect('/docs/extension-publishing')
}

export async function generateStaticParams() {
  const locales = ['zh', 'hi', 'fr', 'de', 'ja', 'ko', 'es', 'ru']
  
  return locales.map((locale) => ({
    locale,
  }))
}