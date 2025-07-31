import { Metadata } from 'next'
import CodeReviewContent from '@/components/pages/CodeReviewContent'
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
    en: 'Code Review with Gemini CLI | AI-Powered Code Analysis',
    de: 'Code-Review mit Gemini CLI | KI-gestützte Code-Analyse',
    fr: 'Révision de code avec Gemini CLI | Analyse de code alimentée par IA',
    ja: 'Gemini CLI でのコードレビュー | AI 駆動のコード分析',
    ko: 'Gemini CLI로 코드 리뷰 | AI 기반 코드 분석',
    es: 'Revisión de código con Gemini CLI | Análisis de código impulsado por IA',
    hi: 'Gemini CLI के साथ कोड समीक्षा | AI-संचालित कोड विश्लेषण',
    ru: 'Обзор кода с Gemini CLI | Анализ кода на основе ИИ',
    zh: '使用 Gemini CLI 进行代码审查 | AI 驱动的代码分析'
  }

  const descriptions = {
    en: 'Learn how to conduct thorough code reviews using Gemini CLI. Discover AI-powered techniques for identifying bugs, security issues, and code improvements.',
    de: 'Lernen Sie, wie Sie gründliche Code-Reviews mit Gemini CLI durchführen. Entdecken Sie KI-gestützte Techniken zur Identifizierung von Bugs, Sicherheitsproblemen und Code-Verbesserungen.',
    fr: 'Apprenez à effectuer des révisions de code approfondies avec Gemini CLI. Découvrez les techniques alimentées par IA pour identifier les bugs, les problèmes de sécurité et les améliorations de code.',
    ja: 'Gemini CLIを使用して徹底的なコードレビューを行う方法を学びます。バグ、セキュリティ問題、コード改善を特定するAI駆動の技術を発見します。',
    ko: 'Gemini CLI를 사용하여 철저한 코드 리뷰를 수행하는 방법을 배웁니다. 버그, 보안 문제 및 코드 개선사항을 식별하는 AI 기반 기술을 발견하세요.',
    es: 'Aprenda a realizar revisiones de código exhaustivas usando Gemini CLI. Descubra técnicas impulsadas por IA para identificar errores, problemas de seguridad y mejoras de código.',
    hi: 'Gemini CLI का उपयोग करके संपूर्ण कोड समीक्षा करना सीखें। बग, सुरक्षा समस्याओं और कोड सुधारों की पहचान के लिए AI-संचालित तकनीकों की खोज करें।',
    ru: 'Изучите, как проводить тщательные обзоры кода с помощью Gemini CLI. Откройте для себя техники на основе ИИ для выявления ошибок, проблем безопасности и улучшений кода.',
    zh: '学习如何使用 Gemini CLI 进行全面的代码审查。发现 AI 驱动的技术来识别错误、安全问题和代码改进。'
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

export default async function CodeReviewPage({ params }: Props) {
  const { locale } = await params
  return <CodeReviewContent locale={locale} />
}
