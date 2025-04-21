'use client';

import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';
import { MdDiscount } from 'react-icons/md';

export default function Header() {
  const [activeTab, setActiveTab] = useState('Ном');

  const menuItems = ['Танд зориулав', 'Ном', 'Subscription', 'Подкаст', 'Үйлчилгээ'];

  return (
    <header className="bg-[#f3f7fe] px-6 py-3 flex items-center justify-between shadow-sm">
      {/* Logo & Search */}
      <div className="flex items-center space-x-8">
        {/* Logo */}
        <div className="flex items-center space-x-1 text-2xl font-bold">
          <span className="text-blue-600">M</span>
          <span>book</span>
        </div>

        {/* Search */}
        <div className="relative w-72">
          <input
            type="text"
            placeholder="Ном хайх..."
            className="w-full pl-10 pr-4 py-2 rounded-full bg-white shadow-sm focus:outline-none"
          />
          <FaSearch className="absolute left-3 top-2.5 text-gray-400" />
        </div>
      </div>

      {/* Menu */}
      <nav className="flex items-center space-x-6 text-[16px] font-semibold">
        {menuItems.map((item) => (
          <div
            key={item}
            className={`cursor-pointer ${
              activeTab === item ? 'text-blue-600' : 'text-black'
            } ${activeTab === item ? 'border-b-2 border-blue-600 pb-1' : ''}`}
            onClick={() => setActiveTab(item)}
          >
            {item}
          </div>
        ))}
      </nav>

      {/* Right side: Icons */}
      <div className="flex items-center space-x-4">
        <MdDiscount className="text-2xl text-gray-500" />
        <div className="flex items-center space-x-1 cursor-pointer">
          <FaUserCircle className="text-blue-600 text-2xl" />
          <span className="text-blue-600 font-semibold">Нэвтрэх</span>
        </div>
      </div>
    </header>
  );
}
