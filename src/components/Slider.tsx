'use client'

import React from 'react'
// Animation
import { motion } from 'framer-motion'
// Icons - Logo
import { IoLogoWordpress, IoLogoReact, IoLogoJavascript } from 'react-icons/io5'
import { SiAdobe, SiSass, SiShopify, SiWebflow } from 'react-icons/si'
import { FaFigma } from 'react-icons/fa'
// Font
import { Playfair_Display } from 'next/font/google'

const pd = Playfair_Display({ subsets: ['latin'] })

function Slider() {
  return (
    <section className='flex flex-col items-center justify-center mx-5 md:mx-[5%] my-[5%]'>
        <div className='flex items-center justify-center space-x-1 md:space-x-2'>
            <h2 className='text-white text-md md:text-3xl'>Ce que nous utilisons</h2>
            <span className={`text-[#F9C578] text-md md:text-3xl ${pd.className}`}>(Langages, Plateformes, ...)</span>
        </div>

        <div className='bg-[#14787c] h-[8vh] md:h-[15vh] w-[85vw] flex items-center justify-between mt-[2vh] md:mt-[5vh] rounded-full px-5 md:px-10'>
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                <IoLogoWordpress className="h-5 w-5 md:h-14 md:w-14 text-[#F9C578]" />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <SiWebflow className="h-5 w-5 md:h-14 md:w-14 text-[#F9C578]" />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <IoLogoReact className="h-5 w-5 md:h-14 md:w-14 text-[#F9C578]" />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <SiShopify className="h-5 w-5 md:h-14 md:w-14 text-[#F9C578]" />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                <IoLogoJavascript className="h-5 w-5 md:h-14 md:w-14 text-[#F9C578]" />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                <SiAdobe className="h-5 w-5 md:h-14 md:w-14 text-[#F9C578]" />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
            >
                <SiSass className="h-5 w-5 md:h-14 md:w-14 text-[#F9C578]" />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
            >
                <FaFigma className="h-5 w-5 md:h-14 md:w-14 text-[#F9C578]" />
            </motion.div>
        </div>
    </section>
  )
}

export default Slider