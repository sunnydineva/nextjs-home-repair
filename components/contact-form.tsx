"use client";

import Script from "next/script";
import { useState } from "react";

import { business, type HomeCopy } from "@/data/site";

declare global {
  interface Window {
    grecaptcha?: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

type ContactFormProps = {
  content: HomeCopy;
};

const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

function waitForRecaptcha(timeoutMs = 5000) {
  return new Promise<NonNullable<typeof window.grecaptcha>>((resolve, reject) => {
    const startedAt = Date.now();

    const check = () => {
      if (window.grecaptcha) {
        resolve(window.grecaptcha);
        return;
      }

      if (Date.now() - startedAt >= timeoutMs) {
        reject(new Error("grecaptcha not loaded"));
        return;
      }

      window.setTimeout(check, 150);
    };

    check();
  });
}

export function ContactForm({ content }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [message, setMessage] = useState("");
  const copy =
    content.locale === "bg"
      ? {
          missingKey: "reCAPTCHA не е настроен коректно. Добавете site key и опитайте отново.",
          missingEndpoint: "Formspree endpoint липсва. Добавете NEXT_PUBLIC_FORMSPREE_ENDPOINT.",
          loading: "reCAPTCHA още се зарежда. Изчакайте секунда и опитайте отново.",
          sending: "Изпращане...",
          error: "Неуспешно изпращане. Моля, опитайте отново или се обадете по телефона.",
          subject: "Ново запитване от сайта",
        }
      : {
          missingKey: "reCAPTCHA is not configured correctly. Add the site key and try again.",
          missingEndpoint: "Formspree endpoint is missing. Add NEXT_PUBLIC_FORMSPREE_ENDPOINT.",
          loading: "reCAPTCHA is still loading. Wait a second and try again.",
          sending: "Sending...",
          error: "Submission failed. Please try again or call by phone.",
          subject: "New website inquiry",
        };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!siteKey) {
      setStatus("error");
      setMessage(copy.missingKey);
      return;
    }

    if (!business.formAction) {
      setStatus("error");
      setMessage(copy.missingEndpoint);
      return;
    }

    setStatus("submitting");
    setMessage("");

    try {
      const form = event.currentTarget;
      const grecaptcha = await waitForRecaptcha();

      const token = await new Promise<string>((resolve, reject) => {
        grecaptcha.ready(() => {
          grecaptcha.execute(siteKey, { action: "submit" }).then(resolve).catch(reject);
        });
      });

      const recaptchaField = form.elements.namedItem("g-recaptcha-response");
      if (recaptchaField instanceof HTMLInputElement) {
        recaptchaField.value = token;
      }

      const subjectField = form.elements.namedItem("_subject");
      if (subjectField instanceof HTMLInputElement) {
        subjectField.value = copy.subject;
      }

      form.submit();
    } catch (error) {
      if (error instanceof Error && error.message === "grecaptcha not loaded") {
        setStatus("error");
        setMessage(copy.loading);
        return;
      }

      setStatus("error");
      setMessage(copy.error);
    }
  }

  return (
    <>
      {siteKey ? (
        <Script src={`https://www.google.com/recaptcha/api.js?render=${siteKey}`} strategy="afterInteractive" />
      ) : null}

      <form action={business.formAction} method="POST" onSubmit={handleSubmit} className="mt-8 grid gap-4">
        <label className="grid gap-2">
          <span className="text-base font-medium text-slate-800">{content.contact.fields.name}</span>
          <input
            type="text"
            name="name"
            required
            className="rounded-2xl border border-[var(--line)] bg-white px-4 py-3 text-base outline-none ring-0 transition placeholder:text-slate-400 focus:border-slate-900"
            placeholder={content.contact.fields.name}
          />
        </label>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2">
            <span className="text-base font-medium text-slate-800">{content.contact.fields.phone}</span>
            <input
              type="tel"
              name="phone"
              required
              className="rounded-2xl border border-[var(--line)] bg-white px-4 py-3 text-base outline-none transition placeholder:text-slate-400 focus:border-slate-900"
              placeholder={business.phoneDisplay}
            />
          </label>

          <label className="grid gap-2">
            <span className="text-base font-medium text-slate-800">{content.contact.fields.service}</span>
            <select
              name="service"
              className="rounded-2xl border border-[var(--line)] bg-white px-4 py-3 text-base outline-none transition focus:border-slate-900"
              defaultValue=""
            >
              <option value="" disabled>
                {content.contact.fields.service}
              </option>
              {content.services.items.map((service) => (
                <option key={service.title} value={service.title}>
                  {service.title}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label className="grid gap-2">
          <span className="text-base font-medium text-slate-800">{content.contact.fields.message}</span>
          <textarea
            name="message"
            rows={5}
            required
            className="rounded-2xl border border-[var(--line)] bg-white px-4 py-3 text-base outline-none transition placeholder:text-slate-400 focus:border-slate-900"
            placeholder={content.contact.fields.message}
          />
        </label>

        <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
        <input type="hidden" name="_subject" value={copy.subject} />
        <input type="hidden" name="g-recaptcha-response" value="" />

        <button
          type="submit"
          disabled={status === "submitting"}
          className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-[var(--accent)] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        >
          {status === "submitting" ? copy.sending : content.contact.fields.submit}
        </button>

        {message ? (
          <p className="text-base text-red-700">{message}</p>
        ) : null}
      </form>
    </>
  );
}
