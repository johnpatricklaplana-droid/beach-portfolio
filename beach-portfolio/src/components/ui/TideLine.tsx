import { motion } from 'framer-motion'

interface TideLineProps {
  /** hex/token color of the water fill below the line */
  fill?: string
  /** flips the curve so it can sit at the top or bottom of a section */
  flip?: boolean
  className?: string
}

/**
 * The recurring "shoreline" motif: a slow, breathing wave line that
 * separates every section, standing in for the tide moving up the beach
 * as the page scrolls from sky to ocean to sand.
 */
export function TideLine({ fill = '#0a2f4f', flip = false, className = '' }: TideLineProps) {
  return (
    <div className={`relative w-full overflow-hidden leading-none ${flip ? 'rotate-180' : ''} ${className}`} aria-hidden="true">
      <svg viewBox="0 0 1440 120" className="w-full h-16 md:h-24 block" preserveAspectRatio="none">
        <motion.path
          fill={fill}
          initial={{ d: 'M0,64 C240,100 480,20 720,56 C960,92 1200,28 1440,64 L1440,120 L0,120 Z' }}
          animate={{
            d: [
              'M0,64 C240,100 480,20 720,56 C960,92 1200,28 1440,64 L1440,120 L0,120 Z',
              'M0,48 C240,20 480,96 720,64 C960,32 1200,88 1440,48 L1440,120 L0,120 Z',
              'M0,64 C240,100 480,20 720,56 C960,92 1200,28 1440,64 L1440,120 L0,120 Z',
            ],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  )
}
