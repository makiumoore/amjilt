import React from "react";
import Image from "next/image";

export default function Syshero() {
  return (
    <div className="w-full pt-20">
      <div className="w-max_width m-auto py-10">
        <div className="flex flex-col items-center justify-center py-8">
            <h1 className="text-6xl font-bold text-black leading-tight">Amjilt <span className="text-second_color">LMS</span></h1>
            <p className="text-gray-500 mt-4 text-center text-xl max-w-md">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere autem molestias harum quibusdam cumque, aliquid minima excepturi</p>
        </div>
        <div className="flex flex-col items-center justify-center">
            <Image width={1200} height={600} src="/laptop.png" alt="Image 1" className="" />
        </div>
      </div>
    </div>
  );
}
