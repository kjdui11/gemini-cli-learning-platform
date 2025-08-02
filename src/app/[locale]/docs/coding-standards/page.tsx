import { Metadata } from 'next'
import { redirect } from 'next/navigation'

interface CodingStandardsPageProps {
  params: Promise<{
    locale: string
  }>
}

export async function generateMetadata({ params }: CodingStandardsPageProps): Promise<Metadata> {
  const { locale } = await params
  
  const titles = {
    "en": "Coding Standards",
    "zh": "编码规范",
    "hi": "कोडिंग मानक",
    "fr": "Normes de codage",
    "de": "Codierungsstandards",
    "ja": "コーディング規約",
    "ko": "코딩 표준",
    "es": "Estándares de codificación",
    "ru": "Стандарты кодирования"
}

  const descriptions = {
    "en": "Learn about coding standards and best practices for Gemini CLI development",
    "zh": "了解 Gemini CLI 开发的编码规范和最佳实践",
    "hi": "Gemini CLI विकास के लिए कोडिंग मानकों और सर्वोत्तम प्रथाओं के बारे में जानें",
    "fr": "Découvrez les normes de codage et les meilleures pratiques pour le développement Gemini CLI",
    "de": "Erfahren Sie mehr über Codierungsstandards und bewährte Verfahren für die Gemini CLI-Entwicklung",
    "ja": "Gemini CLI 開発のコーディング規約とベストプラクティスについて学ぶ",
    "ko": "Gemini CLI 개발을 위한 코딩 표준 및 모범 사례에 대해 알아보기",
    "es": "Aprende sobre estándares de codificación y mejores prácticas para el desarrollo de Gemini CLI",
    "ru": "Изучите стандарты кодирования и лучшие практики для разработки Gemini CLI"
}

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
  }
}

export default async function LocaleCodingStandardsPage({ params }: CodingStandardsPageProps) {
  const { locale } = await params
  
  // Redirect to English version for now
  redirect('/docs/coding-standards')
}

export async function generateStaticParams() {
  const locales = ['zh', 'hi', 'fr', 'de', 'ja', 'ko', 'es', 'ru']
  
  return locales.map((locale) => ({
    locale,
  }))
}