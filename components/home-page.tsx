import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Gallery } from "@/components/gallery";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { business, getAbsoluteUrl, siteConfig, type HomeCopy } from "@/data/site";

type HomePageProps = {
  content: HomeCopy;
  homeHref: string;
  altHref: string;
  altLabel: string;
};

export function HomePage({ content, homeHref, altHref, altLabel }: HomePageProps) {
  const currentUrl = getAbsoluteUrl(homeHref);
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteConfig.siteUrl}/#website`,
        url: siteConfig.siteUrl,
        name: siteConfig.siteName,
        inLanguage: ["bg", "en"],
      },
      {
        "@type": "LocalBusiness",
        "@id": `${currentUrl}#business`,
        name: content.locale === "bg" ? siteConfig.siteNameBg : business.name,
        alternateName: business.owner,
        description: content.seo.description,
        url: currentUrl,
        image: getAbsoluteUrl("/about-owner-placeholder.jpg"),
        telephone: business.phoneDisplay,
        areaServed: {
          "@type": "City",
          name: business.city,
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: business.city,
          addressCountry: siteConfig.countryCode,
        },
        availableLanguage: ["bg", "en"],
        priceRange: "$$",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: content.services.title,
          itemListElement: content.services.items.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.title,
              description: service.description,
              areaServed: business.city,
            },
          })),
        },
      },
      {
        "@type": "WebPage",
        "@id": `${currentUrl}#webpage`,
        url: currentUrl,
        name: content.seo.title,
        description: content.seo.description,
        inLanguage: content.locale,
        isPartOf: {
          "@id": `${siteConfig.siteUrl}/#website`,
        },
        about: {
          "@id": `${currentUrl}#business`,
        },
      },
    ],
  };

  return (
    <>
      <Header content={content} homeHref={homeHref} altHref={altHref} altLabel={altLabel} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <main>
        <Hero content={content} />
        <Services content={content} />
        <Gallery content={content} />
        <About content={content} />
        <Contact content={content} />
      </main>
      <Footer content={content} altHref={altHref} altLabel={altLabel} />
    </>
  );
}
