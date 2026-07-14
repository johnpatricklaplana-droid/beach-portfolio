export type ProjectCategory =
  | 'Java'
  | 'Spring Boot'
  | 'React'
  | 'TypeScript'
  | 'Tailwind'
  | 'MySQL'
  | 'PostgreSQL'
  | 'Full Stack'
  | 'Frontend'
  | 'Backend'

export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  technologies: string[]
  image: string
  github?: string
  liveDemo?: string
  category: ProjectCategory[]
  featured?: boolean
  year: number
  architecture?: string
  featuresList?: string[]
  challenges?: string
  lessonsLearned?: string
  /** controls grid footprint in the bento layout */
  size?: 'sm' | 'md' | 'lg' | 'wide'
}

export type TechCategory = 'Frontend' | 'Backend' | 'Databases' | 'Tools'

export interface Technology {
  id: string
  name: string
  category: TechCategory
  icon: string
}

export interface EducationEntry {
  id: string
  school: string
  degree: string
  period: string
  description: string
  highlights?: string[]
}
