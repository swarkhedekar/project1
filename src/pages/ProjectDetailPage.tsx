import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { fetchProjectById } from '../services/contentService'
import type { Project } from '../types/content'

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>()
  const [project, setProject] = useState<Project | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!id) return
    fetchProjectById(id).then((data) => {
      setProject(data ?? null)
      setLoading(false)
    })
  }, [id])

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#d97706] border-t-transparent" />
      </div>
    )
  }

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-white text-[#081229]">
        <h1 className="font-heading text-3xl font-semibold">Project Not Found</h1>
        <Link to="/" className="mt-6 text-[#d97706] hover:underline">
          &larr; Back to Home
        </Link>
      </div>
    )
  }

  return (
    <div className="font-body overflow-x-hidden bg-white">
      <Navbar />

      <div className="mx-auto max-w-7xl px-4 pt-28 pb-16 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#081229] transition hover:text-[#d97706]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to all projects
        </Link>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_340px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-gray-200 bg-white p-8"
          >
            <h2 className="font-heading text-2xl font-semibold text-[#081229] sm:text-3xl">
              About the Project
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#081229]/70">
              {project.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col justify-center rounded-2xl bg-[#081229] p-8 text-white"
          >
            <p className="text-base leading-relaxed text-white/80">
              Get in touch with our experts to learn more about pricing, availability, and
              scheduling a site visit.
            </p>
            <a
              href="https://wa.me/919833931199"
              className="mt-6 inline-block rounded-lg bg-[#d97706] px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#b45309]"
            >
              Contact Us
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-8 rounded-2xl border border-gray-200 bg-white p-8"
        >
          <h3 className="font-heading text-2xl font-semibold text-[#081229]">
            Key Features &amp; Amenities
          </h3>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {project.featuresAndAmenities.slice(0, 5).map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#d97706]" />
                <span className="text-sm text-[#081229]/80 sm:text-base">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  )
}
