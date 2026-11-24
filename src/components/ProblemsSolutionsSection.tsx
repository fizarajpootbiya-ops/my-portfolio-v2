import React, { useState } from 'react';
import { PROBLEMS_SOLUTIONS_DATA } from '../data/portfolioData';
import { ArrowRight, ChevronDown, CheckCircle2, AlertCircle } from 'lucide-react';

export const ProblemsSolutionsSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>('prob-1');

  const toggleExpand = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <section className="py-20 md:py-28 bg-[#091829] border-t border-[#23364A]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs uppercase tracking-widest text-[#D6AA3D] font-semibold">
              Challenges & Solutions
            </span>
            <span className="text-[#23364A]">/</span>
            <span className="text-xs text-[#8191A3]">Strategic Thinking</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-normal text-[#F4F3EA] leading-[1.14] mb-4 text-balance">
            A website should do more than just look good.{' '}
            <span className="italic font-normal text-[#D6AA3D]">It should work for your business.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#8191A3] leading-relaxed">
            Visitors should understand what you offer, find what they need and know what to do next.
            I focus on the design and development details that make that possible.
          </p>
        </div>

        {/* Expandable Problem & Solution Accordion */}
        <div className="space-y-3">
          {PROBLEMS_SOLUTIONS_DATA.map((item) => {
            const isExpanded = expandedId === item.id;

            return (
              <div
                key={item.id}
                className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'bg-[#0E2034] border-[#D6AA3D]/40 shadow-xl'
                    : 'bg-[#071321]/60 border-[#23364A]/80 hover:border-[#8191A3]/40 hover:bg-[#0E2034]/50'
                }`}
              >
                {/* Header button */}
                <button
                  onClick={() => toggleExpand(item.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-start sm:items-center justify-between gap-4 cursor-pointer select-none group"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                    <span className="text-xs sm:text-sm font-mono text-[#8191A3] group-hover:text-[#D6AA3D] transition-colors shrink-0 pt-0.5 sm:pt-0">
                      {item.number}
                    </span>
                    <div>
                      <h3 className="text-lg sm:text-xl font-serif text-[#F4F3EA] group-hover:text-[#D6AA3D] transition-colors">
                        {item.title}
                      </h3>
                      {!isExpanded && (
                        <p className="text-xs sm:text-sm text-[#8191A3] mt-0.5 line-clamp-1">
                          {item.problem}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-xs text-[#8191A3] group-hover:text-[#F4F3EA] transition-colors hidden md:inline">
                      {isExpanded ? 'Collapse' : 'Explore Solution'}
                    </span>
                    <div className={`w-7 h-7 rounded-full border border-[#23364A] flex items-center justify-center transition-all duration-300 group-hover:border-[#D6AA3D] group-hover:text-[#D6AA3D] ${
                      isExpanded ? 'bg-[#071321] text-[#D6AA3D] rotate-180' : 'text-[#8191A3]'
                    }`}>
                      <ChevronDown className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </button>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-7 pt-2 border-t border-[#23364A]/60 grid grid-cols-1 md:grid-cols-2 gap-6 text-left animate-in fade-in duration-200">
                    {/* The Problem */}
                    <div className="p-4 rounded-lg bg-[#071321] border border-[#23364A]/60 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2 text-xs font-semibold uppercase tracking-wider text-[#F4F3EA]">
                          <AlertCircle className="w-4 h-4 text-amber-400" />
                          <span>The Challenge & Why It Matters</span>
                        </div>
                        <p className="text-sm text-[#F4F3EA]/90 leading-relaxed mb-3">
                          {item.problem}
                        </p>
                        <p className="text-xs text-[#8191A3] leading-relaxed">
                          {item.whyItMatters}
                        </p>
                      </div>
                    </div>

                    {/* SZ Solution */}
                    <div className="p-4 rounded-lg bg-[#071321] border border-[#D6AA3D]/30 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2 text-xs font-semibold uppercase tracking-wider text-[#D6AA3D]">
                          <CheckCircle2 className="w-4 h-4 text-[#D6AA3D]" />
                          <span>SZ Suggested Solution</span>
                        </div>
                        <p className="text-sm text-[#F4F3EA]/90 leading-relaxed mb-3">
                          {item.solution}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-[#23364A]/40 flex items-center gap-2 text-xs text-[#D6AA3D]">
                        <span className="font-semibold">Actionable Result:</span>
                        <span className="text-[#F4F3EA]">{item.actionableResult}</span>
                      </div>
                    </div>
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
