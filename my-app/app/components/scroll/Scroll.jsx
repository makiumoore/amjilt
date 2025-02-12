import React from 'react'
import Marquee from "react-fast-marquee";

export default function Scroll() {
  return (
    <div className="w-full h-screen ">
  <Marquee  speed={100} gradient={false} className="overflow-y-hidden">
    <h1 className="text-8xl font-bold">scroll</h1>
  </Marquee>
</div>


  )
}
