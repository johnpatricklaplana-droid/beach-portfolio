import type { Project } from '../types'

/**
 * Add, remove, or edit entries freely — the Projects section renders
 * whatever is in this array with .map(), no layout code needs to change.
 * `size` only hints at the bento footprint; omit it and 'md' is used.
 */
export const projects: Project[] = [
  {
    id: 'jprecall',
    title: 'JPRecall',
    description:
      'A study review application for scheduling topics, completing daily reviews, and preserving knowledge in long-term memory.',
    longDescription:
      'JPRecall gives learners one place to log study topics, choose a 1-day, 3-day, 1-week, or custom review date, work through an organized daily schedule, and move completed topics into long-term memory.',
    technologies: ['React 19', 'React Router 7', 'TypeScript', 'Vite', 'Tailwind CSS 4', 'Supabase'],
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200&q=80',
    github: 'https://github.com/johnpatricklaplana-droid/JPRecall',
    liveDemo: 'https://jp-recall.vercel.app/',
    category: ['Full Stack', 'React', 'TypeScript', 'Tailwind', 'PostgreSQL'],
    featured: true,
    year: 2026,
    architecture:
      'React and React Router protected routes in the browser, authenticated through Supabase Auth and persisted in a Postgres public.to_review table through the Supabase Data API.',
    featuresList: [
      'Log topics with 1-day, 3-day, 1-week, or custom review dates',
      'Review schedule grouped into Today, Overdue, and Upcoming',
      'Mark active topics as reviewed or delete them',
      'Search reviewed topics and track this-month and storage counts',
      'Return topics to the active schedule without creating duplicates',
      'Email/password and Google OAuth authentication',
    ],
    challenges:
      'Keeping active and completed topic states consistent across the schedule and memory library while preserving a simple date-based workflow.',
    lessonsLearned:
      'Using one review-state column as the source of truth made transitions between review and long-term memory clear and predictable.',
    size: 'wide',
  },
  // {
  //   id: 'booking-analytics-dashboard',
  //   title: 'Business Analytics Dashboard',
  //   description: 'Revenue, booking, and customer analytics with timezone-aware peak-hour insights.',
  //   technologies: ['Java', 'Spring Boot', 'React', 'PostgreSQL'],
  //   image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
  //   github: 'https://github.com/',
  //   category: ['Backend', 'Java', 'Spring Boot', 'PostgreSQL'],
  //   year: 2026,
  //   size: 'md',
  // },
  // {
  //   id: 'staff-scheduling-engine',
  //   title: 'Staff Scheduling Engine',
  //   description: 'JPQL-driven availability engine with exclusion constraints preventing overlapping bookings.',
  //   technologies: ['Java', 'Spring Boot', 'PostgreSQL'],
  //   image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=80',
  //   github: 'https://github.com/',
  //   category: ['Backend', 'Java', 'Spring Boot', 'PostgreSQL'],
  //   year: 2026,
  //   size: 'sm',
  // },
  // {
  //   id: 'onboarding-wizard',
  //   title: 'Business Onboarding Wizard',
  //   description: 'Multi-step onboarding flow with per-step validation and directional slide-fade animation.',
  //   technologies: ['React', 'TypeScript', 'Tailwind'],
  //   image: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=1200&q=80',
  //   github: 'https://github.com/',
  //   category: ['Frontend', 'React', 'TypeScript', 'Tailwind'],
  //   year: 2025,
  //   size: 'sm',
  // },
  // {
  //   id: 'reviews-service',
  //   title: 'Customer Reviews Service',
  //   description: 'Review submission with ownership checks, one review per completed booking.',
  //   technologies: ['Java', 'Spring Boot', 'MySQL'],
  //   image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80',
  //   github: 'https://github.com/',
  //   category: ['Backend', 'Java', 'Spring Boot', 'MySQL'],
  //   year: 2025,
  //   size: 'md',
  // },
]
