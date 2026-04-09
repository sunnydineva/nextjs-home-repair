import type { Metadata } from "next";

import { HomePage } from "@/components/home-page";
import { enContent, getAbsoluteUrl, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: enContent.seo.title,
  description: enContent.seo.description,
  keywords: enContent.seo.keywords,
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
    url: getAbsoluteUrl(enContent.seo.path),
    locale: "en_US",
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
    title: enContent.seo.title,
    description: enContent.seo.description,
    images: [getAbsoluteUrl("/about-owner-placeholder.jpg")],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EnglishPage() {
  return <HomePage content={enContent} homeHref="/en" altHref="/" altLabel="BG" />;
}
