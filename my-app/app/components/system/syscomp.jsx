import Image from "next/image";

export default function BusinessAccount() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-white min-h-screen">
      {/* Left Section */}
      <div className="md:w-1/2 text-left">
        <h2 className="text-3xl font-semibold text-gray-900">Business account</h2>
        <p className="text-gray-600 mt-4">
          The account that's powerful to the core. Day-to-day banking, from
          secure bank account to payment cards & real-time transfers, all
          included in your plan.
        </p>
        <a href="#" className="text-red-500 font-medium mt-4 inline-block">
          Discover the feature →
        </a>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0 relative">
        <Image
          src="/phone_mockup.png"
          alt="Phone mockup"
          width={250}
          height={500}
          className="shadow-lg rounded-lg"
        />
        <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4 bg-white p-2 shadow-lg rounded-lg">
          <Image
            src="/card_mockup.png"
            alt="Bank card"
            width={150}
            height={100}
            className="rounded-lg"
          />
          <p className="text-gray-600 text-sm text-center">Sipho Phezulu</p>
        </div>
      </div>
    </div>
  );
}
