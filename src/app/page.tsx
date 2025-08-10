import HeroSection from '@/components/hero-section'
import FeaturesStatsSection from '@/components/features-stats-section'
import FeaturesSection from '@/components/features-section'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gemini CLI Tutorial & Documentation - Master Google\'s AI Command Line Tool',
  description: 'Learn Gemini CLI - Google\'s open-source AI agent for terminal workflows. Complete tutorials, installation guides, command reference, and examples for developers. Free 1M+ token context window.',
  keywords: [
    'gemini cli tutorial',
    'google gemini command line',
    'ai cli tool guide',
    'gemini cli documentation',
    'command line ai assistant',
    'google ai terminal',
    'gemini cli installation',
    'ai workflow automation',
    'developer ai tools'
  ],
  openGraph: {
    title: 'Master Gemini CLI - Google\'s AI Command Line Tool',
    description: 'Complete learning platform for Gemini CLI. Tutorials, documentation, and examples for developers who want to integrate AI into their terminal workflows.',
    type: 'website',
  },
  twitter: {
    title: 'Master Gemini CLI - Google\'s AI Command Line Tool',
    description: 'Complete learning platform for Gemini CLI. Tutorials, documentation, and examples for developers.',
    card: 'summary_large_image',
  }
}

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturesStatsSection />
      <FeaturesSection />
    </div>
  );
}
