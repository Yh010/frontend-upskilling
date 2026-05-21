import type { CourseLesson, CourseLessonSection } from "./types";

const defaultExamplesIntro =
  "Each example keeps the implementation and the outcome side by side so the lesson stays easy to scan. Bad and good versions live together, followed by a short note on why each one works or fails.";

const defaultEmptyExamplesMessage =
  "This lesson is already mapped into the curriculum, but the examples and review notes for the site are still being added.";

interface StandardCourseLessonInput
  extends Omit<CourseLesson, "sections" | "summaryCards"> {
  prependSections?: CourseLessonSection[];
  appendSections?: CourseLessonSection[];
  sections?: CourseLessonSection[];
}

export function createStandardLesson(
  input: StandardCourseLessonInput,
): CourseLesson {
  const coreSections =
    input.sections ??
    [
      input.goal
        ? {
            id: "goal",
            type: "callout" as const,
            eyebrow: "Lesson goal",
            title: "What the learner should be able to do after this lesson",
            content: input.goal,
            tone: "surface" as const,
          }
        : null,
      input.notes?.length
        ? {
            id: "notes",
            type: "list" as const,
            eyebrow: "Notes",
            title: "Short teaching points for the lesson",
            items: input.notes,
            style: "cards" as const,
          }
        : null,
      input.exercise
        ? {
            id: "exercise",
            type: "callout" as const,
            eyebrow: "Exercise",
            title: "Mandatory practice before the next lesson",
            content: input.exercise,
            tone: "surface" as const,
          }
        : null,
      {
        id: "examples",
        type: "snippets" as const,
        eyebrow: "Examples",
        title: "Code on the left, result on the right",
        intro: defaultExamplesIntro,
        snippets: input.snippets ?? [],
        emptyMessage: defaultEmptyExamplesMessage,
      },
    ].filter(Boolean) as CourseLessonSection[];

  return {
    ...input,
    sections: [
      ...(input.prependSections ?? []),
      ...coreSections,
      ...(input.appendSections ?? []),
    ],
  };
}
