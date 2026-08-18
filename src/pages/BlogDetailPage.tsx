import { ArrowLeft, BookOpen, CalendarDays, ChevronRight, ExternalLink, Hash, Tag } from "lucide-react";
import { Link, useParams } from "react-router";
import { blogEntries, type NotionBlock, type NotionRichText } from "../content/writing";

const anchorId = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

function RichText({ parts = [] }: { parts?: NotionRichText[] }) {
  return <>{parts.map((part, index) => {
    const className = `${part.bold ? "font-semibold " : ""}${part.italic ? "italic " : ""}${part.strikethrough ? "line-through " : ""}${part.underline ? "underline underline-offset-2 " : ""}${part.code ? "rounded bg-[var(--color-surface-strong)] px-1.5 py-0.5 font-mono text-[0.9em] text-[var(--color-ink)] " : ""}`;
    const content = <span className={className}>{part.text}</span>;
    return part.href ? <a key={`${part.text}-${index}`} href={part.href} target="_blank" rel="noreferrer" className="text-[var(--color-ink)] underline decoration-[var(--color-line)] underline-offset-4 transition hover:decoration-[var(--color-ink)]">{content}</a> : <span key={`${part.text}-${index}`}>{content}</span>;
  })}</>;
}

function NotionBlocks({ blocks }: { blocks: NotionBlock[] }) {
  return <div className="space-y-5">{blocks.map((block, index) => {
    const isEmptyParagraph = (candidate?: NotionBlock) => candidate?.type === "paragraph" && !candidate.richText?.length && !candidate.children?.length;
    const previous = blocks.slice(0, index).reverse().find((candidate) => !isEmptyParagraph(candidate));
    if (block.type === "bulleted_list_item" || block.type === "numbered_list_item") {
      if (previous?.type === block.type) return null;
      const items = [];
      for (const item of blocks.slice(index)) {
        if (isEmptyParagraph(item)) continue;
        if (item.type !== block.type) break;
        items.push(item);
      }
      const List = block.type === "numbered_list_item" ? "ol" : "ul";
      return <List key={block.id} className={`${block.type === "numbered_list_item" ? "list-decimal" : "list-disc"} space-y-2 pl-6 text-[0.98rem] leading-8 text-[var(--color-muted)]`}>{items.map((item) => <li key={item.id}><RichText parts={item.richText} />{item.children ? <div className="mt-3"><NotionBlocks blocks={item.children} /></div> : null}</li>)}</List>;
    }

    if (/^heading_\d+$/.test(block.type)) {
      const text = block.richText?.map((part) => part.text).join("") ?? "";
      const level = Number(block.type.replace("heading_", ""));
      const Heading = level === 1 ? "h2" : level === 2 ? "h3" : level === 3 ? "h4" : level === 4 ? "h5" : "h6";
      const size = level === 1 ? "pt-8 text-3xl sm:text-4xl" : level === 2 ? "pt-6 text-2xl sm:text-3xl" : level === 3 ? "pt-4 text-xl sm:text-2xl" : level === 4 ? "pt-4 text-lg sm:text-xl" : "pt-3 text-base sm:text-lg";
      return <Heading key={block.id} id={anchorId(text)} className={`${size} scroll-mt-28 font-display leading-tight tracking-[-0.03em] text-[var(--color-ink)]`}><RichText parts={block.richText} /></Heading>;
    }

    if (block.type === "toggle") return <details key={block.id} className="group rounded-lg border border-[var(--color-line)] bg-white px-4 py-3"><summary className="cursor-pointer list-none font-medium text-[var(--color-ink)] [&::-webkit-details-marker]:hidden"><span className="mr-2 inline-block text-[var(--color-muted)] transition group-open:rotate-90">›</span><RichText parts={block.richText} /></summary>{block.children ? <div className="border-t border-[var(--color-line)] pt-4 mt-4"><NotionBlocks blocks={block.children} /></div> : null}</details>;
    if (block.type === "quote") return <blockquote key={block.id} className="border-l-2 border-[var(--color-ink)] pl-5 text-lg leading-8 text-[var(--color-muted)]"><RichText parts={block.richText} />{block.children ? <div className="mt-4"><NotionBlocks blocks={block.children} /></div> : null}</blockquote>;
    if (block.type === "callout") return <div key={block.id} className="rounded-lg border border-[var(--color-line)] bg-[var(--color-surface-strong)] px-5 py-4 leading-7 text-[var(--color-muted)]"><RichText parts={block.richText} />{block.children ? <div className="mt-4"><NotionBlocks blocks={block.children} /></div> : null}</div>;
    if (block.type === "code") return <pre key={block.id} className="overflow-x-auto rounded-lg bg-[#161616] p-5 text-sm leading-7 text-[#f5f5f5]"><code><RichText parts={block.richText} /></code></pre>;
    if (block.type === "image" && block.imageUrl) return <figure key={block.id} className="space-y-3"><img src={block.imageUrl} alt={block.caption?.map((part) => part.text).join("") || ""} className="w-full rounded-lg border border-[var(--color-line)]" />{block.caption?.length ? <figcaption className="text-sm leading-6 text-[var(--color-muted)]"><RichText parts={block.caption} /></figcaption> : null}</figure>;
    if (block.type === "column_list" && block.children) return <div key={block.id} className="grid gap-5" style={{ gridTemplateColumns: `repeat(${block.children.length}, minmax(0, 1fr))` }}>{block.children.map((column) => <div key={column.id} className="min-w-0"><NotionBlocks blocks={column.children ?? []} /></div>)}</div>;
    if (block.type === "column" && block.children) return <NotionBlocks key={block.id} blocks={block.children} />;
    if (block.type === "divider") return <hr key={block.id} className="border-[var(--color-line)]" />;
    if (isEmptyParagraph(block)) return null;
    if (block.type === "paragraph") return <div key={block.id}><p className="text-[0.98rem] leading-8 text-[var(--color-muted)]"><RichText parts={block.richText} /></p>{block.children ? <div className="mt-4"><NotionBlocks blocks={block.children} /></div> : null}</div>;
    return block.richText?.length ? <p key={block.id} className="text-[0.98rem] leading-8 text-[var(--color-muted)]"><RichText parts={block.richText} /></p> : null;
  })}</div>;
}

