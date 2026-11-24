import React, { useState } from 'react';
import {
  Project,
  PROJECTS_DATA,
  CERTIFICATES_DATA,
  VIDEO_SHOWCASES,
  Certificate,
  VideoWalkthrough
} from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import {
  ArrowLeft,
  ArrowUpRight,
  Play,
  Award,
  Smartphone,
  Maximize2,
  Video,
  Info
} from 'lucide-react';

interface ExplorePageProps {
  onBackToHome: () => void;
  onOpenCaseStudy: (projectId: string) => void;
  onOpenCertificate: (certificate: Certificate) => void;
  onOpenVideo: (video: VideoWalkthrough) => void;
  onContactClick: () => void;
}

export const ExplorePage: React.FC<ExplorePageProps> = ({
  onBackToHome,
  onOpenCaseStudy,
  onOpenCertificate,
  onOpenVideo,
  onContactClick
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All Projects');
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);

  const filterTabs = [
    'All Projects',
    'Redesign',
    'E-commerce',
    'Wix Studio',
    'Services & Mobility'
  ];

  // Functional filtering based on actual project attributes
  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (selectedFilter === 'All Projects') return true;
    if (selectedFilter === 'Redesign') return project.isRedesign;
    if (selectedFilter === 'E-commerce')
      return (
        project.category.toLowerCase().includes('e-commerce') ||
        project.category.toLowerCase().includes('storefront') ||
        project.platform?.toLowerCase().includes('e-commerce')
      );
    if (selectedFilter === 'Wix Studio')
      return project.platform?.toLowerCase().includes('wix studio');
    if (selectedFilter === 'Services & Mobility')
      return (
        project.category.toLowerCase().includes('services') ||
        project.category.toLowerCase().includes('cleanout') ||
        project.category.toLowerCase().includes('mobility') ||
        project.category.toLowerCase().includes('solutions')
      );
    return true;
  });

  return (
    <div className="pt-28 pb-20 bg-[#071321] min-h-screen text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Breadcrumb & Return to Home Navigation */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#23364A] mb-12">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#8191A3] hover:text-[#D6AA3D] transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Return to Homepage</span>
          </button>

          <div className="flex items-center gap-2 text-xs text-[#8191A3]">
            <span>SZ Portfolio</span>
            <span>/</span>
            <span className="text-[#F4F3EA] font-medium">Selected Works & Case Studies</span>
          </div>
        </div>

        {/* 1. Large Bold Portfolio Heading & Intro */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D6AA3D]"></span>
            <span className="text-xs uppercase tracking-widest text-[#D6AA3D] font-semibold">
              Selected Works & Case Studies
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal text-[#F4F3EA] leading-[1.08] mb-4 text-balance">
            Crafted websites.{' '}
            <span className="italic font-normal text-[#D6AA3D]">Real outcomes.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#8191A3] leading-relaxed">
            Explore independent web design and redesign projects by Syeda Zainab,
            featuring full-length homepage screenshots, live website links, and detailed case studies.
          </p>
        </div>

        {/* 2. Clean Category Filters */}
        <div className="flex items-center gap-2 p-1.5 bg-[#0D1E30] border border-[#23364A] rounded-xl overflow-x-auto max-w-full mb-12 scrollbar-none">
          {filterTabs.map((tab) => {
            const count =
              tab === 'All Projects'
                ? PROJECTS_DATA.length
                : tab === 'Redesign'
                ? PROJECTS_DATA.filter((p) => p.isRedesign).length
                : tab === 'E-commerce'
                ? PROJECTS_DATA.filter(
                    (p) =>
                      p.category.toLowerCase().includes('e-commerce') ||
                      p.category.toLowerCase().includes('storefront') ||
                      p.platform?.toLowerCase().includes('e-commerce')
                  ).length
                : tab === 'Wix Studio'
                ? PROJECTS_DATA.filter((p) => p.platform?.toLowerCase().includes('wix studio')).length
                : tab === 'Services & Mobility'
                ? PROJECTS_DATA.filter(
                    (p) =>
                      p.category.toLowerCase().includes('services') ||
                      p.category.toLowerCase().includes('cleanout') ||
                      p.category.toLowerCase().includes('mobility') ||
                      p.category.toLowerCase().includes('solutions')
                  ).length
                : '';

            return (
              <button
                key={tab}
                onClick={() => setSelectedFilter(tab)}
                className={`px-4 py-2 text-xs font-medium rounded-lg whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
                  selectedFilter === tab
                    ? 'bg-[#D6AA3D] text-[#071321] font-semibold shadow-sm'
                    : 'text-[#8191A3] hover:text-[#F4F3EA] hover:bg-[#13273D]'
                }`}
              >
                <span>{tab}</span>
                {count !== '' && (
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${
                      selectedFilter === tab
                        ? 'bg-[#071321] text-[#D6AA3D]'
                        : 'bg-[#071321] text-[#8191A3]'
                    }`}
                  >
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* 3. Two-Column Project Grid on Desktop (1-Column on Mobile) */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-24">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenCaseStudy={onOpenCaseStudy}
                onOpenVideo={(id) => {
                  const matchedVid = VIDEO_SHOWCASES.find(
                    (v) =>
                      v.project.toLowerCase().includes(id.toLowerCase()) ||
                      id.includes(v.id) ||
                      (id === 'one-desk' && v.project === 'One Desk') ||
                      (id === 'aureon' && v.project === 'Aureon')
                  );
                  if (matchedVid) {
                    onOpenVideo(matchedVid);
                  } else {
                    onOpenCaseStudy(id);
                  }
                }}
              />
            ))}
          </div>
        ) : (
          /* Honest Empty State for Unconfirmed Categories */
          <div className="rounded-2xl bg-[#0D1E30] border border-[#23364A] p-12 text-center max-w-xl mx-auto mb-24 space-y-3">
            <Info className="w-8 h-8 text-[#D6AA3D] mx-auto mb-2" />
            <h3 className="text-xl font-serif text-[#F4F3EA]">
              Category To Be Confirmed
            </h3>
            <p className="text-xs sm:text-sm text-[#8191A3] leading-relaxed">
              No projects have been explicitly assigned to <strong className="text-[#F4F3EA]">{selectedFilter}</strong> yet.
              In accordance with authenticity guidelines, categories remain unassigned until officially confirmed by SZ.
            </p>
            <button
              onClick={() => setSelectedFilter('All Projects')}
              className="mt-3 px-4 py-2 rounded-lg bg-[#D6AA3D] text-[#071321] text-xs font-semibold hover:bg-[#f4c46f] transition-all cursor-pointer inline-block"
            >
              View All 11 Projects
            </button>
          </div>
        )}

        {/* 4. Section: Dedicated Video Walkthroughs (One Desk & Aureon) */}
        <div className="mb-24 pt-12 border-t border-[#23364A]">
          <div className="max-w-3xl mb-10">
            <div className="flex items-center gap-2 mb-2">
              <Video className="w-4 h-4 text-[#D6AA3D]" />
              <span className="text-xs uppercase tracking-widest text-[#D6AA3D] font-semibold">
                Video Projects
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#F4F3EA] mb-3">
              One Desk & Aureon Video Showcases
            </h2>
            <p className="text-sm text-[#8191A3] leading-relaxed">
              Interactive video walkthroughs for projects with confirmed video assets. Click any video to launch the responsive player. Videos never autoplay.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {VIDEO_SHOWCASES.map((vid) => (
              <div
                key={vid.id}
                className="group rounded-2xl bg-[#0D1E30] border border-[#23364A] overflow-hidden flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="relative aspect-video bg-[#071321] overflow-hidden">
                    <video
                      src={vid.videoUrl}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-contain bg-black"
                      ref={(el) => {
                        if (el) {
                          el.play().catch(() => {
                            // Autoplay was prevented by browser policy, handle gracefully
                          });
                        }
                      }}
                    />
                    <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded bg-[#071321]/90 text-[11px] font-mono text-[#F4F3EA] border border-[#23364A]">
                      {vid.duration}
                    </span>
                  </div>

                  <div className="p-6 text-left">
                    <span className="text-xs font-mono text-[#D6AA3D] block mb-1">
                      {vid.project}
                    </span>
                    <h3 className="text-xl font-serif text-[#F4F3EA] mb-2">
                      {vid.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#8191A3] leading-relaxed mb-4">
                      {vid.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-[#23364A]/60 text-xs text-[#8191A3]">
                  <span>Practice Work Screen Recording • Auto-playing Loop</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Section: Mobile Showcase */}
        <div className="mb-24 pt-12 border-t border-[#23364A]">
          <div className="max-w-3xl mb-10">
            <div className="flex items-center gap-2 mb-2">
              <Smartphone className="w-4 h-4 text-[#D6AA3D]" />
              <span className="text-xs uppercase tracking-widest text-[#D6AA3D] font-semibold">
                Responsive Design
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#F4F3EA] mb-3">
              Mobile Screenshot & Responsive Parity Showcase
            </h2>
            <p className="text-sm text-[#8191A3] leading-relaxed">
              Every website designed or redesigned by SZ is engineered to provide fluid legibility, thumb-friendly touch targets, and rapid loading on smartphones.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0D1E30] rounded-2xl p-6 sm:p-10 border border-[#23364A]">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs uppercase tracking-wider text-[#D6AA3D] font-semibold block">
                Cross-Device Standards
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#F4F3EA]">
                Touch-first layouts without compromise.
              </h3>
              <p className="text-sm text-[#8191A3] leading-relaxed">
                Rather than shrinking a desktop view into an illegible miniature, mobile experiences are
                specifically restructured: navigation moves to natural thumb reaches, product carousels gain
                native touch velocity, and typography scales with optical precision.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-xl bg-[#071321] border border-[#23364A]">
                  <h4 className="text-xs font-semibold text-[#F4F3EA] mb-1">Thumb-Zone Menus</h4>
                  <p className="text-[11px] text-[#8191A3]">
                    Reachable drawers and bottom buttons eliminating screen gymnastics.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#071321] border border-[#23364A]">
                  <h4 className="text-xs font-semibold text-[#F4F3EA] mb-1">Fast Cellular Loading</h4>
                  <p className="text-[11px] text-[#8191A3]">
                    Modern image delivery and clean code ensure instantaneous browsing.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative flex justify-center">
              <div
                onClick={() => setEnlargedImage('/src/assets/images/sz_mobile_showcase_screens_1794399013195.jpg')}
                className="relative rounded-2xl overflow-hidden border-2 border-[#23364A] shadow-2xl group cursor-pointer max-w-sm"
              >
                <img
                  src="/src/assets/images/sz_mobile_showcase_screens_1794399013195.jpg"
                  alt="Mobile and laptop responsive showcase"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-[#071321]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#071321]/90 text-xs font-semibold text-[#D6AA3D] border border-[#D6AA3D]/40 backdrop-blur-sm">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Enlarge Showcase</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6. Section: Verified Credentials & Certificates */}
        <div className="mb-20 pt-12 border-t border-[#23364A]">
          <div className="max-w-3xl mb-10">
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-4 h-4 text-[#D6AA3D]" />
              <span className="text-xs uppercase tracking-widest text-[#D6AA3D] font-semibold">
                Verified Credentials
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#F4F3EA] mb-3">
              Certificates & Professional Courses
            </h2>
            <p className="text-sm text-[#8191A3] leading-relaxed">
              Structured study and verified coursework across professional training, design, engineering, and digital marketing. Click any certificate to open the lightbox preview.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CERTIFICATES_DATA.map((cert) => (
              <div
                key={cert.id}
                onClick={() => onOpenCertificate(cert)}
                className="group rounded-2xl bg-[#0D1E30] border border-[#23364A] hover:border-[#D6AA3D]/70 p-5 text-left cursor-pointer transition-all duration-300 flex flex-col justify-between shadow-xl"
              >
                <div>
                  {cert.imageUrl ? (
                    <div className="relative aspect-[4/3] rounded-xl bg-[#071321] border border-[#23364A] overflow-hidden mb-4 group-hover:border-[#D6AA3D]/40 transition-colors">
                      <img
                        src={cert.imageUrl}
                        alt={cert.title}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-[#071321]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#071321]/90 text-xs font-semibold text-[#D6AA3D] border border-[#D6AA3D]/40 backdrop-blur-sm shadow-md">
                          <Maximize2 className="w-3.5 h-3.5" />
                          <span>Enlarge Certificate</span>
                        </span>
                      </div>
                      <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-[#071321]/90 text-[10px] font-mono text-[#D6AA3D] border border-[#23364A]">
                        {cert.badge}
                      </span>
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-xl bg-[#071321] border border-[#23364A] flex items-center justify-center text-[#D6AA3D] mb-4 group-hover:border-[#D6AA3D]/40 transition-colors">
                      <Award className="w-5 h-5" />
                    </div>
                  )}

                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono text-[#D6AA3D] uppercase tracking-wider">
                      {cert.badge}
                    </span>
                    <span className="text-[10px] text-[#8191A3] font-mono">
                      {cert.date}
                    </span>
                  </div>

                  <h3 className="text-base font-serif text-[#F4F3EA] group-hover:text-[#D6AA3D] transition-colors mb-2 line-clamp-2">
                    {cert.title}
                  </h3>

                  <p className="text-xs font-semibold text-[#D6AA3D] mb-3">
                    {cert.institution}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#23364A]/60 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-[#8191A3]">Verified Credential</span>
                  <span className="text-[#D6AA3D] font-medium group-hover:underline">View Certificate</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Contact Banner on Explore Page */}
        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-[#0D1E30] to-[#071321] border border-[#23364A] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#F4F3EA] mb-2">
              Interested in discussing a redesign or new website?
            </h3>
            <p className="text-xs sm:text-sm text-[#8191A3]">
              Let's talk through your business requirements, timeline, and how SZ can help.
            </p>
          </div>
          <button
            onClick={onContactClick}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#D6AA3D] text-[#071321] text-xs font-semibold hover:bg-[#f4c46f] transition-all cursor-pointer shadow-md whitespace-nowrap"
          >
            <span>Let's Discuss Your Project</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      </div>

      {/* Lightbox Modal for Full View Images */}
      {enlargedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#071321]/95 backdrop-blur-md">
          <div className="fixed inset-0" onClick={() => setEnlargedImage(null)} />
          <div className="relative max-w-5xl max-h-[90vh] bg-[#0D1E30] p-3 rounded-2xl border border-[#23364A] z-10 overflow-hidden flex flex-col">
            <button
              onClick={() => setEnlargedImage(null)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-[#071321] text-[#8191A3] hover:text-[#F4F3EA] z-20 cursor-pointer"
            >
              ✕
            </button>
            <img
              src={enlargedImage}
              alt="Enlarged showcase preview"
              className="w-full h-auto max-h-[82vh] object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};
