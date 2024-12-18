export interface Contact {
  email: string;
  phone: string;
  location: string;
}

export interface Basics extends Contact {
  name: string;
  title: string;
  summary: string;
  avatar: string | null;
}

export interface Skills {
  technical: string[];
  soft: string[];
}

export interface ExperienceItem {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  highlights: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  year: string;
  achievements: string[];
}

export interface CertificationItem {
  name: string;
  issuer: string;
  year: string;
}

export interface CVData {
  basics: Basics;
  skills: Skills;
  experience: ExperienceItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
}