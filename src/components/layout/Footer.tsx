import { Link } from 'react-router-dom'
import { FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { getFeaturedProjects } from '../../data/projects'

const quickLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'Projects', href: '/#projects' },
  { label: 'About Us', href: '/#about' },
]

export default function Footer() {
  const featuredProjects = getFeaturedProjects()

  return (
    <footer className="bg-[#081229] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="font-heading text-2xl font-semibold transition hover:text-[#d97706]">
              Athiya Developers
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/65">
              Redefining premium living with exceptional properties, transparent processes,
              and strategic developments across India.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[FaInstagram, FaLinkedinIn, FaTwitter].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white/80 transition hover:border-[#d97706]/40 hover:text-[#d97706]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg">Quick Links</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition hover:text-[#d97706]">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg">Featured Projects</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              {featuredProjects.map((project) => (
                <li key={project.id}>
                  <Link
                    to={`/projects/${project.id}`}
                    className="transition hover:text-[#d97706]"
                  >
                    {project.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg">Contact Information</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>Office 12, Athiya Tower, Navi Mumbai, Maharashtra</li>
              <li>+91 98765 43210</li>
              <li>hello@athiyadevelopers.com</li>
              <li>Mon - Sat: 9:00 AM - 7:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/50">
          © 2026 Athiya Developers Inspired. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
