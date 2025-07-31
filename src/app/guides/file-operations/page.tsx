import { Metadata } from 'next'
import FileOperationsContent from '@/components/pages/FileOperationsContent'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: '文件操作 | Gemini CLI 使用指南',
    description: '学习如何使用 Gemini CLI 进行文件读取、编辑、创建和管理操作。',
    keywords: 'Gemini CLI 文件操作, 文件读取, 文件编辑, 文件管理, CLI 工具',
    openGraph: {
      title: '文件操作 - Gemini CLI 使用指南',
      description: '掌握 Gemini CLI 的文件处理功能',
      type: 'article',
    },
  }
}

export default function FileOperationsPage() {
  return <FileOperationsContent locale="zh" />
}
