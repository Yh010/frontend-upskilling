import {
  ArrowLeft,
  BookOpenText,
  CheckCircle2,
  ChevronRight,
  Code2,
} from "lucide-react";
import { Link } from "react-router";
import type {
  CourseEntry,
  CourseLesson,
  CourseLessonSection,
  CourseLessonSnippetsSection,
  CourseLessonSummaryCard,
  CourseModule,
  CourseSnippet,
} from "../../content/types";

const snippetVariantClass: Record<NonNullable<CourseSnippet["variant"]>, string> = {
  good: "border-emerald-500/25 bg-emerald-500/10 text-emerald-700",
  bad: "border-rose-500/25 bg-rose-500/10 text-rose-700",
  starter: "border-amber-500/25 bg-amber-500/10 text-amber-700",
  reference: "border-slate-500/25 bg-slate-500/10 text-slate-700",
};

const summaryCardIcons = {
  module: BookOpenText,
  outcome: CheckCircle2,
  examples: Code2,
  custom: Code2,
} as const;

const defaultExamplesIntro =
  "Each example keeps the implementation and the outcome side by side so the lesson stays easy to scan. Bad and good versions live together, followed by a short note on why each one works or fails.";

const defaultEmptyExamplesMessage =
  "This lesson is already mapped into the curriculum, but the examples and review notes for the site are still being added.";

const formatModuleLabel = (moduleId: string) => moduleId.replace("module-", "Module ");
const stripModulePrefix = (title: string) => title.replace(/^Module \d+: /, "");

function getLessonSnippets(lesson: CourseLesson) {
  return lesson.snippets ?? [];
}

function getLessonSections(lesson: CourseLesson): CourseLessonSection[] {
  if (lesson.sections?.length) {
    return lesson.sections;
  }

  const sections: CourseLessonSection[] = [];

  if (lesson.goal) {
    sections.push({
      id: "goal",
      type: "callout",
      eyebrow: "Lesson goal",
      title: "What the learner should be able to do after this lesson",
      content: lesson.goal,
      tone: "surface",
    });
  }

  if (lesson.notes?.length) {
    sections.push({
      id: "notes",
      type: "list",
      eyebrow: "Notes",
      title: "Short teaching points for the lesson",
      items: lesson.notes,
      style: "cards",
    });
  }

  if (lesson.exercise) {
    sections.push({
      id: "exercise",
      type: "callout",
      eyebrow: "Exercise",
      title: "Mandatory practice before the next lesson",
      content: lesson.exercise,
      tone: "surface",
    });
  }

  sections.push({
    id: "examples",
    type: "snippets",
    eyebrow: "Examples",
    title: "Code on the left, result on the right",
    intro: defaultExamplesIntro,
    snippets: getLessonSnippets(lesson),
    emptyMessage: defaultEmptyExamplesMessage,
  });

  return sections;
}

function getLessonSummaryCards(
  module: CourseModule,
  lesson: CourseLesson,
): CourseLessonSummaryCard[] {
  if (lesson.summaryCards?.length) {
    return lesson.summaryCards;
  }

  const snippetCount = getLessonSnippets(lesson).length;

  return [
    {
      id: "module",
      label: "Current module",
      value: stripModulePrefix(module.title),
      icon: "module",
    },
    {
      id: "outcome",
      label: "Learner outcome",
      value: lesson.goal ?? module.outcome,
      icon: "outcome",
    },
    {
      id: "examples",
      label: "Examples in lesson",
      value: snippetCount
        ? `${snippetCount} code + UI walkthrough${snippetCount > 1 ? "s" : ""}`
        : "Examples are being added for this lesson.",
      icon: "examples",
      emphasis: "wide",
    },
  ];
}

function getPageSections(sections: CourseLessonSection[]) {
  return [
    { id: "overview", label: "Overview" },
    ...sections.flatMap((section) => {
      const anchors = [
        {
          id: section.id,
          label: section.tocLabel ?? section.eyebrow ?? section.title,
        },
      ];

      if (section.type !== "snippets") {
        return anchors;
      }

      return [
        ...anchors,
        ...(section.snippets ?? []).map((snippet) => ({
          id: `example-${snippet.id}`,
          label: snippet.title,
          muted: true,
        })),
      ];
    }),
  ];
}

