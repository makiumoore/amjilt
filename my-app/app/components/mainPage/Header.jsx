"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full bg-gray-100 z-50">
      <div className="xl:w-max_width mx-auto grid grid-cols-3 py-4">
        <div className="flex items-center">
          <div className="flex items-center gap-8">
            <Link href="/pages/About">
              <p className={`font-medium text-md transition duration-300 ${
                pathname === '/pages/About' ? 'text-second_color font-bold border-b-2 border-second_color' : 'text-gray-700 hover:text-second_color'
              }`}>
                Бидний тухай
              </p>
            </Link>
            <p className="text-xl text-gray-600">|</p>
            <Link href="/pages/System">
              <p className={`font-medium text-md transition duration-300 ${
                pathname === '/pages/System' ? 'text-second_color font-bold border-b-2 border-second_color' : 'text-gray-700 hover:text-second_color'
              }`}>
                Систем
              </p>
            </Link>
          </div>
        </div>
        <Link href="/">
          <div className="flex items-center justify-center">
            <img src="/header_icons/amjilt.svg" alt="amjilt_icon" className="h-10 w-auto" />
          </div>
        </Link>
        <div className="flex items-center justify-end gap-8">
          <Link href="/pages/FAQ">
            <p className={`font-medium text-md transition duration-300 ${
              pathname === '/pages/FAQ' ? 'text-second_color font-bold border-b-2 border-second_color' : 'text-gray-700 hover:text-second_color'
            }`}>
              Тусламж
            </p>
          </Link>
          <p className="text-xl text-gray-600">|</p>
          <button 
            className="bg-second_color hover:bg-purple-500 transition shadow-md rounded-md py-2 px-4 flex items-center gap-2"
            onClick={() => setIsPopupOpen(true)}
          >
            <p className="font-bold text-md text-white">Холбогдох</p>
            <img src="/header_icons/Vector.svg" alt="Union.svg" />
          </button>
        </div>
      </div>

      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Холбогдох</h2>
            <p className="text-gray-700">Бидэнтэй холбогдохын тулд доорх мэдээллийг бөглөнө үү.</p>
            <div className="mt-4">
              <button 
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
                onClick={() => setIsPopupOpen(false)}
              >
                Хаах
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
