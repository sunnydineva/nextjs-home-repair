import { MapPin, MessageCircle, Phone } from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { business, type HomeCopy } from "@/data/site";

type ContactProps = {
  content: HomeCopy;
};

export function Contact({ content }: ContactProps) {
  return (
    <section id="contact" className="section-shell py-18 sm:py-24">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="fade-in rounded-[calc(var(--radius)+0.25rem)] bg-slate-900 p-8 text-white shadow-[var(--shadow)]">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-200">{content.contact.eyebrow}</p>
          <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">{content.contact.title}</h2>
          <p className="mt-4 max-w-lg text-lg leading-9 text-slate-300">{content.contact.description}</p>

          <div className="mt-8 space-y-3">
            <a
              href={business.phoneHref}
              className="flex items-center justify-between rounded-[1.25rem] bg-white/8 px-4 py-4 text-base font-medium transition hover:bg-white/12"
            >
              <span className="flex items-center gap-2">
                <Phone className="h-4.5 w-4.5" strokeWidth={2} />
                {content.contact.callLabel}
              </span>
              <span className="font-semibold">{business.phoneDisplay}</span>
            </a>
            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href={business.viberHref}
                className="inline-flex items-center justify-center gap-2 rounded-[1.25rem] bg-white px-4 py-4 text-center text-base font-semibold text-slate-900 transition hover:bg-amber-50"
              >
                <MessageCircle className="h-4.5 w-4.5" strokeWidth={2} />
                Viber
              </a>
              <a
                href={business.whatsappHref}
                className="inline-flex items-center justify-center gap-2 rounded-[1.25rem] bg-[var(--brand)] px-4 py-4 text-center text-base font-semibold text-white transition hover:bg-[var(--brand-dark)]"
              >
                <MessageCircle className="h-4.5 w-4.5" strokeWidth={2} />
                WhatsApp
              </a>
            </div>
            <div className="flex items-center gap-2 px-1 text-base text-slate-300">
              <MapPin className="h-4.5 w-4.5" strokeWidth={2} />
              <span>{business.city}</span>
            </div>
          </div>
        </div>

        <div className="card-surface fade-in rounded-[calc(var(--radius)+0.25rem)] p-6 [animation-delay:120ms] sm:p-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-slate-950">{content.contact.formTitle}</h3>
              <p className="mt-2 max-w-xl text-base leading-7 text-[var(--muted)]">{content.contact.formHint}</p>
            </div>
            <p className="text-base font-medium text-slate-600">{content.contact.messageLabel}</p>
          </div>

          <ContactForm content={content} />
        </div>
      </div>
    </section>
  );
}
