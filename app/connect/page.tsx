import type { Metadata } from "next";
import Contact from '@/components/Contact'
import HomeHero from '@/components/HomeHero'
import React from 'react'
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Connect",
  description:
    "Contact Happy Hoppers Books to connect with Gina Ballotta and learn more about the book series.",
  path: "/connect",
});

const page = () => {
  return (
    <section className="mx-auto w-full max-w-[1260px] overflow-hidden bg-white">
      <HomeHero />
      <Contact />
    </section>
  )
}

export default page
