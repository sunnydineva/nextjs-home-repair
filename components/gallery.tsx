import Image from "next/image";

import { SectionHeading } from "@/components/section-heading";
import { galleryItems, type HomeCopy } from "@/data/site";

type GalleryProps = {
  content: HomeCopy;
};

export function Gallery({ content }: GalleryProps) {
  const badge = content.locale === "bg" ? "Преди / След" : "Before / After";

  return (
    <section id="gallery" aria-labelledby="gallery-title" className="section-shell py-18 sm:py-24">
      <SectionHeading
        eyebrow={content.gallery.eyebrow}
        title={content.gallery.title}
        description={content.gallery.description}
        align="center"
        titleId="gallery-title"
      />

      <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {galleryItems.map((item, index) => {
          const tag = content.locale === "bg" ? item.tagBg : item.tagEn;
          const alt = content.locale === "bg" ? item.altBg : item.altEn;

          return (
            <figure
              key={item.src}
              className="card-surface fade-in overflow-hidden rounded-[var(--radius)]"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={item.src} alt={alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <figcaption className="flex items-center justify-between gap-4 p-4">
                <span className="text-sm font-semibold text-slate-900">{tag}</span>
                <span className="rounded-full bg-[var(--brand-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-dark)]">
                  {badge}
                </span>
              </figcaption>
            </figure>
          );
        })}
      </div>
    </section>
  );
}
