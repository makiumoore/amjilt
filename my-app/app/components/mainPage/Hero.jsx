import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <div className='w-min_width lg:w-max_width m-auto pt-12 flex flex-col items-center justify-center gap-10'>
      <div className=''>
        <h1 className='text-5xl font-bold text-center py-8'>Amjilt Learning Management System</h1>
        <p className='text-2xl text-center'>Сургуулийн удирдлагын цогц систем</p>
      </div>
      <div className='flex justify-center w-[1000px]'>
        {/* <Image width={1200} height={500} src="/hero/laptop_realistic.png" alt="amjilt_icon" /> */}
        <img src="/hero/laptop_realistic.png" alt="" className='w-full h-[550px]' />
      </div>
    </div>
  )
}
