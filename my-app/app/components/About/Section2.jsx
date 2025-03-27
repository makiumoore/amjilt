import React from 'react'

export default function Section2() {
  return (
    <div className='w-full h-auto'>
        <div className='xl:w-max_width m-auto py-32'>
            <div className='grid grid-cols-5 gap-10 mt-10'>
                <div className='col-span-3'>
                    <div className='rounded-xl h-full overflow-hidden'>
                        <img src="/about/about1.png" alt="about1" className='w-full h-full'/>
                    </div>
                </div>
                <div className='col-span-2 flex flex-col gap-5'>
                    <p className='text-4xl lg:text-5xl font-semibold text-gray-800 tracking-tight'>
                        Бидний тухай
                    </p>
                    <p className='text-sm'>- 2007 онд Ж.Шижир математикийн багшаар ажиллаж байхдаа анхны вэб сайт болох Amjilt.com-ийг хийж, бизнесийн үйл ажиллагаагаа эхлүүлсэн. </p>
                    <p className='text-sm'>- 2010 онд "Амжилт" ХХК албан ёсоор байгуулагдсан</p>
                    <p className='text-sm'>- 2015-2017 онд Монголын анхны бүрэн хэмжээний 3D анимэйшн "Мора" киног "Амжилт Анимэйшн Студи" бүтээсэн.</p>
                    <p className='text-sm'>- 2018 онд   "Индра Кибер Сургууль"-ийг байгуулсан.</p>
                    <p className='text-sm'>- 2017 оноос "Зузугийн найзууд" 3D хүүхэлдэйн киноны ажлыг эхлүүлсэн. </p>
                    <p className='text-sm'>- 2019 онд "Амжилт Кибер Сургууль" анхны бүрэн хэмжээний технологид суурилсан дунд сургуулиа нээсэн.</p>
                    <p className='text-sm'>- 2020 онд Казахстанд "Зузугийн найзууд" киноны нээлт хийжээ. </p>
                    <p className='text-sm'>- 2021 онд "Цонжин Боардинг Кибер Сургууль"-ийг үүсгэн байгуулсан.</p>
                    <p className='text-sm'>- 2022 онд Казахстанд  "Амжилт Кибер Сургууль"   сургуулиа нээсэн.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
