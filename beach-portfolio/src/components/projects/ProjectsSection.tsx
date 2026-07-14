import { useMemo, useState } from 'react'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import { projects } from '../../data/projects'
import type { Project, ProjectCategory } from '../../types'
import { ProjectCard } from './ProjectCard'
import { ProjectControls } from './ProjectControls'
import { ProjectModal } from './ProjectModal'
import { SectionHeading } from '../ui/SectionHeading'
import { TideLine } from '../ui/TideLine'

const CATEGORIES = [
  'All',
  'Java',
  'Spring Boot',
  'React',
  'TypeScript',
  'Tailwind',
  'MySQL',
  'PostgreSQL',
  'Full Stack',
  'Frontend',
  'Backend',
]

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState<Project | null>(null)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return projects.filter((p) => {
      const matchesCategory =
        activeCategory === 'All' || p.category.includes(activeCategory as ProjectCategory)
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.technologies.some((t) => t.toLowerCase().includes(q))
      return matchesCategory && matchesQuery
    })
  }, [activeCategory, query])

  return (
    <section id="projects" className="relative bg-(--color-sand-100)">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-32">
        <SectionHeading
          eyebrow={`Projects (${projects.length})`}
          title="Work built to hold water."
          description="Every project below is pulled from a single data source — add or remove one and the layout adapts on its own."
          light
        />

        <div className="mt-14">
          <ProjectControls
            categories={CATEGORIES}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            query={query}
            onQueryChange={setQuery}
          />
        </div>

        <LayoutGroup>
          {filtered.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-70 gap-5"
            >
              <AnimatePresence mode="popLayout">
                {filtered.map((project, i) => (
                  <ProjectCard key={project.id} project={project} onOpen={setSelected} index={i} />
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-20 text-center text-ocean-900/60"
            >
              No projects match that search. Try a different keyword or filter.
            </motion.p>
          )}
        </LayoutGroup>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />

      <TideLine fill="#0a2f4f" />
    </section>
  )
}
