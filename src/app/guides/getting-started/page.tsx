import { Metadata } from 'next'
import GettingStartedContent from '@/components/pages/GettingStartedContent'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: '第一次使用 Gemini CLI | 快速入门指南',
    description: '学习如何第一次使用 Gemini CLI，包括安装、配置和基本对话。10分钟快速上手 AI 命令行工具。',
    keywords: 'Gemini CLI 入门, 第一次使用, 快速开始, AI 命令行工具, Google Gemini CLI 教程',
    openGraph: {
      title: '第一次使用 Gemini CLI - 快速入门指南',
      description: '10分钟快速上手 Gemini CLI，开始您的 AI 辅助编程之旅',
      type: 'article',
    },
  }
}

export default function GettingStartedPage() {
  return <GettingStartedContent locale="zh" />
}
