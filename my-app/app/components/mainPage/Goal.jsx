import React from 'react'

export default function goal() {
  return (
    <div className="bg-white py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl lg:max-w-none">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">Бидний зорилго</h2>
        <p className="w-[80%] mx-auto text-lg leading-8 text-gray-700">Amjilt LMS-ийн зорилго нь сургалтын чанарыг сайжруулж, сурагчдын суралцах орчныг илүү үр бүтээлтэй, хүртээмжтэй болгох, багш нарын ажлыг хөнгөвчлөх, боловсролын байгууллагуудын менежментийг боловсронгуй болгоход оршино.
        </p>
      </div>
      <dl className="mt-10 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col bg-[#5c3090] p-8">
          <dt className="text-sm font-semibold leading-6 text-gray-300">words written in 2023</dt>
          <dd className="order-first text-3xl font-semibold tracking-tight text-white">12 million</dd>
        </div>
        <div className="flex flex-col bg-[#5c3090] p-8">
          <dt className="text-sm font-semibold leading-6 text-gray-300">episodes uploaded</dt>
          <dd className="order-first text-3xl font-semibold tracking-tight text-white">10k</dd>
        </div>
        <div className="flex flex-col bg-[#5c3090] p-8">
          <dt className="text-sm font-semibold leading-6 text-gray-300">hours of media</dt>
          <dd className="order-first text-3xl font-semibold tracking-tight text-white">6.6k</dd>
        </div>
        <div className="flex flex-col bg-[#5c3090] p-8">
          <dt className="text-sm font-semibold leading-6 text-gray-300">answers</dt>
          <dd className="order-first text-3xl font-semibold tracking-tight text-white">2.1k</dd>
        </div>
      </dl>
    </div>
  </div>
</div>
  )
}
