import AboutAuthor from "@/components/AboutAuthor";
import Characters from "@/components/Characters";
import Contact from "@/components/Contact";
import HappyHoppersBooks from "@/components/HappyHoppersBooks";
import Info from "@/components/Info";
import Pricing from "@/components/Pricing";
import Quotes from "@/components/Quotes";
import TheHappyHoppers from "@/components/TheHappyHoppers";
import TheHappyHoppersAdventures from "@/components/TheHappyHoppersAdventures";
import ToySculptures from "@/components/ToySculptures";

export default function Home() {
  return (
    <section className="bg-white">
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
  );
}
