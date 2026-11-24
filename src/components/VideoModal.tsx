import React, { useEffect, useState } from 'react';
import { VideoWalkthrough } from '../data/portfolioData';
import { X, Play, Pause, CheckCircle2, Volume2, RotateCcw } from 'lucide-react';

interface VideoModalProps {
  video: VideoWalkthrough | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ video, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (video) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [video, onClose]);

  // Simulated playback progress for video showcase
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && video) {
      interval = setInterval(() => {
        setProgress(prev => (prev >= 100 ? 0 : prev + 2));
      }, 300);
    }
    return () => clearInterval(interval);
  }, [isPlaying, video]);

  if (!video) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#071321]/90 backdrop-blur-md">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-4xl bg-[#0D1E30] border border-[#23364A] rounded-2xl overflow-hidden shadow-2xl z-10 text-left flex flex-col">
        {/* Header */}
        <div className="p-4 px-6 bg-[#071321] border-b border-[#23364A] flex items-center justify-between">
          <div>
            <span className="text-[11px] font-mono text-[#D6AA3D]">PROJECT WALKTHROUGH</span>
            <h3 className="text-lg font-serif text-[#F4F3EA]">{video.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-[#0E2034] text-[#8191A3] hover:text-[#F4F3EA] border border-[#23364A] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Display */}
        <div className="relative aspect-video bg-[#050E17] flex items-center justify-center overflow-hidden group">
          {video.videoUrl ? (
            <video
              src={video.videoUrl}
              controls
              autoPlay
              className="w-full h-full object-contain bg-black"
              poster={video.thumbnail}
            />
          ) : (
            <>
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover filter brightness-90"
                referrerPolicy="no-referrer"
              />

              {/* Player Controls Bar at bottom */}
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-[#071321] via-[#071321]/80 to-transparent flex flex-col gap-2">
                {/* Scrubber */}
                <div className="w-full h-1.5 bg-[#23364A] rounded-full overflow-hidden cursor-pointer">
                  <div
                    className="h-full bg-[#D6AA3D] transition-all duration-200"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-xs text-[#F4F3EA]">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="p-1.5 rounded-md bg-[#0D1E30] text-[#D6AA3D] hover:bg-[#13273D] cursor-pointer"
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </button>
                    <button
                      onClick={() => setProgress(0)}
                      className="p-1.5 text-[#8191A3] hover:text-[#F4F3EA] cursor-pointer"
                      title="Restart"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-[11px] font-mono text-[#8191A3]">{video.duration}</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-[#8191A3]">
                    <Volume2 className="w-4 h-4 text-[#8191A3]" />
                    <span className="text-[11px]">HD Walkthrough Preview</span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Video Details & Highlights */}
        <div className="p-6 bg-[#0D1E30] space-y-4">
          <p className="text-sm text-[#F4F3EA]/90 leading-relaxed">
            {video.description}
          </p>

          <div>
            <span className="text-xs uppercase tracking-wider text-[#8191A3] font-semibold block mb-2">
              Key Workflow Elements Demonstrated
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {video.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2 p-2.5 rounded-lg bg-[#071321] border border-[#23364A] text-xs text-[#F4F3EA]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D6AA3D] shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
