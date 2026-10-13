export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  shortDescription: string;
  location: string;
  email: string;
  phone: string;
  availability: string;
  languages: Array<{ language: string; proficiency: string }>;
  interests: string;
  socials: {
    linkedin: string;
    github: string;
    facebook: string;
    instagram: string;
  };
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  note?: string;
  skills: Array<{
    name: string;
    iconName?: string;
  }>;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  responsibilities: string[];
  note?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location?: string;
  organization?: string;
  dates: string;
  status: "Graduated" | "In Progress";
  statusBadgeColor?: string;
  details?: string[];
}

export interface ProjectSlide {
  title: string;
  src: string;
  caption?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: "Content Strategy" | "Social Media Design" | "Visual Identity";
  description: string;
  goals: string[];
  workDelivered: string[];
  tools: string[];
  featuredImage: string;
  slides?: ProjectSlide[];
  process?: {
    step: string;
    title: string;
    description: string;
  }[];
  notes?: string;
  hasCaseStudy: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  capabilities: string[];
  note?: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  provider: string;
  date: string;
  badge?: string;
}
