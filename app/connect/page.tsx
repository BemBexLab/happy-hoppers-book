import Contact from '@/components/Contact'
import HomeHero from '@/components/HomeHero'
import React from 'react'

const page = () => {
  return (
    <section className="mx-auto w-full max-w-[1260px] overflow-hidden bg-white">
      <HomeHero />
      <Contact />
    </section>
  )
}

export default page
