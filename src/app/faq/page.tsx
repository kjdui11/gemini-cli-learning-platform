import { Metadata } from 'next'
import EnhancedFAQContent from '@/components/pages/EnhancedFAQContent'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions - Gemini CLI',
  description: 'High-quality Q&A collected from official documentation and community feedback to help you quickly resolve Gemini CLI issues',
  keywords: 'Gemini CLI, FAQ, questions, answers, troubleshooting, installation, authentication, usage, best practices',
  openGraph: {
    title: 'Gemini CLI Frequently Asked Questions',
    description: 'Find accurate solutions to common Gemini CLI problems with our comprehensive FAQ',
    type: 'article',
  },
}

export default function FAQPage() {
  return <EnhancedFAQContent locale="en" />
}

