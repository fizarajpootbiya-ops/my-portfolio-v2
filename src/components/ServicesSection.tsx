import React, { useState } from 'react';
import { SERVICES_DATA, Service } from '../data/portfolioData';
import { ArrowUpRight, Check, ChevronDown } from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceForInquiry?: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForInquiry }) => {
  const [expandedId, setExpandedId] = useState<string | null>('web-design');

  const toggleExpand = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-[#071321] border-t border-[#23364A]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs uppercase tracking-widest text-[#D6AA3D] font-semibold">
              Services & Capabilities
            </span>
            <span className="text-[#23364A]">/</span>
            <span className="text-xs text-[#8191A3]">What I Provide</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-normal text-[#F4F3EA] leading-[1.14] mb-4 text-balance">
            Good ideas deserve{' '}
            <span className="italic font-normal text-[#D6AA3D]">well-designed websites.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#8191A3] leading-relaxed">
            From the first visual direction to a fully developed website, I help turn business ideas into useful digital experiences.
          </p>
        </div>

        {/* Editorial Service Accordion / List */}
        <div className="divide-y divide-[#23364A]">
          {SERVICES_DATA.map((service) => {
            const isExpanded = expandedId === service.id;

            return (
              <div
                key={service.id}
                className="group py-6 sm:py-8 transition-colors duration-200"
              >
                {/* Header row */}
                <div
                  onClick={() => toggleExpand(service.id)}
                  className="flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer select-none"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleExpand(service.id);
                    }
                  }}
                >
                  <div className="flex items-start md:items-center gap-5 sm:gap-8">
                    {/* Number */}
                    <span className="text-sm sm:text-base font-mono text-[#8191A3] group-hover:text-[#D6AA3D] transition-colors shrink-0 pt-0.5 md:pt-0">
                      {service.number}
                    </span>

                    {/* Title & Subtitle */}
                    <div className="flex flex-col text-left">
                      <h3 className="text-xl sm:text-2xl font-serif text-[#F4F3EA] group-hover:text-[#D6AA3D] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#8191A3] mt-0.5">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Right side affordance */}
                  <div className="flex items-center gap-4 self-end md:self-center shrink-0">
                    <span className="text-xs text-[#8191A3] group-hover:text-[#F4F3EA] transition-colors hidden sm:inline">
                      {isExpanded ? 'Hide Details' : 'View Details'}
                    </span>
                    <div className={`w-8 h-8 rounded-full border border-[#23364A] flex items-center justify-center transition-all duration-300 group-hover:border-[#D6AA3D] group-hover:text-[#D6AA3D] ${
                      isExpanded ? 'bg-[#0E2034] text-[#D6AA3D] rotate-180' : 'text-[#8191A3]'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Expanded Detailed Breakdown */}
                {isExpanded && (
                  <div className="mt-6 pt-6 border-t border-[#23364A]/60 grid grid-cols-1 lg:grid-cols-12 gap-8 text-left animate-in fade-in duration-200">
                    {/* Column 1: Description & Problem Solved */}
                    <div className="lg:col-span-5 space-y-4">
                      <div>
                        <span className="text-[11px] uppercase tracking-wider text-[#D6AA3D] font-semibold block mb-1">
                          Overview
                        </span>
                        <p className="text-sm text-[#F4F3EA]/90 leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-[#0D1E30] border border-[#23364A]">
                        <span className="text-[11px] uppercase tracking-wider text-[#8191A3] font-semibold block mb-1">
                          The Problem It Solves
                        </span>
                        <p className="text-xs text-[#F4F3EA]/80 leading-relaxed">
                          {service.problemSolved}
                        </p>
                      </div>

                      <div className="pt-2">
                        <span className="text-xs text-[#8191A3]">
                          Ideal for: <span className="text-[#F4F3EA]">{service.idealFor}</span>
                        </span>
                      </div>
                    </div>

                    {/* Column 2: What is Included / Deliverables */}
                    <div className="lg:col-span-7">
                      <span className="text-[11px] uppercase tracking-wider text-[#D6AA3D] font-semibold block mb-3">
                        What's Included & Deliverables
                      </span>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.deliverables.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2.5 p-3 rounded-lg bg-[#0E2034]/70 border border-[#23364A]/60"
                          >
                            <Check className="w-4 h-4 text-[#D6AA3D] shrink-0 mt-0.5" />
                            <span className="text-xs text-[#F4F3EA] leading-snug">{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Request this service CTA */}
                      <div className="mt-6 flex items-center justify-between pt-4 border-t border-[#23364A]/40">
                        <span className="text-xs text-[#8191A3]">
                          Ready to discuss a {service.title} project?
                        </span>
                        <a
                          href="#contact"
                          onClick={() => {
                            if (onSelectServiceForInquiry) {
                              onSelectServiceForInquiry(service.title);
                            }
                          }}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#071321] bg-[#D6AA3D] px-3.5 py-1.5 rounded-lg hover:bg-[#f4c46f] transition-all cursor-pointer"
                        >
                          <span>Inquire About This Service</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
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
