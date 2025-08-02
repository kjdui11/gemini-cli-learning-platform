import { Metadata } from 'next'
import { redirect } from 'next/navigation'

interface McpClientPageProps {
  params: Promise<{
    locale: string
  }>
}

export async function generateMetadata({ params }: McpClientPageProps): Promise<Metadata> {
  const { locale } = await params
  
  const titles = {
    "en": "MCP Client",
    "zh": "MCP 客户端",
    "hi": "MCP क्लाइंट",
    "fr": "Client MCP",
    "de": "MCP-Client",
    "ja": "MCP クライアント",
    "ko": "MCP 클라이언트",
    "es": "Cliente MCP",
    "ru": "MCP клиент"
}

  const descriptions = {}

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
  }
}

export default async function LocaleMcpClientPage({ params }: McpClientPageProps) {
  const { locale } = await params
  
  // Redirect to English version for now
  redirect('/docs/mcp-client')
}

export async function generateStaticParams() {
  const locales = ['zh', 'hi', 'fr', 'de', 'ja', 'ko', 'es', 'ru']
  
  return locales.map((locale) => ({
    locale,
  }))
}