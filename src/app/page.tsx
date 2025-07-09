import HeroSection from '@/components/hero-section'
import FeaturesSection from '@/components/features-section'
import QuickStartSection from '@/components/quick-start-section'
import BlogHighlightsSection from '@/components/blog-highlights-section'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <QuickStartSection />
      <BlogHighlightsSection />
    </div>
  );
}
