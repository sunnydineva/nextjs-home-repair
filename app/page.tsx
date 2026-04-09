import type { Metadata } from "next";

import { HomePage } from "@/components/home-page";
import { bgContent, getAbsoluteUrl, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: bgContent.seo.title,
  description: bgContent.seo.description,
  keywords: bgContent.seo.keywords,
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
    url: getAbsoluteUrl(bgContent.seo.path),
    locale: "bg_BG",
    type: "website",
    siteName: siteConfig.siteName,
    images: [
      {
        url: getAbsoluteUrl("/about-owner-placeholder.jpg"),
        width: 1200,
        height: 630,
        alt: "Varna Maistor in Varna",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: bgContent.seo.title,
    description: bgContent.seo.description,
    images: [getAbsoluteUrl("/about-owner-placeholder.jpg")],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <HomePage content={bgContent} homeHref="/" altHref="/en" altLabel="EN" />;
}
