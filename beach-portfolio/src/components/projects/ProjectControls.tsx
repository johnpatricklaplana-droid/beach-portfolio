import { Search } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

interface ProjectControlsProps {
  categories: string[]
  activeCategory: string
  onCategoryChange: (category: string) => void
  query: string
  onQueryChange: (query: string) => void
}

export function ProjectControls({
  categories,
  activeCategory,
  onCategoryChange,
  query,
  onQueryChange,
}: ProjectControlsProps) {
  return (
    <div className="flex flex-col gap-6 mb-12">
      <div className="relative max-w-md">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-sand-100)]/50" aria-hidden="true" />
        <input
          type="text"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Search projects, tech, or keywords..."
          aria-label="Search projects"
          className="w-full pl-11 pr-4 py-3 rounded-full glass text-sm text-[var(--color-sand-50)] placeholder:text-[var(--color-sand-100)]/40 focus-visible:outline-none"
        />
      </div>

      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
        {categories.map((category) => {
          const active = activeCategory === category
          return (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              aria-pressed={active}
              className="relative px-4 py-2 rounded-full text-xs font-display font-semibold"
            >
              {active && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full bg-[var(--color-cyan)]"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
              <span
                className={cn(
                  'relative z-10',
                  active ? 'text-[var(--color-ocean-950)]' : 'text-[var(--color-sand-50)]/70 hover:text-[var(--color-sand-50)]'
                )}
              >
                {category}
              </span>
              {!active && <span className="absolute inset-0 rounded-full glass -z-0" />}
            </button>
          )
        })}
      </div>
    </div>
  )
}
