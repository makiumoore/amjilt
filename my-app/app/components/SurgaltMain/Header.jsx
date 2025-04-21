"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('Бүгд');

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    // Here you would implement your actual filtering logic
    // For example, you might call a function like filterContent(filter)
  };
  return (
    <header className="bg-slate-50 shadow-sm">
      <div className="container mx-auto px-4">
        {/* Top Header Section */}
        <div className="flex items-center justify-between py-3">
          {/* Search Bar */}
          <div className="flex-1 max-w-xl mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Ном хайх..."
                className="w-full py-2 pl-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Search size={20} />
              </div>
            </div>
          </div>

          {/* User Menu */}
          <div className="flex items-center gap-4">
            <div className="flex items-center p-2 border border-gray-300 rounded-md">
              <span className="text-gray-600">yu bhu</span>
            </div>
          </div>
        </div>
        
      </div>
    </header>
  );
}