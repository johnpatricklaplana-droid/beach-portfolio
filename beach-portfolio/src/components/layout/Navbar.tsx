import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Waves } from 'lucide-react'
import { useScrollProgress } from '../../hooks/useScrollProgress'
import { useActiveSection } from '../../hooks/useActiveSection'
import { cn } from '../../utils/cn'

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'stack', label: 'Stack' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export function Navbar() {
  const scrolled = useScrollProgress()
  const active = useActiveSection(NAV_ITEMS.map((i) => i.id))
  const [open, setOpen] = useState(false)

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="fixed top-0 inset-x-0 z-50 flex justify-center"
    >
      <nav
        aria-label="Primary"
        className={cn(
          'glass mt-4 flex items-center justify-between rounded-full transition-all duration-500 ease-out',
          scrolled ? 'w-[92%] md:w-[640px] px-4 py-2' : 'w-[94%] md:w-[760px] px-6 py-3'
        )}
      >
        <button
          onClick={() => scrollTo('home')}
          className="flex items-center gap-2 font-display font-bold text-[var(--color-sand-50)] shrink-0"
          aria-label="Back to top"
        >
          <Waves className="w-5 h-5 text-[var(--color-cyan)]" aria-hidden="true" />
          <span className="hidden sm:inline">Johny</span>
        </button>

        <ul className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollTo(item.id)}
                aria-current={active === item.id ? 'page' : undefined}
                className={cn(
                  'relative px-3.5 py-2 rounded-full text-sm font-medium transition-colors',
                  active === item.id ? 'text-[var(--color-ocean-950)]' : 'text-[var(--color-sand-50)]/80 hover:text-[var(--color-sand-50)]'
                )}
              >
                {active === item.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-[var(--color-cyan)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden p-2 text-[var(--color-sand-50)]"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="glass fixed top-20 w-[92%] rounded-3xl p-4 md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className={cn(
                      'w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors',
                      active === item.id ? 'bg-[var(--color-cyan)] text-[var(--color-ocean-950)]' : 'text-[var(--color-sand-50)]/85'
                    )}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
