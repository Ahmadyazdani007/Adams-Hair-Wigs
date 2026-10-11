import React from 'react';
import { useShop } from '../context/ShopContext';
import { X, Ruler, Sparkles, Check, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export const SizeGuideModal = () => {
  const { isSizeGuideOpen, setIsSizeGuideOpen } = useShop();

  if (!isSizeGuideOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="bg-[#141414] border border-[#D4AF37]/50 rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 relative shadow-2xl my-auto">
        
        {/* Close Button */}
        <button
          onClick={() => setIsSizeGuideOpen(false)}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white p-1"
          aria-label="Close size guide"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-[#D4AF37] text-xs font-semibold uppercase tracking-widest">
            <Ruler className="w-4 h-4" />
            <span>Artisanal Fit Advisory</span>
          </div>
          <h3 className="text-2xl font-serif font-bold text-white">
            Adams Hair Cap Sizing & Measurement Guide
          </h3>
          <p className="text-xs text-zinc-400">
            A precise fit guarantees supreme comfort, zero slippage, and an undetectable natural hairline.
          </p>
        </div>

        {/* Size Chart Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left text-zinc-300 border-collapse">
            <thead>
              <tr className="border-b border-zinc-800 text-[#D4AF37] uppercase text-[10px] tracking-wider">
                <th className="py-2.5 px-3">Cap Size</th>
                <th className="py-2.5 px-3">Circumference</th>
                <th className="py-2.5 px-3">Front to Nape</th>
                <th className="py-2.5 px-3">Ear to Ear (Forehead)</th>
                <th className="py-2.5 px-3">Fit Recommendation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60 font-light">
              <tr>
                <td className="py-2.5 px-3 font-semibold text-white">Small</td>
                <td className="py-2.5 px-3">21.0" – 21.5"</td>
                <td className="py-2.5 px-3">13.5" – 14.0"</td>
                <td className="py-2.5 px-3">11.0" – 11.5"</td>
                <td className="py-2.5 px-3 text-zinc-400">Petite head shapes, very close-cropped hair</td>
              </tr>
              <tr className="bg-[#D4AF37]/5">
                <td className="py-2.5 px-3 font-semibold text-[#D4AF37]">Medium (Standard)</td>
                <td className="py-2.5 px-3 text-white font-medium">22.0" – 22.5"</td>
                <td className="py-2.5 px-3 text-white">14.0" – 14.5"</td>
                <td className="py-2.5 px-3 text-white">11.5" – 12.0"</td>
                <td className="py-2.5 px-3 text-[#D4AF37]">Universal fit (fits 92% of clients comfortably)</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-semibold text-white">Large</td>
                <td className="py-2.5 px-3">23.0" – 23.5"</td>
                <td className="py-2.5 px-3">14.5" – 15.0"</td>
                <td className="py-2.5 px-3">12.0" – 12.5"</td>
                <td className="py-2.5 px-3 text-zinc-400">Thicker natural braids, larger skull contours</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Step-by-Step Instructions */}
        <div className="space-y-3 pt-2 border-t border-zinc-800 text-xs">
          <span className="text-[#D4AF37] font-semibold uppercase tracking-wider block">
            How to Measure at Home in 2 Minutes:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-zinc-300">
            <div className="p-3 bg-zinc-900 rounded-lg border border-zinc-800 space-y-1">
              <span className="text-white font-semibold block">1. Head Circumference (Primary)</span>
              <p className="text-zinc-400 leading-relaxed font-light">
                Use a flexible soft tape. Place it flat at the center of your front hairline, guide behind both ears, down around the nape of the neck, and back up to the starting point.
              </p>
            </div>
            <div className="p-3 bg-zinc-900 rounded-lg border border-zinc-800 space-y-1">
              <span className="text-white font-semibold block">2. Front to Nape</span>
              <p className="text-zinc-400 leading-relaxed font-light">
                Place the tape at the start of your hairline in the center of your forehead, straight back over the crown of your head to the crease of your neck.
              </p>
            </div>
          </div>
        </div>

        {/* Note on Built-in Elastic Adjusters */}
        <div className="p-4 bg-zinc-900/60 rounded-xl border border-zinc-800 flex items-start gap-3 text-xs text-zinc-300">
          <Sparkles className="w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0" />
          <p className="font-light leading-relaxed">
            <strong className="text-white font-semibold">Adaptive Fit Assurance: </strong>
            All Adams Hair ready-to-wear units include built-in multi-stage elastic adjustment bands and anti-slip silicone contour grips that allow ±0.75" adjustments.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent('Hello Adams Hair, I need help measuring my head size for a wig.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-2.5 bg-[#D4AF37] hover:bg-[#E6CA65] text-black font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Request Specialist Sizing Assist</span>
          </a>

          <button
            onClick={() => setIsSizeGuideOpen(false)}
            className="w-full sm:w-auto px-5 py-2.5 border border-zinc-700 text-zinc-300 hover:text-white text-xs uppercase tracking-wider rounded-lg"
          >
            Close Guide
          </button>
        </div>

      </div>
    </div>
  );
};
