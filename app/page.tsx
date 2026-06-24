import type { Metadata } from "next";
import AboutAuthor from "@/components/AboutAuthor";
import Characters from "@/components/Characters";
import Contact from "@/components/Contact";
import HappyHoppersBooks from "@/components/HappyHoppersBooks";
import HomeHero from "@/components/HomeHero";
import Info from "@/components/Info";
import Pricing from "@/components/Pricing";
import Quotes from "@/components/Quotes";
import TheHappyHoppers from "@/components/TheHappyHoppers";
import TheHappyHoppersAdventures from "@/components/TheHappyHoppersAdventures";
import ToySculptures from "@/components/ToySculptures";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Home",
  description:
    "Discover Happy Hoppers Books, an adventure-filled children's book series by Gina Ballotta with books, characters, quotes, volume discounts, and more.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <section className="mx-auto w-full max-w-[1260px] overflow-hidden bg-white">
        <HomeHero />
        <HappyHoppersBooks />
        <div className="h-5"></div>
        <Characters />
        <TheHappyHoppersAdventures />
        {/* <ToySculptures /> */}
        <AboutAuthor />
        <Quotes />
        <TheHappyHoppers />
        <Pricing />
        <Contact />
        <Info />
      </section>
    </>
  );
}
