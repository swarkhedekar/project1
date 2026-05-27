import { useState } from 'react'
import { motion } from 'framer-motion'
import { ZoomIn } from 'lucide-react'
import type { Project } from '../../types/content'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import ImageLightbox from './ImageLightbox'

type ProjectGalleryProps = {
  project: Project
}

export default function ProjectGallery({ project }: ProjectGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const gallery = project.gallery ?? []

  if (gallery.length === 0) return null

  const spans = ['lg:col-span-2 lg:row-span-2', 'lg:col-span-1', 'lg:col-span-1', 'lg:col-span-1 lg:row-span-2', 'lg:col-span-1', 'lg:col-span-2']

  return (
    <section className="bg-[#f5f5f5] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Visual Tour"
          title="Project Gallery"
          subtitle="Explore the vision, architecture, and landscapes that define this exceptional development."
        />

        <div className="mt-14 grid auto-rows-[200px] grid-cols-1 gap-4 sm:auto-rows-[220px] sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[180px]">
          {gallery.map((src, i) => (
            <Reveal key={src} delayMs={i * 80} className={spans[i] ?? ''}>
              <motion.button
                type="button"
                onClick={() => setLightboxIndex(i)}
                className="group relative h-full w-full overflow-hidden rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d97706]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.35 }}
              >
                <img
                  src={src}
                  alt={`${project.title} gallery ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#081229]/0 transition duration-500 group-hover:bg-[#081229]/30" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-white/20 text-white backdrop-blur-md">
                    <ZoomIn className="h-5 w-5" />
                  </span>
                </div>
              </motion.button>
            </Reveal>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <ImageLightbox
          images={gallery}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
          alt={project.title}
        />
      )}
    </section>
  )
}
