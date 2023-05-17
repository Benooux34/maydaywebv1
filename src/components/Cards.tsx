'use client'

import React, { useState } from 'react'
// Animation
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'

function Cards() {
    const [scroll, setScroll] = useState<boolean>(false)
    const [count, setCount] = useState<number>(0)
    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, "change", (latest) => {
        setCount((latest - 0.5) / 5)
        console.log((latest - 0.5) / 5)

        if (count > 60)
            setScroll(true)
        else if (count < 60)
            setScroll(false)
    })

  return (
    <section className="h-[150vh] md:h-[70vh] w-full flex items-center justify-center -mt-20 mb-20">
        <div className="h-full w-full flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-10 lg:space-x-20 space-y-10 md:space-y-0 mx-10 xl:mx-[8%]">
            <motion.div 
                className="bg-[#14787C] h-full w-[80%] md:w-1/3 rounded-xl"
                initial={{ y: "12%" }}
            />

            <motion.div 
                className="bg-[#14787C] h-full w-[80%] md:w-1/3 rounded-xl"
                animate={scroll ? { y: "12%" } : { y: count }}
            />

            <motion.div 
                className="bg-[#14787C] h-full w-[80%] md:w-1/3 rounded-xl"
                initial={{ y: "12%" }}
            />        
        </div>
    </section>
  )
}

export default Cards