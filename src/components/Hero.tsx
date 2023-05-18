'use client'

import React from 'react'
// Fonts
import { Playfair_Display } from 'next/font/google'

const pd = Playfair_Display({ subsets: ['latin'] })

function Hero() {
  return (
    <section className="h-[85vh] flex items-center justify-center w-[95%] xl:w-[65%] text-white text-center font-bold">
        <div className='space-y-2 xl:space-y-5'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl'>Développons ensemble</h1>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl pb-3'>votre <span className={`text-[#F9C578] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl ${pd.className}`}>Site Internet</span></h1>
            <span className='text-md font-light'>Service Express 48h - Mayday Web</span>
        </div>
    </section>  
  )
}

export default Hero