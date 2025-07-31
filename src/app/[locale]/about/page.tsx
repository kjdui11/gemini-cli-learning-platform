import { Metadata } from 'next'
import { generateSEOMetadata } from '@/lib/seo-i18n'
import AboutContent from '@/components/pages/AboutContent'
import { locales } from '@/i18n/config'

interface AboutPageProps {
  params: Promise<{ locale: string }>
}

export async function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }))
}

export async function generateMetadata({ params }: AboutPageProps): Promise<Metadata> {
  const { locale } = await params
  return generateSEOMetadata({
    locale,
    title: locale === 'zh' ? '关于我们 - Gemini CLI学习平台' : 'About Us - Gemini CLI Learning Platform',
    description: locale === 'zh'
      ? '了解Gemini CLI学习平台的使命、价值观和故事。我们致力于让AI驱动的开发对全世界的开发者都可访问。'
      : 'Learn about the Gemini CLI Learning Platform\'s mission, values, and story. We\'re dedicated to making AI-powered development accessible to developers worldwide.',
    keywords: locale === 'zh'
      ? ['关于我们', 'Gemini CLI', '学习平台', 'AI开发', '社区', '使命', '价值观']
      : ['about us', 'Gemini CLI', 'learning platform', 'AI development', 'community', 'mission', 'values']
  })
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params
  
  return <AboutContent locale={locale} />
}
