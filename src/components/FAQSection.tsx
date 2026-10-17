"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  number: string;
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    number: "01",
    question: "What's the turnaround time for a launch film?",
    answer:
      "About one week from the first call to the finished film, with two rounds of changes along the way.",
  },
  {
    number: "02",
    question: "How is a launch film different from a launch video?",
    answer:
      "A launch video lists features. A launch film tells one story people remember, and gives the whole launch something to rally around.",
  },
  {
    number: "03",
    question: "How does the process work?",
    answer:
      "One call to understand your product, an idea and script you sign off on, the shoot or AI build, the edit, then launch day run together with you.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions"
      className="py-[clamp(5rem,9vw,8rem)] px-4 sm:px-8 bg-[#fafafa] border-t border-[#e7e7e7]"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-[clamp(2.5rem,5vw,4.5rem)] select-none">
          <span className="font-mono text-xs uppercase tracking-widest text-[#8e8e8e] block mb-2">
            Inquiries
          </span>
          <h2 className="font-semibold text-[clamp(2rem,3.6vw,3.2rem)] tracking-[-0.035em] text-[#0b0b0b]">
            Questions, <em className="font-serif italic font-normal text-black">answered</em>
          </h2>
        </div>

        {/* Clean Accordion List */}
        <div className="flex flex-col gap-3 sm:gap-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={faq.number}
                className={`rounded-2xl transition-all duration-300 border bg-white overflow-hidden ${
                  isOpen
                    ? "border-black/25 shadow-md"
                    : "border-[#e7e7e7] hover:border-black/15 shadow-xs"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-7 flex items-center justify-between text-left cursor-pointer gap-4 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span className="font-mono text-xs sm:text-sm text-[#8e8e8e]">
                      {faq.number}
                    </span>
                    <h3 className="font-medium text-base sm:text-lg text-[#0b0b0b] tracking-tight">
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "bg-black text-white border-black"
                        : "bg-white text-black border-[#e7e7e7] hover:bg-neutral-100"
                    }`}
                  >
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-7 pb-6 sm:pb-7 pt-0 text-[#555] text-sm sm:text-base leading-relaxed pl-[calc(1.25rem+1.5rem)] sm:pl-[calc(1.75rem+2.25rem)] border-t border-[#f2f2f2] pt-4 animate-fade-in">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
