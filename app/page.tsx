import AboutAuthor from "@/components/AboutAuthor";
import Characters from "@/components/Characters";
import Contact from "@/components/Contact";
import Footnote from "@/components/Footnote";
import HappyHoppersBooks from "@/components/HappyHoppersBooks";
import HomeHero from "@/components/HomeHero";
import Info from "@/components/Info";
import Pricing from "@/components/Pricing";
import Quotes from "@/components/Quotes";
import TheHappyHoppers from "@/components/TheHappyHoppers";
import TheHappyHoppersAdventures from "@/components/TheHappyHoppersAdventures";
import ToySculptures from "@/components/ToySculptures";

export default function Home() {
  return (
    <section className="bg-white">
      <HomeHero />
      <HappyHoppersBooks />
      <Characters />
      <TheHappyHoppersAdventures />
      {/* <ToySculptures /> */}
      <AboutAuthor />
      <Quotes />
      <TheHappyHoppers />
      <Pricing />
      <Contact />
      <Info />
      <Footnote />
    </section>
  );
}
