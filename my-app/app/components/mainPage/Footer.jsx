import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <div className="bg-gray-800">
      <div>
      <div className="pt-16 mx-auto lg:w-max_width">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <Link href="/" aria-label="Go home" title="Company" className="inline-flex items-center">
              <img src="/amjilt.svg" className="w-40" alt="" />
            </Link>
            <div className="mt-6 lg:max-w-sm">
              <p className="text-sm text-gray-300">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
              </p>
              <p className="mt-4 text-sm text-gray-300">
                Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-base font-bold tracking-wide text-second_color">Contacts</p>
            <div className="flex">
              <p className="mr-1 text-gray-300">Phone:</p>
              <a href="tel:850-123-5021" aria-label="Our phone" title="Our phone" className="transition-colors duration-300 hover:text-purple-400 text-gray-500">
                +976 
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 text-gray-300">Email:</p>
              <a href="mailto:info@lorem.mail" aria-label="Our email" title="Our email" className="transition-colors duration-300 hover:text-purple-400 text-gray-500">
                sales@amjilt.com
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 text-gray-300">Address:</p>
              <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" aria-label="Our address" title="Our address" className="transition-colors duration-300 hover:text-purple-400 text-gray-500">
                Улаанбаатар хот, Сүхбаатар дүүрэг, 1-р хороо "Union Building"
              </a>
            </div>
          </div>
          <div>
            <span className="text-base font-bold tracking-wide text-second_color">Social</span>
            <div className="flex items-center mt-1 space-x-3">
              <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-purple-400">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path
                    d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 
                    c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 
                    C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1
                    c0.6,2,2.4,3.4,4.6,3.4c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2
                    c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6C22.5,6.4,23.3,5.5,24,4.6z"
                  ></path>
                </svg>
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Bacon ipsum dolor amet short ribs pig sausage prosciutto chicken spare ribs salami.
            </p>
          </div>
        </div>
      </div>
      <div className=' border-t'>
      <div className="w-max_width m-auto flex flex-col-reverse justify-between pt-5 pb-10 lg:flex-row">
          <p className="text-sm text-gray-500">
            © Copyright 2025 Амжилт LMS.
          </p>
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <a href="/pages/FAQ" className="text-sm text-gray-500 transition-colors duration-300 hover:text-purple-400">
                Тусламж
              </a>
            </li>
            <li>
              <a href="/" className="text-sm text-gray-500 transition-colors duration-300 hover:text-purple-400">
                Холбогдох
              </a>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  );
}
