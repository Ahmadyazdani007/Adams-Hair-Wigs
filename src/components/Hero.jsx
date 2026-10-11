import React from 'react';
import { useShop } from '../context/ShopContext';
import { Sparkles, ShieldCheck, ArrowRight, Star, HeartHandshake, Eye } from 'lucide-react';

export const Hero = () => {
  const { setIsWigFinderOpen, setSelectedProduct } = useShop();

  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#080808] border-b border-zinc-800/80 pt-8 pb-16 lg:py-24">
      {/* Ambient Luxury Lighting Backdrops */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-10 right-10 w-[350px] h-[350px] bg-[#C5A059]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Brand Heritage Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-[#D4AF37]/40 text-[#D4AF37] text-xs uppercase tracking-[0.2em] font-medium shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Adams Hair Wigs • Haute Couture Hairpieces</span>
            </div>

            {/* Exact Required Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-[#FDFBF7] tracking-tight leading-[1.12]">
              Confidence Begins with the <span className="gold-gradient-text italic font-normal">Perfect Hair.</span>
            </h1>

            {/* Exact Required Supporting Text */}
            <p className="text-lg sm:text-xl text-zinc-300 font-light max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Discover beautiful, natural looking wigs designed to match your style and confidence.
            </p>

            {/* Value Highlights List */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 pb-2 text-left">
              <div className="flex items-center gap-2 bg-zinc-900/50 border border-zinc-800/80 px-3 py-2 rounded-lg">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
                <span className="text-xs text-zinc-300 font-medium">100% Virgin Hair</span>
              </div>
              <div className="flex items-center gap-2 bg-zinc-900/50 border border-zinc-800/80 px-3 py-2 rounded-lg">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
                <span className="text-xs text-zinc-300 font-medium">Melted HD Swiss Lace</span>
              </div>
              <div className="flex items-center gap-2 bg-zinc-900/50 border border-zinc-800/80 px-3 py-2 rounded-lg col-span-2 sm:col-span-1">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
                <span className="text-xs text-zinc-300 font-medium">Glueless & Pre-Plucked</span>
              </div>
            </div>

            {/* Exact Required CTAs: "Shop Wigs" and "Contact Us" */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => scrollToSection('#products')}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#D4AF37] via-[#E0C170] to-[#C5A059] text-[#080808] font-bold text-xs uppercase tracking-[0.2em] rounded-sm shadow-xl shadow-[#D4AF37]/15 hover:shadow-[#D4AF37]/30 hover:scale-[1.02] active:scale-[0.99] transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Shop Wigs</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('#contact')}
                className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-zinc-900/80 text-[#FAF5E8] hover:text-[#D4AF37] border border-[#D4AF37]/50 font-semibold text-xs uppercase tracking-[0.2em] rounded-sm transition-all cursor-pointer"
              >
                <span>Contact Us</span>
              </button>

              <button
                onClick={() => setIsWigFinderOpen(true)}
                className="w-full sm:w-auto px-5 py-4 text-xs tracking-wider text-[#D4AF37] hover:text-[#FAF5E8] flex items-center justify-center gap-1.5 transition-colors cursor-pointer group"
              >
                <Sparkles className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform" />
                <span className="underline underline-offset-4">Wig Match Quiz</span>
              </button>
            </div>

            {/* Social Trust Metrics */}
            <div className="pt-4 border-t border-zinc-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-zinc-400">
              <div className="flex items-center gap-1.5">
                <div className="flex text-[#D4AF37]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
                  ))}
                </div>
                <span className="font-semibold text-zinc-200">4.96 / 5.0</span>
                <span>(240+ Verified Reviews)</span>
              </div>
              <span className="hidden sm:inline text-zinc-700">•</span>
              <div className="flex items-center gap-1 text-zinc-300">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span>Ethically Sourced Raw & Virgin Hair</span>
              </div>
            </div>

          </div>

          {/* Right Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative golden frame */}
              <div className="absolute -inset-2.5 rounded-2xl bg-gradient-to-tr from-[#D4AF37]/30 via-transparent to-[#D4AF37]/20 blur-sm"></div>

              {/* Main Luxury Hero Image Container */}
              <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/40 bg-zinc-950 shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85"
                  alt="Adams Hair Wigs - Luxury natural looking lace wig"
                  className="w-full h-[460px] sm:h-[540px] lg:h-[580px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />

                {/* Subtle vignette gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>

                {/* Floating Badge Top Right */}
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md border border-[#D4AF37]/50 px-3.5 py-1.5 rounded-full text-xs text-[#FAF5E8] flex items-center gap-1.5 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="font-medium tracking-wide">Handcrafted HD Frontal</span>
                </div>

                {/* Floating Glassmorphism Product Card Bottom */}
                <div className="absolute bottom-5 inset-x-5 bg-[#121212]/90 backdrop-blur-md border border-[#D4AF37]/40 p-4 rounded-xl shadow-2xl space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold">
                        Signature Collection
                      </span>
                      <h4 className="text-sm font-serif font-bold text-white">
                        Aura Silk Bone Straight HD Glueless
                      </h4>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-zinc-400 block">Starting from</span>
                      <span className="text-base font-serif font-bold text-[#FAF5E8]">$320</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-zinc-300 pt-1 border-t border-zinc-800">
                    <span className="flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-[#D4AF37]" /> Pre-Plucked Scalp Melt
                    </span>
                    <button 
                      onClick={() => scrollToSection('#products')}
                      className="text-[#D4AF37] hover:text-[#FAF5E8] font-semibold flex items-center gap-1"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>

              </div>

              {/* Floating Accent Capsule */}
              <div className="hidden sm:flex absolute -left-6 top-16 bg-[#161616]/95 border border-[#D4AF37]/50 rounded-xl p-3 shadow-xl backdrop-blur-md items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Zero Tension Fit</div>
                  <div className="text-[10px] text-zinc-400">Ergonomic breathable caps</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Brand Trust Badges Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 pt-8 border-t border-zinc-900">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <h4 className="text-sm font-serif font-bold text-[#FAF5E8] tracking-wider uppercase">100% Remy Human Hair</h4>
            <p className="text-xs text-zinc-400">Cuticles aligned for tangle-free movement</p>
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-serif font-bold text-[#FAF5E8] tracking-wider uppercase">HD Swiss Lace</h4>
            <p className="text-xs text-zinc-400">0.04mm invisible melt against any skin tone</p>
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-serif font-bold text-[#FAF5E8] tracking-wider uppercase">Glueless Wear & Go</h4>
            <p className="text-xs text-zinc-400">Zero adhesives, slips on securely in seconds</p>
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-serif font-bold text-[#FAF5E8] tracking-wider uppercase">Tailored Bespoke Fit</h4>
            <p className="text-xs text-zinc-400">Custom circumference, density & shades</p>
          </div>
        </div>
      </div>
    </section>
  );
};
