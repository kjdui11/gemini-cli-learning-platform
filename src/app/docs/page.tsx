import { Metadata } from 'next'
import DocsContent from '@/components/pages/DocsContent'

export const metadata: Metadata = {
  title: 'Developer Documentation - Gemini CLI Learning Platform',
  description: 'Complete Gemini CLI developer documentation including API reference, extension development, MCP protocol integration and contribution guides.',
  keywords: 'Gemini CLI developer docs, API reference, MCP protocol, extension development, contribution guide, technical documentation',
  openGraph: {
    title: 'Gemini CLI Developer Documentation',
    description: 'In-depth technical documentation to help developers extend and integrate Gemini CLI',
    type: 'article',
  },
}

export default function DocsPage() {
  return <DocsContent locale="en" />
}

