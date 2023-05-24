'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
// Icons
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
// Animation
import { motion } from 'framer-motion'
// Data
import ProjectsD from '../../utils/Projects.json'
import { Data } from '../../utils/type'
// Fonts
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const ProjectsData = ProjectsD as unknown as Data[]

function Projects() {
    const ref = useRef<any>()

    const [hover, setHover] = useState<boolean>(false)
    const [scaleHover, setScaleHover] = useState<number>(0)
    const [count, setCount] = useState<number>(0)
    const [width, setWidth] = useState<number>(0)

    useEffect(() => {
        const scrollWidth = ref.current.scrollWidth - ref.current.offsetWidth;
        setWidth(scrollWidth);

        console.log('La valeur de count a été mise à jour :', count);
    }, [count]);
    
  return (
    <section className="h-[65vh] md:h-[80vh] w-full pt-10 overflow-hidden">
        <div className='flex items-center justify-between px-10 md:px-[8%]'>
            <h2 className={`${inter.className} font-bold text-white text-3xl md:text-5xl`}>Nos Projets</h2>
            <div className='flex items-center justify-center space-x-5'>
                <div
                    onClick={count >= 0 ? () => setTimeout(() => setCount(0), 200) : () => setTimeout(() => setCount(count + 15), 200)}                  
                    className='flex items-center justify-center bg-[#14787C] h-10 w-10 md:h-20 md:w-20 rounded-full cursor-pointer'
                >
                    <FaArrowLeft className="text-white h-5 w-5 md:h-10 md:w-10" />
                </div>
                <div
                    onClick={count <= -60 ? () => setTimeout(() => setCount(-60), 200) : () => setTimeout(() => setCount(count - 15), 200)}
                    className='flex items-center justify-center bg-[#14787C] h-10 w-10 md:h-20 md:w-20 rounded-full cursor-pointer'
                >
                    <FaArrowRight className="text-white h-5 w-5 md:h-10 md:w-10" />                    
                </div>
            </div>
        </div>

        {/* Slider - Desktop */}
        <motion.div
            className='hidden md:flex w-[200vw] space-x-10 py-10 overflow-hidden pl-[8%]'
            initial={{ x: "0%" }}
            animate={count >= 0 ? { x: "0%" } : { x: `${count}%` }}
            transition={{ type: "spring", duration: 0.5, stiffness: 100, damping: 20 }}
        >
            {ProjectsData.map((project) => {
                return (
                    <motion.div
                        key={project.id} 
                        className='relative bg-[#14787C] border-2 border-white hover:border-[#F9C578] h-[50vh] w-[40vw] flex items-center justify-center rounded-lg cursor-pointer transition-all'
                        whileHover={{ scale: 1.05 }}
                        onMouseEnter={() => setScaleHover(project.id)}
                        onHoverStart={() => setHover(true)}
                        onHoverEnd={() => setHover(false)}
                    >
                        <Link href={project.lien} target='_blank'>
                            <Image
                                className='object-cover rounded-lg'
                                src={project.img}
                                alt={project.name}
                                fill
                            />
                        </Link>

                        <div className={hover && scaleHover == project.id ? 'absolute bottom-0 right-0 w-[25%] h-[40px] bg-[#F9C578] transition-all z-50 rounded-tl-md rounded-br-md flex items-center justify-center' : 'absolute bottom-0 right-0 w-[25%] h-[40px] bg-white transition-all z-50 rounded-tl-md rounded-br-md flex items-center justify-center'}>
                            <span className='text-[#14787C] text-lg font-semibold'>
                                {project.langage}
                            </span>
                        </div>
                    </motion.div>
                )
            })}
        </motion.div>

        {/* Slider - Mobile */}
        <div ref={ref} className='w-[100%] overflow-hidden'>
            <motion.div
                className='flex w-[600vw] space-x-5 pt-10 pl-10 md:hidden'
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
                initial={{ x: "0%" }}
                animate={count >= 0 ? { x: "0%" } : { x: `${count}%` }}
                transition={{ type: "spring", duration: 0.5, stiffness: 100, damping: 20 }}
            >
                {ProjectsData.map((project) => {
                    return (
                        <div 
                            key={project.id} 
                            className='relative bg-[#14787C] border-2 border-white hover:border-[#F9C578] h-[40vh] w-[80vw] flex items-center justify-center rounded-lg transition-all cursor-default'
                        >
                            <Link className='cursor-default' href={project.lien} target='_blank'>
                                <Image
                                    className='object-cover rounded-lg cursor-default'
                                    src={project.img}
                                    alt={project.name}
                                    fill
                                />
                            </Link>
                        </div>
                    )
                })}
            </motion.div>
        </div>
    </section>
  )
}

export default Projects