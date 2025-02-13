"use client";
import Image from "next/image";

export default function Cards() {
  return (
    <section className="w-max_width h-screen m-auto py-24 bg-white text-center">
      <h2 className="text-3xl font-semibold text-gray-800 mb-10">
        You're in safe hands
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-6xl mx-auto px-4">
        {/* Card 1 */}
        <div className="bg- p-1 rounded-lg flex flex-col items-center">
          <div className="w-[280px] h-[280px] bg-[#edd5d7]  rounded-lg mb-4">

          </div>
          {/* <Image
            src="/"
            alt="Secure"
            width={300}
            height={300}
            className=" border border-black rounded-lg mb-4"
          /> */}
          <h3 className="font-semibold text-lg">Secure</h3>
          <p className="text-gray-500  text-sm mt-2">
            Zazu protects your deposits in accordance with South African rules
            and regulations.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-1 rounded-lg flex flex-col items-center">
        <div className="w-[280px] h-[280px] bg-[#474651]  rounded-lg mb-4">

</div>
          {/* <Image
            src="/no-image.jpg"
            alt="Secure"
            width={300}
            height={300}
            className=" border border-black rounded-lg mb-4"
          /> */}
          <h3 className="font-semibold text-lg">Secure</h3>
          <p className="text-gray-500  text-sm mt-2">
            Zazu protects your deposits in accordance with South African rules
            and regulations.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-1 rounded-lg flex flex-col items-center">
        <div className="w-[280px] h-[280px] bg-[#7e7d85]  rounded-lg mb-4">

</div>
          {/* <Image
            src="/no-image.jpg"
            alt="Secure"
            width={300}
            height={300}
            className=" border border-black rounded-lg mb-4"
          /> */}
          <h3 className="font-semibold text-lg">Secure</h3>
          <p className="text-gray-500  text-sm mt-2">
            Zazu protects your deposits in accordance with South African rules
            and regulations.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-1 rounded-lg flex flex-col items-center">
        <div className="w-[280px] h-[280px] bg-[#edd5d7]  rounded-lg mb-4">

</div>
          {/* <Image
            src="/no-image.jpg"
            alt="Secure"
            width={300}
            height={300}
            className=" border border-black rounded-lg mb-4"
          /> */}
          <h3 className="font-semibold text-lg">Secure</h3>
          <p className="text-gray-500 text-sm mt-2">
            Zazu protects your deposits in accordance with South African rules
            and regulations.
          </p>
        </div>
      </div>
    </section>
  );
}
