# Beach Portfolio

Premium, beach-themed portfolio site. React + TypeScript + Vite + Tailwind CSS v4 + Framer Motion + Lucide.

## Run it

```bash
npm install
npm run dev
```

## Edit your content

- `src/data/projects.ts` — projects. Add/remove entries freely; the grid, filters, and search all update automatically. No fixed count anywhere.
- `src/data/technologies.ts` — tech stack islands, grouped by category.
- `src/data/education.ts` — timeline entries.
- Swap real screenshots into each project's `image` field (currently using placeholder Unsplash photos — replace with your own).
- Update social links (GitHub/LinkedIn/email) in `Hero.tsx`, `Footer.tsx`, and `ContactSection.tsx`.
- Contact form currently just simulates a send (`ContactSection.tsx`) — wire `handleSubmit` up to your email service (Formspree, Resend, EmailJS, etc.) or a backend endpoint.
- Resume link points to `/resume.pdf` — drop your resume in `public/`.

## Structure

```
src/
├── components/
│   ├── layout/     Navbar, Footer
│   ├── hero/       Hero, OceanScene (parallax backdrop)
│   ├── about/      Storytelling section
│   ├── tech/       Floating "tech island" grid
│   ├── projects/   Data-driven bento grid, filters, search, modal
│   ├── education/  Timeline
│   ├── contact/    Reservation-styled form
│   └── ui/         Shared primitives (TideLine, MagneticButton, SectionHeading, BrandIcons)
├── data/           projects.ts, technologies.ts, education.ts — your content lives here
├── hooks/          useScrollProgress, useActiveSection, useMouseParallax
└── types/          Shared TS types
```

## Notes

- Design tokens (palette, fonts) live in `src/index.css` under `@theme`.
- Respects `prefers-reduced-motion`.
- lucide-react dropped brand icons (GitHub/LinkedIn) a while back — `components/ui/BrandIcons.tsx` has small stroke-style replacements so the icon language stays consistent.
