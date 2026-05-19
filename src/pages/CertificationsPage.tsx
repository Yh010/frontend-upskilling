import { ArrowUpRight } from "lucide-react";
import Reveal from "../components/site/Reveal";
import SectionIntro from "../components/site/SectionIntro";
import { certificationEntries } from "../content/portfolio";

export default function CertificationsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 pb-24 pt-12 md:px-8 md:pt-16">
      <div className="space-y-12">
        <Reveal>
          <SectionIntro
            eyebrow="Certifications"
            title="Credentials that support the main work."
            body="Focused on AI engineering, backend systems, cloud-native tooling, and full-stack development."
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {certificationEntries.map((certification, index) => (
            <Reveal key={certification.id} delay={index * 0.06}>
              <article className="rounded-[1.8rem] border border-[var(--color-line)] bg-white/92 p-5 shadow-[var(--shadow-soft)] sm:p-6">
                <div className="flex flex-col items-start gap-4 sm:flex-row sm:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
                      {certification.category}
                    </p>
                    <h3 className="mt-3 font-display text-[2rem] leading-[0.96] text-[var(--color-ink)] sm:text-3xl">
                      {certification.title}
                    </h3>
                  </div>
                  <span className="rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] px-3 py-1 text-xs text-[var(--color-muted)]">
                    {certification.year}
                  </span>
                </div>
                <p className="mt-4 text-sm text-[var(--color-muted)]">
                  {certification.issuer}
                </p>
                <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                  {certification.note}
                </p>
                {certification.credentialUrl ? (
                  <a
                    href={certification.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-ink)]"
                  >
                    View credential <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : null}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
