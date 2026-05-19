import { useState } from "react";
import { ArrowUpRight, Film, Layers3 } from "lucide-react";
import { Link } from "react-router";
import type { LabEntry } from "../../content/types";

interface LabCardProps {
  lab: LabEntry;
}

const livePreviewConfig: Record<
  string,
  { width: number; scale: number; offsetX: number; offsetY: number }
> = {
  "moving-button": { width: 360, scale: 0.95, offsetX: 0, offsetY: 0 },
  "motion-hooks": { width: 1120, scale: 0.24, offsetX: 0, offsetY: 0 },
  "layout-cards": { width: 1040, scale: 0.3, offsetX: 0, offsetY: 0 },
  "three-d-card": { width: 640, scale: 0.52, offsetX: 0, offsetY: 0 },
  testimonials: { width: 1000, scale: 0.34, offsetX: 0, offsetY: 0 },
  "animated-underline": { width: 980, scale: 0.42, offsetX: 0, offsetY: 0 },
  "compare-card": { width: 540, scale: 0.58, offsetX: 0, offsetY: 0 },
  "responsive-patterns": { width: 980, scale: 0.42, offsetX: 0, offsetY: 0 },
  "transition-practice": { width: 1100, scale: 0.33, offsetX: 0, offsetY: 0 },
  "keyframe-practice": { width: 1100, scale: 0.33, offsetX: 0, offsetY: 0 },
  "clip-path-practice": { width: 1100, scale: 0.33, offsetX: 0, offsetY: 0 },
  onboarding: { width: 1440, scale: 0.21, offsetX: 0, offsetY: 0 },
  "motion-learning": { width: 1100, scale: 0.33, offsetX: 0, offsetY: 0 },
};

function LabLivePreview({
  lab,
  previewCycle,
}: LabCardProps & { previewCycle: number }) {
  const LabComponent = lab.component;
  const config = livePreviewConfig[lab.slug] ?? {
    width: 960,
    scale: 0.34,
    offsetX: 0,
    offsetY: 0,
  };

  return (
    <div className="relative h-56 overflow-hidden bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(232,232,230,0.82))]">
      <div
        key={`${lab.slug}-${previewCycle}`}
        className="pointer-events-none absolute left-1/2 top-1/2 origin-center will-change-transform"
        style={{
          width: `${config.width}px`,
          transform: `translate(-50%, -50%) translate(${config.offsetX}px, ${config.offsetY}px) scale(${config.scale})`,
        }}
      >
        <LabComponent />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-[linear-gradient(180deg,rgba(243,243,241,0),rgba(243,243,241,0.96))]" />
      <div className="absolute left-4 top-4 rounded-full border border-[var(--color-line)] bg-white/86 px-3 py-1 text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
        Live preview
      </div>
      <div className="absolute right-4 top-4 rounded-full border border-[var(--color-line)] bg-white/72 p-2 text-[var(--color-muted)]">
        <Layers3 className="h-4 w-4" />
      </div>
    </div>
  );
}

export default function LabCard({ lab }: LabCardProps) {
  const [previewCycle, setPreviewCycle] = useState(0);
  const hasRecordedPreview = Boolean(lab.previewVideo || lab.previewGif);

  return (
    <article
      className="group flex h-full flex-col overflow-hidden rounded-[1.8rem] border border-[var(--color-line)] bg-white shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-panel)]"
      onMouseEnter={() => {
        if (!hasRecordedPreview) {
          setPreviewCycle((cycle) => cycle + 1);
        }
      }}
    >
      <div className="relative overflow-hidden border-b border-[var(--color-line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(232,232,230,0.88))]">
        {lab.previewVideo ? (
          <video
            src={lab.previewVideo}
            className="h-56 w-full object-cover transition duration-700 group-hover:scale-[1.03]"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        ) : lab.previewGif ? (
          <img
            src={lab.previewGif}
            alt={lab.title}
            className="h-56 w-full object-cover transition duration-700 group-hover:scale-[1.03]"
          />
        ) : (
          <LabLivePreview lab={lab} previewCycle={previewCycle} />
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
