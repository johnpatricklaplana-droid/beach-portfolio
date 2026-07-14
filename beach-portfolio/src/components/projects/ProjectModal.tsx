import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Layers, ListChecks, Lightbulb, Puzzle } from 'lucide-react'
import { GithubIcon } from '../ui/BrandIcons'
import type { Project } from '../../types'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: Readonly<ProjectModalProps>) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!project) return
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-ocean-950/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto rounded-3xl glass"
          >
            <button
              ref={closeRef}
              onClick={onClose}
              aria-label="Close project details"
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full glass hover:bg-white/15 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative h-56 md:h-72 w-full overflow-hidden rounded-t-3xl">
              <img src={project.image} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-ocean-950 to-transparent" />
            </div>

            <div className="p-6 md:p-10">
              <span className="text-xs font-display font-semibold tracking-wide text-cyan">
                {project.year}
              </span>
              <h2 id="project-modal-title" className="font-display text-2xl md:text-3xl font-bold text-sand-50 mt-1">
                {project.title}
              </h2>

              <p className="mt-4 text-sm md:text-base leading-relaxed text-(--color-sand-100)/75">
                {project.longDescription ?? project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                {project.technologies.map((t) => (
                  <span key={t} className="px-3 py-1.5 rounded-full text-xs font-medium glass-warm text-[var(--color-sand-50)]">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 mt-6">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass hover:bg-white/15 text-sm font-display font-semibold transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" aria-hidden="true" /> View Code
                  </a>
                )}
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-linear-to-r from-[var(--color-sunset)] to-[var(--color-coral)] text-[var(--color-ocean-950)] text-sm font-display font-semibold"
                  >
                    <ExternalLink className="w-4 h-4" aria-hidden="true" /> Live Demo
                  </a>
                )}
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mt-9">
                {project.architecture && (
                  <DetailBlock icon={Layers} title="Architecture" body={project.architecture} />
                )}
                {project.featuresList && (
                  <DetailBlock icon={ListChecks} title="Features" list={project.featuresList} />
                )}
                {project.challenges && (
                  <DetailBlock icon={Puzzle} title="Challenges" body={project.challenges} />
                )}
                {project.lessonsLearned && (
                  <DetailBlock icon={Lightbulb} title="Lessons Learned" body={project.lessonsLearned} />
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function DetailBlock({
  icon: Icon,
  title,
  body,
  list,
}: Readonly<{
  icon: typeof Layers
  title: string
  body?: string
  list?: string[]
}>) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <Icon className="w-4 h-4 text-cyan" aria-hidden="true" />
        <h3 className="font-display text-sm font-bold text-sand-50">{title}</h3>
      </div>
      {body && <p className="text-sm text-(--color-sand-100)/70 leading-relaxed">{body}</p>}
      {list && (
        <ul className="space-y-1.5">
          {list.map((item) => (
            <li key={item} className="text-sm text-(--color-sand-100)/70 flex gap-2">
              <span className="text-cyan" aria-hidden="true">&bull;</span>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
