import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import WhatsAppButton from '../components/layout/WhatsAppButton'
import BackToTop from '../components/layout/BackToTop'
import HeroSection from '../components/sections/HeroSection'
import AboutSection from '../components/sections/AboutSection'
import ProjectsSection from '../components/sections/ProjectsSection'

export default function HomePage() {
  return (
    <div className="font-body overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  )
}
