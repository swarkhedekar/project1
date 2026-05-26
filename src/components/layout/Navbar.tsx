import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import LuxuryButton from '../ui/LuxuryButton'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'About Us', href: '#about' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#081229]/95 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="group flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#d97706]/15 ring-1 ring-[#d97706]/35 transition group-hover:bg-[#d97706]/25">
              <span className="font-heading text-xl font-bold text-[#d97706]">A</span>
            </div>
            <div>
              <div className="font-heading text-lg font-semibold leading-none text-white">
                Athiya
              </div>
              <div className="text-[11px] uppercase tracking-[0.25em] text-white/55">
                Developers
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/75 transition hover:text-[#d97706]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <LuxuryButton
              href="https://wa.me/919876543210"
              className="px-5 py-2.5 text-sm"
            >
              Sign Up
            </LuxuryButton>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen(true)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              className="fixed right-0 top-0 z-[70] flex h-full w-[85%] max-w-sm flex-col bg-[#081229] p-6 shadow-2xl lg:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 260, damping: 28 }}
            >
              <div className="mb-8 flex items-center justify-between">
                <div className="font-heading text-xl text-white">Menu</div>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-xl px-3 py-3 text-base font-medium text-white/85 transition hover:bg-white/5 hover:text-[#d97706]"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="mt-auto pt-8">
                <LuxuryButton href="https://wa.me/919876543210" className="w-full">
                  Sign Up
                </LuxuryButton>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
