interface SectionIntroProps {
  eyebrow: string;
  title: string;
  body: string;
  align?: "left" | "center";
}

export default function SectionIntro({
  eyebrow,
  title,
  body,
  align = "left",
}: SectionIntroProps) {
  const alignment =
    align === "center"
      ? "mx-auto max-w-3xl text-center items-center"
      : "max-w-2xl";

  return (
    <div className={`flex flex-col gap-4 ${alignment}`}>
      <span className="inline-flex w-fit items-center rounded-full border border-[var(--color-line)] bg-white/80 px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
        {eyebrow}
      </span>
      <h2 className="font-display text-4xl leading-none text-[var(--color-ink)] md:text-5xl">
        {title}
      </h2>
      <p className="max-w-2xl text-sm leading-7 text-[var(--color-muted)] md:text-base">
        {body}
      </p>
    </div>
  );
}
