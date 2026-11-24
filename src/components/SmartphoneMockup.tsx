import React from 'react';

interface SmartphoneMockupProps {
  type: 'video' | 'image';
  src: string;
  title: string;
}

export const SmartphoneMockup: React.FC<SmartphoneMockupProps> = ({ type, src, title }) => {
  return (
    <div className="relative w-28 sm:w-36 shrink-0 rounded-[2rem] bg-[#050E17] p-1.5 border-2 border-[#23364A] shadow-2xl overflow-hidden group/phone select-none">
      {/* Phone Speaker Notch / Island */}
      <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-12 h-3 bg-[#071321] rounded-full z-20 flex items-center justify-center">
        <div className="w-6 h-1 bg-[#23364A] rounded-full" />
      </div>

      {/* Phone Screen Display */}
      <div className="relative w-full aspect-[9/19] rounded-[1.6rem] bg-[#071321] overflow-hidden pt-4">
        {type === 'video' ? (
          <video
            src={src}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-contain bg-black"
            ref={(el) => {
              if (el) {
                el.play().catch(() => {});
              }
            }}
          />
        ) : (
          <div className="w-full h-full overflow-hidden">
            <img
              src={src}
              alt={`${title} mobile preview`}
              className="w-full h-auto object-cover object-top"
              referrerPolicy="no-referrer"
            />
          </div>
        )}
      </div>

      {/* Bottom Home Indicator */}
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-10 h-0.5 bg-[#23364A] rounded-full z-20" />
    </div>
  );
};
