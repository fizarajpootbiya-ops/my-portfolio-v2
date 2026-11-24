import React from 'react';
import { ArrowUpRight, Compass, ShieldCheck, Palette, Code2, Sparkles } from 'lucide-react';
import { SZLogo } from './SZLogo';

interface AboutSectionProps {
  onExploreClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onExploreClick }) => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#071321] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs uppercase tracking-widest text-[#D6AA3D] font-semibold">
            About SZ
          </span>
          <span className="text-[#23364A]">/</span>
          <span className="text-xs text-[#8191A3]">Syeda Zainab</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading and Story */}
          <div className="lg:col-span-7 flex flex-col text-left">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-normal text-[#F4F3EA] leading-[1.12] mb-8 text-balance">
              Good design makes room for{' '}
              <span className="italic font-normal text-[#D6AA3D]">better ideas.</span>
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-[#8191A3] font-normal leading-relaxed">
              <p>
                I'm <strong className="text-[#F4F3EA] font-medium">Syeda Zainab</strong>, the person behind SZ.
                I enjoy turning ideas into thoughtful, functional websites that are easy to explore and enjoyable to use.
              </p>
              <p>
                My approach combines visual design, practical development and attention to the small details that make a website feel complete.
              </p>
              <p>
                From the first layout to the final responsive experience, I focus on making each website clear, purposeful and aligned with its goals.
              </p>
            </div>

            {/* Approach Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-[#23364A]/60">
              <div className="p-4 rounded-xl bg-[#0D1E30] border border-[#23364A]/80">
                <Palette className="w-5 h-5 text-[#D6AA3D] mb-2.5" />
                <h4 className="text-sm font-medium text-[#F4F3EA] mb-1">Visual Clarity</h4>
                <p className="text-xs text-[#8191A3] leading-relaxed">
                  Editorial typography and balanced spacing that let your content breathe.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0D1E30] border border-[#23364A]/80">
                <Code2 className="w-5 h-5 text-[#D6AA3D] mb-2.5" />
                <h4 className="text-sm font-medium text-[#F4F3EA] mb-1">Functional Build</h4>
                <p className="text-xs text-[#8191A3] leading-relaxed">
                  Clean development in Shopify, Wix, and modern code with zero bloat.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0D1E30] border border-[#23364A]/80">
                <ShieldCheck className="w-5 h-5 text-[#D6AA3D] mb-2.5" />
                <h4 className="text-sm font-medium text-[#F4F3EA] mb-1">Deliberate Detail</h4>
                <p className="text-xs text-[#8191A3] leading-relaxed">
                  Accessible contrast, responsive touch targets, and natural user flow.
                </p>
              </div>
            </div>

            {/* Link to Explore Work */}
            <div className="mt-8">
              <button
                onClick={onExploreClick}
                className="inline-flex items-center gap-2 text-sm font-medium text-[#D6AA3D] hover:text-[#f4c46f] transition-colors group cursor-pointer"
              >
                <span>Explore the full project gallery & case studies</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Personal Brand & Monogram Composition */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-br from-[#0D1E30] to-[#071321] p-8 border border-[#23364A] shadow-xl overflow-hidden">
              {/* Background geometric line art */}
              <div className="absolute top-0 right-0 w-64 h-64 border border-[#23364A]/30 rounded-full translate-x-20 -translate-y-20 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 border border-[#D6AA3D]/10 rounded-full -translate-x-12 translate-y-12 pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Large Monogram visual */}
                <div className="w-24 h-24 mb-6 rounded-2xl bg-[#071321] p-3 border-2 border-[#23364A] shadow-inner flex items-center justify-center">
                  <SZLogo size="lg" showSubtitle={false} />
                </div>

                <span className="text-xs uppercase tracking-widest text-[#D6AA3D] font-semibold mb-1">
                  Design & Development
                </span>
                <h3 className="text-2xl font-serif text-[#F4F3EA] mb-2">
                  Syeda Zainab
                </h3>
                <p className="text-xs text-[#8191A3] max-w-xs mb-6">
                  Independent creative specializing in thoughtful websites, e-commerce stores, and digital brand experiences.
                </p>

                <div className="w-full pt-6 border-t border-[#23364A]/80 text-left space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-[#8191A3]">Based In</span>
                    <span className="text-[#F4F3EA] font-medium">Remote · Worldwide Clients</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-[#8191A3]">Core Focus</span>
                    <span className="text-[#F4F3EA] font-medium">Shopify, Wix & Bespoke Web</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-[#8191A3]">Working Model</span>
                    <span className="text-[#F4F3EA] font-medium">Direct Collaboration</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
