import { motion } from 'framer-motion'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
  light?: boolean
}

export function SectionHeading({ eyebrow, title, description, align = 'left', light = false }: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'}>
      <motion.span
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5 }}
        className={`inline-block font-display text-xs font-semibold tracking-[0.28em] uppercase mb-3 ${
          light ? 'text-[var(--color-ocean-800)]' : 'text-[var(--color-cyan)]'
        }`}
      >
        {eyebrow}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className={`font-display text-4xl md:text-5xl font-bold tracking-tight ${
          light ? 'text-[var(--color-ocean-950)]' : 'text-[var(--color-sand-50)]'
        }`}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`mt-4 text-base md:text-lg leading-relaxed ${
            light ? 'text-[var(--color-ocean-900)]/70' : 'text-[var(--color-sand-100)]/70'
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}
