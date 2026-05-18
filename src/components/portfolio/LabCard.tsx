import { ArrowUpRight, Film, Layers3 } from "lucide-react";
import { Link } from "react-router";
import type { LabEntry } from "../../content/types";

interface LabCardProps {
  lab: LabEntry;
}

export default function LabCard({ lab }: LabCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.8rem] border border-[var(--color-line)] bg-white shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-panel)]">
      <div className="relative overflow-hidden border-b border-[var(--color-line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(232,232,230,0.88))]">
        {lab.previewGif ? (
          <img
            src={lab.previewGif}
            alt={lab.title}
            className="h-56 w-full object-cover transition duration-700 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-56 items-end justify-between bg-[radial-gradient(circle_at_top_left,rgba(17,17,17,0.12),transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.86),rgba(229,229,227,0.65))] p-6">
            <span className="rounded-full border border-[var(--color-line)] bg-white/80 px-3 py-1 text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
              Archive
            </span>
            <Layers3 className="h-9 w-9 text-[var(--color-muted)]" />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
              {lab.technique}
            </p>
            <h3 className="mt-3 font-display text-3xl leading-none text-[var(--color-ink)]">
              {lab.title}
            </h3>
          </div>
          <span className="rounded-full border border-[var(--color-line)] bg-[var(--color-surface-strong)] px-3 py-1 text-xs text-[var(--color-muted)]">
            {lab.year}
          </span>
        </div>

        <p className="text-sm leading-7 text-[var(--color-muted)]">{lab.summary}</p>

        <div className="flex flex-wrap gap-2">
          {lab.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] px-3 py-1 text-xs text-[var(--color-muted)]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="rounded-[1.35rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-4">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
            <Film className="h-3.5 w-3.5" />
            Product relevance
          </div>
          <p className="mt-3 text-sm leading-7 text-[var(--color-ink)]">
            {lab.whyItMatters}
          </p>
        </div>

        <Link
          to={lab.route}
          className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-[var(--color-ink)] transition group-hover:text-[var(--color-accent)]"
        >
          Open lab detail <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
