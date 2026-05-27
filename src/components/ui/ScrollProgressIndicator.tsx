import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgressIndicator() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[100] h-1 origin-left bg-gradient-to-r from-[#d97706] via-[#f59e0b] to-[#d97706]"
      style={{ scaleX, opacity: visible ? 1 : 0 }}
      transition={{ opacity: { duration: 0.3 } }}
    />
  )
}
