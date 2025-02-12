import React from 'react'

export default function Section2() {
  return (
    <div className='w-full h-auto'>
        <div className='xl:w-max_width m-auto py-32'>
            <button className='bg-second_color hover:bg-purple-500 transition shadow-md rounded-md py-2 px-4 flex items-center gap-2'>
                <p className="font-bold text-md text-white">зорилго</p>
            </button>
            <div className='grid grid-cols-3 gap-10 mt-10'>
                <div className='col-span-2'>
                    <div className='border-2 border-black rounded-xl h-full'>

                    </div>
                </div>
                <div className='flex flex-col gap-5'>
                    <p className='text-4xl lg:text-5xl font-semibold text-gray-800 tracking-tight'>
                        Бидний зорилго
                    </p>
                    <p className=''>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis ratione adipisci laboriosam consequuntur quas similique maiores repellat expedita voluptates ab consectetur commodi omnis incidunt voluptas, voluptatum magnam cumque non impedit voluptatem fuga! Recusandae deserunt harum obcaecati porro dolorum fugiat natus vitae eveniet, quod, a adipisci accusantium laboriosam perspiciatis! Maxime unde aperiam porro suscipit molestiae maiores omnis voluptates qui veniam libero quos dolorum odio voluptate, consectetur ut nihil minus reprehenderit doloribus quo, harum officia. Vitae maiores quos nihil magnam expedita aperiam! Perferendis amet sunt alias rerum, accusamus autem dolore laudantium ab, ullam nulla esse magnam veniam eius fugit earum cumque nostrum.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
