import Reveal from './Reveal'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  light?: boolean
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <Reveal className={`max-w-3xl ${alignClass}`}>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#d97706]">
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-heading text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl ${
          light ? 'text-white' : 'text-[#081229]'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            light ? 'text-white/70' : 'text-[#081229]/70'
          }`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  )
}
