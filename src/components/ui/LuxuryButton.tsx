import { type ReactNode } from 'react'
import { motion } from 'framer-motion'

type LuxuryButtonProps = {
  children: ReactNode
  onClick?: () => void
  href?: string
  variant?: 'primary' | 'secondary'
  className?: string
  type?: 'button' | 'submit'
}

export default function LuxuryButton({
  children,
  onClick,
  href,
  variant = 'primary',
  className = '',
  type = 'button',
}: LuxuryButtonProps) {
  const base =
    'relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold tracking-wide transition-all duration-300'

  const styles =
    variant === 'primary'
      ? 'bg-[#d97706] text-[#081229] shadow-[0_0_0_1px_rgba(217,119,6,0.45),0_16px_60px_rgba(217,119,6,0.25)] hover:shadow-[0_0_0_1px_rgba(217,119,6,0.65),0_22px_80px_rgba(217,119,6,0.35)] hover:-translate-y-0.5'
      : 'bg-white/10 text-white backdrop-blur-md border border-white/15 hover:bg-white/15 hover:-translate-y-0.5'

  const commonGlow =
    'after:absolute after:inset-0 after:rounded-full after:opacity-0 after:blur-xl after:bg-[#d97706]/40 after:transition-opacity after:duration-300 hover:after:opacity-100'

  if (href) {
    return (
      <motion.a
        whileTap={{ scale: 0.98 }}
        href={href}
        className={`${base} ${styles} ${commonGlow} ${className}`}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${base} ${styles} ${commonGlow} ${className}`}
    >
      {children}
    </motion.button>
  )
}
