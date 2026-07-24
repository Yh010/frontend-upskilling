import { useMemo, useState } from "react";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { Link } from "react-router";
import Reveal from "../components/site/Reveal";
import SectionIntro from "../components/site/SectionIntro";
import { blogEntries } from "../content/writing";

const categories = ["All", ...new Set(blogEntries.map((entry) => entry.category))];

export default function BlogsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const visibleEntries = useMemo(
    () =>
      activeCategory === "All"
        ? blogEntries
        : blogEntries.filter((entry) => entry.category === activeCategory),
    [activeCategory],
  );

  return (
    <div className="mx-auto max-w-7xl px-5 pb-24 pt-12 md:px-8 md:pt-16">
      <div className="space-y-10 sm:space-y-12">
        <Reveal>
          <SectionIntro
            eyebrow="Writing"
            title="Decision notes on building products, agents, and systems."
            body="A categorized collection of design choices, engineering trade-offs, and ideas worth preserving in public."
          />
        </Reveal>

        <Reveal>
          <div className="flex flex-wrap gap-3" aria-label="Blog categories">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  activeCategory === category
                    ? "border-[var(--color-ink)] bg-[var(--color-ink)] text-white"
                    : "border-[var(--color-line)] bg-white/85 text-[var(--color-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-ink)]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {visibleEntries.map((entry, index) => (
            <Reveal key={entry.slug} delay={index * 0.06}>
              <Link
                to={`/blogs/${entry.category.toLowerCase()}/${entry.slug}`}
                className="group flex h-full flex-col rounded-[1.7rem] border border-[var(--color-line)] bg-white/90 p-6 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:border-[var(--color-line-strong)] hover:shadow-[var(--shadow-panel)] sm:p-7"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] px-3 py-1 text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
                    {entry.category}
                  </span>
                  <BookOpen className="h-4 w-4 text-[var(--color-muted)]" />
                </div>
                <h2 className="mt-8 font-display text-2xl leading-tight text-[var(--color-ink)] sm:text-3xl">
                  {entry.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">{entry.excerpt}</p>
                <div className="mt-8 flex items-center justify-between text-sm text-[var(--color-muted)]">
                  <span>{entry.readingTime}</span>
                  <span className="inline-flex items-center gap-2 font-medium text-[var(--color-ink)]">
                    Read note <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