function LessonLink({
  courseSlug,
  lessonSlug,
  active,
  title,
}: {
  courseSlug: string;
  lessonSlug: string;
  active: boolean;
  title: string;
}) {
  return (
    <Link
      to={`/courses/${courseSlug}?lesson=${lessonSlug}`}
      className={`group flex items-start gap-3 rounded-2xl px-3 py-2.5 text-sm transition ${
        active
          ? "bg-[var(--color-ink)] text-[var(--color-bg)] shadow-[var(--shadow-soft)]"
          : "text-[var(--color-muted)] hover:bg-[var(--color-surface)] hover:text-[var(--color-ink)]"
      }`}
    >
      <span
        className={`mt-1 h-2 w-2 rounded-full transition ${
          active
            ? "bg-[var(--color-bg)]"
            : "bg-[var(--color-line-strong)] group-hover:bg-[var(--color-accent)]"
        }`}
      />
      <span className="leading-6">{title}</span>
    </Link>
  );
}

function ExampleDemo({ component: DemoComponent }: { component?: CourseSnippet["demoComponent"] }) {
  if (!DemoComponent) {
    return (
      <div className="flex min-h-[220px] items-center justify-center rounded-[1.25rem] border border-dashed border-[var(--color-line-strong)] bg-[var(--color-surface)] p-6 text-center text-sm leading-7 text-[var(--color-muted)]">
        Live demo for this example is being added.
      </div>
    );
  }

  return <DemoComponent />;
}

