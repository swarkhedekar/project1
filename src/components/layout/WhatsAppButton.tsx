import { FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-24 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_12px_40px_rgba(37,211,102,0.45)]"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: 'spring', stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
    >
      <FaWhatsapp className="h-7 w-7" />
    </motion.a>
  )
}
