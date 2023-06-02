'use client'

import React, { useState } from 'react'
// Animation
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
// Components
import CardStart from './pack/CardStart'
import CardPremium from './pack/CardPremium'
import CardAdvance from './pack/CardAdvance'

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
    <section className="relative h-[200vh] md:h-[90vh] w-full flex items-center justify-center -mt-24 mb-20">
        <button onClick={() => setActive(!active)} className="absolute top-0 md:top-6 left-5 md:left-[5%] bg-transparent hover:bg-white text-white hover:text-[#14787c] font-bold border-2 border-white rounded-lg px-4 py-2">
            Abonnement par mois
        </button>
        <div className="h-full w-full flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-10 lg:space-x-20 space-y-10 md:space-y-0 px-10 xl:px-[5%]">
            <motion.div 
                className="bg-[#14787c] h-[33%] md:h-[90vh] w-[90vw] md:w-[30vw] rounded-xl shadow-xl border-2 border-white"
                initial={{ y: "12%" }}
            >
                <CardStart active={active} />
            </motion.div>
                
            <motion.div 
                className="bg-[#14787c] h-[33%] md:h-[90vh] w-[90vw] md:w-[30vw] rounded-xl shadow-xl border-2 border-white"
                animate={scroll ? { y: "12%" } : { y: count }}
            >
                <CardPremium active={active} />
            </motion.div>

            <motion.div 
                className="bg-[#14787c] h-[33%] md:h-[90vh] w-[90vw] md:w-[30vw] rounded-xl shadow-xl border-2 border-white"
                initial={{ y: "12%" }}
            >
                <CardAdvance active={active} />
            </motion.div>     
        </div>
    </section>
  )
}

export default Cards