import React from 'react';
import { PROCESS_STAGES } from '../data/portfolioData';
import { ArrowRight, Check } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#071321] border-t border-[#23364A]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs uppercase tracking-widest text-[#D6AA3D] font-semibold">
              How I Work
            </span>
            <span className="text-[#23364A]">/</span>
            <span className="text-xs text-[#8191A3]">Working Process</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-normal text-[#F4F3EA] leading-[1.14] mb-4 text-balance">
            A thoughtful process,{' '}
            <span className="italic font-normal text-[#D6AA3D]">from idea to launch.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#8191A3] leading-relaxed">
            Every project follows a structured, collaborative workflow designed to ensure clarity,
            prevent wasted revisions, and deliver a polished final result.
          </p>
        </div>

        {/* 5-Stage Editorial Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {PROCESS_STAGES.map((stage, idx) => (
            <div
              key={stage.number}
              className="group relative p-6 rounded-2xl bg-[#0D1E30] border border-[#23364A] hover:border-[#D6AA3D]/60 hover:bg-[#13273D] transition-all duration-300 flex flex-col justify-between text-left"
            >
              <div>
                {/* Stage Number & Indicator */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-mono font-medium text-[#8191A3] group-hover:text-[#D6AA3D] transition-colors">
                    {stage.number}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-[#23364A] group-hover:bg-[#D6AA3D] transition-colors" />
                </div>

                {/* Stage Title */}
                <h3 className="text-xl font-serif text-[#F4F3EA] group-hover:text-[#D6AA3D] transition-colors mb-1">
                  {stage.title}
                </h3>
                <span className="text-xs text-[#8191A3] block mb-3 font-medium">
                  {stage.subtitle}
                </span>

                {/* Description */}
                <p className="text-xs text-[#8191A3] leading-relaxed mb-6 group-hover:text-[#F4F3EA]/80 transition-colors">
                  {stage.description}
                </p>
              </div>

              {/* Deliverable pill at bottom */}
              <div className="pt-4 border-t border-[#23364A]/60">
                <span className="text-[10px] uppercase tracking-wider text-[#8191A3] font-semibold block mb-1">
                  Stage Output
                </span>
                <p className="text-xs font-medium text-[#F4F3EA]">
                  {stage.deliverable}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
