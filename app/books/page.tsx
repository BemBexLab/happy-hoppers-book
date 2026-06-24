import type { Metadata } from "next";
import HomeHero from '@/components/HomeHero'
import TheHappyHoppersAdventures from '@/components/TheHappyHoppersAdventures'
import React from 'react'
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Books",
  description:
    "Browse all Happy Hoppers Books and explore each story in hardcover, video book, ebook, and audio book formats.",
  path: "/books",
});

const page = () => {
  return (
    <section className="mx-auto w-full max-w-[1260px] overflow-hidden bg-white">
      <HomeHero />
      <TheHappyHoppersAdventures />
    </section>
  )
}

export default page