function ModuleRail({
  courseSlug,
  activeLessonSlug,
  modules,
}: {
  courseSlug: string;
  activeLessonSlug: string;
  modules: CourseModule[];
}) {
  return (
    <aside className="space-y-4">
      <details className="group rounded-[1.55rem] border border-[var(--color-line)] bg-white/92 p-4 shadow-[var(--shadow-soft)] xl:hidden">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-3">
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[var(--color-muted)]">
              Course navigation
            </p>
            <p className="mt-1 text-sm leading-6 text-[var(--color-ink)]">
              Browse modules and lessons
            </p>
          </div>
          <span className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)] transition group-open:rotate-45">
            +
          </span>
        </summary>

        <div className="mt-4 space-y-4 border-t border-[var(--color-line)] pt-4">
          {modules.map((module) => (
            <section
              key={module.id}
              className="space-y-3 border-b border-[var(--color-line)] pb-4 last:border-b-0 last:pb-0"
            >
              <div className="space-y-1">
                <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[var(--color-muted)]">
                  {formatModuleLabel(module.id)}
                </p>
                <h3 className="font-display text-base leading-tight text-[var(--color-ink)]">
                  {stripModulePrefix(module.title)}
                </h3>
              </div>

              <nav className="space-y-1" aria-label={module.title}>
                {module.lessons.map((lesson) => (
                  <LessonLink
                    key={lesson.slug}
                    courseSlug={courseSlug}
                    lessonSlug={lesson.slug}
                    active={lesson.slug === activeLessonSlug}
                    title={lesson.title}
                  />
                ))}
              </nav>
            </section>
          ))}
        </div>
      </details>

      <div className="hidden xl:block">
        <div className="max-h-[calc(100vh-7.5rem)] overflow-hidden rounded-[1.7rem] border border-[var(--color-line)] bg-white/90 p-4 shadow-[var(--shadow-soft)] backdrop-blur-sm">
          <div className="border-b border-[var(--color-line)] pb-4">
            <p className="text-[0.7rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
              Course navigation
            </p>
            <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
              A compact module rail on desktop, collapsed on smaller screens.
            </p>
          </div>

          <div className="mt-4 max-h-[calc(100vh-13.5rem)] space-y-5 overflow-y-auto pr-2">
            {modules.map((module) => (
              <section
                key={module.id}
                className="space-y-3 border-b border-[var(--color-line)] pb-5 last:border-b-0 last:pb-0"
              >
                <div className="space-y-2">
                  <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[var(--color-muted)]">
                    {formatModuleLabel(module.id)}
                  </p>
                  <h3 className="font-display text-base leading-tight text-[var(--color-ink)]">
                    {stripModulePrefix(module.title)}
                  </h3>
                  <p className="text-sm leading-6 text-[var(--color-muted)]">{module.outcome}</p>
                </div>

                <nav className="space-y-1" aria-label={module.title}>
                  {module.lessons.map((lesson) => (
                    <LessonLink
                      key={lesson.slug}
                      courseSlug={courseSlug}
                      lessonSlug={lesson.slug}
                      active={lesson.slug === activeLessonSlug}
                      title={lesson.title}
                    />
                  ))}
                </nav>
              </section>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}

function OnThisPage({
  sections,
}: {
  sections: Array<{ id: string; label: string; muted?: boolean }>;
}) {
  return (
    <aside className="hidden xl:block">
      <div className="sticky top-24 rounded-[1.4rem] border border-[var(--color-line)] bg-white/88 p-3 shadow-[var(--shadow-soft)] backdrop-blur-sm">
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
          On this page
        </p>
        <nav className="mt-4 space-y-1">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`block rounded-xl px-3 py-2 text-sm leading-6 transition ${
                section.muted
                  ? "text-[var(--color-muted)] hover:bg-[var(--color-surface)] hover:text-[var(--color-ink)]"
                  : "text-[var(--color-ink)] hover:bg-[var(--color-surface)]"
              }`}
            >
              {section.label}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="space-y-2">
      {eyebrow ? (
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-[1.5rem] leading-tight tracking-[-0.03em] text-[var(--color-ink)] sm:text-[1.9rem]">
        {title}
      </h2>
      {description ? (
        <p className="max-w-3xl text-sm leading-7 text-[var(--color-muted)]">{description}</p>
      ) : null}
    </div>
  );
}

function SummaryCard({ card }: { card: CourseLessonSummaryCard }) {
  const Icon = summaryCardIcons[card.icon ?? "custom"];

  return (
    <div
      className={`rounded-[1.15rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-4 ${
        card.emphasis === "wide" ? "sm:col-span-2 xl:col-span-1" : ""
      }`}
    >
      <div className="flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.18em] text-[var(--color-muted)]">
        <Icon className="h-4 w-4" />
        {card.label}
      </div>
      <p className="mt-3 text-sm leading-7 text-[var(--color-ink)]">{card.value}</p>
    </div>
  );
}

function SnippetsSection({ section }: { section: CourseLessonSnippetsSection }) {
  return (
    <section id={section.id} className="space-y-5 scroll-mt-24">
      <SectionHeader
        eyebrow={section.eyebrow}
        title={section.title}
        description={section.description ?? section.intro}
      />

      <div className="space-y-5">
        {(section.snippets ?? []).length ? (
          (section.snippets ?? []).map((snippet) => {
            const variantClass = snippet.variant
              ? snippetVariantClass[snippet.variant]
              : "border-[var(--color-line)] bg-[var(--color-surface)] text-[var(--color-ink)]";

            return (
              <section
                key={snippet.id}
                id={`example-${snippet.id}`}
                className="scroll-mt-24 overflow-hidden rounded-[1.3rem] border border-[var(--color-line)]"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--color-line)] bg-[var(--color-surface)] px-4 py-3">
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-[var(--color-ink)]">
                      {snippet.title}
                    </p>
                    <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
                      {snippet.language}
                    </p>
                  </div>
                  {snippet.variant ? (
                    <span
                      className={`rounded-full border px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] ${variantClass}`}
                    >
                      {snippet.variant}
                    </span>
                  ) : null}
                </div>

                <div className="grid gap-0 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
                  <div className="border-b border-[var(--color-line)] bg-[#121212] p-4 sm:p-5 xl:border-b-0 xl:border-r">
                    <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.68rem] uppercase tracking-[0.2em] text-white/60">
                      Code
                    </div>
                    <pre className="max-h-[320px] overflow-x-auto overflow-y-auto whitespace-pre-wrap font-geist text-[0.78rem] leading-6 text-white/88 sm:text-[0.82rem] sm:leading-7">
                      <code>{snippet.code}</code>
                    </pre>
                  </div>
                  <div className="bg-white p-4 sm:p-5">
                    <div className="mb-4 inline-flex rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] px-3 py-1 text-[0.68rem] uppercase tracking-[0.2em] text-[var(--color-muted)]">
                      UI
                    </div>
                    <ExampleDemo component={snippet.demoComponent} />
                  </div>
                </div>

                <div className="border-t border-[var(--color-line)] bg-white px-4 py-4 text-sm leading-7 text-[var(--color-ink)]">
                  {snippet.note}
                </div>
              </section>
            );
          })
        ) : (
          <div className="rounded-[1.5rem] border border-dashed border-[var(--color-line-strong)] bg-[var(--color-surface)] p-5 text-sm leading-7 text-[var(--color-muted)]">
            {section.emptyMessage ?? defaultEmptyExamplesMessage}
          </div>
        )}
      </div>
    </section>
  );
}

