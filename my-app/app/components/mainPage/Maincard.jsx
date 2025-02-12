"use client";
import Image from "next/image";

export default function BusinessAccount() {
  return (
    <section className="py-16 bg-gray-100 flex flex-col md:flex-row items-center justify-center px-6">
      {/* Left Side - Image */}
      <div className="md:w-1/2 flex justify-center">
        <div className="relative rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/app.png"
            alt="Phone Mockup"
            width={600}
            height={400}
            className="rounded-lg"
          />
          {/* Notification UI */}
          <div className="absolute bottom-6 left-6 bg-gray-200 px-4 py-2 rounded-lg shadow-md flex items-center">
            <div className="w-6 h-6 bg-gray-700 rounded-full mr-2"></div>
            <div>
              <p className="text-sm font-semibold">Zazu</p>
              <p className="text-xs text-gray-600">Your account has been updated, go and check!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Text */}
      <div className="md:w-1/2 text-left md:pl-12">
        <span className="px-4 py-2 bg-gray-300 text-gray-800 rounded-full text-xs font-semibold">
          ABOUT US
        </span>
        <h2 className="text-3xl font-semibold text-gray-800 mt-4">
          The best business account, alone or with your team
        </h2>
        <p className="text-gray-600 mt-4">
          A business account for companies from 1 to 50 team members. Better than just a business 
          account—unlock a complete solution to manage your company's finances, whether you're a solo 
          entrepreneur or a small company.
        </p>
        <p className="text-gray-600 mt-2">
          Our business account offers everything you need, from payment cards to powerful financial 
          management tools, all designed to help you thrive.
        </p>
        <a href="#" className="text-red-500 font-semibold mt-4 inline-block">
          Discover Zazu →
        </a>
      </div>
    </section>
  );
}
