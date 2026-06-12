import AboutAuthor from '@/components/AboutAuthor'
import HomeHero from '@/components/HomeHero'
import React from 'react'

const page = () => {
  return (
    <section className="mx-auto w-full max-w-[1260px] overflow-hidden bg-white">
      <HomeHero />
      <AboutAuthor />
    </section>
  )
}

export default page
