import { ArrowRight, CheckCircle, PhoneCall, ShieldCheck, Sparkles } from "lucide-react";

import { business, type HomeCopy } from "@/data/site";

type HeroProps = {
  content: HomeCopy;
};

export function Hero({ content }: HeroProps) {
  const panelTitle =
    content.locale === "bg" ? `${business.city}\nмалки ремонти без излишно чакане` : `${business.city}\nsmall home repairs without delays`;
  const panelText =
    content.locale === "bg"
      ? "Гипсокартон, ламинат, тавани, плочки, ел. и ВиК ремонти, мебели и довършителни задачи за апартаменти."
      : "Drywall, laminate, ceilings, tiles, electrical and plumbing fixes, furniture assembly and practical finishing work for apartments.";
  const featureIcons = [CheckCircle, ShieldCheck, Sparkles];
  const panelEyebrow = content.locale === "bg" ? "Бързо и надеждно" : "Fast and reliable";

  return (
    <section className="section-shell grid gap-10 py-14 sm:py-18 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-24">
      <div className="fade-in">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[var(--brand-dark)]">
          {content.hero.eyebrow}
        </p>
        <h1 className="text-balance max-w-3xl font-serif text-5xl font-semibold leading-none tracking-tight text-slate-950 sm:text-6xl">
          {content.hero.title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]">{content.hero.subtitle}</p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={business.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--brand)] px-6 py-3.5 text-center text-lg font-semibold text-white transition hover:bg-[var(--brand-dark)]"
          >
            <PhoneCall className="h-4.5 w-4.5" strokeWidth={2} />
            {content.hero.primaryCta}
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--line)] bg-white/80 px-6 py-3.5 text-center text-lg font-semibold text-slate-900 transition hover:border-slate-900"
          >
            {content.hero.secondaryCta}
            <ArrowRight className="h-4.5 w-4.5" strokeWidth={2} />
          </a>
        </div>
      </div>

      <div className="fade-in rounded-[calc(var(--radius)+0.5rem)] border border-[var(--line)] bg-[linear-gradient(145deg,#fffaf2,rgba(255,255,255,0.82))] p-5 shadow-[var(--shadow)] [animation-delay:160ms] sm:p-7">
        <div className="rounded-[var(--radius)] border border-white/80 bg-slate-900 p-6 text-white sm:p-8">
          <p className="text-sm uppercase tracking-[0.24em] text-amber-200">{panelEyebrow}</p>
          <p className="mt-4 whitespace-pre-line text-2xl font-semibold leading-tight sm:text-3xl">{panelTitle}</p>
          <p className="mt-4 max-w-md text-base leading-8 text-slate-300">{panelText}</p>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {content.hero.stats.map((stat, index) => {
            const Icon = featureIcons[index] ?? CheckCircle;

            return (
              <article
                key={stat.label}
                className="rounded-[1.25rem] bg-white p-4"
                style={{ animationDelay: `${index * 80 + 220}ms` }}
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 rounded-full bg-[var(--brand-soft)] p-2 text-[var(--brand-dark)]">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <div>
                    <p className="text-lg font-semibold text-slate-900">{stat.value}</p>
                    <p className="mt-2 text-base leading-7 text-[var(--muted)]">{stat.label}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
