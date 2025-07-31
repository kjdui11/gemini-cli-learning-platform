import { Metadata } from 'next'
import GuidesContent from '@/components/pages/GuidesContent'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Gemini CLI 使用指南 | 从入门到进阶的完整教程',
    description: '全面的 Gemini CLI 使用指南，包含入门教程、进阶技巧、实战案例和最佳实践。学习如何使用 AI 命令行工具提升开发效率。',
    keywords: 'Gemini CLI 教程, AI 编程指南, 命令行工具使用, Google Gemini CLI 进阶, AI 辅助开发',
    openGraph: {
      title: 'Gemini CLI 使用指南 - 从入门到进阶',
      description: '全面的 Gemini CLI 使用指南，助您掌握 AI 辅助编程技能',
      type: 'article',
    },
  }
}

export default function GuidesPage() {
  return <GuidesContent locale="zh" />
}

