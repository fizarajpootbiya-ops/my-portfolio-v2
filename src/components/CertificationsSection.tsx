import React, { useState } from 'react';
import { CERTIFICATES_DATA, Certificate } from '../data/portfolioData';
import { Award, ShieldCheck, ArrowUpRight, Maximize2 } from 'lucide-react';

interface CertificationsSectionProps {
  onOpenCertificate: (certificate: Certificate) => void;
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({ onOpenCertificate }) => {
  return (
    <section id="certifications" className="py-24 bg-[#071321] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D6AA3D]"></span>
            <span className="text-xs uppercase tracking-widest text-[#D6AA3D] font-semibold">
              Verified Credentials & Growth
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-normal text-[#F4F3EA] tracking-tight mb-4 text-balance">
            Certifications & <span className="italic font-normal text-[#D6AA3D]">Achievements.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#8191A3] leading-relaxed">
            A comprehensive record of professional training, technical certifications, and verified skill development
            courses completed by Syeda Zainab to ensure cutting-edge expertise in design, engineering, and digital marketing.
          </p>
        </div>

        {/* Certificate Grid (3 per row on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATES_DATA.map((cert) => (
            <div
              key={cert.id}
              onClick={() => onOpenCertificate(cert)}
              className="group rounded-2xl bg-[#0D1E30] border border-[#23364A] hover:border-[#D6AA3D]/70 p-6 text-left cursor-pointer transition-all duration-300 shadow-xl flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                {/* Certificate Thumbnail Preview (if available) */}
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
      </div>
    </section>
  );
};
