'use client'

import React from 'react'
// Icons
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'

interface Props {
    active: boolean;
}

function CardPremium({ active }: Props) {
    return (
        <div className='h-full w-full flex flex-col items-center justify-around px-10 text-white'>
            <div className='h-[25%] w-full flex flex-col items-left justify-center space-y-3 border-b border-white'>
                <h2 className='text-2xl'>Premium Pack <span className={active ? 'text-2xl text-[#F9C578] font-light': 'hidden'}>- GOLD</span></h2>
                {active ?
                    <p className='text-[#F9C578] text-5xl font-bold'>99.99€ <span className='text-white text-lg font-bold'>/ mois</span></p>
                :
                    <p className='text-white text-5xl font-bold'>500€ <span className='text-gray-200 text-lg font-bold'>/ par site</span></p>
                }
            </div>
            <div className='h-[50%] w-full flex flex-col items-left justify-between space-y-0 border-b border-white pb-10 pt-5'>
                <div className='flex items-left justify-start space-x-3'>
                    <AiOutlineCheck className='h-7 w-7 text-green-400' />
                    <p className='text-lg'>4 à 7 pages</p>
                </div>
                <div className='flex items-left justify-start space-x-3'>
                    <AiOutlineCheck className='h-7 w-7 text-green-400' />
                    <p className='text-lg'>2 escortes offertes</p>
                </div>
                <div className='flex items-left justify-start space-x-3'>
                    <AiOutlineClose className='h-7 w-7 text-red-500' />
                    <p className='text-lg'>Pas d&apos;escorte offerte</p>
                </div>
                <div className='flex items-left justify-start space-x-3'>
                    <AiOutlineClose className='h-7 w-7 text-red-500' />
                    <p className='text-lg'>Pas d&apos;escorte offerte</p>
                </div>
            </div>
            <div className='h-[15%] w-full flex flex-col items-left justify-center space-y-3'>
                <div className='w-full'>
                    {active ?
                        <button className='w-full bg-transparent hover:bg-[#F9C578] border-2 border-[#F9C578] py-2 text-[#F9C578] hover:text-[#14787c] text-xl rounded-lg transition-all'>
                            Commencer l&apos;aventure
                        </button>
                    : 
                        <button className='w-full bg-transparent hover:bg-white border-2 border-white py-2 text-white hover:text-[#14787c] text-xl rounded-lg transition-all'>
                            Commencer l&apos;aventure
                        </button>
                    }
                </div>
            </div>
        </div>  
    )
}

export default CardPremium