import { Metadata } from 'next'
import GuidesExamplesContent from '@/components/pages/GuidesExamplesContent'
import { generateSEOMetadata } from '@/lib/seo-i18n'
import { locales } from '@/i18n/config'

interface GuidesExamplesPageProps {
  params: Promise<{ locale: string }>
}

export async function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }))
}

export async function generateMetadata({ params }: GuidesExamplesPageProps): Promise<Metadata> {
  const { locale } = await params
  return generateSEOMetadata({
    title: locale === 'zh' ? '实用示例 - Gemini CLI学习平台' : 'Practical Examples - Gemini CLI Learning Platform',
    description: locale === 'zh'
      ? 'Gemini CLI的真实案例和实用示例。通过实际场景和动手项目进行学习。'
      : 'Real-world examples and case studies for Gemini CLI. Learn through practical scenarios and hands-on projects.',
    keywords: locale === 'zh'
      ? ['Gemini CLI', '示例', '案例研究', '实用教程', 'AI开发', '真实项目']
      : ['Gemini CLI', 'examples', 'case studies', 'practical tutorials', 'AI development', 'real-world projects'],
    locale
  })
}

export default async function GuidesExamplesPage({ params }: GuidesExamplesPageProps) {
  const { locale } = await params
  
  return <GuidesExamplesContent locale={locale} />
}
