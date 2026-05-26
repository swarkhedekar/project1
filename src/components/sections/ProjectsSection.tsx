import { useEffect, useState } from 'react'
import { MapPin } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import StatusBadge from '../ui/StatusBadge'
import { fetchProjects } from '../../services/contentService'
import type { Project } from '../../types/content'

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
        <button
          type="button"
          className="mt-5 inline-flex items-center gap-2 font-semibold text-[#081229] transition hover:text-[#d97706]"
        >
          View Details <span aria-hidden>→</span>
        </button>
      </div>
    </article>
  )
}

export default function ProjectsSection() {
  const [items, setItems] = useState<Project[]>([])

  useEffect(() => {
    fetchProjects().then(setItems)
  }, [])

  const marqueeItems = items.length > 0 ? [...items, ...items] : []

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
          {marqueeItems.length > 0 ? (
            <div className="projects-marquee-track">
              {marqueeItems.map((project, index) => (
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
