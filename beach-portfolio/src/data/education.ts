import type { EducationEntry } from '../types'

export const education: EducationEntry[] = [
  {
    id: 'self-directed',
    school: 'Self-Directed Study',
    degree: 'Data Structures & Algorithms, SQL Databases, APIs & Frontend Development',
    period: '2025 - Second Year BSIT student',
    description:
      'Self-studied data structures and algorithms, relational database design, REST API development, and frontend fundamentals — foundation work that fed directly into full-stack development.',
  },
  {
    id: "daddy's Home",
    school: 'Personal Project — Daddy\u2019s Home',
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
    school: 'BIST (Bachelor in Information Systems Technology)',
    degree: 'Undergraduate coursework',
    period: '2024 — 2028',
    description:
      'Coursework spanning computer systems, databases, networking, and software engineering — with a personal focus on web development.',
  },
]
