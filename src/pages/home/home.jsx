import { HeroSection } from "@/components/home/hero-section.jsx"
import { FeaturesSection } from "@/components/home/features-section"
import { HowItWorksSection } from "@/components/home/how-it-works-section"
import { StatsSection } from "@/components/home/stats-section"
import { CTASection } from "@/components/home/cta-section"
import { Header } from "@/components/home/header.jsx"
import { Footer } from "@/components/home/footer"
import { MobileSubjectList } from "@/components/home/mobile-subject-list"
export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FAF8E4]">
     
      <main className="mx-auto max-w-7xl px-4 sm:px-10 lg:px-12">
        <div className="hidden md:block">
          <HeroSection />
          <StatsSection />
          <FeaturesSection />
          <HowItWorksSection />
          <CTASection />
        </div>

        <div className="block md:hidden px-4">
          <MobileSubjectList />
        </div>
      </main>
      <Footer />
    </div>
  )
}
