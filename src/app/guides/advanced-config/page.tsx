import { Metadata } from 'next'
import AdvancedConfigContent from '@/components/pages/AdvancedConfigContent'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: '高级配置选项 | Gemini CLI 使用指南',
    description: '深入了解 Gemini CLI 的高级配置选项，包括 TOML 配置文件、环境变量、自定义设置等。',
    keywords: 'Gemini CLI 配置, TOML 配置, 环境变量, 自定义设置, CLI 配置文件',
    openGraph: {
      title: '高级配置选项 - Gemini CLI 使用指南',
      description: '掌握 Gemini CLI 的高级配置和自定义选项',
      type: 'article',
    },
  }
}

export default function AdvancedConfigPage() {
  return <AdvancedConfigContent locale="zh" />
}

