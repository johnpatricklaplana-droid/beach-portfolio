import type { Project } from '../types'

/**
 * Add, remove, or edit entries freely — the Projects section renders
 * whatever is in this array with .map(), no layout code needs to change.
 * `size` only hints at the bento footprint; omit it and 'md' is used.
 */
export const projects: Project[] = [
  {
    id: 'apex-booking-platform',
    title: "Daddy's Home — Multi-Tenant Booking Platform",
    description:
      'A full-stack SaaS platform for service businesses to manage staff, availability, and customer bookings across multiple tenants.',
    longDescription:
      "Daddy's Home lets service businesses onboard, set up staff schedules, and take bookings through their own branded site — customers can book a real available slot in seconds, with no double-booked appointments and no back-and-forth over timezones.",
    technologies: ['Java', 'Spring Boot', 'React', 'TypeScript', 'Tailwind', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?w=1200&q=80',
    github: 'https://github.com/johnpatricklaplana-droid/Booking_System_real_one',
    liveDemo: 'https://booking-system-real-one.vercel.app',
    category: ['Full Stack', 'Java', 'Spring Boot', 'React', 'PostgreSQL'],
    featured: true,
    year: 2026,
    architecture:
      'Spring Boot 4 REST API with Hibernate 7.2 / PostgreSQL, JWT auth via HttpOnly cookies, React + Vite SPA frontend, Supabase Storage for media.',
    featuresList: [
      'Multi-tenant business onboarding wizard',
      'Timezone-aware availability & booking engine',
      'Postgres exclusion constraints preventing double-booking',
      'Analytics dashboard: revenue, peak hours, service distribution',
      'Role-based access with Spring Security guards',
    ],
    challenges:
      'Keeping availability logic consistent between the frontend preview and backend source of truth, and enforcing overlap prevention at the database level instead of the application layer.',
    lessonsLearned:
      'Entity graphs and exclusion constraints solve entire classes of bugs that application code would otherwise have to guard against manually.',
    size: 'wide',
  },
  {
    id: 'heydaddy-messaging',
    title: 'HeyDaddy — Realtime Messaging App',
    description:
      'A React Native chat app with realtime messaging, media sharing, and push notifications.',
    longDescription:
      "A mobile-first messaging app built with Expo and Supabase, with realtime channel subscriptions and push notifications delivered through Expo/FCM.",
    technologies: ['React', 'TypeScript', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&q=80',
    github: 'https://github.com/johnpatricklaplana-droid/messaging-app-upgraded-one',
    liveDemo: 'https://project-cauxt.vercel.app',
    category: ['Frontend', 'React', 'TypeScript', 'PostgreSQL'],
    featured: true,
    year: 2025,
    architecture:
      "Expo + React Native client, Supabase Postgres with RLS policies, RealtimeContext for channel management.",
    featuresList: [
      'Realtime message delivery via Supabase channels',
      'Push notifications via Expo/FCM',
      'Google OAuth sign-in',
      'Light and dark mode support',
    ],
    challenges:
      'Managing subscription lifecycles across screens without leaking realtime channels or duplicating listeners.',
    lessonsLearned:
      'Centralizing realtime state in a single context made the rest of the app far easier to reason about.',
    size: 'md',
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
