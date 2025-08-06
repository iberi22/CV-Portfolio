/// <reference types="astro/client" />

export interface Contact {
  email: string
  phone?: string
  location: string
  github_url: string
  github_user: string
  linkedin_url?: string
  website?: string
}

export interface PersonalInfo {
  name: string
  title: string
  profile_picture: string
  contact: Contact
}

export interface ProfessionalExperience {
  company: string
  date: string
  start_date: string
  end_date: string
  position: string
  description: string[]
}

export interface SkillsAndInterests {
  category: string
  details: string
}

export interface GitHubProject {
  title: string
  url: string
  description: string
  tech: string
}

export interface Education {
  institution: string
  degree: string
  date: string
  gpa?: string
  thesis?: string
  coursework?: string[]
  description?: string
}

export interface Certification {
  name: string
  issuer: string
  date: string
}

export interface LeadershipAndActivities {
  organization: string
  role: string
  date: string
  description: string[]
}

export interface SocialLink {
  platform: string
  url: string
}

export interface CV {
  personal_info: PersonalInfo
  summary?: string[]
  professional_experience?: ProfessionalExperience[]
  skills_and_interests?: SkillsAndInterests[]
  github_projects?: GitHubProject[]
  education?: Education[]
  certifications?: Certification[]
  leadership_and_activities?: LeadershipAndActivities[]
  social_links: SocialLink[]
}

declare module "*.yaml" {
  const data: CV
  export default data
}
