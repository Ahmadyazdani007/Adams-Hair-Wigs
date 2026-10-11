import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';
import { 
  X, 
  Sparkles, 
  ArrowRight, 
  RotateCcw, 
  Check, 
  ShoppingBag,
  Star
} from 'lucide-react';

export const WigFinderModal = () => {
  const { isWigFinderOpen, setIsWigFinderOpen, setSelectedProduct } = useShop();

  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    lifestyle: '',
    texture: '',
    length: ''
  });

  if (!isWigFinderOpen) return null;

  const handleSelectOption = (key, value) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
    if (step < 3) {
      setStep(step + 1);
    } else {
      setStep(4); // result
    }
  };

  const resetQuiz = () => {
    setStep(1);
    setAnswers({ lifestyle: '', texture: '', length: '' });
  };

  // Determine best match
  const getMatchedProduct = () => {
    if (answers.lifestyle === 'glueless' || answers.length === 'bob') {
      return PRODUCTS.find(p => p.id === 'prod-glueless-bob-chic') || PRODUCTS[0];
    }
    if (answers.texture === 'curly') {
      return PRODUCTS.find(p => p.id === 'prod-kinky-curly-goddess') || PRODUCTS[1];
    }
    if (answers.texture === 'waves') {
      return PRODUCTS.find(p => p.id === 'prod-deep-wave-royale') || PRODUCTS[1];
    }
    if (answers.lifestyle === 'custom') {
      return PRODUCTS.find(p => p.id === 'prod-custom-bespoke-atelier') || PRODUCTS[6];
    }
    return PRODUCTS.find(p => p.id === 'prod-hd-glueless-straight') || PRODUCTS[0];
  };

  const matchedProduct = getMatchedProduct();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="bg-[#141414] border border-[#D4AF37]/50 rounded-2xl max-w-xl w-full p-6 sm:p-8 space-y-6 relative shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={() => setIsWigFinderOpen(false)}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white p-1"
          aria-label="Close quiz"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-[#D4AF37] text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-4 h-4" />
            <span>Interactive Wig Finder Quiz</span>
          </div>
          <h3 className="text-2xl font-serif font-bold text-white">
            Find Your Dream Silhouette
          </h3>
          <p className="text-xs text-zinc-400">
            Answer 3 quick questions to discover the ideal cap construction, lace type, and texture for your routine.
          </p>
        </div>

        {/* Step Indicator */}
        {step <= 3 && (
          <div className="flex items-center gap-2">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`h-1.5 flex-1 rounded-full transition-all ${
                  step >= s ? 'bg-[#D4AF37]' : 'bg-zinc-800'
                }`}
              />
            ))}
          </div>
        )}

        {/* Question 1: Lifestyle / Vibe */}
        {step === 1 && (
          <div className="space-y-4 animate-fade-in">
            <h4 className="text-sm font-semibold text-zinc-200">
              Step 1 of 3: What is your primary wear preference?
            </h4>
            <div className="space-y-2.5">
              <button
                onClick={() => handleSelectOption('lifestyle', 'glueless')}
                className="w-full p-4 rounded-xl bg-zinc-900 hover:bg-[#1A1A1A] border border-zinc-800 hover:border-[#D4AF37]/60 text-left transition-all cursor-pointer group"
              >
                <div className="font-semibold text-sm text-white group-hover:text-[#D4AF37]">
                  ✨ 30-Second Glueless Wear & Go
                </div>
                <div className="text-xs text-zinc-400 font-light mt-0.5">
                  Zero glue, zero sprays, instant morning slip-on with pre-cut lace and secure band.
                </div>
              </button>

              <button
                onClick={() => handleSelectOption('lifestyle', 'melted')}
                className="w-full p-4 rounded-xl bg-zinc-900 hover:bg-[#1A1A1A] border border-zinc-800 hover:border-[#D4AF37]/60 text-left transition-all cursor-pointer group"
              >
                <div className="font-semibold text-sm text-white group-hover:text-[#D4AF37]">
                  👑 Red Carpet HD Melt Frontal
                </div>
                <div className="text-xs text-zinc-400 font-light mt-0.5">
                  Deep 13x6 parting freedom, ultra-sheer Swiss lace that dissolves seamlessly on skin.
                </div>
              </button>

              <button
                onClick={() => handleSelectOption('lifestyle', 'custom')}
                className="w-full p-4 rounded-xl bg-zinc-900 hover:bg-[#1A1A1A] border border-zinc-800 hover:border-[#D4AF37]/60 text-left transition-all cursor-pointer group"
              >
                <div className="font-semibold text-sm text-white group-hover:text-[#D4AF37]">
                  💎 Bespoke Tailored Commission
                </div>
                <div className="text-xs text-zinc-400 font-light mt-0.5">
                  Custom head scan mold, medical-grade scalp lining, and bespoke shade blend.
                </div>
              </button>
            </div>
          </div>
        )}

        {/* Question 2: Texture */}
        {step === 2 && (
          <div className="space-y-4 animate-fade-in">
            <h4 className="text-sm font-semibold text-zinc-200">
              Step 2 of 3: Which hair texture reflects your aesthetic?
            </h4>
            <div className="space-y-2.5">
              <button
                onClick={() => handleSelectOption('texture', 'straight')}
                className="w-full p-4 rounded-xl bg-zinc-900 hover:bg-[#1A1A1A] border border-zinc-800 hover:border-[#D4AF37]/60 text-left transition-all cursor-pointer group"
              >
                <div className="font-semibold text-sm text-white group-hover:text-[#D4AF37]">
                  Silky Glass Bone Straight
                </div>
                <div className="text-xs text-zinc-400 font-light mt-0.5">
                  Ultra-smooth finish with mirror-like shine and double-drawn fullness.
                </div>
              </button>

              <button
                onClick={() => handleSelectOption('texture', 'waves')}
                className="w-full p-4 rounded-xl bg-zinc-900 hover:bg-[#1A1A1A] border border-zinc-800 hover:border-[#D4AF37]/60 text-left transition-all cursor-pointer group"
              >
                <div className="font-semibold text-sm text-white group-hover:text-[#D4AF37]">
                  Lush Body Wave & Deep Hydrated Waves
                </div>
                <div className="text-xs text-zinc-400 font-light mt-0.5">
                  Soft cascading curves with voluminous bounce and moisture-rich luster.
                </div>
              </button>

              <button
                onClick={() => handleSelectOption('texture', 'curly')}
                className="w-full p-4 rounded-xl bg-zinc-900 hover:bg-[#1A1A1A] border border-zinc-800 hover:border-[#D4AF37]/60 text-left transition-all cursor-pointer group"
              >
                <div className="font-semibold text-sm text-white group-hover:text-[#D4AF37]">
                  Afro Kinky Curly (3C - 4A Definition)
                </div>
                <div className="text-xs text-zinc-400 font-light mt-0.5">
                  Authentic textured volume with soft, cloud-like touch and spring back memory.
                </div>
              </button>
            </div>
          </div>
        )}

        {/* Question 3: Length */}
        {step === 3 && (
          <div className="space-y-4 animate-fade-in">
            <h4 className="text-sm font-semibold text-zinc-200">
              Step 3 of 3: Desired length silhouette?
            </h4>
            <div className="space-y-2.5">
              <button
                onClick={() => handleSelectOption('length', 'bob')}
                className="w-full p-4 rounded-xl bg-zinc-900 hover:bg-[#1A1A1A] border border-zinc-800 hover:border-[#D4AF37]/60 text-left transition-all cursor-pointer group"
              >
                <div className="font-semibold text-sm text-white group-hover:text-[#D4AF37]">
                  10" - 14" Chic Bob & Lob
                </div>
                <div className="text-xs text-zinc-400 font-light mt-0.5">
                  Architectural, lightweight, and effortlessly commanding.
                </div>
              </button>

              <button
                onClick={() => handleSelectOption('length', 'mid')}
                className="w-full p-4 rounded-xl bg-zinc-900 hover:bg-[#1A1A1A] border border-zinc-800 hover:border-[#D4AF37]/60 text-left transition-all cursor-pointer group"
              >
                <div className="font-semibold text-sm text-white group-hover:text-[#D4AF37]">
                  18" - 24" Classic Elegance
                </div>
                <div className="text-xs text-zinc-400 font-light mt-0.5">
                  The most versatile length for daily styling, loose curls, and high buns.
                </div>
              </button>

              <button
                onClick={() => handleSelectOption('length', 'long')}
                className="w-full p-4 rounded-xl bg-zinc-900 hover:bg-[#1A1A1A] border border-zinc-800 hover:border-[#D4AF37]/60 text-left transition-all cursor-pointer group"
              >
                <div className="font-semibold text-sm text-white group-hover:text-[#D4AF37]">
                  26" - 32" Dramatic Luxury
                </div>
                <div className="text-xs text-zinc-400 font-light mt-0.5">
                  Show-stopping length that flows to the waistline with full density.
                </div>
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Results Screen */}
        {step === 4 && (
          <div className="space-y-5 animate-fade-in">
            <div className="p-4 rounded-xl bg-gradient-to-r from-zinc-900 to-zinc-950 border border-[#D4AF37]/40 flex gap-4 items-center">
              <img
                src={matchedProduct.image}
                alt={matchedProduct.name}
                className="w-24 h-28 object-cover rounded-lg border border-[#D4AF37]/30 shrink-0"
              />
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold">
                  Recommended Match For You
                </span>
                <h4 className="text-base font-serif font-bold text-white">
                  {matchedProduct.name}
                </h4>
                <div className="text-xs font-serif font-bold text-[#D4AF37]">
                  Starting from ${matchedProduct.basePrice}
                </div>
                <p className="text-[11px] text-zinc-400 line-clamp-2">
                  {matchedProduct.description}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  setIsWigFinderOpen(false);
                  setSelectedProduct(matchedProduct);
                }}
                className="flex-1 py-3.5 bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-black font-bold text-xs uppercase tracking-widest rounded-lg transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>View My Recommended Wig</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={resetQuiz}
                className="p-3.5 border border-zinc-700 text-zinc-400 hover:text-white rounded-lg transition-colors"
                title="Retake Quiz"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
