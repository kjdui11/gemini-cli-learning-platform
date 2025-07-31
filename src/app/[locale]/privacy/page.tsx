import { Metadata } from 'next'
import PrivacyContent from '@/components/pages/PrivacyContent'
import { generateSEOMetadata } from '@/lib/seo-i18n'
import { locales } from '@/i18n/config'

interface PrivacyPageProps {
  params: Promise<{ locale: string }>
}

export async function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }))
}

export async function generateMetadata({ params }: PrivacyPageProps): Promise<Metadata> {
  const { locale } = await params
  return generateSEOMetadata({
    title: locale === 'zh' ? '隐私政策 - Gemini CLI学习平台' : 'Privacy Policy - Gemini CLI Learning Platform',
    description: locale === 'zh'
      ? '我们的隐私政策解释了我们在您使用Gemini CLI学习平台时如何收集、使用和保护您的信息。'
      : 'Our privacy policy explains how we collect, use, and protect your information when you use our Gemini CLI learning platform.',
    keywords: locale === 'zh'
      ? ['隐私政策', '数据保护', '用户隐私', 'Gemini CLI', '学习平台']
      : ['privacy policy', 'data protection', 'user privacy', 'Gemini CLI', 'learning platform'],
    locale
  })
}

export default async function PrivacyPage({ params }: PrivacyPageProps) {
  const { locale } = await params
  
  return <PrivacyContent locale={locale} />
}
