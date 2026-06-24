import type { Metadata } from "next";
import HomeHero from '@/components/HomeHero'
import Quotes from '@/components/Quotes'
import React from 'react'
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Quotes",
  description:
    "Read memorable quotes and messages inspired by the Happy Hoppers Books adventure series.",
  path: "/quotes",
});

const page = () => {
  return (
    <section className="mx-auto w-full max-w-[1260px] overflow-hidden bg-white">
      <HomeHero />
      <Quotes />
    </section>
  )
}

export default page
