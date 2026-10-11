import React, { useState } from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  Feather, 
  Layers, 
  HeartHandshake, 
  CheckCircle2, 
  Check, 
  SlidersHorizontal 
} from 'lucide-react';

export const WhyChooseUs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const pillars = [
    {
      icon: ShieldCheck,
      title: "Verifiable Hair Quality",
      subtitle: "100% Pure Virgin Remy Strands",
      description: "We source exclusively single-donor raw and virgin human hair with all cuticles intact and unidirectionally aligned. This prevents friction, matting, and shedding, granting each unit a proven lifespan of 2+ years with standard care.",
      bulletPoints: [
        "Zero synthetic fibers, animal hair, or chemical silicone coats",
        "Retains natural luster and cuticle integrity through multiple washes",
        "Heat resistant up to 450°F (230°C) for curling or bone-straight flat ironing"
      ],
      tag: "Pure Virgin Hair"
    },
    {
      icon: Sparkles,
      title: "Natural Scalp Appearance",
      subtitle: "Invisible 0.04mm HD Swiss Melt",
      description: "Our ultra-sheer Swiss HD lace features the finest density mesh in the industry. Combined with single-strand hand ventilation, pre-bleached micro knots, and graduated baby hairs, the hairline is virtually undetectable.",
      bulletPoints: [
        "Melts seamlessly against all complexions without ashiness or cast",
        "Pre-plucked natural hair density gradient mimics biological growth",
        "Deep 13x6 parting freedom for versatile ponytails and side sweeps"
      ],
      tag: "HD Lace Melt"
    },
    {
      icon: Feather,
      title: "Breathable All-Day Comfort",
      subtitle: "Zero-Tension Glueless Engineering",
      description: "Heavy wigs cause headaches and hairline stress. Adams Hair units are built on lightweight 3D aerated dome caps lined with anti-slip silicone tension grips, distributing weight evenly across the scalp.",
      bulletPoints: [
        "Lightweight, aerated cap prevents sweat and scalp overheating",
        "Adjustable elastic retention straps adapt to micro-head differences",
        "Completely glueless option eliminates allergic adhesive reactions"
      ],
      tag: "Zero-Tension Fit"
    },
    {
      icon: Layers,
      title: "Unrivaled Style Variety",
      subtitle: "From Glass Straight to 4A Afro Curls",
      description: "Whether you crave a razor-sharp 10\" architectural bob, cascading 30\" honey balayage waves, or lush kinky curls, our diverse textures maintain memory and bounce even after air-drying.",
      bulletPoints: [
        "Textures steam-set without damaging chemical acid baths",
        "Double-drawn fullness from crown down to the natural tips",
        "Custom lengths available from 10\" up to 34\" on request"
      ],
      tag: "Diverse Textures"
    },
    {
      icon: HeartHandshake,
      title: "Personalized Customer Service",
      subtitle: "1-on-1 Dedicated Hair Specialists",
      description: "Buying a luxury wig is an intimate decision. Our in-house wig specialists guide you through cap sizing, texture selection, shade matching, and custom specifications before a single dollar is finalized.",
      bulletPoints: [
        "Direct WhatsApp and video consultation support",
        "Free head measurement verification before order processing",
        "Ongoing wig care guidance and maintenance advisory"
      ],
      tag: "Concierge Care"
    }
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#080808] border-b border-zinc-800/80 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Adams Hair Difference</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#FDFBF7] tracking-tight">
            Why Choose Adams Hair Wigs
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto"></div>
          <p className="text-zinc-400 text-sm sm:text-base font-light">
            We prioritize authentic quality, verifiable craft, natural hairline realism, and long-term scalp health over exaggerated marketing.
          </p>
        </div>

        {/* 5 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className={`bg-[#121212] border border-zinc-800/80 hover:border-[#D4AF37]/60 rounded-xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-[#D4AF37]/5 flex flex-col justify-between space-y-6 ${
                  idx === 0 ? 'lg:col-span-1 md:col-span-2' : ''
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-[#1C1C1C] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] tracking-wider uppercase font-semibold text-[#D4AF37] bg-[#D4AF37]/10 px-2.5 py-1 rounded-full border border-[#D4AF37]/20">
                      {pillar.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-serif font-bold text-[#FAF5E8]">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-[#D4AF37] font-medium tracking-wide mt-0.5">
                      {pillar.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-zinc-800/80">
                  {pillar.bulletPoints.map((item, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <Check className="w-3.5 h-3.5 text-[#D4AF37] mt-0.5 shrink-0" />
                      <span className="leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Interactive Quality Pledge Card */}
          <div className="bg-gradient-to-br from-[#181818] via-[#121212] to-[#0D0D0D] border border-[#D4AF37]/50 rounded-xl p-8 flex flex-col justify-between space-y-6 shadow-xl">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold block">
                Our Verifiable Guarantee
              </span>
              <h3 className="text-2xl font-serif font-bold text-white">
                Authentic Craftsmanship Promise
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                We never use misleading stock photos or unverified claims. Every wig shown reflects actual unit density, hair origin, and hand-plucked lace detailing.
              </p>
            </div>

            <div className="p-4 bg-black/60 rounded-lg border border-zinc-800 space-y-2 text-xs">
              <div className="flex justify-between text-zinc-400">
                <span>Hair Grade:</span>
                <span className="text-white font-medium">100% Pure Virgin Cuticle Remy</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Lace Thickness:</span>
                <span className="text-[#D4AF37] font-medium">0.04mm Real HD Swiss Mesh</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Expected Lifespan:</span>
                <span className="text-white font-medium">2 to 3 Years (With Proper Care)</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Fitting Support:</span>
                <span className="text-emerald-400 font-medium">1-on-1 Specialist Assistance</span>
              </div>
            </div>

            <button
              onClick={() => {
                const el = document.querySelector('#contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full py-3 bg-[#D4AF37] hover:bg-[#E6CA65] text-black font-bold text-xs uppercase tracking-wider rounded-lg transition-all text-center cursor-pointer"
            >
              Consult an Adams Hair Specialist
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
