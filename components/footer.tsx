import Link from "next/link";

import { business, type HomeCopy } from "@/data/site";

type FooterProps = {
  content: HomeCopy;
  altHref: string;
  altLabel: string;
};

export function Footer({ content, altHref, altLabel }: FooterProps) {
  return (
    <footer className="border-t border-[var(--line)] py-8">
      <div className="section-shell flex flex-col gap-4 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-slate-900">{business.phoneDisplay}</p>
          <p>{business.city}</p>
        </div>
        <div className="flex items-center gap-4">
          <Link href={altHref} className="font-medium text-slate-700 transition hover:text-slate-950">
            {altLabel}
          </Link>
          <p>
            © {new Date().getFullYear()} {business.owner}. {content.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
