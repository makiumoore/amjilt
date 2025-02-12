import React from 'react'
import Marquee from "react-fast-marquee";

export default function Scroll() {
  return (
    <div className="w-full h-auto py-10 bg-gray-100">
    <Marquee  speed={100} gradient={false} className="overflow-y-hidden">
      <img src="/amjilt.svg" alt=""  className='w-[18%] pl-10'/>
    </Marquee>
  </div>


  )
}
