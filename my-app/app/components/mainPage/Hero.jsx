import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="w-full min-h-screen bg-white relative overflow-hidden xl:pt-20">
      <div className="absolute left-[-30px] top-1/2 -translate-y-1/2 w-1/3 hidden lg:block">
        <img
          src="/hero/heroimg.jpg"
          alt="People looking at laptop"
          className="w-full h-[500px] object-cover rounded-xl"
        />
      </div>

      <div className="absolute right-[-250px]  bottom-[-100px] w-1/2 hidden lg:block">
        <img
          src="/hero/ipadlms.png"
          alt="Banking dashboard"
          className="w-full h-full "
        />
      </div>

      <div className="max-w-2xl mx-auto px-4 py-20 relative">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="w-22 h-20">
            <img
              src="/hero/amjilt_icon.svg"
              alt="Abstract faces art"
              className="w-full h-full object-cover rounded"
            />
          </div>

          <h1 className="w-[500px] text-4xl lg:text-5xl font-semibold text-gray-800 tracking-tight">
            Amjilt <span className="text-second_color">LMS</span>
            <br />
            <span className="">Сургуулийн удирдлагын цогц систем</span>
          </h1>

          <button className="bg-second_color hover:bg-coral-600 text-white font-semibold py-3 px-8 rounded-md transition-colors">
            Join the waitlist
          </button>

          <p className="text-gray-700 max-w-md mx-auto">
            Амжилт систем нь танай байгууллагад туслах , нэг цогц системээр
            ажиллаа хөнгөвчлөхөд тусална.
          </p>
        </div>
      </div>
    </div>
  );
}
