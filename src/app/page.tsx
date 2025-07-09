import HeroSection from '@/components/hero-section'
import FeaturesStatsSection from '@/components/features-stats-section'
import FeaturesSection from '@/components/features-section'
import QuickStartSection from '@/components/quick-start-section'
import IntegrationSection from '@/components/integration-section'
import BlogHighlightsSection from '@/components/blog-highlights-section'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturesStatsSection />
      <FeaturesSection />
      <QuickStartSection />
      <IntegrationSection />
      <BlogHighlightsSection />
    </div>
  );
}
