import {
  MapPin,
  TrendingUp,
  Building2,
  Shield,
  Leaf,
  Smartphone,
  Sparkles,
  Wifi,
  type LucideIcon,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { PROJECT_FEATURES } from '../../types/content'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'

const featureIcons: Record<(typeof PROJECT_FEATURES)[number], LucideIcon> = {
  'Prime Location': MapPin,
  'High ROI': TrendingUp,
  'Modern Infrastructure': Building2,
  '24/7 Security': Shield,
  'Green Environment': Leaf,
  'Smart Living': Smartphone,
  'Luxury Amenities': Sparkles,
  'Premium Connectivity': Wifi,
}

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08 },
  }),
}

export default function ProjectFeatures() {
  return (
    <section className="relative overflow-hidden bg-[#081229] py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(217,119,6,0.08),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Highlights"
          title="Key Features"
          subtitle="Every Athiya development is crafted with precision, premium materials, and thoughtful design."
          light
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROJECT_FEATURES.map((feature, i) => {
            const Icon = featureIcons[feature]
            return (
              <Reveal key={feature} delayMs={i * 60}>
                <motion.div
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: '-60px' }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition-shadow duration-500 hover:border-[#d97706]/30 hover:shadow-[0_20px_60px_rgba(217,119,6,0.15)]"
                >
                  <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-[#d97706]/15 text-[#d97706] ring-1 ring-[#d97706]/25 transition group-hover:bg-[#d97706]/25 group-hover:shadow-[0_0_30px_rgba(217,119,6,0.2)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-white">{feature}</h3>
                </motion.div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
