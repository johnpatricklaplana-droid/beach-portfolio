import { motion } from 'framer-motion'
import { ArrowDown, FileText } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons'
import { OceanScene } from './OceanScene'
import { MagneticButton } from '../ui/MagneticButton'
import { TideLine } from '../ui/TideLine'

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <OceanScene />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 text-center pt-24">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-xs md:text-sm font-semibold tracking-[0.3em] uppercase text-[var(--color-cyan)] mb-5"
        >
          Full-Stack Developer &middot; Philippines
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[var(--color-sand-50)] leading-[1.05]"
        >
          Building calm, capable
          <br />
          <span className="bg-gradient-to-r from-[var(--color-cyan)] via-[var(--color-sand-100)] to-[var(--color-sunset)] bg-clip-text text-transparent">
            software at low tide.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-6 max-w-xl mx-auto text-base md:text-lg text-[var(--color-sand-100)]/75 leading-relaxed"
        >
          I'm Johny — a Java / Spring Boot backend and React / TypeScript frontend developer,
          shipping full-stack products with the same care as a well-run beach resort: unhurried,
          precise, and built to hold up.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton href="#projects" variant="primary" ariaLabel="View projects">
            View Projects
          </MagneticButton>
          <MagneticButton href="#contact" variant="secondary" ariaLabel="Get in touch">
            Get in Touch
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-8 flex items-center justify-center gap-3"
        >
          <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-3 rounded-full glass hover:bg-white/10 transition-colors">
            <GithubIcon className="w-4 h-4" />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-3 rounded-full glass hover:bg-white/10 transition-colors">
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" aria-label="Resume" className="p-3 rounded-full glass hover:bg-white/10 transition-colors">
            <FileText className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      <motion.button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        aria-label="Scroll to About section"
        className="relative z-10 mx-auto mb-8 p-2 text-[var(--color-sand-50)]/70 hover:text-[var(--color-sand-50)]"
      >
        <ArrowDown className="w-5 h-5" />
      </motion.button>

      <div className="relative z-10">
        <TideLine fill="var(--color-sand-100)" />
      </div>
    </section>
  )
}
