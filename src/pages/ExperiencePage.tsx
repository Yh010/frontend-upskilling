import Reveal from "../components/site/Reveal";
import SectionIntro from "../components/site/SectionIntro";
import { experienceEntries } from "../content/portfolio";

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-6xl px-5 pb-24 pt-12 md:px-8 md:pt-16">
      <div className="space-y-14">
        <Reveal>
          <SectionIntro
            eyebrow="Experience"
            title="Experience across product engineering, enterprise systems, and applied problem solving."
            body="A concise view of the teams, systems, and responsibilities I have worked across so far."
          />
        </Reveal>

        <div className="relative space-y-8 before:absolute before:bottom-0 before:left-[1.15rem] before:top-2 before:w-px before:bg-[linear-gradient(180deg,rgba(109,98,88,0.05),rgba(109,98,88,0.34),rgba(109,98,88,0.05))] md:before:left-9">
          {experienceEntries.map((entry, index) => (
            <Reveal key={entry.id} delay={index * 0.08}>
              <article className="relative grid gap-5 rounded-[2rem] border border-[var(--color-line)] bg-white/92 p-6 shadow-[var(--shadow-soft)] md:grid-cols-[4.5rem_1fr] md:p-8">
                <div className="relative z-10 flex items-start md:justify-center">
                  {entry.logo ? (
                    <div className="mt-1 flex h-14 w-14 items-center justify-center overflow-hidden p-1 shadow-[0_0_0_6px_rgba(249,244,239,1)]">
                      <img
                        src={entry.logo}
                        alt={`${entry.company} logo`}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  ) : (
                    <span className="mt-1 h-4 w-4 rounded-full border border-[var(--color-line-strong)] bg-[var(--color-accent)]/70 shadow-[0_0_0_6px_rgba(249,244,239,1)]" />
                  )}
                </div>

                <div className="space-y-6">
                  <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center gap-3">
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)] md:text-base">
                          {entry.company}
                        </p>
                      </div>
                      <h1 className="font-display text-4xl leading-none text-[var(--color-ink)] md:text-5xl">
                        {entry.title}
                      </h1>
                      <p className="text-sm text-[var(--color-muted)]">{entry.location}</p>
                    </div>
                    <span className="rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
                      {entry.period}
                    </span>
                  </div>

                  <p className="max-w-3xl text-sm leading-7 text-[var(--color-muted)] md:text-base">
                    {entry.summary}
                  </p>

                  <div className="grid gap-3 md:grid-cols-2">
                    {entry.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="rounded-[1.35rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-4 text-sm leading-7 text-[var(--color-ink)]"
                      >
                        {highlight}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {entry.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[var(--color-line)] bg-[var(--color-surface-strong)] px-3 py-1 text-xs text-[var(--color-muted)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
