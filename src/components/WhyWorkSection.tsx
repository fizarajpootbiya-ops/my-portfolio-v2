import React from 'react';
import { WHY_WORK_POINTS } from '../data/portfolioData';
import { Check } from 'lucide-react';

export const WhyWorkSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#071321] border-t border-[#23364A]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs uppercase tracking-widest text-[#D6AA3D] font-semibold">
              Principles & Standards
            </span>
            <span className="text-[#23364A]">/</span>
            <span className="text-xs text-[#8191A3]">Why Work With SZ</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-normal text-[#F4F3EA] leading-[1.14] mb-4 text-balance">
            Thoughtful work.{' '}
            <span className="text-[#8191A3]">Clear communication.</span>{' '}
            <span className="italic font-normal text-[#D6AA3D]">Websites with purpose.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#8191A3] leading-relaxed">
            I believe a website should be an authentic, reliable asset that serves your audience and represents your craft with dignity.
          </p>
        </div>

        {/* 6 Grid Principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_WORK_POINTS.map((point, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-[#0D1E30] border border-[#23364A] hover:border-[#D6AA3D]/50 transition-all duration-300 text-left group"
            >
              <div className="w-8 h-8 rounded-lg bg-[#071321] border border-[#23364A] flex items-center justify-center text-[#D6AA3D] mb-4 group-hover:border-[#D6AA3D]/40 transition-colors">
                <Check className="w-4 h-4" />
              </div>

              <h3 className="text-lg font-serif text-[#F4F3EA] group-hover:text-[#D6AA3D] transition-colors mb-2">
                {point.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#8191A3] leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
