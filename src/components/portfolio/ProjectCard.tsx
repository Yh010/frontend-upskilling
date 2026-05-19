import { ArrowUpRight, Github, MoveRight } from "lucide-react";
import { Link } from "react-router";
import type { ProjectEntry } from "../../content/types";

interface ProjectCardProps {
  project: ProjectEntry;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const links =
    project.links && project.links.length > 0
      ? project.links
      : [
          ...(project.liveUrl
            ? [
                {
                  label: "View live",
                  href: project.liveUrl,
                  variant: "primary" as const,
                  external: !project.liveUrlIsInternal,
                },
              ]
            : []),
          ...(project.githubUrl
            ? [
                {
                  label: "Source",
                  href: project.githubUrl,
                  variant: "secondary" as const,
                  external: true,
                },
              ]
            : []),
        ];

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-[var(--color-line)] bg-white shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-panel)] sm:rounded-[1.9rem]">
      <div className="relative overflow-hidden border-b border-[var(--color-line)] bg-[var(--color-surface-strong)]">
        <img
          src={project.image}
          alt={project.title}
          className="h-52 w-full object-cover transition duration-700 group-hover:scale-[1.03] sm:h-60"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(12,11,10,0.14))]" />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5 sm:gap-5 sm:p-6">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:justify-between">
          <div className="space-y-2">
            <span className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
              {project.category}
            </span>
            <h3 className="font-display text-[2rem] leading-[0.96] text-[var(--color-ink)] sm:text-3xl">
              {project.title}
            </h3>
          </div>
          <span className="rounded-full border border-[var(--color-line)] bg-[var(--color-surface-strong)] px-3 py-1 text-xs text-[var(--color-muted)]">
            {project.year}
          </span>
        </div>

        <p className="text-sm uppercase tracking-[0.18em] text-[var(--color-muted)]">
          {project.role}
        </p>
        <p className="text-sm leading-7 text-[var(--color-muted)]">
          {project.summary}
        </p>

        <div className="rounded-[1.25rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-3.5 sm:rounded-[1.4rem] sm:p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
            Why it matters
          </p>
          <p className="mt-3 text-sm leading-7 text-[var(--color-ink)]">
            {project.outcome}
          </p>
        </div>

        <div className="mt-auto flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[var(--color-line)] bg-[var(--color-surface-strong)] px-3 py-1 text-xs text-[var(--color-muted)]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:items-center">
          {links.map((link) => {
            const isPrimary = link.variant === "primary";
            const isExternal = link.external ?? link.href.startsWith("http");
            const content = (
              <>
                {link.label}{" "}
                {isPrimary ? (
                  isExternal ? (
                    <ArrowUpRight className="h-4 w-4" />
                  ) : (
                    <MoveRight className="h-4 w-4" />
                  )
                ) : isExternal ? (
                  <Github className="h-4 w-4" />
                ) : (
                  <MoveRight className="h-4 w-4" />
                )}
              </>
            );

            if (!isExternal) {
              return (
                <Link
                  key={`${project.id}-${link.label}`}
                  to={link.href}
                  className={
                    isPrimary
                      ? "inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-ink)] px-4 py-2 text-sm text-[var(--color-bg)] transition hover:bg-[var(--color-accent)] sm:w-auto"
                      : "inline-flex w-full items-center justify-center gap-2 rounded-full border border-[var(--color-line)] px-4 py-2 text-sm text-[var(--color-muted)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-ink)] sm:w-auto"
                  }
                >
                  {content}
                </Link>
              );
            }

            return (
              <a
                key={`${project.id}-${link.label}`}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  isPrimary
                    ? "inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-ink)] px-4 py-2 text-sm text-[var(--color-bg)] transition hover:bg-[var(--color-accent)] sm:w-auto"
                    : "inline-flex w-full items-center justify-center gap-2 rounded-full border border-[var(--color-line)] px-4 py-2 text-sm text-[var(--color-muted)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-ink)] sm:w-auto"
                }
              >
                {content}
              </a>
            );
          })}
        </div>
      </div>
    </article>
  );
}
