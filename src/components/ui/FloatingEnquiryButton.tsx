import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function FloatingEnquiryButton() {
  return (
    <motion.a
      href="https://wa.me/919876543210?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20your%20projects."
      target="_blank"
      rel="noreferrer"
      aria-label="Enquire now"
      className="fixed bottom-24 left-6 z-40 hidden items-center gap-2 rounded-full bg-[#081229]/90 px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_40px_rgba(8,18,41,0.45)] backdrop-blur-xl ring-1 ring-[#d97706]/30 sm:flex"
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1.4, type: 'spring', stiffness: 200, damping: 22 }}
      whileHover={{ scale: 1.04, boxShadow: '0 16px 50px rgba(217,119,6,0.35)' }}
      whileTap={{ scale: 0.97 }}
    >
      <MessageCircle className="h-5 w-5 text-[#d97706]" />
      Enquire Now
    </motion.a>
  )
}
