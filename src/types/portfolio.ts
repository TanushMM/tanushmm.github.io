export interface IntroData {
  name: string
  fullName: string
  headline: string
  rotatingRoles: string[]
  summary: string
  description: string
}

export interface Socials {
  linkedin: string
  medium: string
  microsoft: string
  leetcode: string
  github: string
}

export interface ExperienceItem {
  id: string
  title: string
  company: string
  date: string
  summary: string
  highlights: string[]
  technologies: string[]
}

export interface Skill {
  name: string
  level: number
}

export interface ExpertiseItem {
  id: string
  category: string
  description: string
  skills: Skill[]
}

export interface ProjectLinkSet {
  github?: string
  live?: string
}

export interface ProjectDetailBlock {
  title: string
  content: string
}

export interface ProjectItem {
  id: string
  slug: string
  title: string
  eyebrow: string
  description: string
  summary: string
  technologies: string[]
  links: ProjectLinkSet
  highlights: string[]
  details: ProjectDetailBlock[]
}

export interface ResumeEducation {
  title: string
  subtitle: string
  result: string
}

export interface ResumeData {
  driveLink: string
  fileName: string
  education: ResumeEducation[]
  highlights: string[]
}

export interface TestimonialItem {
  id: string
  author: string
  role: string
  company: string
  content: string
  rating: number
  link?: string
}

export interface ContactData {
  email: string
  location: string
  availability: string
  emailjs: {
    serviceId: string
    templateId: string
    publicKey: string
  }
}

export interface PortfolioData {
  introduction: IntroData
  socials: Socials
  experience: ExperienceItem[]
  expertise: ExpertiseItem[]
  projects: ProjectItem[]
  resume: ResumeData
  testimonials: TestimonialItem[]
  contact: ContactData
}
