import Image from "next/image";
import { Quote, Sparkles } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { type HomeCopy } from "@/data/site";

type AboutProps = {
  content: HomeCopy;
};

export function About({ content }: AboutProps) {
  const photoCaption =
    content.locale === "bg"
      ? "Личен контакт, коректна работа и отношение към всеки дом."
      : "Direct contact, reliable work and care for every home.";

  return (
    <section id="about" className="section-shell py-18 sm:py-24">
      <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
        <div className="space-y-6">
          <SectionHeading eyebrow={content.about.eyebrow} title={content.about.title} />

          <figure className="card-surface fade-in overflow-hidden rounded-[var(--radius)] [animation-delay:80ms]">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/about-owner-placeholder.jpg"
                alt={content.locale === "bg" ? "Снимка на майстора" : "Photo of the contractor"}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,23,42,0.5)] via-transparent to-transparent" />
              <figcaption className="absolute inset-x-4 bottom-4 rounded-[1.25rem] bg-[rgba(255,249,241,0.92)] px-4 py-3 text-sm leading-6 text-slate-800 backdrop-blur-sm">
                <p className="font-semibold text-slate-900">{photoCaption}</p>
              </figcaption>
            </div>
          </figure>
        </div>

        <div className="card-surface fade-in rounded-[var(--radius)] p-6 sm:p-8">
          <div className="rounded-[1.5rem] bg-[var(--brand-soft)]/45 p-5 sm:p-6">
            <div className="mb-4 flex items-center gap-3 text-[var(--brand-dark)]">
              <span className="rounded-full bg-white/80 p-2 shadow-sm">
                <Quote className="h-5 w-5" strokeWidth={2} />
              </span>
              <p className="text-sm font-semibold uppercase tracking-[0.18em]">
                {content.locale === "bg" ? "Няколко думи за работата" : "A few words about the work"}
              </p>
            </div>

            <div className="space-y-4 text-lg leading-9 text-[var(--muted)]">
              {content.about.paragraphs.map((paragraph) => (
                <blockquote
                  key={paragraph}
                  className="border-l-2 border-[var(--brand)]/35 pl-4 text-slate-700"
                >
                  {paragraph}
                </blockquote>
              ))}
            </div>
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {content.about.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-3 rounded-[1.25rem] border border-[var(--line)] bg-white px-4 py-4 text-base font-medium leading-7 text-slate-800"
              >
                <span className="mt-0.5 rounded-full bg-[var(--brand-soft)] p-2 text-[var(--brand-dark)]">
                  <Sparkles className="h-4.5 w-4.5" strokeWidth={2} />
                </span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
