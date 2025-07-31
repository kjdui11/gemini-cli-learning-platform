import { Metadata } from 'next'
import TermsContent from '@/components/pages/TermsContent'
import { generateSEOMetadata } from '@/lib/seo-i18n'
import { locales } from '@/i18n/config'

interface TermsPageProps {
  params: Promise<{ locale: string }>
}

export async function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }))
}

export async function generateMetadata({ params }: TermsPageProps): Promise<Metadata> {
  const { locale } = await params
  return generateSEOMetadata({
    title: locale === 'zh' ? '服务条款 - Gemini CLI学习平台' : 'Terms of Service - Gemini CLI Learning Platform',
    description: locale === 'zh'
      ? '我们的服务条款和使用Gemini CLI学习平台的条件。了解您的权利和责任。'
      : 'Terms of service and conditions for using our Gemini CLI learning platform. Learn about your rights and responsibilities.',
    keywords: locale === 'zh'
      ? ['服务条款', '使用条款', '用户协议', 'Gemini CLI', '学习平台']
      : ['terms of service', 'terms and conditions', 'user agreement', 'Gemini CLI', 'learning platform'],
    locale
  })
}

export default async function TermsPage({ params }: TermsPageProps) {
  const { locale } = await params
  
  return <TermsContent locale={locale} />
}
