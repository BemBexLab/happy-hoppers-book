import type { Metadata } from "next";
import HomeHero from '@/components/HomeHero'
import Pricing from '@/components/Pricing'
import TheHappyHoppers from '@/components/TheHappyHoppers'
import React from 'react'
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Volume Discounts",
  description:
    "Buy the complete series of 8 Happy Hoppers Books and receive a 10% volume discount across available formats.",
  path: "/volume-discounts",
});

const page = () => {
  return (
    <section className="mx-auto w-full max-w-[1260px] overflow-hidden bg-white">
      <HomeHero />
      <TheHappyHoppers />
      <Pricing />
    </section>
  )
}

export default page
