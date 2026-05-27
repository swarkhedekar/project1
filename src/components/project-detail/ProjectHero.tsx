import { motion } from 'framer-motion'
import { MapPin, Download } from 'lucide-react'
import type { Project } from '../../types/content'
import StatusBadge from '../ui/StatusBadge'
import LuxuryButton from '../ui/LuxuryButton'

type ProjectHeroProps = {
  project: Project
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
}

const item = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
}

export default function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${project.imageUrl}')` }}
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: 'easeOut' }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#081229] via-[#081229]/70 to-[#081229]/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#081229]/60 to-transparent" />

      <motion.div
        className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-[#d97706]/10 blur-[120px]"
        animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="pointer-events-none absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-[#d97706]/8 blur-[100px]"
        animate={{ x: [0, -30, 0], y: [0, 25, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="relative mx-auto w-full max-w-7xl px-4 pb-24 pt-40 sm:px-6 sm:pb-32 lg:px-8"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item}>
          <StatusBadge status={project.status} />
        </motion.div>

        <motion.h1
          variants={item}
          className="font-heading mt-6 max-w-4xl text-4xl font-semibold leading-[1.1] text-white sm:text-5xl lg:text-7xl"
        >
          {project.title}
        </motion.h1>

        <motion.div
          variants={item}
          className="mt-5 flex items-center gap-2 text-base text-white/75 sm:text-lg"
        >
          <MapPin className="h-5 w-5 shrink-0 text-[#d97706]" />
          {project.location}
        </motion.div>

        {project.tagline && (
          <motion.p
            variants={item}
            className="mt-4 max-w-2xl font-heading text-xl italic text-[#d97706]/90 sm:text-2xl"
          >
            &ldquo;{project.tagline}&rdquo;
          </motion.p>
        )}

        <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
          <LuxuryButton href="https://wa.me/919876543210">Enquire Now</LuxuryButton>
          <LuxuryButton variant="secondary" className="gap-2">
            <Download className="h-4 w-4" />
            Download Brochure
          </LuxuryButton>
        </motion.div>
      </motion.div>
    </section>
  )
}
