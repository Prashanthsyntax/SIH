'use client';
import { useState } from 'react';

const faqs = [
  {
    question: "How can I pay for my appointment?",
    answer:
      "You can pay via credit card, PayPal, or bank transfer. Full payment details will be provided when you book your appointment.",
  },
  {
    question: "Is the cost of the appointment covered by private health insurance?",
    answer:
      "This depends on your health insurance provider. Please check with them directly or contact our support team for assistance.",
  },
  {
    question: "Do I need a referral?",
    answer:
      "In most cases, a referral is not required. However, some specialists may request one depending on the nature of your visit.",
  },
  {
    question: "What are your opening hours?",
    answer:
      "We are open from 9:00 AM to 6:00 PM, Monday to Friday. Weekend appointments are available upon request.",
  },
  {
    question: "What can I expect at my first consultation?",
    answer:
      "Your first consultation will involve a thorough review of your medical history and a discussion of your current concerns. We’ll create a personalized treatment plan tailored to your needs.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const toggleFAQ = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="bg-black text-white">
      <div className="container max-w-4xl px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center lg:text-3xl">
          Frequently Asked Questions
        </h1>

        <div className="mt-12 space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="border-2 border-gray-800 rounded-lg bg-gray-900">
              <button
                className="flex items-center justify-between w-full p-6"
                onClick={() => toggleFAQ(index)}
              >
                <h2 className="font-semibold">{faq.question}</h2>
                <span
                  className={`rounded-full transition-all ${
                    openIndex === index
                      ? "text-gray-400 bg-gray-800"
                      : "text-white bg-blue-600"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {openIndex === index ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M18 12H6"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    )}
                  </svg>
                </span>
              </button>

              {openIndex === index && (
                <>
                  <hr className="border-gray-800" />
                  <p className="p-6 text-sm text-gray-300">{faq.answer}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
