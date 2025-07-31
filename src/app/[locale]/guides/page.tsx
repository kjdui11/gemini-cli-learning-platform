import { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { isValidLocale, defaultLocale, locales } from '@/i18n/config'
import GuidesContent from '@/components/pages/GuidesContent'

interface LocaleGuidesPageProps {
  params: Promise<{
    locale: string
  }>
}

export async function generateStaticParams() {
  // Generate static params for all locales
  return locales.map((locale) => ({
    locale,
  }))
}

export async function generateMetadata({ params }: LocaleGuidesPageProps): Promise<Metadata> {
  const { locale } = await params

  const titles = {
    en: 'Gemini CLI Usage Guides | Complete Tutorial from Beginner to Advanced',
    zh: 'Gemini CLI 使用指南 | 从入门到进阶的完整教程',
    de: 'Gemini CLI Nutzungsanleitungen | Vollständiges Tutorial von Anfänger bis Fortgeschritten',
    fr: 'Guides d\'utilisation de Gemini CLI | Tutoriel complet du débutant à l\'avancé',
    ja: 'Gemini CLI 使用ガイド | 初心者から上級者まで完全チュートリアル',
    ko: 'Gemini CLI 사용 가이드 | 초보자부터 고급자까지 완전한 튜토리얼',
    es: 'Guías de uso de Gemini CLI | Tutorial completo de principiante a avanzado',
    hi: 'Gemini CLI उपयोग गाइड | शुरुआती से उन्नत तक पूर्ण ट्यूटोरियल',
    ru: 'Руководства по использованию Gemini CLI | Полный учебник от начинающего до продвинутого'
  }

  const descriptions = {
    en: 'Comprehensive Gemini CLI usage guides, including beginner tutorials, advanced techniques, practical cases and best practices. Learn how to use AI command line tools to improve development efficiency.',
    zh: '全面的 Gemini CLI 使用指南，包含入门教程、进阶技巧、实战案例和最佳实践。学习如何使用 AI 命令行工具提升开发效率。',
    de: 'Umfassende Gemini CLI-Nutzungsanleitungen, einschließlich Einsteiger-Tutorials, fortgeschrittene Techniken, praktische Fälle und bewährte Praktiken. Lernen Sie, wie Sie AI-Kommandozeilen-Tools zur Verbesserung der Entwicklungseffizienz verwenden.',
    fr: 'Guides d\'utilisation complets de Gemini CLI, incluant des tutoriels pour débutants, des techniques avancées, des cas pratiques et les meilleures pratiques. Apprenez à utiliser les outils de ligne de commande IA pour améliorer l\'efficacité de développement.',
    ja: '包括的な Gemini CLI 使用ガイド。初心者向けチュートリアル、高度なテクニック、実践的なケース、ベストプラクティスを含みます。AI コマンドラインツールを使用して開発効率を向上させる方法を学びます。',
    ko: '포괄적인 Gemini CLI 사용 가이드로, 초보자 튜토리얼, 고급 기술, 실용적인 사례 및 모범 사례를 포함합니다. AI 명령줄 도구를 사용하여 개발 효율성을 향상시키는 방법을 배우세요.',
    es: 'Guías de uso completas de Gemini CLI, incluyendo tutoriales para principiantes, técnicas avanzadas, casos prácticos y mejores prácticas. Aprende cómo usar herramientas de línea de comandos de IA para mejorar la eficiencia de desarrollo.',
    hi: 'व्यापक Gemini CLI उपयोग गाइड, जिसमें शुरुआती ट्यूटोरियल, उन्नत तकनीकें, व्यावहारिक मामले और सर्वोत्तम प्रथाएं शामिल हैं। विकास दक्षता में सुधार के लिए AI कमांड लाइन टूल का उपयोग करना सीखें।',
    ru: 'Всеобъемлющие руководства по использованию Gemini CLI, включая учебники для начинающих, продвинутые техники, практические случаи и лучшие практики. Изучите, как использовать инструменты командной строки ИИ для повышения эффективности разработки.'
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

export default async function LocaleGuidesPage({ params }: LocaleGuidesPageProps) {
  const { locale } = await params

  // Validate locale
  if (!isValidLocale(locale)) {
    redirect('/guides')
  }

  // If it's the default locale, redirect to root path
  if (locale === defaultLocale) {
    redirect('/guides')
  }

  // Render the guides page with locale context
  return <GuidesContent locale={locale} />
}


