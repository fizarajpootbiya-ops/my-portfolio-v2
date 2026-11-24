import React, { useState, useEffect, useRef } from 'react';
import { Project } from '../data/portfolioData';
import {
  getCustomScreenshot,
  setCustomScreenshot,
  removeCustomScreenshot
} from '../utils/screenshotStorage';
import {
  Upload,
  Globe,
  Maximize2,
  Trash2,
  X,
  Check,
  Image as ImageIcon,
  Link as LinkIcon
} from 'lucide-react';

interface ProjectScreenshotProps {
  project: Project;
  className?: string;
  aspectRatio?: string;
  showUploadAffordance?: boolean;
  onEnlarge?: () => void;
  onClick?: () => void;
}

export const ProjectScreenshot: React.FC<ProjectScreenshotProps> = ({
  project,
  className = '',
  aspectRatio = 'aspect-[16/10]',
  showUploadAffordance = true,
  onEnlarge,
  onClick
}) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [urlInput, setUrlInput] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Sync screenshot from storage or default
  const syncImage = () => {
    const custom = getCustomScreenshot(project.imageKey);
    if (custom) {
      setImageSrc(custom);
    } else if (project.defaultImage) {
      setImageSrc(project.defaultImage);
    } else {
      setImageSrc(null);
    }
  };

  useEffect(() => {
    syncImage();

    const handleUpdate = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (!customEvent.detail || customEvent.detail.imageKey === project.imageKey) {
        syncImage();
      }
    };

    window.addEventListener('sz-screenshot-updated', handleUpdate);
    return () => window.removeEventListener('sz-screenshot-updated', handleUpdate);
  }, [project.imageKey, project.defaultImage]);

  // Extract display domain from websiteUrl
  const getDisplayDomain = () => {
    if (project.websiteUrl) {
      try {
        const url = new URL(project.websiteUrl);
        return url.hostname + (url.pathname !== '/' ? url.pathname : '');
      } catch {
        return project.websiteUrl.replace(/^https?:\/\//, '');
      }
    }
    return `${project.imageKey}.preview.local`;
  };

  // Handle local file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setCustomScreenshot(project.imageKey, reader.result);
          setIsUploadModalOpen(false);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle external image URL save
  const handleSaveUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (urlInput.trim()) {
      setCustomScreenshot(project.imageKey, urlInput.trim());
      setUrlInput('');
      setIsUploadModalOpen(false);
    }
  };

  const handleReset = () => {
    removeCustomScreenshot(project.imageKey);
    setIsUploadModalOpen(false);
  };

  return (
    <>
      <div
        className={`relative rounded-xl overflow-hidden bg-[#071321] border border-[#23364A] shadow-lg group ${className}`}
      >
        {/* Screenshot / Placeholder Area */}
        <div
          onClick={onClick}
          className={`relative ${aspectRatio} w-full overflow-hidden bg-[#0A1828] flex items-center justify-center cursor-pointer`}
        >
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={`${project.title} website homepage screenshot`}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          ) : (
            /* Art-directed clean screenshot placeholder */
            <div className="w-full h-full p-6 flex flex-col items-center justify-center text-center bg-gradient-to-b from-[#0D1E30] to-[#071321] relative overflow-hidden select-none">
              {/* Subtle architectural grid lines */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#23364A15_1px,transparent_1px),linear-gradient(to_bottom,#23364A15_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center max-w-sm">
                <div className="w-12 h-12 rounded-xl bg-[#071321] border border-[#23364A] flex items-center justify-center text-[#D6AA3D] mb-3 group-hover:border-[#D6AA3D]/50 transition-colors shadow-inner">
                  <ImageIcon className="w-5 h-5" />
                </div>

                <span className="text-[11px] font-mono uppercase tracking-widest text-[#D6AA3D] font-semibold mb-1">
                  Homepage Screenshot
                </span>

                <h4 className="text-xl font-serif text-[#F4F3EA] mb-1">
                  {project.title}
                </h4>

                <p className="text-xs text-[#8191A3] max-w-xs mb-4">
                  {project.hasImageAvailable
                    ? 'Screenshot ready for display. Click to upload or inspect.'
                    : 'Placeholder active until project screenshot is uploaded.'}
                </p>

                {showUploadAffordance && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsUploadModalOpen(true);
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0E2034] hover:bg-[#13273D] text-[#F4F3EA] hover:text-[#D6AA3D] text-xs font-medium border border-[#23364A] transition-colors cursor-pointer shadow-sm"
                  >
                    <Upload className="w-3.5 h-3.5 text-[#D6AA3D]" />
                    <span>Upload Screenshot</span>
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Quick Enlarge / Action Bar on hover when image is present */}
          {imageSrc && (
            <div className="absolute inset-0 bg-[#071321]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 backdrop-blur-[2px]">
              {onEnlarge && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onEnlarge();
                  }}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#071321]/90 text-xs font-semibold text-[#F4F3EA] hover:text-[#D6AA3D] border border-[#23364A] shadow-md transition-colors"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-[#D6AA3D]" />
                  <span>Enlarge Preview</span>
                </button>
              )}

              {showUploadAffordance && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsUploadModalOpen(true);
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#071321]/90 text-xs font-medium text-[#8191A3] hover:text-[#F4F3EA] border border-[#23364A] shadow-md transition-colors"
                  title="Replace or reset screenshot"
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>Replace</span>
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Upload & Replace Screenshot Modal */}
      {isUploadModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#071321]/90 backdrop-blur-md">
          <div className="fixed inset-0" onClick={() => setIsUploadModalOpen(false)} />

          <div className="relative w-full max-w-md bg-[#0D1E30] border border-[#23364A] rounded-2xl p-6 shadow-2xl z-10 text-left">
            <div className="flex items-center justify-between pb-3 border-b border-[#23364A] mb-4">
              <div>
                <span className="text-[10px] font-mono text-[#D6AA3D] uppercase">
                  Project {project.number} Screenshot
                </span>
                <h3 className="text-lg font-serif text-[#F4F3EA]">
                  {project.title}
                </h3>
              </div>
              <button
                onClick={() => setIsUploadModalOpen(false)}
                className="p-1.5 rounded-lg text-[#8191A3] hover:text-[#F4F3EA] hover:bg-[#071321]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-[#8191A3] mb-5 leading-relaxed">
              Upload your actual website homepage screenshot for <strong className="text-[#F4F3EA]">{project.title}</strong> (`{project.imageKey}.jpg`), or enter a live image URL.
            </p>

            {/* Option 1: File Upload */}
            <div className="mb-5">
              <label className="block text-xs font-medium text-[#F4F3EA] mb-2">
                Option 1: Upload Image File (PNG, JPG, WebP)
              </label>
              <input
                type="file"
                ref={fileInputRef}
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="w-full py-3 px-4 rounded-xl border border-dashed border-[#D6AA3D]/50 bg-[#071321] hover:bg-[#0E2034] text-xs font-medium text-[#F4F3EA] flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Upload className="w-4 h-4 text-[#D6AA3D]" />
                <span>Select file from computer</span>
              </button>
            </div>

            {/* Option 2: Image URL */}
            <form onSubmit={handleSaveUrl} className="space-y-4 mb-5">
              <div>
                <label className="block text-xs font-medium text-[#F4F3EA] mb-1.5">
                  Option 2: Or Paste Image URL
                </label>
                <div className="flex gap-2">
                  <input
                    type="url"
                    value={urlInput}
                    onChange={(e) => setUrlInput(e.target.value)}
                    placeholder="https://example.com/screenshot.jpg"
                    className="flex-1 px-3 py-2 rounded-lg bg-[#071321] border border-[#23364A] text-xs text-[#F4F3EA] focus:outline-none focus:border-[#D6AA3D]"
                  />
                  <button
                    type="submit"
                    className="px-3 py-2 rounded-lg bg-[#D6AA3D] text-[#071321] text-xs font-semibold hover:bg-[#f4c46f] transition-all cursor-pointer shrink-0"
                  >
                    Save URL
                  </button>
                </div>
              </div>
            </form>

            {/* Reset / Clear */}
            {imageSrc && (
              <div className="pt-3 border-t border-[#23364A]/60 flex items-center justify-between">
                <span className="text-[11px] text-[#8191A3]">Custom image currently active</span>
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1 text-xs text-rose-400 hover:text-rose-300 transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Reset to placeholder</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
