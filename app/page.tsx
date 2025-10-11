import HeroGeometric from "@/components/kokonutui/hero-geometric"
import Navigation from "@/components/navigation"
import Features from "@/components/features"
import About from "@/components/about"
import CTA from "@/components/cta"
import TeamSection from "@/components/team-section"
import Footer from "@/components/footer"
import CursorFollower from "@/components/cursor-follower"
import PreFooterCTA from "@/components/pre-footer-cta"
import ContactSection from "@/components/contact-section"
import AIAutomationSection from "@/components/ai-automation-section"
import ProcessSection from "@/components/process-section"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#030303]">
      <CursorFollower />
      <Navigation />
      <HeroGeometric badge="HexaFlow AI" title1="Revolutionize Your" title2="Workflow" />
      <AIAutomationSection />
      <ProcessSection />
      <Features />
      <About />
      <CTA />
      <TeamSection />
      <PreFooterCTA />
      <ContactSection />
      <Footer />
    </main>
  )
}
