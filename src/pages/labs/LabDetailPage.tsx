import { ArrowLeft, Braces, Lightbulb, MoveRight, Video } from "lucide-react";
import { Link, Navigate, useParams } from "react-router";
import Reveal from "../../components/site/Reveal";
import { getLabBySlug, labsMotionEntries } from "../../content/labs";

export default function LabDetailPage() {
  const { slug } = useParams();
  const lab = getLabBySlug(slug);

  if (!lab) {
    return <Navigate to="/labs/motion" replace />;
  }

  const LabComponent = lab.component;
  const currentIndex = labsMotionEntries.findIndex((entry) => entry.slug === lab.slug);
  const nextLab = labsMotionEntries[(currentIndex + 1) % labsMotionEntries.length];

  return (
    <div className="mx-auto max-w-7xl px-5 pb-24 pt-12 md:px-8 md:pt-16">
      <div className="space-y-12">
        <Reveal>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/labs/motion"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-white px-4 py-2 text-sm text-[var(--color-muted)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-ink)]"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to labs
            </Link>
            {lab.previewVideo ? (
              <a
                href={lab.previewVideo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-white px-4 py-2 text-sm text-[var(--color-muted)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-ink)]"
              >
                Watch preview <Video className="h-4 w-4" />
              </a>
            ) : null}
          </div>
        </Reveal>

        <section className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <Reveal className="space-y-6">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-muted)]">
                Labs &gt; Motion
              </p>
              <h1 className="font-display text-[3.4rem] leading-[0.92] tracking-[-0.03em] text-[var(--color-ink)] md:text-[4.6rem]">
                {lab.title}
              </h1>
              <p className="max-w-xl text-base leading-8 text-[var(--color-muted)]">
                {lab.summary}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {lab.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[var(--color-line)] bg-white px-3 py-1 text-xs text-[var(--color-muted)]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="grid gap-4">
              <article className="rounded-[1.6rem] border border-[var(--color-line)] bg-white p-5 shadow-[var(--shadow-soft)]">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
                  Technique
                </p>
                <p className="mt-3 text-lg font-semibold text-[var(--color-ink)]">
                  {lab.technique}
                </p>
              </article>
              <article className="rounded-[1.6rem] border border-[var(--color-line)] bg-white p-5 shadow-[var(--shadow-soft)]">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
                  What it demonstrates
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--color-ink)]">
                  {lab.whatItDemonstrates}
                </p>
              </article>
              <article className="rounded-[1.6rem] border border-[var(--color-line)] bg-white p-5 shadow-[var(--shadow-soft)]">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
                  Why it matters in product UI
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--color-ink)]">
                  {lab.whyItMatters}
                </p>
              </article>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="overflow-hidden rounded-[2rem] border border-[var(--color-line)] bg-white shadow-[var(--shadow-panel)]">
              <div className="border-b border-[var(--color-line)] bg-[var(--color-surface)] px-6 py-4">
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-muted)]">
                  Live Demo
                </p>
              </div>
              <div className="bg-[linear-gradient(180deg,rgba(255,255,255,0.55),rgba(249,244,239,0.7))]">
                <LabComponent />
              </div>
            </div>
          </Reveal>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <Reveal>
            <div className="rounded-[2rem] border border-[var(--color-line)] bg-white p-8 shadow-[var(--shadow-soft)]">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[var(--color-muted)]">
                <Braces className="h-4 w-4" />
                Core Logic
              </div>
              <p className="mt-4 text-lg font-semibold text-[var(--color-ink)]">
                {lab.coreSnippetTitle}
              </p>
              <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                A minimal snippet that shows the main state, math, or animation idea behind this demo.
              </p>
              <div className="mt-6 overflow-x-auto rounded-[1.5rem] border border-[var(--color-line)] bg-[#121212] p-5 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.68rem] uppercase tracking-[0.2em] text-white/60">
                  {lab.coreSnippetLanguage}
                </div>
                <pre className="whitespace-pre-wrap font-geist text-[0.82rem] leading-7 text-white/88">
                  <code>{lab.coreSnippet}</code>
                </pre>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="rounded-[2rem] border border-[var(--color-line)] bg-white p-8 shadow-[var(--shadow-soft)]">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[var(--color-muted)]">
                <Lightbulb className="h-4 w-4" />
                Implementation Notes
              </div>
              <p className="mt-4 text-sm leading-8 text-[var(--color-ink)]">
                {lab.implementationNotes}
              </p>
              <div className="mt-6 space-y-3">
                {lab.implementationThinking.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.25rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-4 text-sm leading-7 text-[var(--color-ink)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <Reveal delay={0.08}>
          <Link
            to={nextLab.route}
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] px-5 py-3 text-sm text-[var(--color-bg)] transition hover:bg-[var(--color-accent)]"
          >
            Next lab <MoveRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
