import React, { useState } from 'react';
import { FAQS_DATA } from '../data/portfolioData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenFaqId(prev => (prev === id ? null : id));
  };

  return (
    <section className="py-20 md:py-28 bg-[#091829] border-t border-[#23364A]/60 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 text-left">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs uppercase tracking-widest text-[#D6AA3D] font-semibold">
              Frequently Asked Questions
            </span>
            <span className="text-[#23364A]">/</span>
            <span className="text-xs text-[#8191A3]">Common Questions</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-normal text-[#F4F3EA] leading-[1.14] mb-4 text-balance">
            Everything you need to know{' '}
            <span className="italic font-normal text-[#D6AA3D]">before we begin.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#8191A3] leading-relaxed">
            Honest answers to the most common questions regarding working together, platforms, scope, and process.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQS_DATA.map((faq) => {
            const isOpen = openFaqId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#0E2034] border-[#D6AA3D]/40 shadow-lg'
                    : 'bg-[#071321] border-[#23364A] hover:border-[#8191A3]/40'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer select-none group"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-serif text-[#F4F3EA] group-hover:text-[#D6AA3D] transition-colors">
                    {faq.question}
                  </span>

                  <div className={`w-7 h-7 rounded-full border border-[#23364A] flex items-center justify-center transition-all duration-300 group-hover:border-[#D6AA3D] group-hover:text-[#D6AA3D] shrink-0 ${
                    isOpen ? 'bg-[#071321] text-[#D6AA3D] rotate-180' : 'text-[#8191A3]'
                  }`}>
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-left border-t border-[#23364A]/50 text-sm sm:text-base text-[#8191A3] leading-relaxed animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
