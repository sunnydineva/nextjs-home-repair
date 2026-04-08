type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl";

  return (
    <div className={`${alignment} fade-in`}>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[var(--brand-dark)]">
        {eyebrow}
      </p>
      <h2 className="text-balance font-serif text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {description ? <p className="mt-4 text-lg leading-8 text-[var(--muted)]">{description}</p> : null}
    </div>
  );
}
