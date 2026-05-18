import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-5 text-center md:px-8">
      <span className="rounded-full border border-[var(--color-line)] bg-white px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
        404
      </span>
      <h1 className="mt-6 font-display text-6xl leading-none text-[var(--color-ink)]">
        This page drifted off the main story.
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-muted)]">
        Head back to the homepage, projects, or labs to continue through the portfolio.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          to="/"
          className="rounded-full bg-[var(--color-ink)] px-5 py-3 text-sm text-[var(--color-bg)]"
        >
          Home
        </Link>
        <Link
          to="/labs/motion"
          className="rounded-full border border-[var(--color-line)] bg-white px-5 py-3 text-sm text-[var(--color-ink)]"
        >
          Labs
        </Link>
      </div>
    </div>
  );
}
