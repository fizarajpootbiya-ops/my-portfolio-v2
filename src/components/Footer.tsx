import React from 'react';
import { SZLogo } from './SZLogo';
import { ArrowUpRight, Compass, MessageCircle, Mail, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: 'home' | 'explore', sectionId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = 2026;

  const handleLink = (sectionId?: string) => {
    onNavigate('home', sectionId);
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#050E17] border-t border-[#23364A] pt-20 pb-12 relative overflow-hidden text-left">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-[#D6AA3D]/[0.025] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Closing Statement & CTA Banner */}
        <div className="pb-16 border-b border-[#23364A]/60 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-[#D6AA3D] font-semibold block mb-3">
              Next Steps
            </span>
            <h2 className="text-4xl sm:text-6xl font-normal text-[#F4F3EA] leading-[1.1] mb-4 text-balance">
              Let's make something{' '}
              <span className="italic font-normal text-[#D6AA3D]">meaningful.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#8191A3] leading-relaxed">
              Have an idea, a project or a website that needs a fresh direction? I'd love to hear about it.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <button
              onClick={() => handleLink('contact')}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold rounded-xl bg-[#D6AA3D] text-[#071321] hover:bg-[#f4c46f] transition-all cursor-pointer shadow-lg shadow-[#D6AA3D]/15 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </button>

            <button
              onClick={() => onNavigate('explore')}
              className="inline-flex items-center gap-2 px-5 py-3.5 text-xs font-medium rounded-xl bg-[#0D1E30] text-[#F4F3EA] border border-[#23364A] hover:border-[#8191A3] transition-all cursor-pointer"
            >
              <Compass className="w-4 h-4 text-[#D6AA3D]" />
              <span>Explore My Work</span>
            </button>
          </div>
        </div>

        {/* Middle Navigation & Brand Identity */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 items-start">
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <SZLogo size="lg" showSubtitle={true} onClick={() => handleLink()} />
            <p className="text-xs sm:text-sm text-[#8191A3] max-w-sm leading-relaxed mt-3">
              Independent web designer and developer creating thoughtful, functional websites,
              Shopify storefronts, and bespoke digital experiences built around people.
            </p>
            <div className="pt-2 text-xs text-[#8191A3]">
              Available for select freelance and collaborative contracts.
            </div>
          </div>

          {/* Sitemaps */}
          <div className="lg:col-span-3 text-left">
            <span className="text-xs uppercase tracking-wider text-[#F4F3EA] font-semibold block mb-4">
              Navigation
            </span>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#8191A3]">
              <li>
                <button
                  onClick={() => handleLink('about')}
                  className="hover:text-[#D6AA3D] transition-colors cursor-pointer"
                >
                  About SZ
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('services')}
                  className="hover:text-[#D6AA3D] transition-colors cursor-pointer"
                >
                  Services & Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('work')}
                  className="hover:text-[#D6AA3D] transition-colors cursor-pointer"
                >
                  Featured Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('skills')}
                  className="hover:text-[#D6AA3D] transition-colors cursor-pointer"
                >
                  Skills & Tools
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('explore')}
                  className="hover:text-[#D6AA3D] transition-colors cursor-pointer inline-flex items-center gap-1 text-[#F4F3EA]"
                >
                  <span>Explore Work Gallery</span>
                  <ArrowUpRight className="w-3 h-3 text-[#D6AA3D]" />
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Connect */}
          <div className="lg:col-span-4 text-left">
            <span className="text-xs uppercase tracking-wider text-[#F4F3EA] font-semibold block mb-4">
              Connect Directly
            </span>
            <ul className="space-y-3 text-xs sm:text-sm text-[#8191A3]">
              <li>
                <a
                  href="mailto:contact@syedazainab.design"
                  className="hover:text-[#D6AA3D] transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-[#D6AA3D]" />
                  <span>contact@syedazainab.design</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D6AA3D] transition-colors flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-[#D6AA3D]" />
                  <span>Chat on WhatsApp</span>
                </a>
              </li>
              <li className="pt-2 text-xs text-[#8191A3]">
                Direct response time: Usually within 24 hours.
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#23364A]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8191A3]">
          <div>
            © {currentYear} SZ — Syeda Zainab. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Designed & Built with Care</span>
            <span>·</span>
            <span className="text-[#F4F3EA]">No Templates · Authentic Craft</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
