import type { Metadata } from "next";

import { HomePage } from "@/components/home-page";
import { enContent } from "@/data/site";

export const metadata: Metadata = {
  title: enContent.seo.title,
  description: enContent.seo.description,
  alternates: {
    canonical: enContent.seo.path,
    languages: {
      bg: "/",
      en: "/en",
    },
  },
  openGraph: {
    title: enContent.seo.title,
    description: enContent.seo.description,
    url: enContent.seo.path,
    locale: "en_US",
    type: "website",
  },
};

export default function EnglishPage() {
  return <HomePage content={enContent} homeHref="/en" altHref="/" altLabel="BG" />;
}
