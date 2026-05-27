import { Check, Mail, Phone } from 'lucide-react'
import type { Project } from '../../types/content'
import SectionHeading from '../ui/SectionHeading'
import LuxuryButton from '../ui/LuxuryButton'
import Reveal from '../ui/Reveal'

type ProjectAboutProps = {
  project: Project
}

export default function ProjectAbout({ project }: ProjectAboutProps) {
  if (!project.about) return null
  const amenities = project.amenities ?? []

  const contactText = encodeURIComponent(
    `Hi, I would like to enquire about ${project.title}.`,
  )
  const siteVisitText = encodeURIComponent(
    `Hi, I would like to book a site visit for ${project.title}.`,
  )

  const contactHref = `https://wa.me/919876543210?text=${contactText}`
  const siteVisitHref = `https://wa.me/919876543210?text=${siteVisitText}`

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-[#d97706]/5 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Overview"
          title="About the Project"
          subtitle={project.tagline}
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-5 lg:gap-14">
          <Reveal className="lg:col-span-3">
            <div className="rounded-3xl border border-white/60 bg-white/60 p-8 shadow-[0_20px_80px_rgba(8,18,41,0.08)] backdrop-blur-xl sm:p-10">
              <p className="text-base leading-relaxed text-[#081229]/80 sm:text-lg">
                {project.about}
              </p>

              {amenities.length > 0 && (
                <div className="mt-10">
                  <h3 className="font-heading text-2xl font-semibold text-[#081229]">
                    Amenities
                  </h3>
                  <ul className="mt-6 space-y-4">
                    {amenities.map((amenity) => (
                      <li
                        key={amenity}
                        className="flex items-start gap-3"
                      >
                        <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#d97706]/15 text-[#d97706]">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        <span className="text-sm font-medium text-[#081229]/80 sm:text-base">
                          {amenity}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </Reveal>

          <Reveal className="lg:col-span-2" delayMs={150}>
            <div className="rounded-3xl border border-[#d97706]/15 bg-gradient-to-br from-[#081229]/[0.03] to-[#d97706]/[0.06] p-8 shadow-[0_20px_60px_rgba(8,18,41,0.06)] backdrop-blur-xl sm:p-10">
              <h3 className="font-heading text-2xl font-semibold text-[#081229]">
                Contact
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#081229]/70 sm:text-base">
                Talk to our experts for availability, pricing, and a personalized site visit.
              </p>

              <ul className="mt-6 space-y-3 text-sm text-[#081229]/70">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#d97706]" />
                  +91 98765 43210
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-[#d97706]" />
                  hello@athiyadevelopers.com
                </li>
              </ul>

              <div className="mt-8 grid gap-3">
                <LuxuryButton href={contactHref}>
                  Contact Us
                </LuxuryButton>
                <LuxuryButton variant="secondary" href={siteVisitHref}>
                  Book Site Visit
                </LuxuryButton>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
