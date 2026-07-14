import type { Technology } from '../types'

// `icon` maps to a lucide-react component name, resolved in TechIsland.tsx
export const technologies: Technology[] = [
  { id: 'java', name: 'Java', category: 'Backend', icon: 'Coffee' },
  { id: 'spring-boot', name: 'Spring Boot', category: 'Backend', icon: 'Leaf' },
  { id: 'rest-api', name: 'REST API', category: 'Backend', icon: 'Waypoints' },
  { id: 'maven', name: 'Maven', category: 'Tools', icon: 'Package' },

  { id: 'react', name: 'React', category: 'Frontend', icon: 'Atom' },
  { id: 'typescript', name: 'TypeScript', category: 'Frontend', icon: 'FileCode' },
  { id: 'tailwind', name: 'Tailwind CSS', category: 'Frontend', icon: 'Wind' },

  { id: 'mysql', name: 'MySQL', category: 'Databases', icon: 'Database' },
  { id: 'postgresql', name: 'PostgreSQL', category: 'Databases', icon: 'Database' },

  { id: 'git', name: 'Git', category: 'Tools', icon: 'GitBranch' },
  { id: 'github', name: 'GitHub', category: 'Tools', icon: 'Github' },
]

export const techCategories = ['Frontend', 'Backend', 'Databases', 'Tools'] as const
