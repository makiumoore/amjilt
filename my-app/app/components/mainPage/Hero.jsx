import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <div className='w-full p-12'>
      <div className='w-min_width lg:w-max_width h-0.5  '>
        <h1 className='text-5xl font-bold text-center py-8'>Amjilt Learning Management System</h1>
        <p className='text-2xl text-center'>Сургуулийн удирдлагын цогц систем</p>
      </div>
      <div className='flex justify-center'>
        <Image width={1200} height={500} src="/hero/laptop_realistic.png" alt="amjilt_icon" />
      </div>
    </div>
  )
}
