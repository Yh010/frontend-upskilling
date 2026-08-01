import { ArrowLeft, BookOpen, CalendarDays, ChevronRight, ExternalLink, Hash, Tag } from "lucide-react";
import { Link, useParams } from "react-router";
import { blogEntries } from "../content/writing";

const anchorId = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function BlogDetailPage() {
  const { category, slug } = useParams();
  const entry = blogEntries.find((item) => item.slug === slug && item.category.toLowerCase() === category?.toLowerCase());

  if (!entry) {
    return <div className="mx-auto max-w-3xl px-5 py-24 md:px-8"><Link to="/blogs" className="text-sm text-[var(--color-muted)] hover:text-[var(--color-ink)]">Back to writing</Link><h1 className="mt-6 font-display text-4xl text-[var(--color-ink)]">Note not found.</h1></div>;
  }

  const relatedEntries = blogEntries.filter((item) => item.category === entry.category);
  const headings = entry.sections.flatMap((section) => section.heading ? [section.heading] : []);
  const usesNotionEmbed = Boolean(entry.notionEmbedUrl);

  return (
    <div className="mx-auto grid max-w-[1520px] xl:grid-cols-[260px_minmax(0,1fr)_240px]">
      <aside className="hidden border-r border-[var(--color-line)] px-5 py-10 xl:block">
        <div className="sticky top-24">
          <Link to="/blogs" className="flex items-center gap-2 text-sm font-semibold text-[var(--color-ink)]"><BookOpen className="h-4 w-4" /> Writing</Link>
          <nav className="mt-8 space-y-7" aria-label="Article navigation">
            <div className="space-y-1">
              <p className="px-3 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-muted)]">{entry.category}</p>
              {relatedEntries.map((item) => {
                const active = item.slug === entry.slug;
                return <Link key={item.slug} to={`/blogs/${item.category.toLowerCase()}/${item.slug}`} className={`block rounded-md px-3 py-2 text-sm leading-5 transition ${active ? "bg-[var(--color-surface-strong)] font-medium text-[var(--color-ink)]" : "text-[var(--color-muted)] hover:bg-white hover:text-[var(--color-ink)]"}`}>{item.title}</Link>;
              })}
            </div>
            <Link to="/blogs" className="flex items-center gap-2 px-3 text-sm text-[var(--color-muted)] transition hover:text-[var(--color-ink)]"><ArrowLeft className="h-3.5 w-3.5" /> All notes</Link>
          </nav>
        </div>
      </aside>

      <article className="min-w-0 px-5 py-10 sm:px-8 sm:py-14 lg:px-14 xl:px-16">
        <Link to="/blogs" className="inline-flex items-center gap-2 text-sm text-[var(--color-muted)] transition hover:text-[var(--color-ink)] xl:hidden"><ArrowLeft className="h-4 w-4" /> All notes</Link>
        <div id="top" className="mx-auto max-w-3xl">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-muted)]">
            <span className="inline-flex items-center gap-1.5"><Tag className="h-3.5 w-3.5" /> {entry.category}</span><span aria-hidden="true">/</span><span className="inline-flex items-center gap-1.5"><CalendarDays className="h-3.5 w-3.5" /> {entry.readingTime}</span>
          </div>
          <h1 className="mt-6 font-display text-4xl leading-[1.04] tracking-[-0.05em] text-[var(--color-ink)] sm:text-5xl lg:text-[3.6rem]">{entry.title}</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">{entry.excerpt}</p>
          <div className="mt-10 border-t border-[var(--color-line)]" />

          {usesNotionEmbed ? (
            <div className="py-8 sm:py-10">
              <div className="mb-4 flex items-center justify-between gap-4">
                <p className="text-sm text-[var(--color-muted)]">Rendered directly from Notion</p>
                <a href={entry.notionEmbedUrl?.replace("/embed/", "/")} target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-muted)]">Open in Notion <ExternalLink className="h-3.5 w-3.5" /></a>
              </div>
              <iframe title={`${entry.title} on Notion`} src={entry.notionEmbedUrl} className="min-h-[900px] w-full rounded-lg border border-[var(--color-line)] bg-white" allowFullScreen />
            </div>
          ) : (
            <div className="space-y-12 py-10 sm:py-12">
              {entry.sections.map((section, index) => (
                <section key={`${entry.slug}-${index}`} className="scroll-mt-28">
                  {section.heading ? <h2 id={anchorId(section.heading)} className="font-display text-2xl leading-tight tracking-[-0.03em] text-[var(--color-ink)] sm:text-3xl">{section.heading}</h2> : null}
                  <div className={section.heading ? "mt-5 space-y-5" : "space-y-5"}>{section.paragraphs.map((paragraph) => <p key={paragraph} className="text-[0.98rem] leading-8 text-[var(--color-muted)]">{paragraph}</p>)}</div>
                </section>
              ))}
            </div>
          )}
          <div className="flex items-center justify-between border-t border-[var(--color-line)] py-8 text-sm"><Link to="/blogs" className="inline-flex items-center gap-2 text-[var(--color-muted)] hover:text-[var(--color-ink)]"><ArrowLeft className="h-4 w-4" /> All notes</Link><span className="inline-flex items-center gap-1 text-[var(--color-muted)]">More writing <ChevronRight className="h-4 w-4" /></span></div>
        </div>
      </article>

      <aside className="hidden border-l border-[var(--color-line)] px-6 py-10 xl:block">
        <div className="sticky top-24">
          <p className="text-sm font-semibold text-[var(--color-ink)]">On this page</p>
          <nav className="mt-4 border-l border-[var(--color-line)]" aria-label="Table of contents">
            <a href="#top" className="flex items-center gap-2 border-l-2 border-[var(--color-ink)] -ml-px py-1.5 pl-3 text-sm text-[var(--color-ink)]">Overview</a>
            {!usesNotionEmbed ? headings.map((heading) => <a key={heading} href={`#${anchorId(heading)}`} className="flex items-center gap-2 py-1.5 pl-3 text-sm leading-5 text-[var(--color-muted)] transition hover:text-[var(--color-ink)]"><Hash className="h-3 w-3 shrink-0 opacity-50" />{heading}</a>) : null}
          </nav>
        </div>
      </aside>
    </div>
  );
}
