import React from 'react'
import Header from '@/app/components/mainPage/Header'

export default function Section3() {
  return (
    <div className='w-full h-auto py-32'>
        <div className='w-max_width m-auto'>
            <h1 className='text-4xl lg:text-5xl font-semibold text-gray-800 tracking-tight'>Our team and offices</h1>
            <div className='grid grid-cols-5 grid-rows-2 h-[600px] gap-2 pt-10'>
                <div className='col-span-2 row-span-2 border-2 border-black rounded-xl'></div>
                <div className='col-span-3 border-2 border-black rounded-xl'></div>
                <div className='border-2 border-black rounded-xl'></div>
                <div className='col-span-2 border-2 border-black rounded-xl'></div>
            </div>
        </div>
    </div>
  )
}
