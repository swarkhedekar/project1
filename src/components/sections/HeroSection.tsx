import { motion } from 'framer-motion'
import LuxuryButton from '../ui/LuxuryButton'

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2000&q=80')",
        }}
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: 'easeOut' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#081229]/80 via-[#081229]/70 to-[#081229]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 pb-20 pt-28 text-center sm:px-6 lg:px-8">
        <motion.p
          className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-[#d97706]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Welcome to Athiya Inspired
        </motion.p>

        <motion.h1
          className="font-heading text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
        >
          <span className="text-white">Redefining </span>
          <span className="italic text-[#d97706]">Premium</span>
          <span className="text-white"> Living</span>
        </motion.h1>

        <motion.p
          className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Discover exceptional properties, unparalleled architecture, and investments
          that secure your future.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.8 }}
        >
          <LuxuryButton href="#projects">Explore Projects</LuxuryButton>
          <LuxuryButton href="https://wa.me/919876543210" variant="secondary">
            Contact Us
          </LuxuryButton>
        </motion.div>
      </div>
    </section>
  )
}
