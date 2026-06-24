import type { Metadata } from "next";
import HomeHero from '@/components/HomeHero'
import ToySculptures from '@/components/ToySculptures'
import React from 'react'
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Toy Sculptures",
  description:
    "Explore Happy Hoppers toy sculptures and creative character-inspired artwork from Gina Ballotta.",
  path: "/toy-sculptures",
});

const page = () => {
  return (
    <section className="mx-auto w-full max-w-[1260px] overflow-hidden bg-white">
      <HomeHero />
      <ToySculptures />
    </section>
  )
}

export default page
