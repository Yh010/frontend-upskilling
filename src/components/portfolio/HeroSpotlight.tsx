import { ArrowUpRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

interface SpotlightCard {
  id: string;
  label: string;
  title: string;
  meta: string;
  description: string;
  href: string;
  accent: string;
}

interface HeroSpotlightProps {
  cards: SpotlightCard[];
}

export default function HeroSpotlight({ cards }: HeroSpotlightProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const activeCard = cards[activeIndex];

  useEffect(() => {
    if (prefersReducedMotion) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % cards.length);
    }, 4200);

    return () => window.clearInterval(interval);
  }, [cards.length, prefersReducedMotion]);

  return (
    <div className="relative flex min-h-[34rem] flex-col overflow-hidden rounded-[2.25rem] border border-[var(--color-line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(236,236,234,0.96))] p-6 shadow-[var(--shadow-panel)] md:p-7">
      <div className="absolute inset-x-8 top-8 h-44 rounded-full bg-[radial-gradient(circle,rgba(17,17,17,0.08),transparent_60%)] blur-3xl" />
      <div className="absolute -right-12 bottom-6 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(102,102,102,0.12),transparent_65%)] blur-3xl" />

      <div className="relative z-10 flex items-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-white/80 px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
          <Sparkles className="h-3.5 w-3.5" />
          Spotlight
        </span>
      </div>

      <div className="relative mt-5 min-h-[24rem] flex-1">
        <div className="pointer-events-none absolute inset-x-10 top-4 h-[18.5rem] rounded-[2rem] border border-white/70 bg-white/45 shadow-[0_24px_60px_rgba(0,0,0,0.05)]" />
        <div className="pointer-events-none absolute inset-x-16 top-10 h-[18.5rem] rounded-[2rem] border border-white/45 bg-[rgba(255,255,255,0.28)] shadow-[0_18px_36px_rgba(0,0,0,0.035)]" />

        <motion.article
          animate={{ borderColor: activeCard.accent }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 mt-14 min-h-[21.75rem] overflow-hidden rounded-[2rem] border bg-white/98 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.08)]"
        >
          <AnimatePresence initial={false} mode="sync">
            <motion.div
              key={activeCard.id}
              initial={
                prefersReducedMotion
                  ? { opacity: 1 }
                  : { opacity: 0, y: 14, filter: "blur(6px)" }
              }
              animate={
                prefersReducedMotion
                  ? { opacity: 1 }
                  : { opacity: 1, y: 0, filter: "blur(0px)" }
              }
              exit={
                prefersReducedMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: -10, filter: "blur(6px)" }
              }
              transition={{ duration: 0.52, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex flex-col justify-between p-6"
            >
              <div className="space-y-5">
                <div className="flex flex-wrap items-center gap-3">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
                    {activeCard.label}
                  </p>
                  <motion.span
                    animate={{ backgroundColor: activeCard.accent }}
                    transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                    className="h-1.5 w-1.5 rounded-full"
                  />
                  <p className="text-[0.68rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
                    {activeCard.meta}
                  </p>
                </div>

                <h3 className="max-w-md font-display text-[2.45rem] leading-[0.94] text-[var(--color-ink)] md:text-[2.7rem]">
                  {activeCard.title}
                </h3>
              </div>

              <div className="space-y-6">
                <div className="rounded-[1.4rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-4">
                  <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[var(--color-muted)]">
                    Snapshot
                  </p>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--color-muted)]">
                    {activeCard.description}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <div className="text-[0.68rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
                    0{activeIndex + 1} / 0{cards.length}
                  </div>
                  <Link
                    to={activeCard.href}
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-white px-4 py-2 text-sm font-medium text-[var(--color-ink)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                  >
                    View details <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.article>
      </div>

      <div className="relative z-10 mt-6 grid gap-3 md:grid-cols-3">
        {cards.map((card, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={card.id}
              type="button"
              aria-label={`Show ${card.title}`}
              onClick={() => setActiveIndex(index)}
              className={`rounded-[1.4rem] border px-4 py-4 text-left transition ${
                isActive
                  ? "border-[var(--color-line-strong)] bg-[var(--color-ink)] text-white shadow-[0_16px_30px_rgba(25,22,20,0.18)]"
                  : "border-[var(--color-line)] bg-white/82 text-[var(--color-muted)] hover:border-[var(--color-accent)] hover:bg-white"
              }`}
            >
              <p
                className={`text-[0.68rem] uppercase tracking-[0.22em] ${
                  isActive ? "text-white/70" : ""
                }`}
              >
                {card.label}
              </p>
              <p className="mt-2 text-sm font-medium leading-6">{card.title}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
