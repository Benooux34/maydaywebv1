'use client'

import React, { useState } from 'react'
// Animation
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'

function Cards() {
    // Switch Mode
    const [active, setActive] = useState<boolean>(false)
    // Card Scroll Effect
    const [scroll, setScroll] = useState<boolean>(false)
    const [count, setCount] = useState<number>(0)
    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, "change", (latest) => {
        setCount((latest - 0.5) / 5)

        if (count > 60)
            setScroll(true)
        else if (count < 60)
            setScroll(false)
    })

  return (
    <section className="h-[200vh] md:h-[70vh] w-full flex items-center justify-center -mt-20 mb-20">
        <div className="h-full w-full flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-10 lg:space-x-20 space-y-10 md:space-y-0 mx-10 xl:mx-[8%]">
            <motion.div 
                className="relative bg-[#14787C] h-full w-[90%] md:w-1/3 rounded-xl"
                initial={{ y: "12%" }}
            >
                <div className='absolute top-5 w-full flex items-center justify-between px-5'>
                    <div className='flex items-center justify-center space-x-3'>
                        <h2 className='text-left text-white text-2xl md:text-4xl'>Tarif</h2>
                        <span className={active ? 'text-left text-[#F9C578] text-xl md:text-3xl' : 'hidden'}>GOLD</span>
                    </div>
                    <button onClick={() => setActive(!active)} className='text-white text-md'>Switch Mode</button>
                </div>

                <div className='absolute bottom-20 w-full flex items-center justify-center'>
                    {active ?
                        <div className='flex items-center justify-center space-x-4'>
                            <span className='text-[#F9C578] text-2xl md:text-4xl'>19.99€</span>
                            <span className='text-white text-lg md:text-xl font-light'>par mois</span>
                        </div>
                        :
                        <div className='flex items-center justify-center space-x-4'>
                            <span className='text-white text-2xl md:text-4xl'>99.99€</span>
                            <span className='text-white text-lg md:text-xl font-light'>pour 1 site</span>
                        </div>
                    }
                </div>

                <div className='absolute bottom-5 w-full flex items-center justify-center'>
                    <button className='bg-transparent hover:bg-[#F9C578] text-[#F9C578] hover:text-[#14787C] text-xl font-semibold border-[3px] border-[#F9C578] px-5 py-2 rounded-lg transition-all'>
                        En Savoir Plus
                    </button>
                </div>
            </motion.div>
                
            <motion.div 
                className="bg-[#14787C] h-full w-[90%] md:w-1/3 rounded-xl"
                animate={scroll ? { y: "12%" } : { y: count }}
            >
            
            </motion.div>

            <motion.div 
                className="bg-[#14787C] h-full w-[90%] md:w-1/3 rounded-xl"
                initial={{ y: "12%" }}
            >

            </motion.div>        
        </div>
    </section>
  )
}

export default Cards