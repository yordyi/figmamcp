import EnhancedHeroSection from '@/components/EnhancedHeroSection'
import EnhancedServicesSection from '@/components/EnhancedServicesSection'
import AboutPortfolioSection from '@/components/AboutPortfolioSection'
import ProcessSection from '@/components/ProcessSection'
import TeamSection from '@/components/TeamSection'
import PricingSection from '@/components/PricingSection'
import EnhancedTestimonialsSection from '@/components/EnhancedTestimonialsSection'
import EnhancedContactSection from '@/components/EnhancedContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900">
      <EnhancedHeroSection />
      <EnhancedServicesSection />
      <AboutPortfolioSection />
      <ProcessSection />
      <TeamSection />
      <PricingSection />
      <EnhancedTestimonialsSection />
      <EnhancedContactSection />
      <Footer />
    </main>
  )
}