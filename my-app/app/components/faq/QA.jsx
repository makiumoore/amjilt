'use client';
import { useState } from 'react';

const faqs = [
  { question: 'What is Bird?', answer: 'Bird is a full-fledged marketing agency that specializes in branding, web design, and digital marketing.' },
  { question: 'How to start?', answer: 'You can start by contacting us through our website or scheduling a consultation.' },
  { question: 'Pricing?', answer: 'Our pricing varies depending on the services you require. Contact us for a detailed quote.' },
  { question: 'Support?', answer: 'We offer 24/7 support for our clients. Reach out via email or phone for assistance.' },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto pt-32 p-6">
      <h2 className='text-4xl lg:text-5xl font-semibold text-gray-800 tracking-tight'>Амжилт тэй <span className='text-second_color'>LMS</span> холбоотой</h2>
      <h3 className="text-3xl text-green-600 font-semibold mb-6">Түгээмэл асуулт хариулт</h3>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-2">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-lg font-semibold text-black focus:outline-none"
            >
              {faq.question}
              <span className="text-2xl">{openIndex === index ? '✖' : '➕'}</span>
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}