import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";

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
  metadataBase: new URL("https://tatko-repair.example"),
  title: "Tatko Repair",
  description: "Small home repair and finishing services in Varna.",
  applicationName: "Tatko Repair",
  alternates: {
    languages: {
      bg: "/",
      en: "/en",
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
