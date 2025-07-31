import { Metadata } from 'next'
import CodeRefactoringContent from '@/components/pages/CodeRefactoringContent'
import { locales } from '@/i18n/config'

interface Props {
  params: Promise<{
    locale: string
  }>
}

export async function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  
  const titles = {
    en: 'Code Refactoring with Gemini CLI | Improve Your Code',
    de: 'Code-Refactoring mit Gemini CLI | Verbessern Sie Ihren Code',
    fr: 'Refactorisation de code avec Gemini CLI | Améliorez votre code',
    ja: 'Gemini CLI でのコードリファクタリング | コードを改善する',
    ko: 'Gemini CLI로 코드 리팩토링 | 코드 개선하기',
    es: 'Refactorización de código con Gemini CLI | Mejore su código',
    hi: 'Gemini CLI के साथ कोड रिफैक्टरिंग | अपना कोड सुधारें',
    ru: 'Рефакторинг кода с Gemini CLI | Улучшите свой код',
    zh: '使用 Gemini CLI 进行代码重构 | 改进您的代码'
  }

  const descriptions = {
    en: 'Master code refactoring techniques using Gemini CLI. Learn to improve code quality, maintainability, and performance with AI assistance.',
    de: 'Meistern Sie Code-Refactoring-Techniken mit Gemini CLI. Lernen Sie, Codequalität, Wartbarkeit und Leistung mit KI-Unterstützung zu verbessern.',
    fr: 'Maîtrisez les techniques de refactorisation de code avec Gemini CLI. Apprenez à améliorer la qualité, la maintenabilité et les performances du code avec l\'assistance IA.',
    ja: 'Gemini CLIを使用してコードリファクタリング技術をマスターします。AIの支援でコード品質、保守性、パフォーマンスを向上させる方法を学びます。',
    ko: 'Gemini CLI를 사용하여 코드 리팩토링 기술을 마스터하세요. AI 지원으로 코드 품질, 유지보수성 및 성능을 향상시키는 방법을 배웁니다.',
    es: 'Domine las técnicas de refactorización de código usando Gemini CLI. Aprenda a mejorar la calidad, mantenibilidad y rendimiento del código con asistencia de IA.',
    hi: 'Gemini CLI का उपयोग करके कोड रिफैक्टरिंग तकनीकों में महारत हासिल करें। AI सहायता के साथ कोड गुणवत्ता, रखरखाव और प्रदर्शन में सुधार करना सीखें।',
    ru: 'Освойте техники рефакторинга кода с помощью Gemini CLI. Научитесь улучшать качество кода, его сопровождаемость и производительность с помощью ИИ.',
    zh: '掌握使用 Gemini CLI 进行代码重构的技术。学习如何在 AI 辅助下改进代码质量、可维护性和性能。'
  }

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
    openGraph: {
      title: titles[locale as keyof typeof titles] || titles.en,
      description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
      type: 'article',
    },
  }
}

export default async function CodeRefactoringPage({ params }: Props) {
  const { locale } = await params
  return <CodeRefactoringContent locale={locale} />
}
