import { technologies, techCategories } from '../../data/technologies'
import { TechIsland } from './TechIsland'
import { SectionHeading } from '../ui/SectionHeading'
import { TideLine } from '../ui/TideLine'

export function TechStackSection() {
  return (
    <section id="stack" className="relative bg-[var(--color-ocean-950)] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-32">
        <SectionHeading
          eyebrow="Tech Stack"
          title="An archipelago of tools."
          description="Each island is a technology I reach for regularly, grouped by what it's there to do."
        />

        <div className="mt-16 space-y-14">
          {techCategories.map((category) => {
            const items = technologies.filter((t) => t.category === category)
            if (!items.length) return null

            return (
              <div key={category}>
                <h3 className="font-display text-sm font-semibold tracking-[0.2em] uppercase text-[var(--color-sand-100)]/50 mb-6">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-5">
                  {items.map((tech, i) => (
                    <TechIsland key={tech.id} tech={tech} delay={i * 0.15} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <TideLine fill="var(--color-sand-100)" />
    </section>
  )
}
