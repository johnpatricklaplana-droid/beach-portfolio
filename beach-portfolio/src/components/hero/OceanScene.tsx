import { motion } from 'framer-motion'
import { useMouseParallax } from '../../hooks/useMouseParallax'

/**
 * Layered, parallaxed backdrop: gradient sky, drifting clouds, soft light
 * rays, and floating particles. Purely decorative (aria-hidden).
 */
export function OceanScene() {
  const { x, y } = useMouseParallax()

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* sky-to-ocean gradient wash */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#16619e_0%,_#0f4c81_35%,_#0a2f4f_70%,_#071f33_100%)]" />

      {/* soft light rays */}
      <motion.div
        style={{ x: x * 12, y: y * 8 }}
        className="absolute -top-20 left-1/2 -translate-x-1/2 w-[140%] h-[70%] opacity-30"
      >
        <div className="w-full h-full bg-[conic-gradient(from_200deg_at_50%_0%,transparent_0deg,rgba(251,146,60,0.25)_8deg,transparent_20deg,transparent_340deg,rgba(56,189,248,0.2)_352deg,transparent_360deg)]" />
      </motion.div>

      {/* drifting clouds */}
      {[
        { top: '14%', size: 220, delay: 0, dur: 40, opacity: 0.18 },
        { top: '22%', size: 160, delay: 5, dur: 55, opacity: 0.14 },
        { top: '8%', size: 280, delay: 10, dur: 65, opacity: 0.12 },
      ].map((c, i) => (
        <motion.div
          key={i}
          initial={{ x: '-20vw' }}
          animate={{ x: '120vw' }}
          transition={{ duration: c.dur, delay: c.delay, repeat: Infinity, ease: 'linear' }}
          style={{ top: c.top, width: c.size, height: c.size * 0.4, opacity: c.opacity }}
          className="absolute rounded-full bg-white blur-2xl"
        />
      ))}

      {/* floating particles (sea mist) */}
      {Array.from({ length: 18 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-[var(--color-cyan)]/40"
          style={{
            left: `${(i * 37) % 100}%`,
            top: `${(i * 53) % 100}%`,
          }}
          animate={{ y: [0, -18, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 6 + (i % 5), repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
        />
      ))}

      {/* ocean waves, layered for depth */}
      <motion.svg
        style={{ x: x * -10 }}
        viewBox="0 0 1440 320"
        className="absolute bottom-0 w-[120%] -left-[10%] opacity-70"
        preserveAspectRatio="none"
      >
        <motion.path
          fill="#16619e"
          initial={{ d: 'M0,180 C360,120 1080,240 1440,180 L1440,320 L0,320 Z' }}
          animate={{
            d: [
              'M0,180 C360,120 1080,240 1440,180 L1440,320 L0,320 Z',
              'M0,200 C360,240 1080,120 1440,200 L1440,320 L0,320 Z',
              'M0,180 C360,120 1080,240 1440,180 L1440,320 L0,320 Z',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.svg>
      <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full" preserveAspectRatio="none">
        <motion.path
          fill="#0f4c81"
          initial={{ d: 'M0,220 C400,260 1040,180 1440,220 L1440,320 L0,320 Z' }}
          animate={{
            d: [
              'M0,220 C400,260 1040,180 1440,220 L1440,320 L0,320 Z',
              'M0,240 C400,190 1040,260 1440,235 L1440,320 L0,320 Z',
              'M0,220 C400,260 1040,180 1440,220 L1440,320 L0,320 Z',
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        />
      </svg>
    </div>
  )
}
