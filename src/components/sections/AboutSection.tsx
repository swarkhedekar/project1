import { CheckCircle2 } from 'lucide-react'
import Reveal from '../ui/Reveal'

const points = [
  '100% Clear Titles & Transparency',
  'Strategic High-Growth Locations',
  'End-to-End Project Management',
  'Sustainable Development Practices',
]

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#f5f5f5] py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#d97706]">
            Why Choose Us
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-[#081229] sm:text-4xl lg:text-5xl">
            Why Choose Athiya?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#081229]/75 sm:text-lg">
            With years of expertise in land development and real estate, we bring you
            properties that are legally sound, strategically located, and designed for
            high appreciation.
          </p>

          <ul className="mt-8 space-y-4">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-[#081229]/85">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#d97706]" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <a
            href="#projects"
            className="mt-8 inline-flex items-center gap-2 font-semibold text-[#081229] transition hover:text-[#d97706]"
          >
            Learn More About Us <span aria-hidden>→</span>
          </a>
        </Reveal>

        <Reveal delayMs={120} className="relative">
          <div className="overflow-hidden rounded-[2rem] shadow-[0_30px_80px_rgba(8,18,41,0.18)]">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80"
              alt="Luxury interior"
              className="h-[420px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[520px]"
            />
          </div>
          <div className="absolute -bottom-6 -left-4 rounded-2xl bg-[#081229] px-6 py-5 text-white shadow-2xl sm:-left-8">
            <div className="font-heading text-3xl font-semibold text-[#d97706]">10+</div>
            <div className="text-sm text-white/75">Years of Trust</div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
