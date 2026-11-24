import React, { useState } from 'react';
import { CERTIFICATES_DATA, Certificate } from '../data/portfolioData';
import { Award, ShieldCheck, ArrowLeft, ArrowUpRight, Maximize2 } from 'lucide-react';
import { CertificateModal } from './CertificateModal';

interface CertificatesPageProps {
  onBackToHome: () => void;
  onOpenContact: () => void;
}

export const CertificatesPage: React.FC<CertificatesPageProps> = ({ onBackToHome, onOpenContact }) => {
  const [activeCertificate, setActiveCertificate] = useState<Certificate | null>(null);

  return (
    <div className="pt-28 pb-24 bg-[#071321] min-h-screen text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Breadcrumb & Return Navigation */}
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
            <span className="text-[#F4F3EA] font-medium">Certificates & Achievements</span>
          </div>
        </div>

        {/* Page Title & Intro */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D6AA3D]"></span>
            <span className="text-xs uppercase tracking-widest text-[#D6AA3D] font-semibold">
              Verified Credentials & Growth
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal text-[#F4F3EA] leading-[1.08] mb-4 text-balance">
            Certificates & <span className="italic font-normal text-[#D6AA3D]">Achievements.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#8191A3] leading-relaxed">
            A complete record of professional training, technical certifications, and verified skill development
            courses completed by Syeda Zainab. Click any certificate to open the high-resolution lightbox preview.
          </p>
        </div>

        {/* Certificate Gallery Grid (3 columns desktop, 2 tablet, 1-2 mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {CERTIFICATES_DATA.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setActiveCertificate(cert)}
              className="group rounded-2xl bg-[#0D1E30] border border-[#23364A] hover:border-[#D6AA3D]/70 p-6 text-left cursor-pointer transition-all duration-300 shadow-xl flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                {cert.imageUrl ? (
                  <div className="relative aspect-[4/3] rounded-xl bg-[#071321] border border-[#23364A] overflow-hidden mb-5 group-hover:border-[#D6AA3D]/40 transition-colors">
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
                    <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded bg-[#071321]/90 text-[10px] font-mono text-[#D6AA3D] border border-[#23364A]">
                      {cert.badge}
                    </span>
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-xl bg-[#071321] border border-[#23364A] flex items-center justify-center text-[#D6AA3D] mb-5 group-hover:border-[#D6AA3D]/40 transition-colors">
                    <Award className="w-6 h-6" />
                  </div>
                )}

                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono text-[#D6AA3D] uppercase tracking-wider">
                    {cert.badge}
                  </span>
                  <span className="text-[11px] text-[#8191A3] font-mono">
                    {cert.date}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-serif text-[#F4F3EA] group-hover:text-[#D6AA3D] transition-colors mb-2 line-clamp-2">
                  {cert.title}
                </h3>

                <p className="text-xs font-semibold text-[#D6AA3D] mb-3">
                  {cert.institution}
                </p>

                <p className="text-xs text-[#8191A3] line-clamp-2 mb-6">
                  {cert.credentialNotice}
                </p>
              </div>

              <div className="pt-4 border-t border-[#23364A]/60 flex items-center justify-between text-xs">
                <span className="flex items-center gap-1 text-[#8191A3] group-hover:text-[#F4F3EA] transition-colors">
                  <ShieldCheck className="w-4 h-4 text-[#D6AA3D]" />
                  <span>Verified Credential</span>
                </span>
                <span className="inline-flex items-center gap-1 text-[#D6AA3D] font-medium group-hover:underline">
                  <span>View Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Contact Banner */}
        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-[#0D1E30] to-[#071321] border border-[#23364A] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#F4F3EA] mb-2">
              Interested in discussing a project or custom website?
            </h3>
            <p className="text-xs sm:text-sm text-[#8191A3]">
              Let's connect to discuss your requirements and how SZ can assist your brand.
            </p>
          </div>
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#D6AA3D] text-[#071321] text-xs font-semibold hover:bg-[#f4c46f] transition-all cursor-pointer shadow-md whitespace-nowrap"
          >
            <span>Let's Discuss Your Project</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      </div>

      {/* Lightbox Modal with Previous/Next Navigation */}
      <CertificateModal
        certificate={activeCertificate}
        certificates={CERTIFICATES_DATA}
        onSelectCertificate={(cert) => setActiveCertificate(cert)}
        onClose={() => setActiveCertificate(null)}
      />
    </div>
  );
};
