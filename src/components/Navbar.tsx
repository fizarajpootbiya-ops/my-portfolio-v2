import React, { useState, useEffect } from 'react';
import { SZLogo } from './SZLogo';
import { Menu, X, ArrowUpRight, Compass, Award } from 'lucide-react';

interface NavbarProps {
  currentPage: 'home' | 'work' | 'certificates';
  onNavigate: (page: 'home' | 'work' | 'certificates', sectionId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHomeSectionClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    onNavigate('home', sectionId);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#071321]/92 backdrop-blur-md border-b border-[#23364A]/80 py-3 shadow-lg shadow-[#071321]/50'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 md:gap-8">
          {/* Zone 1: Brand Mark / Monogram */}
          <div className="shrink-0">
            <SZLogo
              size="md"
              showSubtitle={true}
              onClick={() => onNavigate('home')}
            />
          </div>

          {/* Zone 2: Primary Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#8191A3]">
            <button
              onClick={() => handleHomeSectionClick('about')}
              className="hover:text-[#F4F3EA] transition-colors whitespace-nowrap cursor-pointer py-1 hover:text-[#D6AA3D]"
            >
              About
            </button>
            <button
              onClick={() => handleHomeSectionClick('services')}
              className="hover:text-[#F4F3EA] transition-colors whitespace-nowrap cursor-pointer py-1 hover:text-[#D6AA3D]"
            >
              Services
            </button>
            <button
              onClick={() => onNavigate('work')}
              className={`transition-colors whitespace-nowrap cursor-pointer py-1 font-semibold ${
                currentPage === 'work' ? 'text-[#D6AA3D]' : 'hover:text-[#F4F3EA] hover:text-[#D6AA3D]'
              }`}
            >
              Work
            </button>
            <button
              onClick={() => onNavigate('certificates')}
              className={`transition-colors whitespace-nowrap cursor-pointer py-1 font-semibold ${
                currentPage === 'certificates' ? 'text-[#D6AA3D]' : 'hover:text-[#F4F3EA] hover:text-[#D6AA3D]'
              }`}
            >
              Certificates
            </button>
            <button
              onClick={() => handleHomeSectionClick('skills')}
              className="hover:text-[#F4F3EA] transition-colors whitespace-nowrap cursor-pointer py-1 hover:text-[#D6AA3D]"
            >
              Skills
            </button>
            <button
              onClick={() => handleHomeSectionClick('contact')}
              className="hover:text-[#F4F3EA] transition-colors whitespace-nowrap cursor-pointer py-1 hover:text-[#D6AA3D]"
            >
              Contact
            </button>
          </nav>

          {/* Zone 3: Actions & Availability */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            {/* Availability indicator */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0D1E30] border border-[#23364A] text-[12px] text-[#F4F3EA]">
              <span className="w-2 h-2 rounded-full bg-[#D6AA3D]"></span>
              <span className="text-[#8191A3]">Available for select projects</span>
            </div>

            {/* Certificates quick button */}
            <button
              onClick={() => onNavigate('certificates')}
              className={`hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-lg border transition-all whitespace-nowrap cursor-pointer ${
                currentPage === 'certificates'
                  ? 'bg-[#D6AA3D] text-[#071321] border-[#D6AA3D] font-semibold'
                  : 'bg-[#0E2034] text-[#F4F3EA] border-[#23364A] hover:border-[#D6AA3D]/50 hover:text-white'
              }`}
            >
              <Award className="w-3.5 h-3.5 text-[#D6AA3D]" />
              <span>Certificates</span>
            </button>

            {/* Primary Action: Let's Talk */}
            <button
              onClick={() => handleHomeSectionClick('contact')}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-[#D6AA3D] text-[#071321] hover:bg-[#f4c46f] transition-all whitespace-nowrap cursor-pointer shadow-sm hover:shadow-[#D6AA3D]/20 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#8191A3] hover:text-[#F4F3EA] hover:bg-[#0E2034] rounded-lg border border-[#23364A] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#071321]/98 border-b border-[#23364A] px-4 pt-3 pb-6 shadow-2xl backdrop-blur-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-2 pt-2">
            <div className="flex items-center gap-2 px-3 py-2 text-xs text-[#8191A3] border-b border-[#23364A]/50 mb-1">
              <span className="w-2 h-2 rounded-full bg-[#D6AA3D]"></span>
              <span>Available for select projects</span>
            </div>

            <button
              onClick={() => handleHomeSectionClick('about')}
              className="text-left px-3 py-2.5 text-sm font-medium text-[#F4F3EA] hover:text-[#D6AA3D] rounded-lg hover:bg-[#0E2034] transition-colors"
            >
              About SZ
            </button>
            <button
              onClick={() => handleHomeSectionClick('services')}
              className="text-left px-3 py-2.5 text-sm font-medium text-[#F4F3EA] hover:text-[#D6AA3D] rounded-lg hover:bg-[#0E2034] transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onNavigate('work'); }}
              className={`text-left px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                currentPage === 'work' ? 'bg-[#0E2034] text-[#D6AA3D]' : 'text-[#F4F3EA] hover:text-[#D6AA3D] hover:bg-[#0E2034]'
              }`}
            >
              Work (All Projects)
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onNavigate('certificates'); }}
              className={`text-left px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                currentPage === 'certificates' ? 'bg-[#0E2034] text-[#D6AA3D]' : 'text-[#F4F3EA] hover:text-[#D6AA3D] hover:bg-[#0E2034]'
              }`}
            >
              Certificates & Achievements
            </button>
            <button
              onClick={() => handleHomeSectionClick('skills')}
              className="text-left px-3 py-2.5 text-sm font-medium text-[#F4F3EA] hover:text-[#D6AA3D] rounded-lg hover:bg-[#0E2034] transition-colors"
            >
              Skills & Tools
            </button>
            <button
              onClick={() => handleHomeSectionClick('contact')}
              className="text-left px-3 py-2.5 text-sm font-medium text-[#F4F3EA] hover:text-[#D6AA3D] rounded-lg hover:bg-[#0E2034] transition-colors"
            >
              Contact
            </button>

            <div className="pt-3 border-t border-[#23364A]/60 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate('home');
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium rounded-lg bg-[#0E2034] border border-[#23364A] text-[#F4F3EA]"
              >
                <span>Return to Homepage</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
