import { useEffect, useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import WhatsAppButton from '../components/layout/WhatsAppButton'
import BackToTop from '../components/layout/BackToTop'
import ScrollProgressIndicator from '../components/ui/ScrollProgressIndicator'
import FloatingEnquiryButton from '../components/ui/FloatingEnquiryButton'
import PageTransition from '../components/ui/PageTransition'
import ProjectHero from '../components/project-detail/ProjectHero'
import ProjectAbout from '../components/project-detail/ProjectAbout'
import { fetchProjectBySlug } from '../services/contentService'
import type { Project } from '../types/content'

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const [project, setProject] = useState<Project | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!slug) return
    fetchProjectBySlug(slug).then((p) => {
      setProject(p ?? null)
      setLoading(false)
    })
  }, [slug])

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#081229]">
        <motion.div
          className="h-10 w-10 rounded-full border-2 border-[#d97706]/30 border-t-[#d97706]"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
      </div>
    )
  }

  if (!project || !project.hasDetailPage) {
    return <Navigate to="/" replace />
  }

  return (
    <PageTransition className="font-body overflow-x-hidden bg-white">
      <Helmet>
        <title>{project.title} | Athiya Developers</title>
        <meta name="description" content={project.about ?? project.description} />
        <meta property="og:title" content={`${project.title} | Athiya Developers`} />
        <meta property="og:description" content={project.tagline ?? project.description} />
        <meta property="og:image" content={project.imageUrl} />
      </Helmet>

      <ScrollProgressIndicator />
      <Navbar />

      <motion.div
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="fixed left-4 top-24 z-40 sm:left-6"
      >
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#081229]/60 px-4 py-2 text-sm font-medium text-white/85 backdrop-blur-xl transition hover:border-[#d97706]/40 hover:text-[#d97706]"
        >
          <ArrowLeft className="h-4 w-4" />
          All Projects
        </Link>
      </motion.div>

      <main>
        <ProjectHero project={project} />
        <ProjectAbout project={project} />
      </main>

      <Footer />
      <FloatingEnquiryButton />
      <WhatsAppButton />
      <BackToTop />
    </PageTransition>
  )
}
