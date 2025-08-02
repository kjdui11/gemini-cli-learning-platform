import { Metadata } from 'next'
import { redirect } from 'next/navigation'

interface PullRequestGuidePageProps {
  params: Promise<{
    locale: string
  }>
}

export async function generateMetadata({ params }: PullRequestGuidePageProps): Promise<Metadata> {
  const { locale } = await params
  
  const titles = {
    "en": "Pull Request Guide",
    "zh": "拉取请求指南",
    "hi": "पुल रिक्वेस्ट गाइड",
    "fr": "Guide de demande de tirage",
    "de": "Pull-Request-Leitfaden",
    "ja": "プルリクエストガイド",
    "ko": "풀 리퀘스트 가이드",
    "es": "Guía de solicitud de extracción",
    "ru": "Руководство по pull request"
}

  const descriptions = {}

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
  }
}

export default async function LocalePullRequestGuidePage({ params }: PullRequestGuidePageProps) {
  const { locale } = await params
  
  // Redirect to English version for now
  redirect('/docs/pull-request-guide')
}

export async function generateStaticParams() {
  const locales = ['zh', 'hi', 'fr', 'de', 'ja', 'ko', 'es', 'ru']
  
  return locales.map((locale) => ({
    locale,
  }))
}