function LessonSection({ section }: { section: CourseLessonSection }) {
  if (section.type === "snippets") {
    return <SnippetsSection section={section} />;
  }

  if (section.type === "callout") {
    return (
      <section id={section.id} className="space-y-4 scroll-mt-24">
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />
        <div
          className={`rounded-[1.25rem] border border-[var(--color-line)] p-4 text-sm leading-7 text-[var(--color-ink)] ${
            section.tone === "plain" ? "bg-white" : "bg-[var(--color-surface)]"
          }`}
        >
          {section.content}
        </div>
      </section>
    );
  }

  if (section.type === "paragraphs") {
    return (
      <section id={section.id} className="space-y-4 scroll-mt-24">
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />
        <div className="space-y-3">
          {section.paragraphs.map((paragraph) => (
            <div
              key={paragraph}
              className={`rounded-[1.2rem] border border-[var(--color-line)] p-4 text-sm leading-7 text-[var(--color-ink)] ${
                section.style === "cards" ? "bg-white" : "bg-[var(--color-surface)]"
              }`}
            >
              {paragraph}
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section id={section.id} className="space-y-4 scroll-mt-24">
      <SectionHeader
        eyebrow={section.eyebrow}
        title={section.title}
        description={section.description}
      />
      {section.style === "plain" ? (
        <ul className="space-y-3 pl-5 text-sm leading-7 text-[var(--color-ink)]">
          {section.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : (
        <div className="grid gap-3">
          {section.items.map((item) => (
            <div
              key={item}
              className="rounded-[1.2rem] border border-[var(--color-line)] bg-white p-4 text-sm leading-7 text-[var(--color-ink)]"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default function CourseLessonTemplate({
  course,
  activeLesson,
  activeModule,
  nextLesson,
}: {
  course: CourseEntry;
  activeLesson: CourseLesson;
  activeModule: CourseModule;
  nextLesson?: CourseLesson;
}) {
  const sections = getLessonSections(activeLesson);
  const summaryCards = getLessonSummaryCards(activeModule, activeLesson);
  const pageSections = getPageSections(sections);

  return (
    <div className="mx-auto max-w-[1480px] px-4 pb-18 pt-6 sm:px-5 sm:pb-20 md:px-6 md:pt-8 xl:px-8">
      <div className="space-y-6 sm:space-y-8">
        <div className="flex flex-wrap items-center gap-3">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-white px-4 py-2 text-sm text-[var(--color-muted)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-ink)]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to courses
          </Link>
          <span className="rounded-full border border-[var(--color-line)] bg-white px-4 py-2 text-[0.72rem] uppercase tracking-[0.18em] text-[var(--color-muted)]">
            {course.eyebrow}
          </span>
          <span className="rounded-full border border-[var(--color-line)] bg-white px-4 py-2 text-[0.72rem] uppercase tracking-[0.18em] text-[var(--color-muted)]">
            {course.status}
          </span>
        </div>

        <section className="grid items-start gap-5 xl:grid-cols-[260px_minmax(0,1fr)] 2xl:grid-cols-[260px_minmax(0,1fr)_200px]">
          <div className="order-2 xl:order-1 xl:sticky xl:top-24">
            <ModuleRail
              courseSlug={course.slug}
              activeLessonSlug={activeLesson.slug}
              modules={course.modules}
            />
          </div>

          <div className="order-1 min-w-0 space-y-5 xl:order-2">
            <article className="overflow-hidden rounded-[1.7rem] border border-[var(--color-line)] bg-white shadow-[var(--shadow-soft)]">
              <header
                id="overview"
                className="border-b border-[var(--color-line)] px-4 py-5 sm:px-6 sm:py-6 lg:px-7"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] px-3 py-1 text-[0.68rem] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                    {formatModuleLabel(activeModule.id)}
                  </span>
                  <span className="rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] px-3 py-1 text-[0.68rem] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                    {activeLesson.runtime}
                  </span>
                  <span className="rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] px-3 py-1 text-[0.68rem] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                    {activeLesson.status ?? "published"}
                  </span>
                </div>

                <div className="mt-5 space-y-4">
                  <p className="text-[0.7rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
                    {course.title}
                  </p>
                  <h1 className="max-w-4xl font-display text-[1.9rem] leading-[1.02] tracking-[-0.04em] text-[var(--color-ink)] sm:text-[2.4rem] lg:text-[2.9rem]">
                    {activeLesson.title}
                  </h1>
                  <p className="max-w-3xl text-sm leading-7 text-[var(--color-muted)] sm:text-[0.96rem]">
                    {activeLesson.summary}
                  </p>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  {summaryCards.map((card) => (
                    <SummaryCard key={card.id} card={card} />
                  ))}
                </div>
              </header>

              <div className="space-y-10 px-4 py-5 sm:px-6 sm:py-6 lg:px-7">
                {sections.map((section) => (
                  <LessonSection key={section.id} section={section} />
                ))}
              </div>
            </article>

            {nextLesson ? (
              <div className="flex justify-end">
                <Link
                  to={`/courses/${course.slug}?lesson=${nextLesson.slug}`}
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] px-5 py-3 text-sm text-[var(--color-bg)] transition hover:bg-[var(--color-accent)]"
                >
                  Next lesson: {nextLesson.title}
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            ) : null}
          </div>

          <div className="order-3 hidden 2xl:block">
            <OnThisPage sections={pageSections} />
          </div>
        </section>
      </div>
    </div>
  );
}
