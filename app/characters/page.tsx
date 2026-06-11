import Characters from '@/components/Characters'
import HomeHero from '@/components/HomeHero'
import React from 'react'

const page = () => {
  return (
    <section className="bg-white px-80 overflow-hidden">
      <HomeHero />
      <Characters />
    </section>
  )
}

export default page