'use client'

import React, { useState } from 'react'
// Animation
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import Card from './Card'

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
    <section className="h-[200vh] md:h-[90vh] w-full flex items-center justify-center -mt-24 mb-20">
        <div className="h-full w-full flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-10 lg:space-x-20 space-y-10 md:space-y-0 px-10 xl:px-[5%]">
            <motion.div 
                className="bg-[#eaeaea] h-[100vh] md:h-[90vh] w-[90vw] md:w-[30vw] rounded-xl shadow-xl"
                initial={{ y: "12%" }}
            >
                <Card
                    active={active}
                    setActive={setActive}
                    name="Start"
                    description="Le tarif 'Start' est bla bla bla bla, seb sort ta flute"
                    price="200"
                    colorText="black"
                    colorTextHover="white"
                    colorButton="black"
                    colorTextButton="black"
                />
            </motion.div>
                
            <motion.div 
                className="bg-[#eaeaea] h-[100vh] md:h-[90vh] w-[90vw] md:w-[30vw] rounded-xl shadow-xl"
                animate={scroll ? { y: "12%" } : { y: count }}
            >
                <Card
                    active={active}
                    setActive={setActive}
                    name="Premium"
                    description="Le tarif 'Premium' est bla bla bla bla, seb sort ta flute"
                    price="500"
                    colorText="black"
                    colorTextHover="white"
                    colorButton="black"
                    colorTextButton="black"
                />
            </motion.div>

            <motion.div 
                className="bg-[#eaeaea] h-[100vh] md:h-[90vh] w-[90vw] md:w-[30vw] rounded-xl shadow-xl"
                initial={{ y: "12%" }}
            >
                <Card
                    active={active}
                    setActive={setActive}
                    name="Advance"
                    description="Le tarif 'Advance' est bla bla bla bla, seb sort ta flute"
                    price="1000"
                    colorText="black"
                    colorTextHover="white"
                    colorButton="black"
                    colorTextButton="black"
                />
            </motion.div>     
        </div>
    </section>
  )
}

export default Cards