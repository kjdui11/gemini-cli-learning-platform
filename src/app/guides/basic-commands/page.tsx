import { Metadata } from 'next'
import BasicCommandsContent from '@/components/pages/BasicCommandsContent'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: '基本命令操作 | Gemini CLI 使用指南',
    description: '学习 Gemini CLI 的基本命令和语法，包括斜杠命令、@命令和!命令的使用方法。掌握核心功能操作。',
    keywords: 'Gemini CLI 命令, 斜杠命令, @ 命令, ! 命令, CLI 语法, 命令行操作',
    openGraph: {
      title: '基本命令操作 - Gemini CLI 使用指南',
      description: '掌握 Gemini CLI 的核心命令和操作语法',
      type: 'article',
    },
  }
}

export default function BasicCommandsPage() {
  return <BasicCommandsContent locale="zh" />
}