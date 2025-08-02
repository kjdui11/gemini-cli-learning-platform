import { Metadata } from 'next'
import { redirect } from 'next/navigation'

interface McpServerPageProps {
  params: Promise<{
    locale: string
  }>
}

export async function generateMetadata({ params }: McpServerPageProps): Promise<Metadata> {
  const { locale } = await params

  const titles = {
    "en": "MCP Server",
    "zh": "MCP 服务器",
    "hi": "MCP सर्वर",
    "fr": "Serveur MCP",
    "de": "MCP-Server",
    "ja": "MCP サーバー",
    "ko": "MCP 서버",
    "es": "Servidor MCP",
    "ru": "MCP сервер"
  }

  const descriptions = {}

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
  }
}

export default async function LocaleMcpServerPage({ params }: McpServerPageProps) {
  const { locale } = await params

  // Redirect to Chinese version for now
  redirect('/docs/mcp-server')
}

export async function generateStaticParams() {
  const locales = ['zh', 'hi', 'fr', 'de', 'ja', 'ko', 'es', 'ru']
  
  return locales.map((locale) => ({
    locale,
  }))
}
