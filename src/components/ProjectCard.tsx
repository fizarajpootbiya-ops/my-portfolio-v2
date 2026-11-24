import React from 'react';
import { Project, PROJECT_MOBILE_PREVIEWS } from '../data/portfolioData';
import { ProjectScreenshot } from './ProjectScreenshot';
import { SmartphoneMockup } from './SmartphoneMockup';
import { ArrowUpRight, ExternalLink, Video, Eye, Smartphone } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (projectId: string) => void;
  onOpenVideo?: (projectId: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onOpenCaseStudy,
  onOpenVideo
}) => {
  const getStatusBadge = () => {
    if (project.status === 'Live') {
      return (
        <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#D6AA3D] bg-[#0E2034] px-2.5 py-1 rounded-md border border-[#D6AA3D]/30 shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D6AA3D]"></span>
          <span>LIVE</span>
        </span>
      );
    }
    if (project.status === 'Not Live') {
      return (
        <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#8191A3] bg-[#0E2034] px-2.5 py-1 rounded-md border border-[#23364A]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#8191A3]"></span>
          <span>NOT LIVE</span>
        </span>
      );
    }
    // George Central has unconfirmed status -> Do not display a status badge
    return null;
  };

  return (
    <article className="group rounded-2xl bg-[#0D1E30] border border-[#23364A] hover:border-[#D6AA3D]/60 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl text-left">
      <div>
        {/* 1. Large Website Homepage Screenshot & Mobile Preview Mockup */}
        <div className="p-3 sm:p-4 bg-[#071321] border-b border-[#23364A] relative pb-6 sm:pb-8">
          <div className="relative">
            <ProjectScreenshot
              project={project}
              aspectRatio="aspect-[16/10]"
              onClick={() => onOpenCaseStudy(project.id)}
              onEnlarge={() => onOpenCaseStudy(project.id)}
            />

            {/* Floating Smartphone Mockup Preview */}
            {PROJECT_MOBILE_PREVIEWS[project.id] && (
              <div className="absolute -bottom-6 right-3 sm:right-6 z-20 shadow-2xl hover:scale-105 transition-transform duration-300 pointer-events-none">
                <div className="absolute -top-3 right-0 bg-[#071321] text-[#D6AA3D] text-[9px] font-mono px-2 py-0.5 rounded border border-[#23364A] shadow flex items-center gap-1 z-30">
                  <Smartphone className="w-3 h-3" />
                  <span>Mobile View</span>
                </div>
                <SmartphoneMockup
                  type={PROJECT_MOBILE_PREVIEWS[project.id].type}
                  src={PROJECT_MOBILE_PREVIEWS[project.id].src}
                  title={project.title}
                />
              </div>
            )}
          </div>
        </div>

        {/* Project Information Below Screenshot */}
        <div className="p-6 sm:p-7">
          {/* Top Line: Number, Status, Category, and Redesign Badge */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="text-[#D6AA3D] font-semibold text-sm">
                #{project.number}
              </span>
              <span className="text-[#23364A]">·</span>
              {project.category !== 'To be confirmed' ? (
                <span className="text-[#8191A3] uppercase tracking-wider text-[11px] font-medium">
                  {project.category}
                </span>
              ) : (
                <span className="text-[#8191A3]/60 italic text-[11px]">
                  Category: To be confirmed
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              {project.isRedesign && (
                <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded bg-[#D6AA3D]/10 text-[#D6AA3D] border border-[#D6AA3D]/30">
                  REDESIGN
                </span>
              )}
              {getStatusBadge()}
            </div>
          </div>

          {/* Project Name (Large, Bold Heading) */}
          <h3
            onClick={() => onOpenCaseStudy(project.id)}
            className="text-2xl sm:text-3xl font-serif text-[#F4F3EA] group-hover:text-[#D6AA3D] transition-colors mb-3 cursor-pointer"
          >
            {project.title}
          </h3>

          {/* Description (Only when actual information is available) */}
          {project.description ? (
            <p className="text-sm text-[#8191A3] leading-relaxed line-clamp-2 mb-2">
              {project.description}
            </p>
          ) : (
            <p className="text-xs text-[#8191A3]/50 italic mb-2">
              Project details to be confirmed by SZ.
            </p>
          )}

          {/* Video availability marker */}
          {project.hasVideoAvailable && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                if (onOpenVideo) {
                  onOpenVideo(project.id);
                } else {
                  onOpenCaseStudy(project.id);
                }
              }}
              className="inline-flex items-center gap-1.5 mt-2 text-xs text-[#D6AA3D] bg-[#071321] hover:bg-[#0E2034] px-2.5 py-1 rounded-md border border-[#D6AA3D]/30 hover:border-[#D6AA3D]/60 transition-colors cursor-pointer group/vid"
              title="Click to view video walkthrough"
            >
              <Video className="w-3.5 h-3.5 group-hover/vid:scale-110 transition-transform" />
              <span>Video walkthrough available</span>
            </button>
          )}
        </div>
      </div>

      {/* Actions Row */}
      <div className="px-6 sm:px-7 pb-6 pt-3 border-t border-[#23364A]/60 flex items-center justify-between gap-4">
        {/* View Case Study */}
        <button
          onClick={() => onOpenCaseStudy(project.id)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F4F3EA] hover:text-[#D6AA3D] transition-colors cursor-pointer py-1 group/btn"
        >
          <Eye className="w-3.5 h-3.5 text-[#D6AA3D]" />
          <span>View Case Study</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </button>

        {/* Visit Live Website (when real URL exists) */}
        {project.websiteUrl ? (
          <a
            href={project.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#8191A3] hover:text-[#D6AA3D] transition-colors"
          >
            <span>Visit Website</span>
            <ExternalLink className="w-3 h-3 text-[#8191A3]" />
          </a>
        ) : (
          <span className="text-[11px] text-[#8191A3]/50 italic">
            URL not provided
          </span>
        )}
      </div>
    </article>
  );
};
