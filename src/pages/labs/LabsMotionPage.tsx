import { useMemo, useState } from "react";
import LabCard from "../../components/portfolio/LabCard";
import Reveal from "../../components/site/Reveal";
import SectionIntro from "../../components/site/SectionIntro";
import { featuredLabs, labsMotionEntries } from "../../content/labs";

const allTags = ["All", ...new Set(labsMotionEntries.flatMap((lab) => lab.tags))];

export default function LabsMotionPage() {
  const [selectedTag, setSelectedTag] = useState("All");

  const filteredLabs = useMemo(
    () =>
      selectedTag === "All"
        ? labsMotionEntries
        : labsMotionEntries.filter((lab) => lab.tags.includes(selectedTag)),
    [selectedTag],
  );

  const archiveLabs = filteredLabs.filter((lab) => !lab.featured);
  const featuredVisible = filteredLabs.filter((lab) => lab.featured);

  return (
    <div className="mx-auto max-w-7xl px-5 pb-24 pt-12 md:px-8 md:pt-16">
      <div className="space-y-14">
        <Reveal>
          <SectionIntro
            eyebrow="Labs > Motion"
            title="A curated motion archive that turns isolated experiments into a coherent body of work."
            body="This page separates polished highlights from the wider archive so it reads like a productized lab, not a loose folder of demos. Each entry is framed around technique, product relevance, and implementation intent."
          />
        </Reveal>

        <Reveal>
          <div className="flex flex-wrap gap-3">
            {allTags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setSelectedTag(tag)}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  selectedTag === tag
                    ? "border-[var(--color-ink)] bg-[var(--color-ink)] text-[var(--color-bg)]"
                    : "border-[var(--color-line)] bg-white/85 text-[var(--color-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-ink)]"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </Reveal>

        <section className="space-y-8">
          <Reveal>
            <SectionIntro
              eyebrow="Featured"
              title="The most portfolio-ready motion studies."
              body="These are the interactions that best balance technical craft, presentability, and product value."
            />
          </Reveal>
          <div className="grid gap-6 lg:grid-cols-3">
            {(selectedTag === "All" ? featuredLabs : featuredVisible).map((lab, index) => (
              <Reveal key={lab.slug} delay={index * 0.06}>
                <LabCard lab={lab} />
              </Reveal>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <Reveal>
            <SectionIntro
              eyebrow="Archive"
              title="Foundational studies, learning sandboxes, and pattern experiments."
              body="The archive makes the process visible. It shows breadth, iteration, and a willingness to explore beyond only the finished-looking pieces."
            />
          </Reveal>
          <div className="grid gap-6 lg:grid-cols-3">
            {archiveLabs.map((lab, index) => (
              <Reveal key={lab.slug} delay={index * 0.05}>
                <LabCard lab={lab} />
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
