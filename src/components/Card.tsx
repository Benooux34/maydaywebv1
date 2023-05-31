'use client'

import React from 'react'
// Icons
import { AiOutlineClose } from 'react-icons/ai'
import { FcApproval } from 'react-icons/fc'

interface Props {
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
    name: string;
    description: string;
    price: string;
    colorText: string;
    colorTextHover: string;
    colorButton: string;
    colorTextButton: string;
}

function Card({ active, setActive, name, description, price, colorText, colorTextHover, colorButton, colorTextButton }: Props) {
  return (
    <>
        <div className={`flex flex-col items-left text-${colorText} p-10 pt-[10%] md:pt-[10%]`}>
            <h2 className="text-[22px] font-semibold">{name}</h2>
            <p className='text-5xl font-bold pt-5'>{price}€ <span className="text-lg text-gray-800 font-normal">/ par site</span></p>
            {/* Séparateur */}
            <div className='h-[1px] w-full bg-gray-500 my-5' />
            {/* Bouton */}
            <p className='text-md font-light'>{description}</p>
            <div className='w-full flex items-center justify-center my-5'>
                <button className={`bg-transparent hover:bg-${colorButton} border border-${colorButton} text-${colorTextButton} hover:text-${colorTextHover} text-lg md:text-xl font-light py-2 md:py-3 w-full rounded-lg transition-all`}>Commencer l'aventure</button>
            </div>
            {/* Séparateur */}
            <div className='hidden lg:flex h-[1px] w-full bg-gray-500 my-5' />
            {/* Features */}
            <h3 className="hidden lg:flex text-lg font-semibold">Features</h3>
            <div className='hidden lg:flex flex-col items-left justify-center pt-5 space-y-5'>
                <div className='flex items-center justify-start space-x-2'>
                    <FcApproval className='text-red-500 text-3xl' />
                    <span className='text-sm'>1 à 3 pages</span>
                </div>
                <div className='flex items-center justify-start space-x-2'>
                    <AiOutlineClose className='text-red-500 text-3xl' />
                    <span className='text-sm'>Aucune escorte est offerte (dommage)</span>
                </div>
                <div className='flex items-center justify-start space-x-2'>
                    <AiOutlineClose className='text-red-500 text-3xl' />
                    <span className='text-sm'>Aucune escorte est offerte (dommage)</span>
                </div>
                <div className='flex items-center justify-start space-x-2'>
                    <AiOutlineClose className='text-red-500 text-3xl' />
                    <span className='text-sm'>Aucune escorte est offerte (dommage)</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default Card