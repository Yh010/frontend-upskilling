import { Download, Mail, MoveUpRight } from "lucide-react";
import Reveal from "../components/site/Reveal";
import SectionIntro from "../components/site/SectionIntro";
import { contactLinks, profile } from "../content/portfolio";

const primaryLinks = contactLinks.filter((link) => link.type === "primary");
const secondaryLinks = contactLinks.filter((link) => link.type === "secondary");

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 pb-24 pt-12 md:px-8 md:pt-16">
      <div className="space-y-12">
        <Reveal>
          <SectionIntro
            eyebrow="Contact"
            title="Direct contact and the links that matter most."
            body="Email, LinkedIn, GitHub, and resume first. Everything else is optional."
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
          <Reveal>
            <section className="rounded-[2rem] border border-[var(--color-line)] bg-white p-8 shadow-[var(--shadow-panel)]">
              <div className="space-y-5">
                <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                  <Mail className="h-3.5 w-3.5" />
                  Primary CTA
                </span>
                <h2 className="font-display text-5xl leading-none text-[var(--color-ink)]">
                  Open to full-stack product engineering roles.
                </h2>
                <p className="max-w-2xl text-base leading-8 text-[var(--color-muted)]">
                  {profile.summary}
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={profile.resumeUrl}
                    download
                    className="inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] px-5 py-3 text-sm text-[var(--color-bg)] transition hover:bg-[var(--color-accent)]"
                  >
                    Download Resume <Download className="h-4 w-4" />
                  </a>
                  {primaryLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        link.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-white px-5 py-3 text-sm text-[var(--color-ink)] transition hover:border-[var(--color-accent)]"
                    >
                      {link.label} <MoveUpRight className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </section>
          </Reveal>

          <Reveal delay={0.08}>
            <section className="grid gap-4">
              <article className="rounded-[1.8rem] border border-[var(--color-line)] bg-white/90 p-6 shadow-[var(--shadow-soft)]">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
                  Availability
                </p>
                <p className="mt-3 text-lg font-semibold text-[var(--color-ink)]">
                  {profile.availability}
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                  Best first step is email. LinkedIn and GitHub are there for quick background and work review.
                </p>
              </article>

              <article className="rounded-[1.8rem] border border-[var(--color-line)] bg-white/90 p-6 shadow-[var(--shadow-soft)]">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
                  Secondary convenience
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {secondaryLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        link.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] px-4 py-2 text-sm text-[var(--color-muted)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-ink)]"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </article>
            </section>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
