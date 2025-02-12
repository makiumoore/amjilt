import React from 'react'
import Marquee from "react-fast-marquee";

export default function Scroll() {
  return (
    <div className="w-full h-auto bg-gray-100 flex items-center">
      <Marquee pauseOnHover={false} speed={80} gradient={false}>
        <img src="/amjilt.svg" alt="Image 1" className="w-40 h-40 mx-12 rounded-lg" />
        <img src="/amjilt.svg" alt="Image 2" className="w-40 h-40 mx-12 rounded-lg" />
        <img src="/amjilt.svg" alt="Image 3" className="w-40 h-40 mx-12 rounded-lg" />
        <img src="/amjilt.svg" alt="Image 4" className="w-40 h-40 mx-12 rounded-lg" />
      </Marquee>
    </div>


  )
}
