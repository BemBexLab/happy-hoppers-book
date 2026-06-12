import HomeHero from '@/components/HomeHero'
import TheHappyHoppersAdventures from '@/components/TheHappyHoppersAdventures'
import React from 'react'

const page = () => {
  return (
    <section className="mx-auto w-full max-w-[1260px] overflow-hidden bg-white">
      <HomeHero />
      <TheHappyHoppersAdventures />
    </section>
  )
}

export default page
