import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import LuxuryButton from '../ui/LuxuryButton'

// Animation variants for stagger effect
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
}

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const parallaxOffset = scrollY * 0.4

  // Static bungalow background image URL - this never changes
  const staticBackgroundImage =
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80'

  return (
    <section id="home" className="relative min-h-screen overflow-hidden" ref={heroRef}>
      {/* Static background image layer */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${staticBackgroundImage}')`,
          y: parallaxOffset,
        }}
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: 'easeOut' }}
      />

      {/* Dark navy overlay with gradient for readability */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-[#081229]/85 via-[#081229]/75 to-[#081229]" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[#081229]/25" />

      {/* Animated glowing gradient backdrop */}
      <div className="pointer-events-none absolute inset-0 z-[1]">
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(ellipse at center, #d97706 0%, transparent 70%)',
          }}
          animate={{
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Premium centered content */}
      <div className="absolute inset-0 z-[2] flex w-full flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8 opacity-100">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center opacity-100"
        >
          {/* Top tagline */}
          <motion.p
            variants={itemVariants}
            className="mb-6 text-xs font-semibold uppercase tracking-[0.4em] text-[#d97706]"
          >
            INVEST IN YOUR FUTURE
          </motion.p>

          {/* Main heading with premium typography */}
          <motion.h1
            variants={itemVariants}
            className="font-heading text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="text-white">Redefining </span>
            <span className="italic bg-gradient-to-r from-[#d97706] via-[#f59e0b] to-[#fbbf24] bg-clip-text text-transparent">
              Premium
            </span>
            <span className="text-white"> Living</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="mt-8 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg md:text-xl"
          >
            Premium developments with high ROI potential across India's most sought-after destinations.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-col gap-4 sm:flex-row"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#d97706] to-[#f59e0b] blur-lg opacity-0 transition-opacity duration-500 group-hover:opacity-75" />
              <div className="relative">
                <LuxuryButton href="#projects">Explore Projects</LuxuryButton>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <LuxuryButton
                href="https://wa.me/919876543210"
                variant="secondary"
              >
                Contact Us
              </LuxuryButton>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced pagination dots with glow - optional visual indicator */}
      <div className="absolute bottom-10 left-0 right-0 z-[3] flex justify-center gap-2">
        <style>{`
          .hero-dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: rgba(217, 119, 6, 0.8);
            box-shadow: 0 0 15px rgba(217, 119, 6, 0.6);
          }
        `}</style>
        <div className="hero-dot" />
      </div>
    </section>
  )
}
