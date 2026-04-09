import type { MetadataRoute } from "next";

import { bgContent, enContent, getAbsoluteUrl } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: getAbsoluteUrl(bgContent.seo.path),
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          bg: getAbsoluteUrl(bgContent.seo.path),
          en: getAbsoluteUrl(enContent.seo.path),
        },
      },
    },
    {
      url: getAbsoluteUrl(enContent.seo.path),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          bg: getAbsoluteUrl(bgContent.seo.path),
          en: getAbsoluteUrl(enContent.seo.path),
        },
      },
    },
  ];
}
