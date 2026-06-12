import Cart from "@/components/Cart";
import HomeHero from "@/components/HomeHero";

const Page = () => {
  return (
    <section className="mx-auto w-full max-w-[1260px] overflow-hidden bg-white">
      <HomeHero />
      <Cart />
    </section>
  );
};

export default Page;
