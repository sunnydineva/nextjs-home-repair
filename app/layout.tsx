import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";

import { business, siteConfig } from "@/data/site";

import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.siteName} | Home Repairs in ${business.city}`,
    template: `%s | ${siteConfig.siteName}`,
  },
  description: "Small home repair and finishing services in Varna.",
  applicationName: siteConfig.siteName,
  keywords: [
    "Varna Maistor",
    "Варна Майстор",
    "home repairs Varna",
    "ремонти Варна",
    "handyman Varna",
  ],
  category: "home services",
  alternates: {
    languages: {
      bg: "/",
      en: "/en",
    },
  },
  openGraph: {
    type: "website",
    siteName: siteConfig.siteName,
    locale: "bg_BG",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary",
    title: siteConfig.siteName,
    description: "Small home repair and finishing services in Varna.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="bg">
      <body className={`${manrope.variable} ${cormorant.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
