import CourseCard from "../../components/portfolio/CourseCard";
import Reveal from "../../components/site/Reveal";
import SectionIntro from "../../components/site/SectionIntro";
import { courseEntries } from "../../content/courses";

export default function CoursesPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 pb-24 pt-12 md:px-8 md:pt-16">
      <div className="space-y-12 sm:space-y-14">
        <Reveal>
          <SectionIntro
            eyebrow="Courses"
            title="Course systems, code references, and teaching-first content."
            body="This section turns course material into a browsable resource. Modules, lessons, snippets, and notes stay together so viewers do not have to hunt for the examples separately."
          />
        </Reveal>

        <Reveal>
          <div className="rounded-[1.7rem] border border-[var(--color-line)] bg-white p-5 shadow-[var(--shadow-soft)] sm:rounded-[1.9rem] sm:p-6">
            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-muted)]">
                  Why this exists
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--color-ink)]">
                  The course section keeps the curriculum, lesson notes, and code examples in the same place as the portfolio.
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-muted)]">
                  Portfolio value
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--color-ink)]">
                  It shows product thinking, teaching clarity, and the actual implementation decisions behind the motion work.
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-muted)]">
                  Viewer experience
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--color-ink)]">
                  Instead of scattered repos and notes, every lesson can expose the good, bad, and final code in a single flow.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <section className="space-y-8">
          <Reveal>
            <SectionIntro
              eyebrow="Current"
              title="Courses now live on the site."
              body="Start with the flagship motion course. The content model is already built to scale to more courses later."
            />
          </Reveal>
          <div className="grid gap-6">
            {courseEntries.map((course, index) => (
              <Reveal key={course.slug} delay={index * 0.06}>
                <CourseCard course={course} />
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
