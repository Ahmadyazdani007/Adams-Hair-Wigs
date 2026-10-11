import React, { useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { COMPANY_INFO } from '../data/company';
import { 
  X, 
  ShoppingBag, 
  Heart, 
  MessageCircle, 
  Star, 
  Check, 
  Sparkles, 
  Ruler, 
  ShieldCheck, 
  Truck,
  RotateCcw
} from 'lucide-react';

export const ProductModal = () => {
  const { 
    selectedProduct, 
    setSelectedProduct, 
    addToCart, 
    toggleWishlist, 
    isInWishlist,
    setIsSizeGuideOpen 
  } = useShop();

  if (!selectedProduct) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedLength, setSelectedLength] = useState(
    selectedProduct.lengths[0]?.length || '20 inch'
  );
  const [selectedColor, setSelectedColor] = useState(
    selectedProduct.colors[0]?.name || 'Natural Black'
  );
  const [selectedCapSize, setSelectedCapSize] = useState(
    selectedProduct.capSizes[0] || 'Medium (22.5")'
  );
  const [selectedDensity, setSelectedDensity] = useState(
    selectedProduct.densities[0] || '180% Standard Full'
  );
  const [activeTab, setActiveTab] = useState('specs'); // 'specs' | 'care' | 'delivery'

  // Update selected defaults when selectedProduct changes
  useEffect(() => {
    setActiveImageIndex(0);
    setSelectedLength(selectedProduct.lengths[0]?.length || '20 inch');
    setSelectedColor(selectedProduct.colors[0]?.name || 'Natural Black');
    setSelectedCapSize(selectedProduct.capSizes[0] || 'Medium (22.5")');
    setSelectedDensity(selectedProduct.densities[0] || '180% Standard Full');
  }, [selectedProduct]);

  // Calculate current unit price
  const lengthObj = selectedProduct.lengths.find(l => l.length === selectedLength);
  const calculatedPrice = selectedProduct.basePrice + (lengthObj ? lengthObj.priceAdd : 0);
  const isFav = isInWishlist(selectedProduct.id);

  const handleAddToCart = () => {
    addToCart(selectedProduct, {
      length: selectedLength,
      color: selectedColor,
      capSize: selectedCapSize,
      density: selectedDensity
    });
    setSelectedProduct(null);
  };

  const getWhatsAppInquiryUrl = () => {
    const msg = `Hello Adams Hair Wigs,\n\nI am inquiring about the following custom unit:\n• Model: ${selectedProduct.name}\n• Length: ${selectedLength}\n• Color: ${selectedColor}\n• Cap Size: ${selectedCapSize}\n• Density: ${selectedDensity}\n• Calculated Price: $${calculatedPrice}\n\nPlease advise on current availability and delivery timeline. Thank you!`;
    return `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="bg-[#121212] border border-[#D4AF37]/50 rounded-2xl max-w-4xl w-full my-auto overflow-hidden shadow-2xl relative">
        
        {/* Close Button */}
        <button
          onClick={() => setSelectedProduct(null)}
          className="absolute top-4 right-4 z-20 p-2 bg-black/70 hover:bg-[#D4AF37] text-white hover:text-black rounded-full transition-all"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[90vh] overflow-y-auto">
          
          {/* Left Column: Image Gallery */}
          <div className="md:col-span-5 bg-zinc-950 p-6 flex flex-col justify-between space-y-4 border-b md:border-b-0 md:border-r border-zinc-800">
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900">
              <img
                src={selectedProduct.gallery ? selectedProduct.gallery[activeImageIndex] : selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute top-3 left-3 bg-black/80 px-2.5 py-1 rounded text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider">
                {selectedProduct.badge}
              </div>
            </div>

            {/* Thumbnail Carousel */}
            {selectedProduct.gallery && selectedProduct.gallery.length > 1 && (
              <div className="flex gap-2">
                {selectedProduct.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-16 h-20 rounded-lg overflow-hidden border transition-all cursor-pointer ${
                      activeImageIndex === idx 
                        ? 'border-[#D4AF37] ring-2 ring-[#D4AF37]/40 scale-105' 
                        : 'border-zinc-800 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`Thumb ${idx}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Guarantees Box */}
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800 text-[11px] text-zinc-400 space-y-1.5">
              <div className="flex items-center gap-2 text-zinc-300">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span>100% Virgin Single-Donor Cuticle Remy</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-300">
                <Truck className="w-4 h-4 text-[#D4AF37]" />
                <span>Discreet express shipping with tracking</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-300">
                <RotateCcw className="w-4 h-4 text-[#D4AF37]" />
                <span>14-day unworn lace return policy</span>
              </div>
            </div>
          </div>

          {/* Right Column: Customization & Purchasing */}
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              
              {/* Category, Rating & Title */}
              <div>
                <div className="flex items-center justify-between text-xs text-zinc-400">
                  <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                    {selectedProduct.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-amber-400">
                    <Star className="w-4 h-4 fill-amber-400" />
                    <span className="font-bold text-zinc-200">{selectedProduct.rating}</span>
                    <span className="text-zinc-500">({selectedProduct.reviewCount} verified client reviews)</span>
                  </div>
                </div>

                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
                  {selectedProduct.name}
                </h2>

                <div className="text-xl font-serif font-bold text-[#D4AF37] mt-2">
                  ${calculatedPrice}
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                {selectedProduct.description}
              </p>

              {/* Option 1: Length */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-300 font-medium">Select Length:</span>
                  <span className="text-[#D4AF37] font-bold">{selectedLength}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedProduct.lengths.map((lenObj) => (
                    <button
                      key={lenObj.length}
                      onClick={() => setSelectedLength(lenObj.length)}
                      className={`px-3 py-1.5 text-xs rounded-lg transition-all cursor-pointer ${
                        selectedLength === lenObj.length
                          ? 'bg-[#D4AF37] text-black font-bold shadow-md'
                          : 'bg-zinc-900 text-zinc-300 hover:bg-zinc-800 border border-zinc-800'
                      }`}
                    >
                      {lenObj.length}
                    </button>
                  ))}
                </div>
              </div>

              {/* Option 2: Color */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-300 font-medium">Select Shade / Color:</span>
                  <span className="text-[#D4AF37] font-bold">{selectedColor}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedProduct.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`flex items-center gap-2 px-3 py-1.5 text-xs rounded-lg border transition-all cursor-pointer ${
                        selectedColor === c.name
                          ? 'border-[#D4AF37] bg-zinc-900 text-[#D4AF37] font-bold'
                          : 'border-zinc-800 bg-zinc-950 text-zinc-400 hover:text-white'
                      }`}
                    >
                      <span 
                        className="w-3.5 h-3.5 rounded-full border border-zinc-600 shrink-0" 
                        style={{ backgroundColor: c.hex }}
                      />
                      <span>{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Option 3: Cap Size & Density */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-zinc-300 font-medium">Cap Size:</span>
                    <button
                      type="button"
                      onClick={() => setIsSizeGuideOpen(true)}
                      className="text-[#D4AF37] hover:underline text-[10px] flex items-center gap-1"
                    >
                      <Ruler className="w-3 h-3" /> Size Guide
                    </button>
                  </div>
                  <select
                    value={selectedCapSize}
                    onChange={(e) => setSelectedCapSize(e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-800 text-zinc-200 text-xs px-3 py-2 rounded-lg focus:outline-none focus:border-[#D4AF37]"
                  >
                    {selectedProduct.capSizes.map(sz => (
                      <option key={sz} value={sz}>{sz}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <span className="text-xs text-zinc-300 font-medium block">Hair Density:</span>
                  <select
                    value={selectedDensity}
                    onChange={(e) => setSelectedDensity(e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-800 text-zinc-200 text-xs px-3 py-2 rounded-lg focus:outline-none focus:border-[#D4AF37]"
                  >
                    {selectedProduct.densities.map(den => (
                      <option key={den} value={den}>{den}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Informational Tabs: Specs / Care / Shipping */}
              <div className="pt-2 border-t border-zinc-800">
                <div className="flex border-b border-zinc-800 text-xs gap-4 pb-1">
                  <button
                    onClick={() => setActiveTab('specs')}
                    className={`pb-1 uppercase tracking-wider font-semibold transition-colors cursor-pointer ${
                      activeTab === 'specs' ? 'text-[#D4AF37] border-b-2 border-[#D4AF37]' : 'text-zinc-500 hover:text-zinc-300'
                    }`}
                  >
                    Specifications
                  </button>
                  <button
                    onClick={() => setActiveTab('care')}
                    className={`pb-1 uppercase tracking-wider font-semibold transition-colors cursor-pointer ${
                      activeTab === 'care' ? 'text-[#D4AF37] border-b-2 border-[#D4AF37]' : 'text-zinc-500 hover:text-zinc-300'
                    }`}
                  >
                    Care Guide
                  </button>
                  <button
                    onClick={() => setActiveTab('delivery')}
                    className={`pb-1 uppercase tracking-wider font-semibold transition-colors cursor-pointer ${
                      activeTab === 'delivery' ? 'text-[#D4AF37] border-b-2 border-[#D4AF37]' : 'text-zinc-500 hover:text-zinc-300'
                    }`}
                  >
                    Delivery & Returns
                  </button>
                </div>

                <div className="pt-3 text-xs text-zinc-300">
                  {activeTab === 'specs' && (
                    <div className="space-y-1.5">
                      <div className="flex justify-between py-0.5 border-b border-zinc-900">
                        <span className="text-zinc-500">Hair Origin:</span>
                        <span className="font-medium text-white">{selectedProduct.hairType}</span>
                      </div>
                      <div className="flex justify-between py-0.5 border-b border-zinc-900">
                        <span className="text-zinc-500">Lace Construction:</span>
                        <span className="font-medium text-[#D4AF37]">{selectedProduct.laceType}</span>
                      </div>
                      <div className="flex justify-between py-0.5">
                        <span className="text-zinc-500">Knots & Plucking:</span>
                        <span className="font-medium text-white">Pre-bleached micro-knots & hand-plucked</span>
                      </div>
                    </div>
                  )}

                  {activeTab === 'care' && (
                    <p className="text-zinc-400 leading-relaxed font-light">
                      Wash every 10–14 days with sulfate-free shampoo. Deep condition for 20 minutes, rinse in cold water, and air dry on a wig stand. Apply heat protectant before heat styling up to 400°F.
                    </p>
                  )}

                  {activeTab === 'delivery' && (
                    <p className="text-zinc-400 leading-relaxed font-light">
                      Orders are hand-inspected and shipped within 24–48 hours. Complimentary express courier delivery with tracking. 14-day unworn returns with intact lace.
                    </p>
                  )}
                </div>
              </div>

            </div>

            {/* CTAs */}
            <div className="pt-4 border-t border-zinc-800 space-y-3">
              <div className="flex items-center gap-3">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 py-3.5 px-6 bg-gradient-to-r from-[#D4AF37] to-[#C5A059] hover:from-[#E0C170] hover:to-[#D4AF37] text-black font-bold text-xs uppercase tracking-widest rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Bag • ${calculatedPrice}</span>
                </button>

                <button
                  onClick={() => toggleWishlist(selectedProduct)}
                  className={`p-3.5 rounded-lg border transition-all cursor-pointer ${
                    isFav 
                      ? 'border-[#D4AF37] bg-[#D4AF37]/20 text-[#D4AF37]' 
                      : 'border-zinc-800 text-zinc-400 hover:text-white'
                  }`}
                  aria-label="Save to Wishlist"
                >
                  <Heart className={`w-5 h-5 ${isFav ? 'fill-[#D4AF37]' : ''}`} />
                </button>
              </div>

              {/* Direct WhatsApp Consultation CTA */}
              <a
                href={getWhatsAppInquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 bg-[#141414] hover:bg-emerald-950/40 text-emerald-400 hover:text-emerald-300 border border-emerald-500/30 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all flex items-center justify-center gap-2 text-center"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Instant WhatsApp Order / Inquiry</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
