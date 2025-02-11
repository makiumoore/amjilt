import Link from 'next/link'
import React from 'react'


export default function Header() {
  return (
    <div className='w-full  flex justify-center bg-transparent bg-gray-100 shadow-md'>
      <div className='w-min_width lg:w-max_width flex items-center py-4'>
        <div className='flex items-center gap-4 h-10'>
          <img src="/header_icons/amjilt.svg" alt="amjilt_icon" className='w-full h-full' />
        </div>
        <div className='flex items-center gap-14 ml-10'>
          <Link href={'/pages/About'}><p className='font-medium text-lg poppins-2xl'>Бидний тухай</p></Link>
          <Link href={'/pages/System'}><p className='font-medium text-lg poppins-2xl'>Cестим</p></Link>
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}
