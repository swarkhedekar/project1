import { motion } from 'framer-motion'
import type { Project } from '../../types/content'
import LuxuryButton from '../ui/LuxuryButton'
import Reveal from '../ui/Reveal'

type ProjectCTAProps = {
  project: Project
}

export default function ProjectCTA({ project }: ProjectCTAProps) {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <motion.div
            className="relative overflow-hidden rounded-3xl bg-[#081229] px-8 py-16 text-center sm:px-16 sm:py-20"
            whileHover={{ boxShadow: '0 30px 80px rgba(217,119,6,0.15)' }}
            transition={{ duration: 0.4 }}
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(217,119,6,0.12),transparent_70%)]" />
            <motion.div
              className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full bg-[#d97706]/10 blur-[80px]"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
              className="pointer-events-none absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-[#d97706]/8 blur-[80px]"
              animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 10, repeat: Infinity }}
            />

            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#d97706]">
                {project.title}
              </p>
              <h2 className="font-heading mx-auto mt-4 max-w-2xl text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
                Schedule a site visit with our experts today.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-white/65">
                Experience the project firsthand and discover why {project.title} is the perfect
                investment for your future.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <LuxuryButton href="https://wa.me/919876543210">Contact Us</LuxuryButton>
                <LuxuryButton
                  variant="secondary"
                  href="https://wa.me/919876543210?text=Hi%2C%20I%20would%20like%20to%20book%20a%20site%20visit."
                >
                  Book Site Visit
                </LuxuryButton>
              </div>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}
