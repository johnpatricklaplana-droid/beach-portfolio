import { Mail, Waves } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons'
import { TideLine } from '../ui/TideLine'

export function Footer() {
  return (
    <footer className="relative bg-[var(--color-ocean-950)] pt-0">
      <TideLine fill="#0a2f4f" />
      <div className="max-w-6xl mx-auto px-6 md:px-10 pb-10 pt-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 font-display font-bold text-lg text-[var(--color-sand-50)]">
            <Waves className="w-5 h-5 text-[var(--color-cyan)]" aria-hidden="true" />
            Johny
          </div>

          <p className="text-sm text-[var(--color-sand-100)]/50 text-center">
            Built with React, TypeScript &amp; a lot of coffee. &copy; {new Date().getFullYear()}
          </p>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="p-2.5 rounded-full glass hover:bg-white/10 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="p-2.5 rounded-full glass hover:bg-white/10 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:hello@example.com"
              aria-label="Send an email"
              className="p-2.5 rounded-full glass hover:bg-white/10 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
