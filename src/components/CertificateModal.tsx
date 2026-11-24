import React, { useEffect } from 'react';
import { Certificate } from '../data/portfolioData';
import { X, Award, CheckCircle2, ShieldCheck, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { SZLogo } from './SZLogo';

interface CertificateModalProps {
  certificate: Certificate | null;
  certificates: Certificate[];
  onSelectCertificate: (cert: Certificate) => void;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  certificate,
  certificates,
  onSelectCertificate,
  onClose
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (certificate && certificates.length > 1) {
        const currentIndex = certificates.findIndex((c) => c.id === certificate.id);
        if (e.key === 'ArrowLeft' && currentIndex > 0) {
          onSelectCertificate(certificates[currentIndex - 1]);
        }
        if (e.key === 'ArrowRight' && currentIndex < certificates.length - 1) {
          onSelectCertificate(certificates[currentIndex + 1]);
        }
      }
    };
    if (certificate) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [certificate, certificates, onSelectCertificate, onClose]);

  if (!certificate) return null;

  const currentIndex = certificates.findIndex((c) => c.id === certificate.id);
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < certificates.length - 1;

  const handlePrev = () => {
    if (hasPrev) {
      onSelectCertificate(certificates[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (hasNext) {
      onSelectCertificate(certificates[currentIndex + 1]);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#071321]/90 backdrop-blur-md overflow-y-auto">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-4xl bg-[#0D1E30] border border-[#23364A] rounded-2xl p-6 sm:p-8 shadow-2xl z-10 text-left my-auto max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2.5 rounded-xl bg-[#071321] text-[#8191A3] hover:text-[#F4F3EA] border border-[#23364A] transition-colors cursor-pointer z-20 shadow-md"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Navigation Arrows */}
        {certificates.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              disabled={!hasPrev}
              className={`absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#071321]/90 border border-[#23364A] text-[#F4F3EA] z-20 shadow-lg transition-all ${
                hasPrev ? 'hover:bg-[#D6AA3D] hover:text-[#071321] hover:border-[#D6AA3D] cursor-pointer' : 'opacity-40 cursor-not-allowed'
              }`}
              aria-label="Previous certificate"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              disabled={!hasNext}
              className={`absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#071321]/90 border border-[#23364A] text-[#F4F3EA] z-20 shadow-lg transition-all ${
                hasNext ? 'hover:bg-[#D6AA3D] hover:text-[#071321] hover:border-[#D6AA3D] cursor-pointer' : 'opacity-40 cursor-not-allowed'
              }`}
              aria-label="Next certificate"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Certificate Image Preview Column */}
          {certificate.imageUrl && (
            <div className="lg:col-span-6 bg-[#071321] rounded-xl border border-[#23364A] p-2 flex items-center justify-center relative overflow-hidden group">
              <img
                src={certificate.imageUrl}
                alt={certificate.title}
                className="w-full h-auto max-h-[380px] object-contain rounded-lg shadow-md"
                referrerPolicy="no-referrer"
              />
              <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded bg-[#071321]/90 text-[10px] font-mono text-[#D6AA3D] border border-[#23364A] backdrop-blur-sm">
                Original Certificate Scan
              </span>
            </div>
          )}

          {/* Certificate Info Column */}
          <div className={`${certificate.imageUrl ? 'lg:col-span-6' : 'lg:col-span-12'} space-y-4`}>
            <div className="flex items-center justify-between pb-3 border-b border-[#23364A]/60">
              <SZLogo size="sm" showSubtitle={true} />
              <span className="text-[11px] font-mono text-[#D6AA3D] px-2.5 py-1 rounded bg-[#0D1E30] border border-[#D6AA3D]/30">
                {certificate.badge}
              </span>
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#8191A3] font-mono block">
                Certificate of Achievement {currentIndex + 1} of {certificates.length}
              </span>
              <h3 className="text-xl sm:text-2xl font-serif text-[#F4F3EA] leading-snug">
                {certificate.title}
              </h3>
              <p className="text-xs font-semibold text-[#D6AA3D]">
                Issued by {certificate.institution}
              </p>
              <p className="text-xs text-[#8191A3]">
                Date of Issuance: <strong className="text-[#F4F3EA]">{certificate.date}</strong>
              </p>
            </div>

            <div className="pt-3 border-t border-[#23364A]/60 space-y-3">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#D6AA3D] font-semibold block mb-1">
                  Curriculum & Verification Summary
                </span>
                <p className="text-xs sm:text-sm text-[#8191A3] leading-relaxed">
                  {certificate.credentialNotice}
                </p>
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#8191A3] font-semibold block mb-2">
                  Verified Competencies & Skills
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {certificate.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 text-[11px] px-2 py-1 rounded-md bg-[#071321] border border-[#23364A] text-[#F4F3EA]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D6AA3D]" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs text-[#8191A3]">
                <span className="flex items-center gap-1.5 text-[#F4F3EA]">
                  <ShieldCheck className="w-4 h-4 text-[#D6AA3D]" />
                  <span>Verified Authentic Credential</span>
                </span>
                <span className="font-mono text-[10px] text-[#D6AA3D]">ID: {certificate.id}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
