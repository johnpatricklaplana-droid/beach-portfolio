import { motion } from 'framer-motion'
import {
  Coffee, Leaf, Waypoints, Package, Atom, FileCode, Wind, Database, GitBranch,
} from 'lucide-react'
import type { ComponentType, SVGProps } from 'react'
import { GithubIcon } from '../ui/BrandIcons'
import type { Technology } from '../../types'

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>

const ICONS: Record<string, IconComponent> = {
  Coffee, Leaf, Waypoints, Package, Atom, FileCode, Wind, Database, GitBranch, Github: GithubIcon,
}

export function TechIsland({ tech, delay = 0 }: { tech: Technology; delay?: number }) {
  const Icon = ICONS[tech.icon] ?? Atom

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay }}
      className="group relative"
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4 + (delay % 2), repeat: Infinity, ease: 'easeInOut', delay }}
        className="relative flex flex-col items-center justify-center gap-3 w-32 h-32 md:w-36 md:h-36 rounded-[2rem] glass transition-all duration-300 group-hover:scale-105 group-hover:bg-white/10"
      >
        <span
          className="pointer-events-none absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ boxShadow: '0 0 40px 6px rgba(56,189,248,0.35)' }}
          aria-hidden="true"
        />
        <Icon className="w-7 h-7 text-[var(--color-cyan)] transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
        <span className="font-display text-xs font-semibold text-[var(--color-sand-50)]/90 text-center px-2">
          {tech.name}
        </span>
      </motion.div>
    </motion.div>
  )
}
