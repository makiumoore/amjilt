import React from 'react'

export default function Section1() {
  return (
    <div className='w-full xl:pt-20 h-auto bg-purple-100'>
      <div className='grid grid-cols-3 xl:w-max_width m-auto py-32'>
        <div className='col-span-2 flex flex-col'>
          <div className='w-full mb-10'>
            <p className='text-4xl lg:text-5xl font-semibold text-gray-800 tracking-tight'>Амжилт <span className='text-second_color'>LMS</span></p>
          </div>
          <div className='w-[90%] flex flex-col gap-8'>
            <p className='text-gray-700 font-poppins'>"Амжилт" компани 2007 онд Ж.Шижирийн санаачлагаар үүссэн, боловсрол, технологийн чиглэлээр үйл ажиллагаа явуулдаг.</p>
            <p className='text-gray-700 font-poppins'>Мэдээлэл, дэвшилтэт технологид тулгуурлан боловсролын үйл ажиллагааг автоматжуулж, сургалтын чанар, үр дүнг дээшлүүлэхэд чиглэгдсэн оновчтой шийдэл бүхий программ хангамж зохион бүтээх.
            </p>
          </div>
        </div>
        <div className='w-full flex justify-end items-start'>
          <img src="/hero/amjilt_icon.svg" alt="amjilt_icon" className='w-[50%]'/>
        </div>
      </div>
    </div>
  )
}
