import { ArrowRight, Download, MoveRight } from "lucide-react";
import { Link } from "react-router";
import HeroSpotlight from "../components/portfolio/HeroSpotlight";
import LabCard from "../components/portfolio/LabCard";
import ProjectCard from "../components/portfolio/ProjectCard";
import Reveal from "../components/site/Reveal";
import SectionIntro from "../components/site/SectionIntro";
import {
  certificationEntries,
  contactLinks,
  experienceEntries,
  metrics,
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
            title="A quick scan of the work that best represents product range and execution quality."
            body="The homepage only carries the sharpest signals. Each featured project is positioned as evidence of how I think about systems, UI polish, and product storytelling."
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
            title="Built for recruiters who want proof, not filler."
            body="The experience section is structured around impact, systems, and collaboration context rather than long chronological text blocks."
          />
        </Reveal>
        <div className="grid gap-5">
          {experienceEntries.map((entry, index) => (
            <Reveal key={entry.id} delay={index * 0.08}>
              <article className="rounded-[1.8rem] border border-[var(--color-line)] bg-white/90 p-6 shadow-[var(--shadow-soft)]">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-muted)]">
                      {entry.team}
                    </p>
                    <h3 className="mt-3 font-display text-3xl leading-none text-[var(--color-ink)]">
                      {entry.title}
                    </h3>
                    <p className="mt-3 text-sm text-[var(--color-muted)]">
                      {entry.company} / {entry.location}
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
            eyebrow="Labs > Motion"
            title="A curated motion playground that shows how interaction quality gets built."
            body="The labs are where I test motion patterns, UI behavior, and small product moments. The main portfolio stays minimal; the labs prove the craft behind it."
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

      <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <SectionIntro
            eyebrow="Certifications"
            title="Supporting signals for continuous learning."
            body="Certifications are secondary to shipped work, but they still help frame the technical topics I have invested in across frontend engineering, JavaScript, TypeScript, and cloud fundamentals."
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
                If you want someone who cares about product feel as much as implementation, let's talk.
              </h2>
              <p className="max-w-2xl text-sm leading-7 text-[var(--color-muted)] md:text-base">
                The fastest recruiter path is email, LinkedIn, GitHub, and the downloadable resume. WhatsApp and Cal are also available when a faster back-and-forth helps.
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
