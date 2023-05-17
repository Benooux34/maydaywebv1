'use client'

import React from 'react'
import Link from 'next/link'
// Icons
import { FiArrowUpRight } from 'react-icons/fi'
// Fonts
import { Playfair_Display } from 'next/font/google'

const pd = Playfair_Display({ subsets: ['latin'] })

function Header() {
  return (
    <header className="fixed top-10 h-[50px] w-[90vw] md:w-[80vw] bg-[#14787cf6] flex items-center justify-between rounded-full px-7 z-50">
        <Link href="./">
            <div className='text-white font-bold space-x-1'>
                <span>Mayday</span>
                <span className={`${pd.className}`}>Web</span>
            </div>
        </Link>
        <div className='flex items-center justify-center text-white text-[14px] font-bold space-x-14'>
            <Link className='hidden lg:flex' href="./">
                <span>Accueil</span>            
            </Link>
            <Link className='hidden lg:flex' href="/about">
                <span>À propos de nous</span>            
            </Link>
            <Link className='hidden lg:flex' href="/projets">
                <span>Nos projets</span>
            </Link>
            <Link href="/contact">
                <div className='flex items-center justify-center bg-[#F9C578] text-[#0D5B5F] rounded-full px-4 py-1'>
                    <span className='text-[12px] lg:text-[14px] font-bold'>Contact</span>
                    <FiArrowUpRight className='h-[17px] w-[17px]' />
                </div>
            </Link>
        </div>
    </header>
  )
}

export default Header