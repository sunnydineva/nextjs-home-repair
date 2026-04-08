import Image from "next/image";
import { Grid2X2, Hammer, Layers, Plug, Wrench } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { serviceMedia, type HomeCopy } from "@/data/site";

type ServicesProps = {
  content: HomeCopy;
};

export function Services({ content }: ServicesProps) {
  const iconMap = {
    "Гипсокартон": Layers,
    Drywall: Layers,
    Ламинат: Grid2X2,
    "Laminate flooring": Grid2X2,
    "Окачени тавани": Layers,
    "Suspended ceilings": Layers,
    Ламперия: Grid2X2,
    "Wall paneling": Grid2X2,
    "Плочки и гранитогрес": Grid2X2,
    "Tiles and granite": Grid2X2,
    "Ел. ремонти": Plug,
    "Electrical repairs": Plug,
    "ВиК ремонти": Wrench,
    "Plumbing repairs": Wrench,
    "Сглобяване на мебели": Hammer,
    "Furniture assembly": Hammer,
    "Дребни ремонти": Hammer,
    "Small home repairs": Hammer,
  } as const;
  const getIcon = (title: string) => iconMap[title as keyof typeof iconMap] ?? Hammer;

  return (
    <section id="services" className="section-shell py-18 sm:py-24">
      <SectionHeading
        eyebrow={content.services.eyebrow}
        title={content.services.title}
        description={content.services.description}
      />

      <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {content.services.items.map((service, index) => {
          const Icon = getIcon(service.title);
          const media = serviceMedia[service.id];
          const imageAlt = content.locale === "bg" ? media.altBg : media.altEn;

          return (
            <article
              key={service.title}
              className="group card-surface fade-in overflow-hidden rounded-[var(--radius)]"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={media.src}
                  alt={imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,23,42,0.72)] via-[rgba(15,23,42,0.18)] to-transparent" />
                <div className="absolute left-4 right-4 top-4 flex items-start justify-between gap-4">
                  <span className="rounded-2xl bg-[rgba(255,247,237,0.92)] p-3 text-[var(--brand-dark)] shadow-sm backdrop-blur-sm">
                    <Icon className="h-6.5 w-6.5" strokeWidth={1.9} />
                  </span>
                  <span className="rounded-full bg-[rgba(255,247,237,0.92)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-dark)] shadow-sm backdrop-blur-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="absolute inset-x-4 bottom-4">
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-base leading-8 text-[var(--muted)]">{service.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {service.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="rounded-full border border-[var(--line)] bg-white px-3 py-2 text-sm font-semibold uppercase tracking-[0.14em] text-slate-700"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
