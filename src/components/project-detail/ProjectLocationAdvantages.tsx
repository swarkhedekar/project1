import {
  Route,
  Train,
  Landmark,
  GraduationCap,
  ShoppingBag,
  TrendingUp,
  Waves,
  Trees,
  type LucideIcon,
} from 'lucide-react'
import { motion } from 'framer-motion'
import type { LocationAdvantage } from '../../types/content'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'

const iconMap: Record<string, LucideIcon> = {
  'Near Highway': Route,
  'Railway Connectivity': Train,
  'Tourist Attractions Nearby': Landmark,
  'Schools & Hospitals': GraduationCap,
  'Shopping Centers': ShoppingBag,
  'Future Growth Potential': TrendingUp,
  'Beach Access': Waves,
  'Green Environment': Trees,
  'Business Hub': TrendingUp,
}

function getIcon(title: string): LucideIcon {
  return iconMap[title] ?? Landmark
}

type ProjectLocationAdvantagesProps = {
  advantages: LocationAdvantage[]
}

export default function ProjectLocationAdvantages({
  advantages,
}: ProjectLocationAdvantagesProps) {
  if (advantages.length === 0) return null

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Connectivity"
          title="Location Advantages"
          subtitle="Strategically positioned for convenience, growth, and an elevated lifestyle."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((adv, i) => {
            const Icon = getIcon(adv.title)
            return (
              <Reveal key={adv.title} delayMs={i * 80}>
                <motion.div
                  whileHover={{ y: -6, transition: { duration: 0.3 } }}
                  className="group rounded-2xl border border-[#081229]/8 bg-white p-6 shadow-[0_10px_40px_rgba(8,18,41,0.05)] transition duration-500 hover:border-[#d97706]/25 hover:shadow-[0_20px_60px_rgba(217,119,6,0.1)]"
                >
                  <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-[#081229]/5 text-[#d97706] transition group-hover:bg-[#d97706]/10">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-[#081229]">
                    {adv.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#081229]/65">
                    {adv.description}
                  </p>
                </motion.div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
