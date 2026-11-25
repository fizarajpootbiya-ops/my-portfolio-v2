import React, { useRef } from 'react';
import { CLIENT_REVIEWS_DATA } from '../data/portfolioData';
import { ArrowLeft, ArrowRight, Quote, CheckCircle2, ArrowUpRight } from 'lucide-react';

interface ClientFeedbackSectionProps {
  onOpenCaseStudy: (projectId: string) => void;
}

export const ClientFeedbackSection: React.FC<ClientFeedbackSectionProps> = ({ onOpenCaseStudy }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollManual = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const scrollAmount = 440;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <section id="reviews" className="py-24 md:py-32 bg-[#071321] border-t border-[#23364A]/60 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#D6AA3D]/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header & Manual Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 text-left">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs uppercase tracking-widest text-[#D6AA3D] font-semibold">
                Client Reviews & Communication
              </span>
              <span className="text-[#23364A]">/</span>
              <span className="text-xs text-[#8191A3]">Verified Feedback Carousel</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif text-[#F4F3EA] leading-[1.14] mb-4 text-balance">
              Good Work.{' '}
              <span className="italic font-normal text-[#D6AA3D]">Honest Words.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#8191A3] leading-relaxed">
              Every project is a collaboration. Here's what working together looked like, through the feedback, conversations and details that shaped each experience.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <button
              onClick={() => scrollManual('left')}
              className="p-3 rounded-xl bg-[#0D1E30] border border-[#23364A] text-[#F4F3EA] hover:border-[#D6AA3D] hover:text-[#D6AA3D] transition-all cursor-pointer shadow-lg"
              title="Previous Review"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollManual('right')}
              className="p-3 rounded-xl bg-[#0D1E30] border border-[#23364A] text-[#F4F3EA] hover:border-[#D6AA3D] hover:text-[#D6AA3D] transition-all cursor-pointer shadow-lg"
              title="Next Review"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory focus:outline-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {CLIENT_REVIEWS_DATA.map((review) => (
            <div
              key={review.id}
              className="w-[380px] sm:w-[440px] shrink-0 snap-start rounded-3xl bg-[#0D1E30] border border-[#23364A] p-7 sm:p-8 flex flex-col justify-between shadow-xl hover:border-[#D6AA3D]/50 transition-all duration-300 relative group"
            >
              {/* Top Accent Icon & Project Badge */}
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#23364A]">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#D6AA3D] px-2.5 py-1 rounded-md bg-[#071321] border border-[#23364A]">
                      {review.projectTitle}
                    </span>
                    {review.clientName && (
                      <span className="text-[10px] font-mono text-[#8191A3] px-2 py-1 rounded bg-[#071321]/60">
                        {review.clientName}
                      </span>
                    )}
                  </div>
                  <Quote className="w-6 h-6 text-[#23364A] group-hover:text-[#D6AA3D]/40 transition-colors" />
                </div>

                {/* Review Quote Text */}
                <div className="space-y-4">
                  <blockquote className="text-sm sm:text-base text-[#F4F3EA] leading-relaxed font-serif italic">
                    "{review.messages[0]?.text}"
                  </blockquote>

                  {review.outcomeNote && (
                    <div className="mt-4 p-3.5 rounded-xl bg-[#071321] border border-[#23364A] text-xs text-[#8191A3] leading-relaxed font-sans">
                      <span className="text-[#D6AA3D] font-semibold block mb-1">Project Note:</span>
                      {review.outcomeNote}
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Footer / Case Study Action */}
              <div className="mt-8 pt-4 border-t border-[#23364A]/70 flex items-center justify-between text-xs">
                <span className="text-[#8191A3] font-mono text-[11px]">{review.category}</span>
                {review.projectId ? (
                  <button
                    onClick={() => onOpenCaseStudy(review.projectId)}
                    className="inline-flex items-center gap-1.5 font-semibold text-[#D6AA3D] hover:text-[#f4c46f] transition-colors cursor-pointer"
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <span className="text-[#8191A3] italic">Ongoing Project</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Helper Note */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8191A3] gap-2">
          <span>Use navigation arrows or touch swipe to browse reviews</span>
          <div className="flex items-center gap-1.5 text-[#D6AA3D]">
            <CheckCircle2 className="w-4 h-4" />
            <span>Verified Communications</span>
          </div>
        </div>
      </div>
    </section>
  );
};
