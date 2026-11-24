import React from 'react';
import { Project, PROJECTS_DATA } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { ArrowUpRight, Compass } from 'lucide-react';

interface FeaturedProjectsSectionProps {
  onOpenCaseStudy: (projectId: string) => void;
  onOpenVideo?: (projectId: string) => void;
  onExploreAll: () => void;
}

export const FeaturedProjectsSection: React.FC<FeaturedProjectsSectionProps> = ({
  onOpenCaseStudy,
  onOpenVideo,
  onExploreAll
}) => {
  // Show exactly the 4 requested featured projects on the homepage
  const featuredIds = ['versatile-pro-junk-solution', 'rouge-fragrance', 'artplay', 'black-rose-archive'];
  const featured = PROJECTS_DATA.filter((p) => featuredIds.includes(p.id));

  return (
    <section id="work" className="py-20 md:py-28 bg-[#071321] border-t border-[#23364A]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Explore CTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 text-left">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs uppercase tracking-widest text-[#D6AA3D] font-semibold">
                Featured Works
              </span>
              <span className="text-[#23364A]">/</span>
              <span className="text-xs text-[#8191A3]">Selected Projects Showcase</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-normal text-[#F4F3EA] leading-[1.14] mb-3 text-balance">
              Crafted websites,{' '}
              <span className="italic font-normal text-[#D6AA3D]">real outcomes.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#8191A3] leading-relaxed">
              Explore highlighted client redesigns and boutique storefronts showcasing custom UI/UX and development.
            </p>
          </div>

          <button
            onClick={onExploreAll}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold rounded-xl bg-[#D6AA3D] text-[#071321] hover:bg-[#f4c46f] transition-all cursor-pointer whitespace-nowrap self-start md:self-auto shadow-md"
          >
            <Compass className="w-4 h-4" />
            <span>View All Projects</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

        {/* Two-Column Desktop Grid for Homepage */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {featured.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenCaseStudy={onOpenCaseStudy}
              onOpenVideo={onOpenVideo}
            />
          ))}
        </div>

        {/* View All Projects Strip */}
        <div className="mt-14 pt-8 border-t border-[#23364A]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div className="text-xs text-[#8191A3]">
            Showing 4 featured projects. Click below to browse all completed projects, mobile views, and video walkthroughs in the full Work gallery.
          </div>
          <button
            onClick={onExploreAll}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0E2034] text-[#F4F3EA] border border-[#23364A] hover:border-[#D6AA3D] hover:text-[#D6AA3D] text-xs font-semibold transition-all cursor-pointer shadow-md"
          >
            <span>Explore Complete Project Gallery (10 Projects)</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </section>
  );
};
