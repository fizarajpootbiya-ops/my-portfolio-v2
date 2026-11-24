import React from 'react';
import { SKILLS_LIST } from '../data/portfolioData';
import { Layers, CheckCircle2 } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 md:py-28 bg-[#091829] border-t border-[#23364A]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs uppercase tracking-widest text-[#D6AA3D] font-semibold">
              Disciplines & Tools
            </span>
            <span className="text-[#23364A]">/</span>
            <span className="text-xs text-[#8191A3]">Verified Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-normal text-[#F4F3EA] leading-[1.14] mb-4 text-balance">
            The tools behind{' '}
            <span className="italic font-normal text-[#D6AA3D]">the work.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#8191A3] leading-relaxed">
            A focused toolkit centered on clean layouts, proven platforms, and standards-compliant implementation.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SKILLS_LIST.map((skill, index) => (
            <div
              key={index}
              className="p-5 rounded-xl bg-[#0D1E30] border border-[#23364A] hover:border-[#D6AA3D]/50 hover:bg-[#13273D] transition-all duration-200 text-left group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono text-[#8191A3] group-hover:text-[#D6AA3D] transition-colors">
                  {skill.category}
                </span>
                <CheckCircle2 className="w-4 h-4 text-[#23364A] group-hover:text-[#D6AA3D] transition-colors" />
              </div>

              <h3 className="text-base font-medium text-[#F4F3EA] group-hover:text-white transition-colors mb-1">
                {skill.name}
              </h3>

              <p className="text-xs text-[#8191A3] leading-relaxed">
                {skill.focus}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
