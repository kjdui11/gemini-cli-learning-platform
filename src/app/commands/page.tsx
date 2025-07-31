import { Metadata } from 'next'
import EnhancedCommandsContent from '@/components/pages/EnhancedCommandsContent'

export const metadata: Metadata = {
  title: 'Command Reference - Gemini CLI',
  description: 'Complete reference for all Gemini CLI commands with syntax, options, and practical examples. Master the AI-powered command line tool.',
  keywords: 'Gemini CLI commands, CLI reference, command syntax, AI commands, gemini ask, gemini chat, gemini analyze',
  openGraph: {
    title: 'Gemini CLI Command Reference',
    description: 'Complete reference for all Gemini CLI commands with practical examples',
    type: 'article',
  },
}

export default function CommandsPage() {
  return <EnhancedCommandsContent locale="en" />
}


