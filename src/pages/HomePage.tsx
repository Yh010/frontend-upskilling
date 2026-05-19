import { ArrowRight, Download, MoveRight, Play, Trophy } from "lucide-react";
import { Link } from "react-router";
import HeroSpotlight from "../components/portfolio/HeroSpotlight";
import LabCard from "../components/portfolio/LabCard";
import ProjectCard from "../components/portfolio/ProjectCard";
import Reveal from "../components/site/Reveal";
import SectionIntro from "../components/site/SectionIntro";
import {
  achievementEntries,
  certificationEntries,
  contactLinks,
  experienceEntries,
  metrics,
  onCameraEntries,
  profile,
  projectEntries,
} from "../content/portfolio";
import { featuredLabs } from "../content/labs";

const spotlightCards = [
  {
    id: "spotlight-experience",
    label: "Experience",
    title: experienceEntries[0].company,
    meta: `${experienceEntries[0].title} / ${experienceEntries[0].team}`,
    description: experienceEntries[0].summary,
    href: "/experience",
    accent: "rgba(22, 22, 22, 0.18)",
  },
  {
    id: "spotlight-project",
    label: "Featured Project",
    title: projectEntries[0].title,
    meta: `${projectEntries[0].category} / ${projectEntries[0].year}`,
    description: projectEntries[0].outcome,
    href: "/projects",
    accent: "rgba(22, 22, 22, 0.26)",
  },
  {
    id: "spotlight-lab",
    label: "Labs",
    title: featuredLabs[0].title,
    meta: `${featuredLabs[0].technique} / ${featuredLabs[0].year}`,
    description: featuredLabs[0].summary,
    href: featuredLabs[0].route,
    accent: "rgba(22, 22, 22, 0.14)",
  },
];

const featuredProjects = projectEntries.filter((project) => project.featured);
const primaryContact = contactLinks.filter((link) => link.type === "primary");
const featuredConversation = onCameraEntries[0];

