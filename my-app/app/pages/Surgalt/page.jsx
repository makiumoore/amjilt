// pages/Surgalt/page.jsx

import React from 'react'
import SurgaltMain from '@/app/components/SurgaltMain/main'

const Surgalt = () => {
  return (
    <div className="w-full">
      {/* Sidebar */}
      <div className="w-16 bg-gradient-to-b from-indigo-600 to-indigo-700 min-h-screen fixed left-0 flex flex-col items-center space-y-2 shadow-xl">
        <div className="mt-3 mb-6">
          <img
            className="w-12 h-12 transform hover:scale-110 transition-transform"
            src="/hero/amjilt_icon.svg"
            alt="logo"
          />
        </div>
        <button className="text-white rounded-xl hover:bg-indigo-500 transition-colors p-2">
          <i className="fas fa-book text-2xl"></i>
        </button>
      </div>

      {/* Main Content */}
      <div className="ml-16">
        <SurgaltMain />
      </div>
    </div>
  )
}

export default Surgalt
