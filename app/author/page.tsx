import type { Metadata } from "next";
import AboutAuthor from '@/components/AboutAuthor'
import HomeHero from '@/components/HomeHero'
import React from 'react'
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Author",
  description:
    "Meet Gina Ballotta, the poet, artist, author, and sculptor behind the Happy Hoppers Books adventure series.",
  path: "/author",
});

const page = () => {
  return (
    <section className="mx-auto w-full max-w-[1260px] overflow-hidden bg-white">
      <HomeHero />
      <AboutAuthor />
    </section>
  )
}

export default page
