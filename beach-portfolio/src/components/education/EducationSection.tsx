import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { education } from '../../data/education'
import { SectionHeading } from '../ui/SectionHeading'
import { TideLine } from '../ui/TideLine'

export function EducationSection() {
  return (
    <section id="education" className="relative bg-[var(--color-ocean-950)]">
      <div className="max-w-4xl mx-auto px-6 md:px-10 py-24 md:py-32">
        <SectionHeading
          eyebrow="Education"
          title="How the water got here."
          description="The path from coursework to shipping a real, full-stack product."
        />

        <div className="relative mt-16 pl-8 md:pl-10">
          <div className="absolute left-[11px] md:left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-[var(--color-cyan)] via-[var(--color-sunset)] to-transparent" aria-hidden="true" />

          <ol className="space-y-12">
            {education.map((entry, i) => (
              <motion.li
                key={entry.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="relative"
              >
                <span className="absolute -left-8 md:-left-10 top-1 w-6 h-6 rounded-full glass flex items-center justify-center">
                  <GraduationCap className="w-3.5 h-3.5 text-[var(--color-cyan)]" aria-hidden="true" />
                </span>

                <span className="text-xs font-display font-semibold tracking-wide text-[var(--color-cyan)]">
                  {entry.period}
                </span>
                <h3 className="font-display text-xl font-bold text-[var(--color-sand-50)] mt-1">
                  {entry.school}
                </h3>
                <p className="text-sm font-medium text-[var(--color-sand-100)]/60 mt-0.5">{entry.degree}</p>
                <p className="mt-3 text-sm md:text-base leading-relaxed text-[var(--color-sand-100)]/70 max-w-xl">
                  {entry.description}
                </p>
                {entry.highlights && (
                  <ul className="mt-3 space-y-1.5">
                    {entry.highlights.map((h) => (
                      <li key={h} className="text-sm text-[var(--color-sand-100)]/60 flex gap-2">
                        <span className="text-[var(--color-sunset)]" aria-hidden="true">&bull;</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.li>
            ))}
          </ol>
        </div>
      </div>

      <TideLine fill="var(--color-sand-100)" />
    </section>
  )
}
