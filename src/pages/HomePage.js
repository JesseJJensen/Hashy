import React from 'react'
import { FeaturedProducts, Hero, Services, Contact } from '../components/index.js'
const HomePage = () => {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Services />
      <Contact />
    </main>
  )
}

export default HomePage
