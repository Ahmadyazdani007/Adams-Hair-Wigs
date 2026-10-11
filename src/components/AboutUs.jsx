import React from 'react';
import { Sparkles, Heart, Compass, CheckCircle2, ArrowRight } from 'lucide-react';

export const AboutUs = () => {
  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#0B0B0B] border-b border-zinc-800/80 relative overflow-hidden">
      {/* Decorative ambient background */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Golden Aura */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 via-transparent to-[#D4AF37]/10 blur-md"></div>

              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/40 bg-zinc-950 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80"
                  alt="Adams Hair Wigs - Atelier craftsmanship"
                  className="w-full h-[450px] sm:h-[500px] object-cover object-center"
                />
                
                {/* Overlay Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>

                {/* Floating Quote Badge */}
                <div className="absolute bottom-6 inset-x-6 p-4 rounded-xl bg-[#141414]/90 backdrop-blur-md border border-[#D4AF37]/40 shadow-xl">
                  <p className="text-xs italic text-zinc-200 font-serif leading-relaxed">
                    “A great wig shouldn't feel like a disguise. It should feel like the purest, most elevated version of yourself.”
                  </p>
                  <div className="mt-2 flex items-center justify-between text-[11px] text-[#D4AF37]">
                    <span className="font-semibold uppercase tracking-wider">Adams Hair Atelier</span>
                    <span>Master Wigmakers</span>
                  </div>
                </div>
              </div>

              {/* Decorative Secondary Image Floating Pin */}
              <div className="hidden sm:block absolute -bottom-6 -right-6 w-36 h-44 rounded-xl overflow-hidden border-2 border-[#D4AF37]/60 shadow-2xl bg-black">
                <img
                  src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80"
                  alt="Artisanal wig finish"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Our Heritage & Purpose</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#FDFBF7] tracking-tight leading-tight">
                Crafted for Confidence, <br />
                <span className="gold-gradient-text italic font-normal">Tailored for Your Unique Journey.</span>
              </h2>
            </div>

            <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
              At <strong className="text-white font-medium">Adams Hair Wigs</strong>, we believe every woman deserves hair that mirrors her inner confidence and effortless elegance. We founded our brand on a simple conviction: luxury wigs should look completely natural, feel weightless, and empower your personal style without compromise.
            </p>

            <p className="text-sm text-zinc-400 font-light leading-relaxed">
              Whether you are looking for an everyday protective glueless bob, a show-stopping 30-inch melted frontal for a milestone celebration, or a gentle bespoke unit during hair recovery, our team listens to your personal preferences. We hand-select single-donor virgin strands, individually bleach and pluck every lace unit, and configure cap ergonomics so you can walk into any room radiating self-assurance.
            </p>

            {/* Core Values Breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-[#141414] border border-zinc-800/80 p-4 rounded-xl space-y-1.5">
                <div className="flex items-center gap-2 text-[#D4AF37]">
                  <Compass className="w-4 h-4" />
                  <h4 className="text-xs uppercase tracking-wider font-bold text-white">Personalized Style Matching</h4>
                </div>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  We don't believe in one-size-fits-all. We tailor hair density, length, and lace tint to complement your face shape and undertone.
                </p>
              </div>

              <div className="bg-[#141414] border border-zinc-800/80 p-4 rounded-xl space-y-1.5">
                <div className="flex items-center gap-2 text-[#D4AF37]">
                  <Heart className="w-4 h-4" />
                  <h4 className="text-xs uppercase tracking-wider font-bold text-white">Compassionate Care</h4>
                </div>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  Specialized support for clients navigating alopecia, postpartum changes, or medical hair loss with ultra-soft scalp linings.
                </p>
              </div>
            </div>

            {/* Atelier Credentials Stats */}
            <div className="pt-4 border-t border-zinc-800/80 grid grid-cols-3 gap-4 text-center sm:text-left">
              <div>
                <span className="text-2xl sm:text-3xl font-serif font-bold text-[#D4AF37] block">4,500+</span>
                <span className="text-[11px] text-zinc-400 uppercase tracking-wider">Units Styled</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-serif font-bold text-white block">100%</span>
                <span className="text-[11px] text-zinc-400 uppercase tracking-wider">Virgin Remy Hair</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-serif font-bold text-[#D4AF37] block">4.96 ★</span>
                <span className="text-[11px] text-zinc-400 uppercase tracking-wider">Client Satisfaction</span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <button
                onClick={scrollToContact}
                className="px-8 py-3.5 bg-gradient-to-r from-[#D4AF37] to-[#C5A059] hover:from-[#E0C170] hover:to-[#D4AF37] text-black font-bold text-xs uppercase tracking-[0.2em] rounded-sm transition-all flex items-center gap-2 cursor-pointer shadow-lg"
              >
                <span>Schedule a 1-on-1 Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
