import React, { useEffect, useState } from 'react';
import { Project, PROJECTS_DATA, PROJECT_MOBILE_PREVIEWS } from '../data/portfolioData';
import { getCustomScreenshot } from '../utils/screenshotStorage';
import {
  X,
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Maximize2,
  Minimize2,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Globe,
  CheckCircle2,
  Sparkles,
  Layers,
  ShieldCheck,
  ChevronDown,
  ArrowUpRight,
  Smartphone,
  Play,
  Video
} from 'lucide-react';

interface CaseStudyModalProps {
  projectId: string | null;
  onClose: () => void;
  onSelectProject: (id: string) => void;
  onOpenVideo?: (projectId: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  projectId,
  onClose,
  onSelectProject,
  onOpenVideo
}) => {
  const currentProject = PROJECTS_DATA.find((p) => p.id === projectId);
  const currentIndex = PROJECTS_DATA.findIndex((p) => p.id === projectId);

  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isFullHeightView, setIsFullHeightView] = useState(false);
  const [lightboxZoom, setLightboxZoom] = useState<number>(1);

  // Sync screenshot image source
  useEffect(() => {
    if (currentProject) {
      const custom = getCustomScreenshot(currentProject.imageKey);
      setImageSrc(custom || currentProject.defaultImage || null);
      setIsLightboxOpen(false);
      setIsFullHeightView(false);
      setLightboxZoom(1);
    }
  }, [currentProject]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isLightboxOpen) {
          setIsLightboxOpen(false);
        } else {
          onClose();
        }
      }
    };
    if (projectId) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [projectId, onClose, isLightboxOpen]);

  if (!currentProject) return null;

  const prevProject =
    currentIndex > 0 ? PROJECTS_DATA[currentIndex - 1] : PROJECTS_DATA[PROJECTS_DATA.length - 1];
  const nextProject =
    currentIndex < PROJECTS_DATA.length - 1 ? PROJECTS_DATA[currentIndex + 1] : PROJECTS_DATA[0];

  // Status display:
  // - Versatile Pro Junk Solution: LIVE
  // - Valhalla Peptides: LIVE
  // - George Central: Do not display a status because it has not been confirmed.
  const getStatusBadge = () => {
    if (currentProject.status === 'Live') {
      return (
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D6AA3D] bg-[#0E2034] px-3 py-1 rounded-md border border-[#D6AA3D]/30">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D6AA3D]"></span>
          <span>LIVE</span>
        </span>
      );
    }
    if (currentProject.status === 'Not Live') {
      return (
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8191A3] bg-[#0E2034] px-3 py-1 rounded-md border border-[#23364A]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#8191A3]"></span>
          <span>NOT LIVE</span>
        </span>
      );
    }
    // Unconfirmed status (e.g. George Central) -> Do not display any badge
    return null;
  };

  const getCleanDomain = () => {
    if (currentProject.websiteUrl) {
      try {
        const u = new URL(currentProject.websiteUrl);
        return u.hostname + (u.pathname !== '/' ? u.pathname : '');
      } catch {
        return currentProject.websiteUrl.replace(/^https?:\/\//, '');
      }
    }
    return `${currentProject.imageKey}.preview.sz`;
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-[#071321]/90 backdrop-blur-md overflow-y-auto">
        {/* Background click overlay */}
        <div className="fixed inset-0" onClick={onClose} />

        {/* Modal Container */}
        <div className="relative w-full max-w-5xl my-auto bg-[#0A192A] border border-[#23364A] rounded-2xl shadow-2xl overflow-hidden z-10 text-left max-h-[94vh] flex flex-col">
          {/* Sticky Modal Top Bar */}
          <div className="sticky top-0 z-20 px-5 sm:px-8 py-3.5 sm:py-4 bg-[#0A192A]/95 backdrop-blur-md border-b border-[#23364A] flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-[#D6AA3D] font-semibold tracking-wider">
                PROJECT #{currentProject.number}
              </span>
              <span className="text-[#23364A]">·</span>
              <span className="text-xs text-[#8191A3] hidden sm:inline">
                {currentProject.category}
              </span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              {currentProject.websiteUrl && (
                <a
                  href={currentProject.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0E2034] text-xs font-semibold text-[#D6AA3D] border border-[#D6AA3D]/30 hover:bg-[#13273D] transition-colors"
                >
                  <span>Visit Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              <button
                onClick={onClose}
                className="p-1.5 sm:p-2 rounded-lg bg-[#0E2034] text-[#8191A3] hover:text-[#F4F3EA] hover:bg-[#13273D] border border-[#23364A] transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          {/* Scrollable Content Body */}
          <div className="overflow-y-auto p-5 sm:p-8 md:p-10 space-y-10">
            {/* Header Information */}
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                {currentProject.isRedesign && (
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#D6AA3D]/10 text-[#D6AA3D] border border-[#D6AA3D]/30 uppercase tracking-wider">
                    REDESIGN
                  </span>
                )}
                {getStatusBadge()}
                {currentProject.platform && (
                  <span className="text-xs font-mono text-[#8191A3] px-2.5 py-1 rounded-md bg-[#071321] border border-[#23364A]">
                    {currentProject.platform}
                  </span>
                )}
                <span className="text-xs font-medium text-[#8191A3] px-2.5 py-1 rounded-md bg-[#071321] border border-[#23364A]">
                  {currentProject.category}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-serif text-[#F4F3EA] tracking-tight">
                {currentProject.title}
              </h1>

              {currentProject.description && (
                <p className="text-base sm:text-lg text-[#8191A3] leading-relaxed max-w-3xl">
                  {currentProject.description}
                </p>
              )}
            </div>

            {/* FULL-LENGTH HOMEPAGE DESIGN SHOWCASE */}
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#8191A3] pb-1">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#D6AA3D]"></span>
                  <span className="font-mono text-[#D6AA3D] font-semibold tracking-wider uppercase">
                    Full-Length Homepage Design
                  </span>
                  <span className="text-[#23364A]">|</span>
                  <span className="text-[#8191A3] text-[11px]">
                    Complete uncropped design from header to footer
                  </span>
                </div>

                {/* Viewer Controls */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIsFullHeightView(!isFullHeightView)}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#071321] text-xs font-medium text-[#F4F3EA] hover:text-[#D6AA3D] border border-[#23364A] transition-colors cursor-pointer"
                  >
                    {isFullHeightView ? (
                      <>
                        <Minimize2 className="w-3.5 h-3.5 text-[#D6AA3D]" />
                        <span>Scrollable Frame</span>
                      </>
                    ) : (
                      <>
                        <Maximize2 className="w-3.5 h-3.5 text-[#D6AA3D]" />
                        <span>Expand Full Height</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsLightboxOpen(true)}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#D6AA3D] text-xs font-semibold text-[#071321] hover:bg-[#f4c46f] transition-all cursor-pointer shadow-sm"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Enlarge Lightbox</span>
                  </button>
                </div>
              </div>

              {/* Browser Mockup Window with Complete Screenshot */}
              <div className="rounded-2xl overflow-hidden bg-[#071321] border border-[#23364A] shadow-2xl">
                {/* Browser Header Bar */}
                <div className="px-4 py-2.5 bg-[#0D1E30] border-b border-[#23364A] flex items-center justify-between gap-3 text-xs text-[#8191A3] select-none">
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                  </div>

                  {/* Browser Address Bar */}
                  <div className="flex items-center gap-2 px-3.5 py-1 rounded-lg bg-[#071321] border border-[#23364A]/80 max-w-md w-full truncate text-[11px] font-mono text-[#8191A3]">
                    <Globe className="w-3.5 h-3.5 text-[#D6AA3D] shrink-0" />
                    <span className="truncate text-[#F4F3EA]/90">{getCleanDomain()}</span>
                  </div>

                  <div className="flex items-center gap-2 text-[11px] font-mono text-[#8191A3] shrink-0">
                    <span className="hidden sm:inline">100% Original Ratio</span>
                    {currentProject.websiteUrl && (
                      <a
                        href={currentProject.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D6AA3D] hover:underline flex items-center gap-1"
                        title="Open in new window"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Screenshot Display Area (Full length, not cropped!) */}
                <div
                  className={`relative w-full bg-[#050D17] transition-all duration-300 ${
                    isFullHeightView
                      ? 'h-auto'
                      : 'max-h-[620px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#23364A] scrollbar-track-[#071321]'
                  }`}
                >
                  {imageSrc ? (
                    <div className="relative group/viewer cursor-pointer" onClick={() => setIsLightboxOpen(true)}>
                      <img
                        src={imageSrc}
                        alt={`${currentProject.title} full-length website homepage design`}
                        className="w-full h-auto object-contain object-top block"
                        loading="eager"
                        referrerPolicy="no-referrer"
                      />

                      {/* Floating click to inspect indicator on hover */}
                      <div className="absolute top-4 right-4 opacity-0 group-hover/viewer:opacity-100 transition-opacity">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#071321]/95 text-xs font-semibold text-[#D6AA3D] border border-[#D6AA3D]/50 shadow-xl backdrop-blur-sm">
                          <Maximize2 className="w-3.5 h-3.5" />
                          <span>Click to Inspect in Lightbox</span>
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="p-16 text-center text-[#8191A3]">
                      <p className="text-sm">Screenshot asset is being loaded...</p>
                    </div>
                  )}
                </div>

                {/* Bottom Bar Indicator */}
                {!isFullHeightView && (
                  <div className="px-4 py-2 bg-[#0A192A] border-t border-[#23364A] flex items-center justify-between text-[11px] text-[#8191A3]">
                    <div className="flex items-center gap-1.5">
                      <ChevronDown className="w-3.5 h-3.5 text-[#D6AA3D] animate-bounce" />
                      <span>Scroll inside frame to view all sections down to footer</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsLightboxOpen(true)}
                      className="text-[#D6AA3D] hover:underline font-medium cursor-pointer"
                    >
                      Open full resolution Lightbox
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Case Study Core Cards: Overview & What It Achieves */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Project Overview */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#071321] border border-[#23364A] space-y-3">
                <span className="text-xs uppercase tracking-wider text-[#D6AA3D] font-semibold block">
                  Project Overview
                </span>
                <p className="text-sm text-[#F4F3EA]/90 leading-relaxed">
                  {currentProject.caseStudy.overview || currentProject.description}
                </p>
              </div>

              {/* What the Website Achieves */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#071321] border border-[#23364A] space-y-3">
                <span className="text-xs uppercase tracking-wider text-[#8191A3] font-semibold block">
                  What The Website Achieves
                </span>
                <p className="text-sm text-[#F4F3EA]/90 leading-relaxed">
                  {currentProject.caseStudy.achieves ||
                    'Engineered for maximum clarity, intuitive navigation, and high-conversion client engagement.'}
                </p>
              </div>
            </div>

            {/* Design Highlights Checklist */}
            {currentProject.caseStudy.designHighlights &&
              currentProject.caseStudy.designHighlights.length > 0 && (
                <div className="p-6 sm:p-8 rounded-2xl bg-[#071321] border border-[#23364A] space-y-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#D6AA3D]" />
                    <span className="text-xs uppercase tracking-wider text-[#D6AA3D] font-semibold">
                      Design & Architecture Highlights
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif text-[#F4F3EA]">
                    Crafted for impact and usability
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2">
                    {currentProject.caseStudy.designHighlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-3.5 rounded-xl bg-[#0A192A] border border-[#23364A]/70"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#D6AA3D] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-[#F4F3EA]/90 leading-snug">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            {/* Strategic Sections: Goal, Challenge, Approach */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-5 rounded-xl bg-[#071321] border border-[#23364A] space-y-2">
                <span className="text-xs uppercase tracking-wider text-[#8191A3] font-semibold block">
                  The Objective
                </span>
                <p className="text-xs text-[#F4F3EA]/80 leading-relaxed">
                  {currentProject.caseStudy.goal || 'Elevate digital perception and clarify service scope.'}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#071321] border border-[#23364A] space-y-2">
                <span className="text-xs uppercase tracking-wider text-amber-400/90 font-semibold block">
                  The Challenge
                </span>
                <p className="text-xs text-[#F4F3EA]/80 leading-relaxed">
                  {currentProject.caseStudy.challenge || 'Organizing complex service requirements into effortless browsing.'}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#071321] border border-[#23364A] space-y-2">
                <span className="text-xs uppercase tracking-wider text-[#D6AA3D] font-semibold block">
                  Design Approach
                </span>
                <p className="text-xs text-[#F4F3EA]/80 leading-relaxed">
                  {currentProject.caseStudy.designApproach || 'Bespoke hierarchy with high-contrast calls to action.'}
                </p>
              </div>
            </div>

            {/* Deliverables & Technologies */}
            <div className="pt-6 border-t border-[#23364A] grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Deliverables */}
              <div>
                <span className="text-xs uppercase tracking-wider text-[#8191A3] font-semibold block mb-3">
                  Key Deliverables
                </span>
                <div className="space-y-2.5">
                  {(currentProject.caseStudy.deliverables && currentProject.caseStudy.deliverables.length > 0
                    ? currentProject.caseStudy.deliverables
                    : ['Complete Website Redesign', 'Responsive Layout System', 'Conversion Flow Enhancements']
                  ).map((del, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-[#F4F3EA]">
                      <CheckCircle2 className="w-4 h-4 text-[#D6AA3D] shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <span className="text-xs uppercase tracking-wider text-[#8191A3] font-semibold block mb-3">
                  Platform & Technologies
                </span>
                <div className="flex flex-wrap gap-2">
                  {(currentProject.caseStudy.technologies && currentProject.caseStudy.technologies.length > 0
                    ? currentProject.caseStudy.technologies
                    : [currentProject.platform || 'Custom Web Architecture']
                  ).map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono px-3 py-1.5 rounded-lg bg-[#071321] border border-[#23364A] text-[#F4F3EA]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Dedicated Video Walkthrough Section (when video asset is confirmed, e.g. One Desk & Aureon) */}
            {currentProject.hasVideoAvailable && (
              <div className="pt-6 border-t border-[#23364A] space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Video className="w-4 h-4 text-[#D6AA3D]" />
                      <span className="text-xs uppercase tracking-wider text-[#D6AA3D] font-semibold">
                        Video Project Showcase
                      </span>
                    </div>
                    <h4 className="text-xl font-serif text-[#F4F3EA]">
                      Interactive Video Walkthrough Available
                    </h4>
                  </div>
                  <span className="text-xs font-mono text-[#8191A3] px-2.5 py-1 rounded bg-[#071321] border border-[#23364A] self-start sm:self-auto">
                    Non-Autoplay Player
                  </span>
                </div>

                <div
                  onClick={() => onOpenVideo?.(currentProject.id)}
                  className="group relative aspect-video rounded-2xl overflow-hidden bg-[#071321] border border-[#23364A] hover:border-[#D6AA3D]/70 transition-all cursor-pointer shadow-xl flex items-center justify-center"
                >
                  {imageSrc && (
                    <img
                      src={imageSrc}
                      alt={`${currentProject.title} video walkthrough preview`}
                      className="w-full h-full object-cover object-top opacity-60 group-hover:scale-105 group-hover:opacity-75 transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                  )}
                  <div className="absolute inset-0 bg-[#071321]/40 flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-[#071321]/90 border-2 border-[#D6AA3D] text-[#D6AA3D] flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-[#D6AA3D] group-hover:text-[#071321] transition-all mb-3">
                      <Play className="w-7 h-7 fill-current ml-1" />
                    </div>
                    <span className="text-base font-serif text-[#F4F3EA] group-hover:text-[#D6AA3D] transition-colors">
                      Play {currentProject.title} Video Walkthrough
                    </span>
                    <span className="text-xs text-[#8191A3] mt-1 font-mono">
                      Wix Studio Breakpoints & Interactive Navigation Showcase
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 px-3 py-1 rounded-md bg-[#071321]/90 border border-[#23364A] text-[11px] font-mono text-[#D6AA3D]">
                    Click to Open Player
                  </div>
                </div>
              </div>
            )}

            {/* Additional Screenshot Gallery & Mobile Screenshot Placeholders */}
            <div className="pt-6 border-t border-[#23364A] space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#D6AA3D] font-semibold block">
                    Additional Project Media & Views
                  </span>
                  <h4 className="text-xl font-serif text-[#F4F3EA] mt-1">
                    Multi-Viewport & Responsive Layouts
                  </h4>
                </div>
                <span className="text-xs font-mono text-[#8191A3] px-2.5 py-1 rounded bg-[#071321] border border-[#23364A]">
                  Desktop & Mobile Slots
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Additional Screenshot Gallery */}
                <div className="p-5 rounded-2xl bg-[#071321] border border-[#23364A] space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#F4F3EA]">
                      <Layers className="w-4 h-4 text-[#D6AA3D]" />
                      <span>Additional Screenshot Gallery</span>
                    </div>
                    <span className="text-[10px] font-mono text-[#D6AA3D] uppercase">Desktop View</span>
                  </div>
                  <p className="text-xs text-[#8191A3] leading-relaxed">
                    Full-length desktop homepage capture for {currentProject.title}.
                  </p>
                  <div className="aspect-[16/10] rounded-xl overflow-hidden bg-[#071321] border border-[#23364A]">
                    <img
                      src={currentProject.defaultImage}
                      alt={`${currentProject.title} desktop screenshot`}
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                {/* Mobile Screenshot View */}
                <div className="p-5 rounded-2xl bg-[#071321] border border-[#23364A] space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#F4F3EA]">
                      <Smartphone className="w-4 h-4 text-[#D6AA3D]" />
                      <span>Mobile Screenshot View</span>
                    </div>
                    <span className="text-[10px] font-mono text-[#D6AA3D] uppercase">Smartphone Parity</span>
                  </div>
                  <p className="text-xs text-[#8191A3] leading-relaxed">
                    Smartphone responsive view and touch layout for {currentProject.title}.
                  </p>
                  <div className="aspect-[16/10] rounded-xl overflow-hidden bg-[#071321] border border-[#23364A] flex items-center justify-center p-2">
                    <img
                      src={PROJECT_MOBILE_PREVIEWS[currentProject.id]?.src || currentProject.defaultImage}
                      alt={`${currentProject.title} mobile screenshot`}
                      className="max-h-full object-contain rounded-lg hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action Bar */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#071321] to-[#0D1E30] border border-[#23364A] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-lg font-serif text-[#F4F3EA]">
                  Experience the live implementation
                </h4>
                <p className="text-xs text-[#8191A3] mt-0.5">
                  {currentProject.websiteUrl
                    ? `Explore ${currentProject.title} in a new browser tab.`
                    : 'Interactive case study verified and curated for portfolio inspection.'}
                </p>
              </div>

              {currentProject.websiteUrl ? (
                <a
                  href={currentProject.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#D6AA3D] text-[#071321] text-xs font-semibold hover:bg-[#f4c46f] transition-all cursor-pointer shadow-md whitespace-nowrap"
                >
                  <span>Visit {currentProject.title}</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </a>
              ) : (
                <span className="text-xs text-[#8191A3] italic">
                  Live URL under staging
                </span>
              )}
            </div>
          </div>

          {/* Modal Footer: Prev/Next Project Navigation */}
          <div className="sticky bottom-0 z-20 px-5 sm:px-8 py-3.5 sm:py-4 bg-[#0A192A]/95 backdrop-blur-md border-t border-[#23364A] flex items-center justify-between">
            <button
              onClick={() => onSelectProject(prevProject.id)}
              className="inline-flex items-center gap-2 text-xs font-medium text-[#8191A3] hover:text-[#D6AA3D] transition-colors cursor-pointer group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="hidden sm:inline text-[#8191A3]">Previous:</span>
              <span className="text-[#F4F3EA] font-semibold">
                #{prevProject.number} {prevProject.title}
              </span>
            </button>

            <span className="text-xs font-mono text-[#8191A3]">
              {currentIndex + 1} of {PROJECTS_DATA.length}
            </span>

            <button
              onClick={() => onSelectProject(nextProject.id)}
              className="inline-flex items-center gap-2 text-xs font-medium text-[#8191A3] hover:text-[#D6AA3D] transition-colors cursor-pointer group"
            >
              <span className="hidden sm:inline text-[#8191A3]">Next:</span>
              <span className="text-[#F4F3EA] font-semibold">
                #{nextProject.number} {nextProject.title}
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* FULLSCREEN LIGHTBOX MODAL FOR FULL-LENGTH SCREENSHOT INSPECTION */}
      {isLightboxOpen && imageSrc && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-[#050D17]/98 backdrop-blur-xl">
          {/* Lightbox Header Bar */}
          <div className="px-6 py-3.5 bg-[#071321] border-b border-[#23364A] flex items-center justify-between gap-4 text-xs select-none">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[#D6AA3D] font-semibold">
                PROJECT #{currentProject.number}
              </span>
              <span className="text-[#23364A]">·</span>
              <span className="text-[#F4F3EA] font-serif text-base hidden sm:inline">
                {currentProject.title}
              </span>
              <span className="text-[#8191A3] text-xs">
                (Full-Length Original Screenshot)
              </span>
            </div>

            {/* Zoom & Action Controls */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setLightboxZoom((prev) => Math.max(0.6, prev - 0.2))}
                className="p-2 rounded-lg bg-[#0E2034] text-[#8191A3] hover:text-[#F4F3EA] border border-[#23364A] transition-colors cursor-pointer"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>

              <span className="font-mono text-xs text-[#8191A3] w-12 text-center">
                {Math.round(lightboxZoom * 100)}%
              </span>

              <button
                type="button"
                onClick={() => setLightboxZoom((prev) => Math.min(2.0, prev + 0.2))}
                className="p-2 rounded-lg bg-[#0E2034] text-[#8191A3] hover:text-[#F4F3EA] border border-[#23364A] transition-colors cursor-pointer"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => setLightboxZoom(1)}
                className="p-2 rounded-lg bg-[#0E2034] text-[#8191A3] hover:text-[#F4F3EA] border border-[#23364A] transition-colors cursor-pointer"
                title="Reset Zoom"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              {currentProject.websiteUrl && (
                <a
                  href={currentProject.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#0E2034] text-xs font-semibold text-[#D6AA3D] border border-[#D6AA3D]/30 hover:bg-[#13273D] transition-colors"
                >
                  <span>Visit Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              <button
                type="button"
                onClick={() => setIsLightboxOpen(false)}
                className="p-2 rounded-lg bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 border border-rose-500/30 transition-colors cursor-pointer ml-2"
                title="Close Lightbox (Esc)"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Lightbox Scrollable Canvas */}
          <div className="flex-1 overflow-y-auto overflow-x-auto p-4 sm:p-8 flex justify-center items-start">
            <div
              style={{
                width: `${lightboxZoom * 100}%`,
                maxWidth: lightboxZoom === 1 ? '1100px' : `${lightboxZoom * 1100}px`,
                transition: 'width 0.2s ease-out'
              }}
              className="bg-[#071321] rounded-2xl overflow-hidden border border-[#23364A] shadow-2xl"
            >
              <img
                src={imageSrc}
                alt={`${currentProject.title} full length`}
                className="w-full h-auto block object-contain object-top"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
