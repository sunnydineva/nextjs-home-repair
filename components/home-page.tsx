import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Gallery } from "@/components/gallery";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { type HomeCopy } from "@/data/site";

type HomePageProps = {
  content: HomeCopy;
  homeHref: string;
  altHref: string;
  altLabel: string;
};

export function HomePage({ content, homeHref, altHref, altLabel }: HomePageProps) {
  return (
    <>
      <Header content={content} homeHref={homeHref} altHref={altHref} altLabel={altLabel} />
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
