'use client'

import React, { useState } from 'react'
import Link from 'next/link'
// Icons
import { FiArrowUpRight } from 'react-icons/fi'
// Animation
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
// Fonts
import { Playfair_Display } from 'next/font/google'

const pd = Playfair_Display({ subsets: ['latin'] })

function Header() {

    const { scrollY } = useScroll()
    const [previous, setPrevious] = useState<number>(0)
    const [next, setNext] = useState<number>(0)
    const [animation, setAnimation] = useState<boolean>(false)

    useMotionValueEvent(scrollY, "change", (latest) => {
        setNext(latest)
        setPrevious(next)
        
        if (previous < next)
            setAnimation(true)
        else if (previous > next)
            setAnimation(false)
        else if (latest < 20)
            setAnimation(false)
    })

  return (
    <motion.header 
        className="fixed top-10 h-[50px] w-[90vw] md:w-[85vw] bg-[#14787cf6] flex items-center justify-between rounded-full px-7 z-50"
        initial={{ y: "0vh" }}
        animate={animation ? { y: "-20vh" } : { y: "0vh" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
    >
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
    </motion.header>
  )
}

export default Header