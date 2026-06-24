import type { Metadata } from "next";
import HomeHero from '@/components/HomeHero'
import Info from '@/components/Info'
import React from 'react'
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Info",
  description:
    "Find Happy Hoppers Books website, email, and social links along with more information about the series.",
  path: "/info",
});

const page = () => {
  return (
    <section>
      <HomeHero />
      <Info />
    </section>
  )
}

export default page
