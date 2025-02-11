import Link from 'next/link'
import React from 'react'


export default function Header() {
  return (
    <div className='w-full  flex justify-center bg-transparent bg-gray-100 shadow-md'>
      <div className='w-min_width lg:w-max_width grid grid-cols-3 py-4'>
        <div className='col-span-2 flex items-center'>
          <div className='flex items-center gap-4 h-10'>
            <img src="/header_icons/amjilt.svg" alt="amjilt_icon" className='w-full h-full' />
          </div>
          <div className='flex items-center gap-14 ml-10'>
            <Link href={'/pages/About'}><p className='font-medium text-md poppins-2xl text-gray-700'>Бидний тухай</p></Link>
            <Link href={'/pages/System'}><p className='font-medium text-md poppins-2xl text-gray-700'>Cестим</p></Link>
          </div>
        </div>
        <div className='col-span-1 flex items-center justify-end gap-10'>
          <p className='font-medium text-md poppins-2xl text-gray-700'>Тусламж</p>
          <div>
            <button className='bg-second_color shadow-md rounded-md py-2 px-4 flex items-center gap-2'>
              <p className='font-bold poppins-2xl text-md bg-transparent text-white'>Холбогдох</p>
              <img src="/header_icons/Vector.svg" alt="Union.svg" className=''/>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
