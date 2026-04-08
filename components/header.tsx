import Link from "next/link";

import { business, type HomeCopy } from "@/data/site";

type HeaderProps = {
  content: HomeCopy;
  homeHref: string;
  altHref: string;
  altLabel: string;
};

export function Header({ content, homeHref, altHref, altLabel }: HeaderProps) {
  const navItems = [
    { href: "#services", label: content.nav.services },
    { href: "#gallery", label: content.nav.gallery },
    { href: "#about", label: content.nav.about },
    { href: "#contact", label: content.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[rgba(248,245,239,0.88)] backdrop-blur-xl">
      <div className="section-shell py-3">
        <div className="flex min-h-18 items-center justify-between gap-4">
          <Link href={homeHref} className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-900 text-sm font-semibold text-white">
              TR
            </span>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-dark)]">
                {business.city}
              </p>
              <p className="text-lg font-semibold text-slate-900">{business.owner}</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-base font-medium text-slate-700 transition hover:text-slate-950">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href={altHref}
              className="rounded-full border border-[var(--line)] px-3 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
            >
              {altLabel}
            </Link>
            <a
              href={business.phoneHref}
              className="rounded-full bg-slate-900 px-4 py-2.5 text-base font-semibold text-white transition hover:bg-[var(--brand-dark)]"
            >
              {content.hero.primaryCta}
            </a>
          </div>
        </div>

        <nav className="-mb-1 mt-3 flex gap-2 overflow-x-auto pb-1 md:hidden" aria-label="Primary mobile">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full border border-[var(--line)] bg-white/80 px-3 py-2 text-base font-medium text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
