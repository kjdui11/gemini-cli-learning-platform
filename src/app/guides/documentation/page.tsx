import { Metadata } from 'next'
import DocumentationContent from '@/components/pages/DocumentationContent'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: '文档生成助手 | Gemini CLI 实战案例',
    description: '学习如何使用 Gemini CLI 自动生成和维护项目文档，包括 API 文档、用户手册、技术规范等。',
    keywords: 'Gemini CLI 文档生成, AI 文档写作, 自动化文档, API 文档, 技术文档',
    openGraph: {
      title: '文档生成助手 - Gemini CLI 实战案例',
      description: '使用 AI 智能生成高质量的项目文档',
      type: 'article',
    },
  }
}

export default function DocumentationPage() {
  return <DocumentationContent locale="zh" />
}