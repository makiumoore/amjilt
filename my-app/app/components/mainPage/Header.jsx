import Link from 'next/link'
import React from 'react'


export default function Header() {
  return (
  <div className="fixed top-0 left-0 w-full bg-gray-100 z-50">
    <div className="w-max_width mx-auto grid grid-cols-3 py-4 px-6">
      <div className="flex items-center">
        <div className="flex items-center gap-8">
          <Link href="/pages/About">
            <p className="font-medium text-md text-gray-700 hover:text-second_color transition duration-300">Бидний тухай</p>
          </Link>
          <p className="text-xl text-gray-600">|</p>
          <Link href="/pages/System">
            <p className="font-medium text-md text-gray-700 hover:text-second_color transition duration-300">Систем</p>
          </Link>
        </div>
      </div>
      <Link href="/">
        <div className="flex items-center justify-center">
          <img src="/header_icons/amjilt.svg" alt="amjilt_icon" className="h-10 w-auto" />
        </div>
      </Link>
      <div className="flex items-center justify-end gap-8">
        <p className="font-medium text-md text-gray-700 hover:text-second_color cursor-pointer transition duration-300">Тусламж</p>
        <p className="text-xl text-gray-600">|</p>
        <button className="bg-second_color hover:bg-purple-500 transition shadow-md rounded-md py-2 px-4 flex items-center gap-2">
          <p className="font-bold text-md text-white">Холбогдох</p>
          <img src="/header_icons/Vector.svg" alt="Union.svg" />
        </button>
      </div>
    </div>
  </div>
  )
}