export default function BlogDetailPage() {
  const { category, slug } = useParams();
  const entry = blogEntries.find((item) => item.slug === slug && item.category.toLowerCase() === category?.toLowerCase());

  if (!entry) {
    return <div className="mx-auto max-w-3xl px-5 py-24 md:px-8"><Link to="/blogs" className="text-sm text-[var(--color-muted)] hover:text-[var(--color-ink)]">Back to writing</Link><h1 className="mt-6 font-display text-4xl text-[var(--color-ink)]">Note not found.</h1></div>;
  }

  const relatedEntries = blogEntries.filter((item) => item.category === entry.category);
  const headings = entry.blocks?.filter((block) => /^heading_\d+$/.test(block.type)).map((block) => block.richText?.map((part) => part.text).join("") ?? "") ?? entry.sections.flatMap((section) => section.heading ? [section.heading] : []);

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

          <div className="py-10 sm:py-12">
            {entry.blocks?.length ? <NotionBlocks blocks={entry.blocks} /> : (
            <div className="space-y-12 py-10 sm:py-12">
              {entry.sections.map((section, index) => (
                <section key={`${entry.slug}-${index}`} className="scroll-mt-28">
                  {section.heading ? <h2 id={anchorId(section.heading)} className="font-display text-2xl leading-tight tracking-[-0.03em] text-[var(--color-ink)] sm:text-3xl">{section.heading}</h2> : null}
                  <div className={section.heading ? "mt-5 space-y-5" : "space-y-5"}>{section.paragraphs.map((paragraph) => <p key={paragraph} className="text-[0.98rem] leading-8 text-[var(--color-muted)]">{paragraph}</p>)}</div>
                </section>
              ))}
            </div>
            )}
            {entry.notionUrl ? <a href={entry.notionUrl} target="_blank" rel="noreferrer" className="mt-12 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-muted)] transition hover:text-[var(--color-ink)]">View original in Notion <ExternalLink className="h-3.5 w-3.5" /></a> : null}
          </div>
          <div className="flex items-center justify-between border-t border-[var(--color-line)] py-8 text-sm"><Link to="/blogs" className="inline-flex items-center gap-2 text-[var(--color-muted)] hover:text-[var(--color-ink)]"><ArrowLeft className="h-4 w-4" /> All notes</Link><span className="inline-flex items-center gap-1 text-[var(--color-muted)]">More writing <ChevronRight className="h-4 w-4" /></span></div>
        </div>
      </article>

      <aside className="hidden border-l border-[var(--color-line)] px-6 py-10 xl:block">
        <div className="sticky top-24">
          <p className="text-sm font-semibold text-[var(--color-ink)]">On this page</p>
          <nav className="mt-4 border-l border-[var(--color-line)]" aria-label="Table of contents">
            <a href="#top" className="flex items-center gap-2 border-l-2 border-[var(--color-ink)] -ml-px py-1.5 pl-3 text-sm text-[var(--color-ink)]">Overview</a>
            {headings.map((heading) => <a key={heading} href={`#${anchorId(heading)}`} className="flex items-center gap-2 py-1.5 pl-3 text-sm leading-5 text-[var(--color-muted)] transition hover:text-[var(--color-ink)]"><Hash className="h-3 w-3 shrink-0 opacity-50" />{heading}</a>)}
          </nav>
        </div>
      </aside>
    </div>
  );
}
