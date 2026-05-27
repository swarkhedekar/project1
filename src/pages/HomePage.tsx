import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import WhatsAppButton from '../components/layout/WhatsAppButton'
import BackToTop from '../components/layout/BackToTop'
import ScrollProgressIndicator from '../components/ui/ScrollProgressIndicator'
import PageTransition from '../components/ui/PageTransition'
import HeroSection from '../components/sections/HeroSection'
import AboutSection from '../components/sections/AboutSection'
import ProjectsSection from '../components/sections/ProjectsSection'

export default function HomePage() {
  return (
    <PageTransition className="font-body overflow-x-hidden">
      <ScrollProgressIndicator />
      <Navbar />
      <main>
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </PageTransition>
  )
}
