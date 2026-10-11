import React, { useState } from 'react';
import { FAQS, FAQ_CATEGORIES } from '../data/faqs';
import { useShop } from '../context/ShopContext';
import { 
  ChevronDown, 
  Sparkles, 
  Search, 
  HelpCircle, 
  Ruler, 
  PhoneCall, 
  MessageCircle 
} from 'lucide-react';

export const FaqSection = () => {
  const { setIsSizeGuideOpen } = useShop();
  const [activeCategory, setActiveCategory] = useState('All');
  const [openIndex, setOpenIndex] = useState(0); // first item open by default
  const [searchFilter, setSearchFilter] = useState('');

  const filteredFaqs = FAQS.filter(faq => {
    const matchesCat = activeCategory === 'All' || faq.category === activeCategory;
    const matchesQuery = !searchFilter.trim() || 
      faq.question.toLowerCase().includes(searchFilter.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchFilter.toLowerCase());
    return matchesCat && matchesQuery;
  });

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#0B0B0B] border-b border-zinc-800/80 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Care & Advisory Center</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#FDFBF7] tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto"></div>
          <p className="text-zinc-400 text-sm sm:text-base font-light">
            Everything you need to know about wig maintenance, choosing textures, precision cap sizing, delivery, returns, and bespoke orders.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="space-y-4 mb-10">
          <div className="relative max-w-xl mx-auto">
            <Search className="w-4 h-4 text-zinc-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              placeholder="Search care, lace type, sizing, returns..."
              className="w-full bg-[#141414] border border-zinc-800 text-sm text-zinc-100 placeholder-zinc-500 pl-11 pr-4 py-3 rounded-xl focus:outline-none focus:border-[#D4AF37]"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {FAQ_CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setOpenIndex(0); }}
                className={`px-3 py-1.5 rounded-full text-xs transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#D4AF37] text-black font-semibold'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 bg-zinc-900/40 rounded-xl border border-zinc-800 text-zinc-400 text-sm">
              No matching questions found. Try another search term or ask our concierge below.
            </div>
          ) : (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#121212] border border-zinc-800/80 hover:border-[#D4AF37]/40 rounded-xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="space-y-1 pr-2">
                      <span className="text-[10px] uppercase tracking-wider text-[#D4AF37] font-semibold block">
                        {faq.category}
                      </span>
                      <h3 className="text-base sm:text-lg font-serif font-bold text-[#FDFBF7]">
                        {faq.question}
                      </h3>
                    </div>

                    <div className={`p-2 rounded-full bg-zinc-900 text-[#D4AF37] transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 bg-[#D4AF37] text-black' : ''
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-zinc-300 font-light leading-relaxed border-t border-zinc-800/60 animate-fade-in">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Quick Helper Links Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] shrink-0">
              <Ruler className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Uncertain about your cap circumference?</h4>
              <p className="text-xs text-zinc-400">View our step-by-step measurement diagrams.</p>
            </div>
          </div>

          <button
            onClick={() => setIsSizeGuideOpen(true)}
            className="px-5 py-2.5 bg-zinc-800 hover:bg-[#D4AF37] text-zinc-200 hover:text-black text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors border border-zinc-700 hover:border-[#D4AF37] cursor-pointer shrink-0"
          >
            Open Sizing Guide
          </button>
        </div>

      </div>
    </section>
  );
};
