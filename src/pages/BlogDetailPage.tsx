import { ArrowLeft, CalendarDays, Tag } from "lucide-react";
import { Link, useParams } from "react-router";
import Reveal from "../components/site/Reveal";
import { blogEntries } from "../content/writing";

export default function BlogDetailPage() {
  const { category, slug } = useParams();
  const entry = blogEntries.find(
    (item) => item.slug === slug && item.category.toLowerCase() === category?.toLowerCase(),
  );

  if (!entry) {
    return (
      <div className="mx-auto max-w-3xl px-5 py-24 md:px-8">
        <Link to="/blogs" className="text-sm text-[var(--color-muted)] hover:text-[var(--color-ink)]">
          Back to writing
        </Link>
        <h1 className="mt-6 font-display text-4xl text-[var(--color-ink)]">Note not found.</h1>
      </div>
    );
  }

  return (
    <article className="mx-auto max-w-3xl px-5 pb-24 pt-12 md:px-8 md:pt-16">
      <Reveal>
        <Link to="/blogs" className="inline-flex items-center gap-2 text-sm text-[var(--color-muted)] transition hover:text-[var(--color-ink)]">
          <ArrowLeft className="h-4 w-4" /> Back to writing
        </Link>
      </Reveal>

      <Reveal delay={0.06}>
        <header className="mt-10 border-b border-[var(--color-line)] pb-10">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
            <span className="inline-flex items-center gap-2"><Tag className="h-3.5 w-3.5" />{entry.category}</span>
            <span className="inline-flex items-center gap-2"><CalendarDays className="h-3.5 w-3.5" />{entry.readingTime}</span>
          </div>
          <h1 className="mt-6 font-display text-4xl leading-[1.02] text-[var(--color-ink)] sm:text-5xl md:text-6xl">
            {entry.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">{entry.excerpt}</p>
        </header>
      </Reveal>

      <div className="space-y-10 pt-10">
        {entry.sections.map((section, index) => (
          <Reveal key={`${entry.slug}-${index}`} delay={0.1 + index * 0.04}>
            <section className="space-y-4">
              {section.heading ? <h2 className="font-display text-2xl text-[var(--color-ink)]">{section.heading}</h2> : null}
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-base leading-8 text-[var(--color-muted)]">{paragraph}</p>
              ))}
            </section>
          </Reveal>
        ))}
      </div>
    </article>
  );
}
