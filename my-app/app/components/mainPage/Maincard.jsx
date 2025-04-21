"use client";
import Image from "next/image";
import Link from "next/link";

export default function BusinessAccount() {
  return (
    <section className=" py-16 bg-gray-100 flex flex-col md:flex-row items-center justify-center px-6">
      {/* Left Side - Image */}
      <div className="w-max_width flex justify-center  ">
        <div className=" flex justify-center ">
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/about/weImage.png"
              alt="Phone Mockup"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Right Side - Text */}
        <div className="md:w-1/2 justify-center flex flex-col text-left md:pl-12">
          <span className="w-max px-4 py-2 bg-[#5c3090] text-white rounded-full text-xs font-semibold">
            Amjilt LMS
          </span>
          <h2 className="text-3xl font-semibold text-gray-800 mt-4">
            Бидний тухай
          </h2>
          <p className="text-gray-700 mt-4">
          "Амжилт" компани 2007 онд Ж.Шижирийн санаачлагаар үүсгэн байгуулагдаж, боловсрол, технологийн чиглэлээр үйл ажиллагаа явуулдаг. Тус компани нь боловсролын салбарт шинэчлэл хийх, сургалтын үйл явцыг сайжруулах, боловсролын чанарыг дээшлүүлэх зорилгоор Amjilt LMS системийг хөгжүүлсэн.
          </p>
          <p className="text-gray-700 mt-2">
            "Шийдэл үргэлж байдаг" уриатай, бэрхшээлийг даван туулах, шинийг
            эрэлхийлэх үзлийг дэмждэг.
          </p>
          <Link
            href="/pages/About"
            className="text-[#5c3090] font-semibold mt-4 inline-block"
          >
            үргэлжлүүлэх →
          </Link>
        </div>
      </div>
    </section>
  );
}
