import React from 'react';

interface SZLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  className?: string;
  onClick?: () => void;
}

export const SZLogo: React.FC<SZLogoProps> = ({
  size = 'md',
  showSubtitle = true,
  className = '',
  onClick
}) => {
  const sizeMap = {
    sm: { icon: 'w-7 h-7', text: 'text-sm', sub: 'text-[10px]' },
    md: { icon: 'w-9 h-9', text: 'text-base', sub: 'text-[11px]' },
    lg: { icon: 'w-12 h-12', text: 'text-xl', sub: 'text-xs' },
    xl: { icon: 'w-20 h-20', text: 'text-3xl', sub: 'text-sm' },
  };

  const currentSize = sizeMap[size];

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-3 select-none cursor-pointer group ${className}`}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {/* Exact Uploaded Logo Image */}
      <div className={`relative ${currentSize.icon} shrink-0 rounded-xl overflow-hidden bg-[#071321] border border-[#23364A] shadow-md group-hover:border-[#D6AA3D]/60 transition-all duration-300 group-hover:scale-105 flex items-center justify-center`}>
        <img
          src="/assets/aistudio/image_809bed82.png"
          alt="SZ Logo"
          className="w-full h-full object-cover"
          style={{ mixBlendMode: 'screen' }}
          referrerPolicy="no-referrer"
        />
      </div>

      {showSubtitle && (
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-2">
            <span className={`font-serif tracking-tight text-[#F4F3EA] group-hover:text-[#D6AA3D] transition-colors font-bold ${currentSize.text}`}>
              SZ
            </span>
            <span className="text-xs text-[#D6AA3D]">/</span>
            <span className={`font-serif tracking-normal text-[#F4F3EA] font-normal italic ${currentSize.text}`}>
              Syeda Zainab
            </span>
          </div>
          <span className={`font-mono tracking-widest text-[#8191A3] uppercase text-[10px]`}>
            Design & Engineering
          </span>
        </div>
      )}
    </div>
  );
};
