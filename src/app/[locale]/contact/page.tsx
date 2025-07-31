import { Metadata } from 'next'
import ContactContent from '@/components/pages/ContactContent'
import { generateSEOMetadata } from '@/lib/seo-i18n'
import { locales } from '@/i18n/config'

interface ContactPageProps {
  params: Promise<{ locale: string }>
}

export async function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }))
}

export async function generateMetadata({ params }: ContactPageProps): Promise<Metadata> {
  const { locale } = await params
  return generateSEOMetadata({
    locale,
    title: 'Contact Us - Gemini CLI Learning Platform',
    description: 'Get in touch with the Gemini CLI Learning Platform team. Report issues, suggest improvements, or ask questions about our educational content.',
    keywords: ['contact', 'support', 'feedback', 'Gemini CLI', 'help', 'questions']
  })
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params
  return <ContactContent locale={locale} />
}
