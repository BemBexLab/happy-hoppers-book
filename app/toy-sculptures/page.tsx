import HomeHero from '@/components/HomeHero'
import ToySculptures from '@/components/ToySculptures'
import React from 'react'

const page = () => {
  return (
    <section className="mx-auto w-full max-w-[1260px] overflow-hidden bg-white">
      <HomeHero />
      <ToySculptures />
    </section>
  )
}

export default page
