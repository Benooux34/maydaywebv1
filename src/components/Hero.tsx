'use client'

import React from 'react'
// Fonts
import { Playfair_Display } from 'next/font/google'

const pd = Playfair_Display({ subsets: ['latin'] })

function Hero() {
  return (
    <section className="h-[85vh] flex items-center justify-center w-[90%] xl:w-[65%] text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center font-bold">
        <div className='space-y-2 xl:space-y-5'>
            <h1>Développons ensemble</h1>
            <h1>votre <span className={`text-[#F9C578] ${pd.className}`}>Site Internet</span></h1>
        </div>
    </section>  
  )
}

export default Hero