import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProblemsSolutionsSection } from './components/ProblemsSolutionsSection';
import { ProcessSection } from './components/ProcessSection';
import { FeaturedProjectsSection } from './components/FeaturedProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { WhyWorkSection } from './components/WhyWorkSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ExplorePage } from './components/ExplorePage';
import { CertificatesPage } from './components/CertificatesPage';
import { CaseStudyModal } from './components/CaseStudyModal';
import { CertificateModal } from './components/CertificateModal';
import { VideoModal } from './components/VideoModal';
import { ClientFeedbackSection } from './components/ClientFeedbackSection';
import { Certificate, VideoWalkthrough, VIDEO_SHOWCASES, CERTIFICATES_DATA } from './data/portfolioData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'work' | 'certificates'>('home');
  const [activeCaseStudyId, setActiveCaseStudyId] = useState<string | null>(null);
  const [activeCertificate, setActiveCertificate] = useState<Certificate | null>(null);
  const [activeVideo, setActiveVideo] = useState<VideoWalkthrough | null>(null);
  const [inquiryService, setInquiryService] = useState<string | undefined>(undefined);

  const handleNavigate = (page: 'home' | 'work' | 'certificates', sectionId?: string) => {
    setCurrentPage(page);
    if (page === 'home') {
      if (sectionId) {
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectServiceForInquiry = (serviceTitle: string) => {
    setInquiryService(serviceTitle);
    setCurrentPage('home');
    setTimeout(() => {
      const el = document.getElementById('contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#071321] text-[#F4F3EA] flex flex-col font-sans">
      {/* Top Navbar Contract */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Main Page View Switching */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <>
            {/* 04: Hero Section & Profile Portrait */}
            <Hero
              onExploreWork={() => handleNavigate('work')}
              onAboutMe={() => handleNavigate('home', 'about')}
              onOpenCaseStudy={(id) => setActiveCaseStudyId(id)}
            />

            {/* 06: About SZ */}
            <AboutSection
              onExploreClick={() => handleNavigate('work')}
            />

            {/* 07: Services & Capabilities */}
            <ServicesSection
              onSelectServiceForInquiry={handleSelectServiceForInquiry}
            />

            {/* 08: Website Problems & Solutions */}
            <ProblemsSolutionsSection />

            {/* 09: Working Process */}
            <ProcessSection />

            {/* 10: Featured Projects (Homepage shows 4 featured projects) */}
            <FeaturedProjectsSection
              onOpenCaseStudy={(id) => setActiveCaseStudyId(id)}
              onOpenVideo={(projId) => {
                const matchedVid = VIDEO_SHOWCASES.find(
                  (v) =>
                    v.project.toLowerCase().includes(projId.toLowerCase()) ||
                    projId.includes(v.id) ||
                    (projId === 'one-desk' && v.project === 'One Desk') ||
                    (projId === 'aureon' && v.project === 'Aureon')
                );
                if (matchedVid) {
                  setActiveVideo(matchedVid);
                } else {
                  setActiveCaseStudyId(projId);
                }
              }}
              onExploreAll={() => handleNavigate('work')}
            />

            {/* Client Reviews & Testimonials Section */}
            <ClientFeedbackSection
              onOpenCaseStudy={(id) => setActiveCaseStudyId(id)}
            />

            {/* 15: Skills & Tools */}
            <SkillsSection />

            {/* 17: Why Work With SZ? */}
            <WhyWorkSection />

            {/* 19: FAQ Section */}
            <FAQSection />

            {/* 20: Contact Section */}
            <ContactSection
              selectedService={inquiryService}
            />
          </>
        )}

        {currentPage === 'work' && (
          /* PAGE 2: WORK ARCHIVE (ALL PROJECTS) */
          <ExplorePage
            onBackToHome={() => handleNavigate('home')}
            onOpenCaseStudy={(id) => setActiveCaseStudyId(id)}
            onOpenCertificate={(cert) => setActiveCertificate(cert)}
            onOpenVideo={(vid) => setActiveVideo(vid)}
            onContactClick={() => handleNavigate('home', 'contact')}
          />
        )}

        {currentPage === 'certificates' && (
          /* PAGE 3: STANDALONE CERTIFICATES PAGE */
          <CertificatesPage
            onBackToHome={() => handleNavigate('home')}
            onOpenContact={() => handleNavigate('home', 'contact')}
          />
        )}
      </main>

      {/* 21: Premium Full-Width Footer */}
      <Footer onNavigate={(page, sec) => handleNavigate(page === 'explore' ? 'work' : page as any, sec)} />

      {/* Modals & Interactive Overlays */}
      <CaseStudyModal
        projectId={activeCaseStudyId}
        onClose={() => setActiveCaseStudyId(null)}
        onSelectProject={(id) => setActiveCaseStudyId(id)}
        onOpenVideo={(projId) => {
          const matchedVid = VIDEO_SHOWCASES.find(
            (v) =>
              v.project.toLowerCase().includes(projId.toLowerCase()) ||
              projId.includes(v.id) ||
              (projId === 'one-desk' && v.project === 'One Desk') ||
              (projId === 'aureon' && v.project === 'Aureon')
          );
          if (matchedVid) {
            setActiveVideo(matchedVid);
          } else {
            setActiveVideo(VIDEO_SHOWCASES[0]);
          }
        }}
      />

      <CertificateModal
        certificate={activeCertificate}
        certificates={CERTIFICATES_DATA}
        onSelectCertificate={(cert) => setActiveCertificate(cert)}
        onClose={() => setActiveCertificate(null)}
      />

      <VideoModal
        video={activeVideo}
        onClose={() => setActiveVideo(null)}
      />
    </div>
  );
}
