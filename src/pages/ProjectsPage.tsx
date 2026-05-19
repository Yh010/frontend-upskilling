import { useState } from "react";
import ProjectCard from "../components/portfolio/ProjectCard";
import Reveal from "../components/site/Reveal";
import SectionIntro from "../components/site/SectionIntro";
import { projectEntries } from "../content/portfolio";

const categories = ["All", ...new Set(projectEntries.map((project) => project.category))];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projectEntries
      : projectEntries.filter((project) => project.category === selectedCategory);

  return (
    <div className="mx-auto max-w-7xl px-5 pb-24 pt-12 md:px-8 md:pt-16">
      <div className="space-y-10 sm:space-y-12">
        <Reveal>
          <SectionIntro
            eyebrow="Projects"
            title="Projects across AI products, developer tooling, healthcare, and fintech."
            body="Each card keeps the scan simple: what the product is, what I worked on, and what the stack looks like."
          />
        </Reveal>

        <Reveal>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  selectedCategory === category
                    ? "border-[var(--color-ink)] bg-[var(--color-ink)] text-[var(--color-bg)]"
                    : "border-[var(--color-line)] bg-white/85 text-[var(--color-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-ink)]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.06}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
