import { Metadata } from 'next'
import MCPProtocolContent from '@/components/pages/McpProtocolContent'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'MCP 协议使用 | Gemini CLI 使用指南',
    description: '深入了解 Model Context Protocol (MCP) 的使用方法，包括服务器配置、工具扩展、自定义功能开发等。',
    keywords: 'MCP 协议, Model Context Protocol, Gemini CLI 扩展, 服务器配置, 工具开发',
    openGraph: {
      title: 'MCP 协议使用 - Gemini CLI 使用指南',
      description: '掌握 Model Context Protocol 扩展 Gemini CLI 功能',
      type: 'article',
    },
  }
}

export default function MCPProtocolPage() {
  return <MCPProtocolContent locale="zh" />
}
