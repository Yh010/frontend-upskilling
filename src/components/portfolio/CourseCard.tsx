import { ArrowUpRight, BookOpenText, Code2, GraduationCap } from "lucide-react";
import { Link } from "react-router";
import type { CourseEntry } from "../../content/types";

interface CourseCardProps {
  course: CourseEntry;
}

export default function CourseCard({ course }: CourseCardProps) {
  const lessonCount = course.modules.reduce(
    (count, module) => count + module.lessons.length,
    0,
  );

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.7rem] border border-[var(--color-line)] bg-white shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-panel)] sm:rounded-[1.9rem]">
      <div className="border-b border-[var(--color-line)] bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(231,229,226,0.88))] px-5 py-5 sm:px-6 sm:py-6">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-3">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
              {course.eyebrow}
            </p>
            <h3 className="max-w-xl font-display text-[2rem] leading-[0.96] tracking-[-0.03em] text-[var(--color-ink)] sm:text-[2.6rem]">
              {course.title}
            </h3>
          </div>
          <span className="rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] px-3 py-1 text-xs uppercase tracking-[0.16em] text-[var(--color-muted)]">
            {course.status}
          </span>
        </div>

        <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--color-muted)] sm:text-[0.97rem]">
          {course.summary}
        </p>
      </div>

      <div className="flex flex-1 flex-col gap-5 p-5 sm:p-6">
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-[1.2rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-4">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
              <BookOpenText className="h-4 w-4" />
              Modules
            </div>
            <p className="mt-2 text-2xl font-semibold text-[var(--color-ink)]">
              {course.modules.length}
            </p>
          </div>
          <div className="rounded-[1.2rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-4">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
              <GraduationCap className="h-4 w-4" />
              Lessons
            </div>
            <p className="mt-2 text-2xl font-semibold text-[var(--color-ink)]">
              {lessonCount}
            </p>
          </div>
          <div className="rounded-[1.2rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-4">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
              <Code2 className="h-4 w-4" />
              Format
            </div>
            <p className="mt-2 text-sm leading-6 text-[var(--color-ink)]">
              Module + lesson notes, code snippets, and course architecture in one place.
            </p>
          </div>
        </div>

        <div className="rounded-[1.4rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-4 sm:p-5">
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
            Promise
          </p>
          <p className="mt-3 text-sm leading-7 text-[var(--color-ink)]">
            {course.promise}
          </p>
        </div>

        <Link
          to={course.route}
          className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-[var(--color-ink)] transition group-hover:text-[var(--color-accent)]"
        >
          Open course detail <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
