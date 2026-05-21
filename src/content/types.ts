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

export interface CourseSnippet {
  id: string;
  title: string;
  language: string;
  code: string;
  note: string;
  variant?: "good" | "bad" | "starter" | "reference";
  demoComponent?: ComponentType;
}

export interface CourseLessonSummaryCard {
  id: string;
  label: string;
  value: string;
  icon?: "module" | "outcome" | "examples" | "custom";
  emphasis?: "normal" | "wide";
}

export interface CourseLessonSectionBase {
  id: string;
  title: string;
  eyebrow?: string;
  description?: string;
  tocLabel?: string;
}

export interface CourseLessonCalloutSection extends CourseLessonSectionBase {
  type: "callout";
  content: string;
  tone?: "surface" | "plain";
}

export interface CourseLessonListSection extends CourseLessonSectionBase {
  type: "list";
  items: string[];
  style?: "cards" | "plain";
}

export interface CourseLessonParagraphSection extends CourseLessonSectionBase {
  type: "paragraphs";
  paragraphs: string[];
  style?: "plain" | "cards";
}

export interface CourseLessonSnippetsSection extends CourseLessonSectionBase {
  type: "snippets";
  intro?: string;
  snippets?: CourseSnippet[];
  emptyMessage?: string;
}

export type CourseLessonSection =
  | CourseLessonCalloutSection
  | CourseLessonListSection
  | CourseLessonParagraphSection
  | CourseLessonSnippetsSection;

export interface CourseLesson {
  slug: string;
  title: string;
  runtime: string;
  summary: string;
  goal?: string;
  notes?: string[];
  exercise?: string;
  snippets?: CourseSnippet[];
  summaryCards?: CourseLessonSummaryCard[];
  sections?: CourseLessonSection[];
  status?: "published" | "planned";
}

export interface CourseModule {
  id: string;
  title: string;
  outcome: string;
  lessons: CourseLesson[];
}

export interface CourseEntry {
  slug: string;
  title: string;
  summary: string;
  promise: string;
  audience: string;
  route: string;
  eyebrow: string;
  status: "building" | "published";
  modules: CourseModule[];
}
