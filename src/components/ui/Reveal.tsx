import { useRef, type ReactNode } from 'react'
import { useInView, motion, type HTMLMotionProps } from 'framer-motion'

type RevealProps = {
  children: ReactNode
  className?: string
  /**
   * Distance to slide from before reveal.
   * Lower = more subtle.
   */
  y?: number
  delayMs?: number
  once?: boolean
} & Omit<HTMLMotionProps<'div'>, 'children'>

export default function Reveal({
  children,
  className,
  y = 40,
  delayMs = 0,
  once = true,
  ...motionProps
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.7, ease: 'easeOut', delay: delayMs / 1000 }}
      {...motionProps}
    >
      {children}
    </motion.div>
  )
}

