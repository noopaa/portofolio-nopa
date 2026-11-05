import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { createWhatsAppLink, PERSONAL_INFO } from '../data/portfolioData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <aside
      aria-label="Kontak Cepat WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 animate-fadeIn"
    >
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#F5EEE5] text-[#34221F] text-xs font-semibold px-3 py-2 rounded-xl shadow-lg border border-[#B97C7C]/40 animate-bounce">
          <span className="w-2 h-2 rounded-full bg-[#25D366] inline-block shrink-0" />
          <span>Chat via WhatsApp</span>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-[#34221F]/50 hover:text-[#34221F] ml-1 p-0.5 rounded-sm"
            aria-label="Tutup petunjuk"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={createWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat Nova Sugesti via WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-hidden focus:ring-4 focus:ring-[#25D366]/40"
      >
        {/* Subtle breathing ripple */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />

        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 fill-current relative z-10" />

        {/* Mini phone indicator on mobile */}
        <span className="sr-only">Chat via WhatsApp {PERSONAL_INFO.phoneDisplay}</span>
      </a>
    </aside>
  );
};
