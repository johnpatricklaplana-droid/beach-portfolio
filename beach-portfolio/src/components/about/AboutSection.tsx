import { motion } from 'framer-motion'
import { Code2, Compass, Heart } from 'lucide-react'
import { TideLine } from '../ui/TideLine'
import { SectionHeading } from '../ui/SectionHeading'

const STORY = [
  {
    icon: Compass,
    title: 'Who I am',
    body: "A student developer who treats every project like a real product, not an assignment — currently building a multi-tenant SaaS booking platform from the database up.",
  },
  {
    icon: Code2,
    title: 'What I enjoy building',
    body: 'Systems where the backend and frontend agree with each other: shared validation rules, timezone-safe scheduling, and constraints enforced where they can\u2019t be bypassed — the database.',
  },
  {
    icon: Heart,
    title: 'My philosophy',
    body: 'Clean structure over clever shortcuts. If a rule matters, it belongs in the schema, not just in a form. Interfaces should feel unhurried, even when the engineering underneath isn\u2019t.',
  },
]

export function AboutSection() {
  return (
    <section id="about" className="relative bg-[var(--color-sand-100)]">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-24 md:py-32">
        <SectionHeading
          eyebrow="About"
          title="Low tide, clear water."
          description="A closer look at how I think about building software — from first principles to the details that hold it together."
          light
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {STORY.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative rounded-3xl bg-white/60 border border-[var(--color-ocean-800)]/10 p-7 backdrop-blur-sm shadow-[0_10px_40px_rgba(15,76,129,0.08)]"
            >
              <div className="w-11 h-11 rounded-2xl bg-[var(--color-ocean-800)]/10 flex items-center justify-center mb-5">
                <item.icon className="w-5 h-5 text-[var(--color-ocean-800)]" aria-hidden="true" />
              </div>
              <h3 className="font-display text-lg font-bold text-[var(--color-ocean-950)] mb-2">{item.title}</h3>
              <p className="text-sm leading-relaxed text-[var(--color-ocean-900)]/70">{item.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 max-w-2xl text-base md:text-lg leading-relaxed text-[var(--color-ocean-900)]/80"
        >
          Outside of coursework, I'm usually deep in a Spring Boot service or exploring game
          development in Unity and LibGDX — chasing the same feeling in both: a system that does
          exactly what it says it will.
        </motion.p>
      </div>

      <TideLine fill="#0a2f4f" />
    </section>
  )
}
