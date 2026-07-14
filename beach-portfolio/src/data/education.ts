import type { EducationEntry } from '../types'

export const education: EducationEntry[] = [
  {
    id: 'capstone',
    school: 'Capstone Project — Apex / Daddy\u2019s Home',
    degree: 'Full-Stack SaaS Booking Platform',
    period: '2025 — Present',
    description:
      'Designed and built a multi-tenant booking platform end to end: Spring Boot 4 / Hibernate 7.2 backend, React + TypeScript frontend.',
    highlights: [
      'Database-level double-booking prevention with Postgres exclusion constraints',
      'Timezone-aware scheduling shared between frontend and backend',
      'Full analytics module: revenue, bookings, peak hours',
    ],
  },
  {
    id: 'coursework',
    school: 'BS Computer Science / Information Technology',
    degree: 'Undergraduate coursework',
    period: '2023 — 2027',
    description:
      'Core coursework in data structures, databases, and software engineering, applied directly to production-style capstone work.',
  },
  {
    id: 'self-directed',
    school: 'Self-Directed Study',
    degree: 'Game Development & Systems Programming',
    period: 'Ongoing',
    description:
      'Exploring Unity and LibGDX for interactive 3D work alongside full-stack development.',
  },
]
