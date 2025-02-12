import React from 'react'
import Marquee from "react-fast-marquee";

export default function Scroll() {
  return (
    <div className="w-full h-auto py-10 bg-gray-100 flex items-center bordor-t-2 border-gray-500">
      <Marquee pauseOnHover={false} speed={80} gradient={false}>
        <img src="/amjilt.svg" alt="Image 1" className="w-60 h-30 mx-20 rounded-lg" />
        <img src="/amjilt.svg" alt="Image 2" className="w-60 h-30 mx-20 rounded-lg" />
        <img src="/amjilt.svg" alt="Image 3" className="w-60 h-30 mx-20 rounded-lg" />
        <img src="/amjilt.svg" alt="Image 4" className="w-60 h-30 mx-20 rounded-lg" />
        <img src="/amjilt.svg" alt="Image 4" className="w-60 h-30 mx-20 rounded-lg" />
      </Marquee>
    </div>


  )
}
