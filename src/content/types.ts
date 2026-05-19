import type { ComponentType } from "react";

export interface Profile {
  name: string;
  shortName: string;
  role: string;
  location: string;
  availability: string;
  summary: string;
  heroTitle: string;
  heroLead: string;
  heroSubcopy: string;
  resumeUrl: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface ContactLink {
  label: string;
  href: string;
  shortLabel: string;
  type: "primary" | "secondary";
}

export interface Metric {
  value: string;
  label: string;
  detail: string;
}

export interface ExperienceEntry {
  id: string;
  company: string;
  logo?: string;
  title: string;
  period: string;
  location: string;
  team: string;
  summary: string;
  highlights: string[];
  tags: string[];
}

export interface ProjectLink {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
  external?: boolean;
}

export interface ProjectEntry {
  id: string;
  title: string;
  category: string;
  role: string;
  year: string;
  image: string;
  summary: string;
  outcome: string;
  technologies: string[];
  featured: boolean;
  links?: ProjectLink[];
  githubUrl?: string;
  liveUrl?: string;
  liveUrlIsInternal?: boolean;
}

export interface CertificationEntry {
  id: string;
  title: string;
  issuer: string;
  year: string;
  category: string;
  note: string;
  credentialUrl?: string;
}

export interface OnCameraEntry {
  id: string;
  title: string;
  platform: string;
  host: string;
  summary: string;
  note?: string;
  href: string;
  ctaLabel: string;
  thumbnail?: string;
}

export interface AchievementEntry {
  id: string;
  title: string;
  event: string;
  year: string;
  detail: string;
}

export interface LabDeepDive {
  coreSnippetTitle: string;
  coreSnippetLanguage: string;
  coreSnippet: string;
  implementationThinking: string[];
}

export interface LabEntry extends LabDeepDive {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  year: string;
  featured: boolean;
  previewGif?: string;
  previewVideo?: string;
  route: string;
  legacyPaths?: string[];
  technique: string;
  whatItDemonstrates: string;
  whyItMatters: string;
  implementationNotes: string;
  component: ComponentType;
}
