import React, { useState } from 'react';
import { COLLECTIONS } from '../data/collections';
import { useShop } from '../context/ShopContext';
import { ArrowRight, Sparkles, Check, X, Eye } from 'lucide-react';

export const Collections = () => {
  const { setSelectedCategory, showToast } = useShop();
  const [activeModalCollection, setActiveModalCollection] = useState(null);

  const handleViewCollection = (collection) => {
    setSelectedCategory(collection.filterKey);
    const element = document.querySelector('#products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    showToast(`Showing ${collection.name} in featured collection.`);
  };

  return (
    <section id="collections" className="py-20 lg:py-28 bg-[#0B0B0B] border-b border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Silhouettes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#FDFBF7] tracking-tight">
            Shop Our Collection
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto"></div>
          <p className="text-zinc-400 text-sm sm:text-base font-light">
            Explore our hallmark categories tailored with 100% Remy virgin human hair, undetectable HD Swiss lace, and precision hand-knotting.
          </p>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COLLECTIONS.map((col) => (
            <div 
              key={col.id}
              className="group bg-[#121212] border border-zinc-800/80 hover:border-[#D4AF37]/60 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#D4AF37]/10 flex flex-col"
            >
              {/* Card Image Container */}
              <div className="relative h-72 sm:h-80 overflow-hidden bg-zinc-900">
                <img
                  src={col.image}
                  alt={col.name}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700"
                  loading="lazy"
                />
                
                {/* Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-black/30"></div>

                {/* Badge Top Left */}
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md border border-[#D4AF37]/40 px-3 py-1 rounded-full text-[11px] font-semibold text-[#D4AF37] tracking-wider uppercase">
                  {col.badge}
                </div>

                {/* Quick Info Overlay on Hover */}
                <div className="absolute inset-x-4 bottom-4 translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex flex-wrap gap-1.5">
                    {col.features.slice(0, 2).map((feat, idx) => (
                      <span 
                        key={idx} 
                        className="text-[10px] bg-black/75 backdrop-blur-sm text-zinc-300 px-2 py-0.5 rounded border border-zinc-700"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-xl font-serif font-bold text-[#FDFBF7] group-hover:text-[#D4AF37] transition-colors">
                      {col.name}
                    </h3>
                  </div>

                  <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed font-light">
                    {col.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-zinc-800/80 flex items-center justify-between">
                  {/* Price Placeholder as required */}
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-zinc-500 block">Pricing</span>
                    <span className="text-sm font-serif font-bold text-[#D4AF37]">
                      {col.pricePlaceholder}
                    </span>
                  </div>

                  {/* Exact Required "View Details" button */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveModalCollection(col)}
                      className="p-2 text-zinc-400 hover:text-[#D4AF37] border border-zinc-800 hover:border-[#D4AF37]/50 rounded-lg transition-colors"
                      title="Quick Specs"
                      aria-label={`Quick preview for ${col.name}`}
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    
                    <button
                      onClick={() => handleViewCollection(col)}
                      className="px-4 py-2 bg-zinc-900 hover:bg-[#D4AF37] text-zinc-200 hover:text-black border border-[#D4AF37]/40 hover:border-[#D4AF37] text-xs font-semibold uppercase tracking-wider rounded-lg transition-all flex items-center gap-1.5 cursor-pointer shadow-sm group/btn"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-zinc-900 via-[#151515] to-zinc-900 border border-[#D4AF37]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-serif font-bold text-[#FAF5E8]">
              Looking for a custom hairline, density, or shade match?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400">
              Our master wigmakers craft bespoke 1-of-1 pieces tailored to your exact scalp contours.
            </p>
          </div>
          <button
            onClick={() => {
              const el = document.querySelector('#contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-3 bg-[#D4AF37] hover:bg-[#E6CA65] text-black text-xs uppercase tracking-widest font-bold rounded-sm transition-all shrink-0 cursor-pointer"
          >
            Request Custom Consultation
          </button>
        </div>

      </div>

      {/* Quick Specs Modal for Collection */}
      {activeModalCollection && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#141414] border border-[#D4AF37]/50 rounded-2xl max-w-lg w-full p-6 space-y-5 relative shadow-2xl">
            <button
              onClick={() => setActiveModalCollection(null)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white p-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-semibold rounded-full uppercase tracking-wider">
                {activeModalCollection.badge}
              </span>
              <span className="text-xs text-zinc-400">Category Overview</span>
            </div>

            <h3 className="text-2xl font-serif font-bold text-[#FAF5E8]">
              {activeModalCollection.name}
            </h3>

            <p className="text-sm text-zinc-300 leading-relaxed font-light">
              {activeModalCollection.description}
            </p>

            <div className="space-y-2 pt-2 border-t border-zinc-800">
              <span className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold block">
                Standard Construction Highlights:
              </span>
              <ul className="space-y-2">
                {activeModalCollection.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                    <Check className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3 bg-zinc-900/80 rounded-lg flex items-center justify-between text-xs">
              <span className="text-zinc-400">Estimated Investment:</span>
              <span className="text-base font-serif font-bold text-[#D4AF37]">
                {activeModalCollection.pricePlaceholder}
              </span>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => {
                  handleViewCollection(activeModalCollection);
                  setActiveModalCollection(null);
                }}
                className="flex-1 py-3 bg-[#D4AF37] hover:bg-[#E6CA65] text-black font-bold text-xs uppercase tracking-wider rounded-lg transition-all"
              >
                Browse {activeModalCollection.name}
              </button>
              <button
                onClick={() => setActiveModalCollection(null)}
                className="px-4 py-3 border border-zinc-700 text-zinc-300 hover:text-white text-xs uppercase tracking-wider rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
