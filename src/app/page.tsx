'use client'

import React from 'react'
// Components
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Cards from '@/components/Cards'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative h-full flex flex-col items-center justify-center">
      <Header />
      <Hero />
      <Cards />
      <Footer />
    </main>
  )
}
