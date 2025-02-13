import React from 'react'

export default function Section5() {
  return (
    <div className="w-full bg-[url(/tete.jpg)] bg-cover">
        {/* <div className="absolute top-0 bottom-0 right-0 left-0 z-0">
            <img src="/tete.jpg" alt="tete" className="w-full h-full object-cover" />
        </div> */}
        <div className="w-max_width m-auto py-40 flex items-center">
            <div className="flex flex-col items-start w-1/5 gap-2">
                <div className='flex flex-col gap-1'>
                    <h2 className="text-2xl font-bold text-white">Your business financials in one place.</h2>
                    <p className="text-white mt-2">
                        Your all-in-one account, with all essentials - No hidden fees.
                    </p>
                </div>
                <button className="bg-purple-600 hover:bg-purple-700 transition text-white font-bold py-2 px-4 rounded-md mt-4">
                    Join the waitlist
                </button>
            </div>
        </div>
    </div>

  )
}
