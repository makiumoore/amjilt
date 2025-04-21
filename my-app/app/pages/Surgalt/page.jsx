"use client";
import React from 'react';
import SurgaltMain from '@/app/components/SurgaltMain/main';
import Header from '@/app/components/SurgaltMain/Header';
import Sidebar from '@/app/components/SurgaltMain/Sidebar';

const Surgalt = () => {
  return (
    <div className="flex min-h-screen">
      {/* Fixed Logo Sidebar */}
      <div className="w-16 bg-gradient-to-b from-indigo-600 to-indigo-700 min-h-screen fixed left-0 top-0 flex flex-col items-center space-y-2 shadow-xl z-50">
        <div className="mt-3 mb-6">
          <img
            className="w-12 h-12 transform hover:scale-110 transition-transform"
            src="/hero/amjilt_icon.svg"
            alt="logo"
          />
        </div>
      </div>

      {/* Left Margin to compensate for fixed logo sidebar */}
      <div className="ml-16 flex w-full">
        {/* Sidebar Navigation */}
        <div className="w-64 bg-white border-r shadow-md">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          <Header />
          <SurgaltMain />
        </div>
      </div>
    </div>
  );
};

export default Surgalt;
