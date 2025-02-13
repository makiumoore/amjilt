"use client";
import { useState } from "react";

export default function BusinessAccount() {
  const [activeTab, setActiveTab] = useState("Business account");

  const tabs = [
    "Business account",
    "Digital incorporation",
    "Invoice management",
    "Expense management",
    "Bookkeeping & cash flow",
  ];

  const content = {
    "Business account": {
      title: "Business account",
      description:
        "The account that's powerful to the core. Day-to-day banking, from secure bank account to payment cards & real-time transfers, all included in your plan.",
      img: "/iphone.png",
    },
    "Digital incorporation": {
      title: "Digital incorporation",
      description:
        "Seamlessly register your business online with just a few clicks. No paperwork, no hassle.",
      img: "/digital-incorporation.png",
    },
    "Invoice management": {
      title: "Invoice management",
      description:
        "Automate your invoicing process, track payments, and get paid faster.",
      img: "/invoice.png",
    },
    "Expense management": {
      title: "Expense management",
      description:
        "Keep track of business expenses, categorize them automatically, and generate reports effortlessly.",
      img: "/expense.png",
    },
    "Bookkeeping & cash flow": {
      title: "Bookkeeping & cash flow",
      description:
        "Get a real-time overview of your business finances and stay on top of cash flow.",
      img: "/bookkeeping.png",
    },
  };

  return (
    <div className="w-full">
      <div className="w-max_width m-auto flex flex-col">
        {/* Top menu */}
        <div className="grid grid-cols-5 px-5 pb-5 gap-5 border-b-2 border-gray-600">
          {tabs.map((tab) => (
            <div
              key={tab}
              className={`cursor-pointer ${
                activeTab === tab ? "font-bold text-second_color" : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              <p>{tab}</p>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-3 gap-5 pt-10">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <p className="text-lg font-semibold">{content[activeTab].title}</p>
              <p>{content[activeTab].description}</p>
            </div>
            <div>
              <p className="text-blue-500 cursor-pointer">Discover the feature</p>
            </div>
          </div>
          <div>
            <img src={content[activeTab].img} alt={activeTab} />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
