import React from 'react';
import { ArrowDown, ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onExploreWork: () => void;
  onAboutMe: () => void;
  onOpenCaseStudy: (projectId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreWork,
  onAboutMe,
  onOpenCaseStudy
}) => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden border-b border-[#23364A]/60">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#D6AA3D]/[0.035] rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-10 w-[400px] h-[400px] bg-[#23364A]/25 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col text-left">
            {/* Small introduction label */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D6AA3D]"></span>
              <span className="text-xs uppercase tracking-widest text-[#D6AA3D] font-semibold">
                Independent Web Designer & Developer
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#F4F3EA] leading-[1.12] mb-6 text-balance">
              Hi, I'm a <span className="italic font-normal text-[#D6AA3D]">Website Designer & Front-End Developer.</span>
            </h1>

            {/* Introductory Paragraphs */}
            <div className="space-y-4 text-base sm:text-lg text-[#8191A3] font-normal leading-relaxed max-w-2xl mb-6">
              <p>
                I'm a creative Website Designer with hands-on experience building modern, responsive, and user-friendly websites using Wix, Wix Studio, WordPress, Shopify, and GoHighLevel (GHL).
              </p>
              <p>
                I enjoy turning ideas into functional digital experiences, combining clean design, thoughtful layouts, and attention to detail. Alongside my professional work, I'm pursuing a Bachelor's degree in Software Engineering to strengthen my technical knowledge and expand my development skills.
              </p>
              <p>
                I'm continuously learning, exploring new technologies, and improving my ability to build websites that look great and work smoothly.
              </p>
            </div>

            {/* Closing Statement */}
            <p className="text-base sm:text-lg font-serif text-[#F4F3EA] italic mb-8">
              "Let's create something meaningful together."
            </p>

            {/* CTA Group */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreWork}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold rounded-xl bg-[#D6AA3D] text-[#071321] hover:bg-[#f4c46f] transition-all cursor-pointer shadow-lg shadow-[#D6AA3D]/15 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore My Work</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <button
                onClick={onAboutMe}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-medium rounded-xl bg-[#0E2034] text-[#F4F3EA] border border-[#23364A] hover:border-[#8191A3]/50 hover:bg-[#13273D] transition-all cursor-pointer"
              >
                <span>More About Me</span>
              </button>
            </div>
          </div>

          {/* Right Column: Prominent Visual Composition with Portrait & Project Preview */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none space-y-6">
              {/* Professional Portrait Card */}
              <div className="relative rounded-2xl bg-[#0D1E30] p-3 border-2 border-[#D6AA3D]/40 shadow-2xl overflow-hidden group">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#071321]">
                  <img
                    src="/assets/aistudio/image_5a8f1587.png"
                    alt="Syeda Zainab - Website Designer & Front-End Developer"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071321]/90 via-[#071321]/20 to-transparent flex flex-col justify-end p-4">
                    <span className="text-[10px] uppercase tracking-widest text-[#D6AA3D] font-mono font-semibold">
                      Lead Designer & Developer
                    </span>
                    <h3 className="text-lg font-serif text-[#F4F3EA]">
                      Syeda Zainab
                    </h3>
                  </div>
                </div>
              </div>

              {/* Desktop Screen Mockup Frame */}
              <div
                onClick={() => onOpenCaseStudy('versatile-pro-junk-solution')}
                className="group relative rounded-2xl bg-[#0D1E30] p-2.5 sm:p-3 border border-[#23364A] shadow-2xl hover:border-[#D6AA3D]/50 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Browser bar header */}
                <div className="flex items-center justify-between pb-2 px-2 border-b border-[#23364A]/60 mb-2.5 text-[11px] text-[#8191A3]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#23364A] group-hover:bg-[#D6AA3D]/70 transition-colors"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#23364A]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#23364A]"></span>
                  </div>
                  <div className="px-2.5 py-0.5 rounded bg-[#071321] text-[10px] text-[#8191A3]/80 font-mono tracking-tight">
                    versatileprojunksolutions.com
                  </div>
                  <span className="text-[10px] text-[#D6AA3D] font-medium">LIVE</span>
                </div>

                {/* Desktop Screenshot */}
                <div className="relative aspect-video rounded-lg overflow-hidden bg-[#071321]">
                  <img
                    src="/assets/aistudio/image_b07112f3.png"
                    alt="Versatile Pro Junk Solution website redesign preview"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle scrim overlay on hover */}
                  <div className="absolute inset-0 bg-[#071321]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#071321]/90 text-xs font-medium text-[#D6AA3D] border border-[#D6AA3D]/40 backdrop-blur-sm">
                      <span>View Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Caption below screen */}
                <div className="flex items-center justify-between pt-2.5 px-1 text-xs text-[#8191A3]">
                  <span className="text-[#F4F3EA] font-medium">Versatile Pro Junk Solution</span>
                  <span className="text-[#D6AA3D]">Redesign · Live Site</span>
                </div>
              </div>

              {/* Floating SZ Brand Element */}
              <div className="absolute -top-4 -right-4 bg-[#0D1E30]/95 backdrop-blur-md px-3 py-2 rounded-xl border border-[#23364A] shadow-xl flex items-center gap-2 z-30">
                <div className="w-6 h-6 rounded-md bg-[#D6AA3D] text-[#071321] font-bold text-xs flex items-center justify-center">
                  SZ
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[11px] font-medium text-[#F4F3EA]">Art-Directed</span>
                  <span className="text-[9px] text-[#8191A3]">No generic templates</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 5: Quick Credential Strip directly below the hero */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-[#23364A]/60">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <span className="text-xs uppercase tracking-wider text-[#8191A3] font-medium">
              Core Capabilities & Disciplines
            </span>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[#F4F3EA]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D6AA3D]" />
                <span>Website Design</span>
              </div>
              <span className="text-[#23364A] hidden sm:inline">/</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D6AA3D]" />
                <span>Website Development</span>
              </div>
              <span className="text-[#23364A] hidden sm:inline">/</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D6AA3D]" />
                <span>Wix & Wix Studio</span>
              </div>
              <span className="text-[#23364A] hidden sm:inline">/</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D6AA3D]" />
                <span>Shopify</span>
              </div>
              <span className="text-[#23364A] hidden sm:inline">/</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D6AA3D]" />
                <span>HTML / CSS</span>
              </div>
              <span className="text-[#23364A] hidden sm:inline">/</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D6AA3D]" />
                <span>Basic & On-Page SEO</span>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle scroll indicator */}
        <div className="flex justify-center mt-10">
          <a
            href="#about"
            className="inline-flex items-center gap-2 text-xs text-[#8191A3] hover:text-[#D6AA3D] transition-colors py-1 group"
          >
            <span>Scroll to discover</span>
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
