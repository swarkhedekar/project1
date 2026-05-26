import { useEffect, useState, type ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function AppLoader({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = window.setTimeout(() => setLoading(false), 950)
    return () => window.clearTimeout(t)
  }, [])

  return (
    <div className="relative min-h-screen">
      {children}

      <AnimatePresence>
        {loading && (
          <motion.div
            aria-hidden
            className="fixed inset-0 z-[1000] grid place-items-center bg-[#081229]"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <motion.div
              className="flex flex-col items-center gap-4"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <div className="h-14 w-14 rounded-full border border-white/15 border-t-[#d97706] animate-[lux-spin_1.2s_linear_infinite]" />
              <div className="text-center">
                <div className="font-heading text-xl text-white/95">
                  Athiya Developers
                </div>
                <div className="mt-1 text-sm text-white/60">Luxury loading</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

