import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/company';
import { MessageCircle, Sparkles, X } from 'lucide-react';

export const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
    'Hello Adams Hair Wigs, I would like to inquire about wig options and custom styling.'
  )}`;

  return (
    <div className="fixed bottom-6 left-6 z-40 flex items-center gap-3">
      {/* Floating CTA Tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#121212]/95 border border-[#D4AF37]/50 py-2 px-3.5 rounded-full shadow-2xl backdrop-blur-md text-xs animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-zinc-200 font-medium">Adams Hair Concierge Online</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-zinc-500 hover:text-white ml-1 p-0.5"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Main WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-2xl shadow-emerald-950/60 transition-transform duration-300 hover:scale-110 active:scale-95 group relative"
        aria-label="Chat on WhatsApp with Adams Hair"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#D4AF37] rounded-full border-2 border-black"></span>
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
};
