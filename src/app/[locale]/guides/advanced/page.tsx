import { Metadata } from 'next'
import GuidesAdvancedContent from '@/components/pages/GuidesAdvancedContent'
import { generateSEOMetadata } from '@/lib/seo-i18n'
import { locales } from '@/i18n/config'

interface GuidesAdvancedPageProps {
  params: Promise<{ locale: string }>
}

export async function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }))
}

export async function generateMetadata({ params }: GuidesAdvancedPageProps): Promise<Metadata> {
  const { locale } = await params
  return generateSEOMetadata({
    title: locale === 'zh' ? '高级指南 - Gemini CLI学习平台' : 'Advanced Guides - Gemini CLI Learning Platform',
    description: locale === 'zh'
      ? '掌握Gemini CLI的高级教程和指南。学习复杂的工作流程、自动化和专业开发技术。'
      : 'Advanced tutorials and guides for mastering Gemini CLI. Learn complex workflows, automation, and professional development techniques.',
    keywords: locale === 'zh'
      ? ['Gemini CLI', '高级教程', '自动化', '工作流程', 'AI开发', '命令行']
      : ['Gemini CLI', 'advanced tutorials', 'automation', 'workflows', 'AI development', 'command line'],
    locale
  })
}

export default async function GuidesAdvancedPage({ params }: GuidesAdvancedPageProps) {
  const { locale } = await params
  
  return <GuidesAdvancedContent locale={locale} />
}
