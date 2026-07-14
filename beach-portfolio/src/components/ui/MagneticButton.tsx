import { useRef, useState, type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

interface MagneticButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  className?: string
  ariaLabel?: string
}

export function MagneticButton({
  children,
  href,
  onClick,
  variant = 'primary',
  className,
  ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) * 0.3
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3
    setOffset({ x, y })
  }

  const reset = () => setOffset({ x: 0, y: 0 })

  const styles = cn(
    'relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-display font-semibold text-sm tracking-wide transition-shadow duration-300 focus-visible:outline-none',
    variant === 'primary'
      ? 'bg-gradient-to-r from-[var(--color-sunset)] to-[var(--color-coral)] text-[var(--color-ocean-950)] shadow-[0_8px_30px_rgba(255,127,80,0.35)] hover:shadow-[0_8px_40px_rgba(255,127,80,0.55)]'
      : 'glass text-[var(--color-sand-50)] hover:bg-white/10',
    className
  )

  const content = (
    <motion.span
      ref={ref as React.RefObject<HTMLSpanElement>}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 12, mass: 0.3 }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={styles}
    >
      {children}
    </motion.span>
  )

  if (href) {
    return (
      <a href={href} aria-label={ariaLabel} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="inline-block">
        {content}
      </a>
    )
  }

  return (
    <button onClick={onClick} aria-label={ariaLabel} className="inline-block">
      {content}
    </button>
  )
}
