import type { Metadata } from "next";
import Cart from "@/components/Cart";
import HomeHero from "@/components/HomeHero";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Cart",
  description: "Review the books in your Happy Hoppers cart and continue to checkout when you are ready.",
  path: "/cart",
  robots: {
    index: false,
    follow: false,
  },
});

const Page = () => {
  return (
    <section className="mx-auto w-full max-w-[1260px] overflow-hidden bg-white">
      <HomeHero />
      <Cart />
    </section>
  );
};

export default Page;
