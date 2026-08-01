import { BookOpen, ChevronRight, FileText } from "lucide-react";
import { Link } from "react-router";
import { blogEntries } from "../content/writing";

const categories = [...new Set(blogEntries.map((entry) => entry.category))];

export default function BlogsPage() {
  return (
    <div className="mx-auto grid max-w-[1440px] lg:grid-cols-[250px_minmax(0,1fr)]">
      <aside className="hidden border-r border-[var(--color-line)] px-5 py-10 lg:block">
        <div className="sticky top-24">
          <Link to="/blogs" className="flex items-center gap-2 text-sm font-semibold text-[var(--color-ink)]">
            <BookOpen className="h-4 w-4" /> Writing
          </Link>
          <nav className="mt-8 space-y-7" aria-label="Writing categories">
            <div className="space-y-1">
              <p className="px-3 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-muted)]">Library</p>
              <span className="flex items-center gap-2 rounded-md bg-[var(--color-surface-strong)] px-3 py-2 text-sm font-medium text-[var(--color-ink)]">
                <FileText className="h-3.5 w-3.5" /> All notes
              </span>
            </div>
            {categories.map((category) => (
              <div key={category} className="space-y-1">
                <p className="px-3 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-muted)]">{category}</p>
                {blogEntries.filter((entry) => entry.category === category).map((entry) => (
                  <Link key={entry.slug} to={`/blogs/${entry.category.toLowerCase()}/${entry.slug}`} className="block rounded-md px-3 py-2 text-sm leading-5 text-[var(--color-muted)] transition hover:bg-white hover:text-[var(--color-ink)]">
                    {entry.title}
                  </Link>
                ))}
              </div>
            ))}
          </nav>
        </div>
      </aside>

      <main className="min-w-0 px-5 py-12 sm:px-8 sm:py-16 lg:px-16 xl:px-24">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-[var(--color-muted)]">Writing</p>
          <h1 className="mt-4 font-display text-4xl leading-[1.04] tracking-[-0.045em] text-[var(--color-ink)] sm:text-5xl">Notes from the work.</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--color-muted)]">Decisions, systems, and lessons from building products and exploring how they work.</p>

          <div className="mt-12 divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
            {blogEntries.map((entry) => (
              <Link key={entry.slug} to={`/blogs/${entry.category.toLowerCase()}/${entry.slug}`} className="group block py-7 sm:py-8">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-muted)]">{entry.category} · {entry.readingTime}</p>
                    <h2 className="mt-3 font-display text-xl leading-snug tracking-[-0.025em] text-[var(--color-ink)] sm:text-2xl">{entry.title}</h2>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--color-muted)]">{entry.excerpt}</p>
                  </div>
                  <ChevronRight className="mt-6 h-5 w-5 shrink-0 text-[var(--color-muted)] transition group-hover:translate-x-1 group-hover:text-[var(--color-ink)]" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
