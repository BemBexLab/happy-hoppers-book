import HomeHero from '@/components/HomeHero'
import Quotes from '@/components/Quotes'
import React from 'react'

const page = () => {
  return (
    <section className="mx-auto w-full max-w-[1260px] overflow-hidden bg-white">
      <HomeHero />
      <Quotes />
    </section>
  )
}

export default page
