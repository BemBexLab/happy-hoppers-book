import HomeHero from '@/components/HomeHero'
import TheHappyHoppersAdventures from '@/components/TheHappyHoppersAdventures'
import React from 'react'

const page = () => {
  return (
    <section className="bg-white px-80 overflow-hidden">
      <HomeHero />
      <TheHappyHoppersAdventures />
    </section>
  )
}

export default page