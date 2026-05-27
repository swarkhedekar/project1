import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, MapPin, CheckCircle2 } from 'lucide-react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import StatusBadge from '../components/ui/StatusBadge'
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
      <div className="flex min-h-screen items-center justify-center bg-[#081229]">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#d97706] border-t-transparent" />
      </div>
    )
  }

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#081229] text-white">
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

      <section className="relative pt-20">
        <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden sm:h-[60vh]">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#081229] via-[#081229]/40 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
            <Link
              to="/"
              className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-white/80 transition hover:text-[#d97706]"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Link>

            <div className="flex flex-wrap items-center gap-3">
              <StatusBadge status={project.status} />
              <span className="flex items-center gap-1.5 text-sm text-white/70">
                <MapPin className="h-4 w-4 text-[#d97706]" />
                {project.location}
              </span>
            </div>

            <h1 className="mt-3 font-heading text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
              {project.title}
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#d97706]">
            Overview
          </p>
          <h2 className="font-heading text-3xl font-semibold text-[#081229] sm:text-4xl">
            About Project
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#081229]/70 sm:text-lg">
            {project.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12"
        >
          <h3 className="font-heading text-2xl font-semibold text-[#081229]">
            Amenities &amp; Knowledge
          </h3>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.featuresAndAmenities.slice(0, 5).map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-3 rounded-xl border border-[#d97706]/15 bg-[#d97706]/[0.03] p-4 transition hover:border-[#d97706]/30 hover:shadow-md"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#d97706]" />
                <span className="text-sm leading-relaxed text-[#081229]/85">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}
