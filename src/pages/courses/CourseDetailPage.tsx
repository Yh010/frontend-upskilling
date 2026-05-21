import { Navigate, useParams, useSearchParams } from "react-router";
import CourseLessonTemplate from "../../components/courses/CourseLessonTemplate";
import { getCourseBySlug, getCourseLessonBySlug } from "../../content/courses";

export default function CourseDetailPage() {
  const { slug } = useParams();
  const [searchParams] = useSearchParams();
  const course = getCourseBySlug(slug);

  if (!course) {
    return <Navigate to="/courses" replace />;
  }

  const activeLesson = getCourseLessonBySlug(course, searchParams.get("lesson") ?? undefined);
  const activeModule =
    course.modules.find((module) =>
      module.lessons.some((lesson) => lesson.slug === activeLesson.slug),
    ) ?? course.modules[0];
  const allLessons = course.modules.flatMap((module) => module.lessons);
  const lessonIndex = allLessons.findIndex((lesson) => lesson.slug === activeLesson.slug);
  const nextLesson = allLessons[lessonIndex + 1];

  return (
    <CourseLessonTemplate
      course={course}
      activeLesson={activeLesson}
      activeModule={activeModule}
      nextLesson={nextLesson}
    />
  );
}
