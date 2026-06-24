import type { Metadata } from "next";
import Characters from '@/components/Characters'
import HomeHero from '@/components/HomeHero'
import React from 'react'
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Characters",
  description:
    "Meet the lovable Happy Hoppers characters and creatures featured throughout the adventure series.",
  path: "/characters",
});

const page = () => {
  return (
    <section className="mx-auto w-full max-w-[1260px] overflow-hidden bg-white">
      <HomeHero />
      <Characters />
    </section>
  )
}

export default page
