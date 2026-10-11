import React from 'react';
import { useShop } from '../context/ShopContext';
import { X, Heart, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';

export const WishlistDrawer = () => {
  const { 
    wishlist, 
    isWishlistOpen, 
    setIsWishlistOpen, 
    toggleWishlist, 
    addToCart,
    setSelectedProduct 
  } = useShop();

  if (!isWishlistOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fade-in">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={() => setIsWishlistOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#121212] border-l border-[#D4AF37]/40 shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-6 border-b border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Heart className="w-5 h-5 text-[#D4AF37] fill-[#D4AF37]" />
              <h3 className="text-lg font-serif font-bold text-white tracking-wide">
                Saved Favorites ({wishlist.length})
              </h3>
            </div>
            <button
              onClick={() => setIsWishlistOpen(false)}
              className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
              aria-label="Close wishlist"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {wishlist.length === 0 ? (
              <div className="text-center py-20 space-y-4">
                <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mx-auto text-zinc-500">
                  <Heart className="w-8 h-8" />
                </div>
                <p className="text-base font-serif text-zinc-300">Your wishlist is empty.</p>
                <p className="text-xs text-zinc-500 max-w-xs mx-auto">
                  Click the heart icon on any wig to save your favorite silhouettes for later.
                </p>
                <button
                  onClick={() => setIsWishlistOpen(false)}
                  className="px-6 py-2.5 bg-[#D4AF37] text-black text-xs font-bold uppercase tracking-wider rounded-lg"
                >
                  Explore Wigs
                </button>
              </div>
            ) : (
              wishlist.map((product) => (
                <div 
                  key={product.id}
                  className="flex gap-4 p-3 bg-zinc-950/60 rounded-xl border border-zinc-800/80"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-24 object-cover rounded-lg border border-zinc-800 shrink-0 cursor-pointer"
                    onClick={() => { setSelectedProduct(product); setIsWishlistOpen(false); }}
                  />

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 
                          className="text-xs font-serif font-bold text-white line-clamp-1 pr-2 hover:text-[#D4AF37] cursor-pointer"
                          onClick={() => { setSelectedProduct(product); setIsWishlistOpen(false); }}
                        >
                          {product.name}
                        </h4>
                        <button
                          onClick={() => toggleWishlist(product)}
                          className="text-zinc-500 hover:text-red-400 p-0.5"
                          title="Remove from favorites"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="text-[11px] text-[#D4AF37] font-serif font-bold mt-1">
                        Starting from ${product.basePrice}
                      </div>
                      <div className="text-[10px] text-zinc-400 mt-0.5">
                        {product.laceType}
                      </div>
                    </div>

                    <div className="pt-2 border-t border-zinc-900 flex items-center justify-between">
                      <button
                        onClick={() => {
                          addToCart(product);
                          setIsWishlistOpen(false);
                        }}
                        className="w-full py-1.5 px-3 bg-[#D4AF37] hover:bg-[#E6CA65] text-black font-bold text-[10px] uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-1.5"
                      >
                        <ShoppingBag className="w-3 h-3" />
                        <span>Move to Bag</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-zinc-800 bg-[#0E0E0E]">
            <button
              onClick={() => setIsWishlistOpen(false)}
              className="w-full py-3 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors"
            >
              Continue Browsing
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
