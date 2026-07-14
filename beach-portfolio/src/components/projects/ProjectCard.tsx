import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { GithubIcon } from '../ui/BrandIcons'
import type { Project } from '../../types'
import { cn } from '../../utils/cn'

interface ProjectCardProps {
  project: Project
  onOpen: (project: Project) => void
  index: number
}

const SIZE_CLASSES: Record<NonNullable<Project['size']>, string> = {
  sm: 'md:col-span-1 md:row-span-1',
  md: 'md:col-span-1 md:row-span-1',
  wide: 'md:col-span-2 md:row-span-1',
  lg: 'md:col-span-2 md:row-span-2',
}

export function ProjectCard({ project, onOpen, index }: ProjectCardProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 })

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ rx: py * -6, ry: px * 6 })
  }

  const resetTilt = () => setTilt({ rx: 0, ry: 0 })
  const size = project.size ?? 'md'

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.06 }}
      layout
      className={cn('relative', SIZE_CLASSES[size])}
    >
      <motion.button
        ref={ref}
        onClick={() => onOpen(project)}
        onMouseMove={handleMove}
        onMouseLeave={resetTilt}
        style={{ perspective: 1000 }}
        animate={{ rotateX: tilt.rx, rotateY: tilt.ry }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className={cn(
          'group relative w-full h-full min-h-70 rounded-3xl overflow-hidden text-left glass',
          'ring-1 ring-transparent hover:ring-cyan/50 transition-shadow duration-300'
        )}
        aria-label={`Open details for ${project.title}`}
      >
        {/* animated gradient border glow */}
        <span
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'linear-gradient(120deg, var(--color-cyan), var(--color-sunset), var(--color-coral))',
            padding: 1,
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
          }}
          aria-hidden="true"
        />

        <img
          src={project.image}
          alt=""
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ocean-950 via-ocean-950/55 to-transparent" />

        {project.featured && (
          <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-display font-bold tracking-wide uppercase bg-[var(--color-coral)] text-[var(--color-ocean-950)]">
            Featured
          </span>
        )}

        <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col gap-2">
          <span className="text-xs font-display font-medium text-cyan">{project.year}</span>
          <h3 className="font-display text-xl font-bold text-sand-50 leading-tight">
            {project.title}
          </h3>
          <p className="text-sm text-(--color-sand-100)/70 line-clamp-2">{project.description}</p>

          <div className="flex flex-wrap gap-1.5 mt-2">
            {project.technologies.slice(0, 4).map((t) => (
              <span key={t} className="px-2.5 py-1 rounded-full text-[10px] font-medium glass-warm text-sand-50">
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3 mt-3">
            {project.github && (
              <span className="inline-flex items-center gap-1.5 text-xs text-sand-50/80">
                <GithubIcon className="w-3.5 h-3.5" aria-hidden="true" /> Code
              </span>
            )}
            {project.liveDemo && (
              <span className="inline-flex items-center gap-1.5 text-xs text-sand-50/80">
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" /> Live
              </span>
            )}
          </div>
        </div>
      </motion.button>
    </motion.div>
  )
}
