import HomeHero from '@/components/HomeHero'
import Pricing from '@/components/Pricing'
import TheHappyHoppers from '@/components/TheHappyHoppers'
import React from 'react'

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
