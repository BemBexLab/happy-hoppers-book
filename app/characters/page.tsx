import Characters from '@/components/Characters'
import HomeHero from '@/components/HomeHero'
import React from 'react'

const page = () => {
  return (
    <section className="mx-auto w-full max-w-[1260px] overflow-hidden bg-white">
      <HomeHero />
      <Characters />
    </section>
  )
}

export default page
