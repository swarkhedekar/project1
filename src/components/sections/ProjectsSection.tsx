import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { MapPin } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import StatusBadge from '../ui/StatusBadge'
import { fetchProjects } from '../../services/contentService'
import type { Project } from '../../types/content'
import { subscribeToSlides } from '../../services/slideService'
import type { Slide } from '../../types/slide'

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-marquee-card group shrink-0 overflow-hidden rounded-3xl bg-white shadow-[0_20px_60px_rgba(8,18,41,0.08)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(8,18,41,0.14)]">
      <div className="p-3 pb-0">
        <div className="overflow-hidden rounded-2xl bg-[#081229]/5 p-1.5 ring-1 ring-[#d97706]/25 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.6)]">
          <div className="relative overflow-hidden rounded-xl">
            <img
              src={project.imageUrl}
              alt={project.title}
              loading="lazy"
              className="h-56 w-full object-cover transition duration-700 group-hover:scale-110 sm:h-64"
            />
            <div className="absolute right-3 top-3">
              <StatusBadge status={project.status} />
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 pt-4">
        <div className="mb-3 flex items-center gap-2 text-sm text-[#081229]/60">
          <MapPin className="h-4 w-4 text-[#d97706]" />
          {project.location}
        </div>
        <h3 className="font-heading text-2xl font-semibold text-[#081229]">{project.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-[#081229]/70">{project.description}</p>
        {project.hasDetailPage ? (
          <Link
            to={`/projects/${project.id}`}
            className="mt-5 inline-flex items-center gap-2 font-semibold text-[#081229] transition hover:text-[#d97706]"
          >
            View Details <span aria-hidden>→</span>
          </Link>
        ) : (
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#081229]/40">
            Coming Soon
          </span>
        )}
      </div>
    </article>
  )
}

function SlideCard({ slide }: { slide: Slide }) {
  return (
    <article className="project-marquee-card group shrink-0 overflow-hidden rounded-3xl bg-white shadow-[0_20px_60px_rgba(8,18,41,0.08)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(8,18,41,0.14)]">
      <div className="p-3 pb-0">
        <div className="overflow-hidden rounded-2xl bg-[#081229]/5 p-1.5 ring-1 ring-[#d97706]/25 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.6)]">
          <div className="relative overflow-hidden rounded-xl">
            <img
              src={slide.imageUrl}
              alt={slide.title}
              loading="lazy"
              className="h-56 w-full object-cover transition duration-700 group-hover:scale-110 sm:h-64"
              onError={(e) => {
                ;(e.currentTarget as HTMLImageElement).src =
                  'https://via.placeholder.com/1200x800/081229/ffffff?text=Slide'
              }}
            />
            <div className="absolute right-3 top-3">
              <span className="rounded-full bg-[#081229]/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/85 backdrop-blur-md">
                Slideshow
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 pt-4">
        <div className="mb-3 flex items-center gap-2 text-sm text-[#081229]/60">
          <MapPin className="h-4 w-4 text-[#d97706]" />
          Home Slider
        </div>
        <h3 className="font-heading text-2xl font-semibold text-[#081229]">{slide.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-[#081229]/70">
          {slide.description || '—'}
        </p>
        <a
          href="#home"
          className="mt-5 inline-flex items-center gap-2 font-semibold text-[#081229] transition hover:text-[#d97706]"
        >
          View Slide <span aria-hidden>→</span>
        </a>
      </div>
    </article>
  )
}

export default function ProjectsSection() {
  const [items, setItems] = useState<Project[]>([])
  const [slides, setSlides] = useState<Slide[]>([])

  useEffect(() => {
    fetchProjects().then(setItems)
  }, [])

  // Realtime Firestore slides — when admin adds slides, they show here automatically.
  useEffect(() => {
    const unsubscribe = subscribeToSlides((data) => setSlides(data))
    return unsubscribe
  }, [])

  const hasRealSlides = slides.some((s) => s.id && !s.id.startsWith('fallback-'))

  const marqueeSlides = useMemo(() => {
    if (slides.length === 0) return []
    // Only show unique slides without duplication
    return slides
  }, [slides])

  const marqueeProjects = useMemo(() => {
    if (items.length === 0) return []
    return [...items, ...items]
  }, [items])

  return (
    <section id="projects" className="overflow-hidden bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Portfolio"
          title="Our Premier Projects"
          subtitle="Explore our curated selection of luxury developments designed for modern living."
        />
      </div>

      <div className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="projects-marquee-viewport">
          {hasRealSlides && marqueeSlides.length > 0 ? (
            <div className="projects-marquee-track">
              {marqueeSlides.map((slide, index) => (
                <SlideCard key={`${slide.id}-${index}`} slide={slide} />
              ))}
            </div>
          ) : marqueeProjects.length > 0 ? (
            <div className="projects-marquee-track">
              {marqueeProjects.map((project, index) => (
                <ProjectCard key={`${project.id}-${index}`} project={project} />
              ))}
            </div>
          ) : (
            <div className="h-64 animate-pulse rounded-3xl bg-[#081229]/5" />
          )}
        </div>
      </div>
    </section>
  )
}