export default function HomePage() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-24 px-5 pb-24 pt-10 md:px-8 md:pt-16">
      <section className="relative overflow-hidden rounded-[2.5rem] border border-[var(--color-line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.72),rgba(243,243,241,0.96))] px-6 py-8 shadow-[var(--shadow-soft)] md:px-8 md:py-10 lg:px-10 lg:py-12">
        <div className="pointer-events-none absolute inset-x-8 top-0 h-48 bg-[radial-gradient(circle_at_left_top,rgba(17,17,17,0.08),transparent_42%),radial-gradient(circle_at_right_top,rgba(90,90,90,0.08),transparent_30%)] blur-2xl" />
        <div className="relative grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <Reveal className="flex flex-col gap-8">
            <span className="inline-flex w-fit items-center rounded-full border border-[var(--color-line)] bg-white/90 px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
              {profile.availability}
            </span>

            <div className="space-y-5">
              <p className="max-w-xl text-[0.76rem] uppercase tracking-[0.3em] text-[var(--color-muted)]">
                {profile.role}
              </p>
              <h1 className="max-w-[8.4ch] font-display text-[3.85rem] leading-[0.9] tracking-[-0.04em] text-[var(--color-ink)] sm:text-[4.5rem] xl:text-[5.35rem]">
                {profile.heroTitle}
              </h1>
              <p className="max-w-xl text-[1.06rem] leading-8 text-[var(--color-muted)] md:text-[1.16rem]">
                {profile.heroLead}
              </p>
              <p className="max-w-2xl text-sm leading-7 text-[var(--color-muted)] md:text-base">
                {profile.heroSubcopy}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] px-5 py-3 text-sm text-white transition hover:bg-[var(--color-accent)]"
              >
                Download Resume <Download className="h-4 w-4" />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-white/90 px-5 py-3 text-sm text-[var(--color-ink)] transition hover:border-[var(--color-accent)]"
              >
                Get in touch <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="flex flex-wrap gap-3">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-[1.2rem] border border-[var(--color-line)] bg-white/80 px-4 py-3 text-sm text-[var(--color-muted)] shadow-[0_10px_24px_rgba(0,0,0,0.045)]"
                >
                  <div className="font-display text-2xl leading-none text-[var(--color-ink)]">
                    {metric.value}
                  </div>
                  <div className="mt-1 text-[0.72rem] uppercase tracking-[0.18em]">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <HeroSpotlight cards={spotlightCards} />
          </Reveal>
        </div>
      </section>

      <Reveal>
        <div className="grid gap-4 md:grid-cols-3">
          {metrics.map((metric) => (
            <article
              key={metric.label}
              className="rounded-[1.7rem] border border-[var(--color-line)] bg-white/85 p-6 shadow-[var(--shadow-soft)]"
            >
              <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-muted)]">
                {metric.label}
              </p>
              <p className="mt-4 font-display text-5xl leading-none text-[var(--color-ink)]">
                {metric.value}
              </p>
              <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                {metric.detail}
              </p>
            </article>
          ))}
        </div>
      </Reveal>

      <section className="space-y-10">
        <Reveal>
          <SectionIntro
            eyebrow="Selected Projects"
            title="Work across healthcare, AI, developer tooling, and fintech."
            body="A few projects that show product, systems, and interface work."
          />
        </Reveal>
        <div className="grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
        <Reveal>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-ink)]"
          >
            Explore all projects <MoveRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
        <Reveal>
          <SectionIntro
            eyebrow="Experience"
            title="Experience shaped by product delivery and real systems."
            body="Enterprise, startup, freelance, and operations experience across full-stack product and systems work."
          />
        </Reveal>
        <div className="grid gap-5">
          {experienceEntries.map((entry, index) => (
            <Reveal key={entry.id} delay={index * 0.08}>
              <article className="rounded-[1.8rem] border border-[var(--color-line)] bg-white/90 p-6 shadow-[var(--shadow-soft)]">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      {entry.logo ? (
                        <div className="flex h-12 w-12 items-center justify-center overflow-hidden p-1">
                          <img
                            src={entry.logo}
                            alt={`${entry.company} logo`}
                            className="h-full w-full object-contain"
                          />
                        </div>
                      ) : null}
                      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)] md:text-base">
                        {entry.company}
                      </p>
                    </div>
                    <h3 className="mt-3 font-display text-3xl leading-none text-[var(--color-ink)]">
                      {entry.title}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--color-muted)]">
                      {entry.location}
                    </p>
                  </div>
                  <span className="rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] px-3 py-1 text-xs text-[var(--color-muted)]">
                    {entry.period}
                  </span>
                </div>
                <p className="mt-5 max-w-3xl text-sm leading-7 text-[var(--color-muted)]">
                  {entry.summary}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {entry.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[var(--color-line)] bg-[var(--color-surface-strong)] px-3 py-1 text-xs text-[var(--color-muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="space-y-10">
        <Reveal>
          <SectionIntro
            eyebrow="Achievements"
            title="Hackathon and challenge results."
            body="Selected finalist finishes from national competitions."
          />
        </Reveal>
        <div className="grid gap-5 lg:grid-cols-3">
          {achievementEntries.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.06}>
              <article className="rounded-[1.8rem] border border-[var(--color-line)] bg-white/90 p-6 shadow-[var(--shadow-soft)]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-muted)]">
                      {item.event}
                    </p>
                    <h3 className="mt-3 font-display text-3xl leading-none text-[var(--color-ink)]">
                      {item.title}
                    </h3>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] text-[var(--color-ink)]">
                    <Trophy className="h-5 w-5" />
                  </div>
                </div>
                <p className="mt-4 text-sm text-[var(--color-muted)]">{item.year}</p>
                <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                  {item.detail}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="space-y-10">
        <Reveal>
          <SectionIntro
            eyebrow="Labs > Motion"
            title="Interaction and motion experiments."
            body="A selection of UI studies focused on timing, transitions, and interface behavior."
          />
        </Reveal>
        <div className="grid gap-6 lg:grid-cols-3">
          {featuredLabs.slice(0, 3).map((lab, index) => (
            <Reveal key={lab.slug} delay={index * 0.08}>
              <LabCard lab={lab} />
            </Reveal>
          ))}
        </div>
        <Reveal>
          <Link
            to="/labs/motion"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-ink)]"
          >
            Browse all labs <MoveRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>

      <Reveal>
        <section className="mx-auto max-w-4xl rounded-[2rem] border border-[var(--color-line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(236,236,235,0.96))] p-6 shadow-[var(--shadow-panel)] md:p-7">
          <div className="flex items-center justify-between gap-4 text-[0.74rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">
            <span>On Camera</span>
            <span>{featuredConversation.platform}</span>
          </div>

          <div className="mt-6 max-w-2xl space-y-3">
            <h2 className="font-display text-[1.85rem] leading-[0.96] tracking-[-0.05em] text-[var(--color-ink)] md:text-[2.45rem]">
              {featuredConversation.title}
            </h2>
            <p className="max-w-xl text-sm leading-7 text-[var(--color-muted)] md:text-[0.98rem]">
              {featuredConversation.summary}
            </p>
          </div>

          <a
            href={featuredConversation.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-6 block overflow-hidden rounded-[1.55rem] border border-[var(--color-line)] bg-[#111] shadow-[0_20px_44px_rgba(0,0,0,0.14)]"
          >
            <div className="relative aspect-[16/9]">
              {featuredConversation.thumbnail ? (
                <img
                  src={featuredConversation.thumbnail}
                  alt={featuredConversation.title}
                  className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-[1.02]"
                />
              ) : null}
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.12),rgba(0,0,0,0.46))]" />
              <div className="absolute inset-x-5 top-5 flex items-start justify-between gap-4">
                <div className="rounded-full bg-[rgba(10,10,10,0.6)] px-4 py-2 text-sm font-medium text-white backdrop-blur">
                  {featuredConversation.host}
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-white text-[var(--color-ink)] shadow-[0_18px_36px_rgba(0,0,0,0.28)] transition duration-300 group-hover:scale-105">
                  <Play className="ml-1 h-7 w-7 fill-current" />
                </div>
              </div>
              <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4">
                <div className="max-w-xl text-white">
                  <div className="text-base font-semibold leading-tight md:text-lg">
                    {featuredConversation.title}
                  </div>
                </div>
                <div className="rounded-full bg-[rgba(10,10,10,0.65)] px-4 py-2.5 text-sm font-medium text-white backdrop-blur">
                  {featuredConversation.ctaLabel}
                </div>
              </div>
            </div>
          </a>
        </section>
      </Reveal>

      <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <SectionIntro
            eyebrow="Certifications"
            title="Certifications in AI, backend, and cloud-native systems."
            body="Supporting context alongside shipped work."
          />
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {certificationEntries.slice(0, 4).map((item, index) => (
            <Reveal key={item.id} delay={index * 0.06}>
              <article className="rounded-[1.6rem] border border-[var(--color-line)] bg-white/90 p-5 shadow-[var(--shadow-soft)]">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
                  {item.category}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-[var(--color-ink)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-muted)]">
                  {item.issuer} / {item.year}
                </p>
                <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                  {item.note}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal>
        <section className="rounded-[2rem] border border-[var(--color-line)] bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(232,232,230,0.92))] p-8 shadow-[var(--shadow-panel)] md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="space-y-4">
              <span className="inline-flex rounded-full border border-[var(--color-line)] bg-white/85 px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                Contact
              </span>
              <h2 className="max-w-3xl font-display text-4xl leading-none text-[var(--color-ink)] md:text-5xl">
                Open to full-stack product engineering roles.
              </h2>
              <p className="max-w-2xl text-sm leading-7 text-[var(--color-muted)] md:text-base">
                Email or LinkedIn is the easiest way to reach me. Resume and GitHub are linked here.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              {primaryContact.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="rounded-full border border-[var(--color-line)] bg-white px-4 py-2 text-sm text-[var(--color-ink)] transition hover:border-[var(--color-accent)]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
