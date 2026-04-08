import type { Metadata } from "next";

import { HomePage } from "@/components/home-page";
import { bgContent } from "@/data/site";

export const metadata: Metadata = {
  title: bgContent.seo.title,
  description: bgContent.seo.description,
  alternates: {
    canonical: bgContent.seo.path,
    languages: {
      bg: "/",
      en: "/en",
    },
  },
  openGraph: {
    title: bgContent.seo.title,
    description: bgContent.seo.description,
    url: bgContent.seo.path,
    locale: "bg_BG",
    type: "website",
  },
};

export default function Page() {
  return <HomePage content={bgContent} homeHref="/" altHref="/en" altLabel="EN" />;
}
