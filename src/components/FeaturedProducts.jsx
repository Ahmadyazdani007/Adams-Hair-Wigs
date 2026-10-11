import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { useShop } from '../context/ShopContext';
import { COMPANY_INFO } from '../data/company';
import { 
  Heart, 
  Eye, 
  ShoppingBag, 
  MessageCircle, 
  Star, 
  Sparkles, 
  SlidersHorizontal,
  Check
} from 'lucide-react';

export const FeaturedProducts = () => {
  const { 
    selectedCategory, 
    setSelectedCategory, 
    searchQuery, 
    setSearchQuery,
    setSelectedProduct, 
    addToCart, 
    toggleWishlist, 
    isInWishlist 
  } = useShop();

  const [sortBy, setSortBy] = useState('featured');
  // Store selected length per product: { [productId]: lengthString }
  const [selectedLengths, setSelectedLengths] = useState({});
  // Store selected color per product: { [productId]: colorName }
  const [selectedColors, setSelectedColors] = useState({});

  const categories = ['All', 'Human Hair', 'Lace Front', 'Glueless', 'Curly', 'Straight', 'Custom'];

  // Filter products by category and search
  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = 
      selectedCategory === 'All' || 
      product.category.toLowerCase() === selectedCategory.toLowerCase();

    const matchesSearch = 
      !searchQuery.trim() ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.hairType.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-asc') return a.basePrice - b.basePrice;
    if (sortBy === 'price-desc') return b.basePrice - a.basePrice;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0; // default featured
  });

  const getProductLength = (product) => {
    return selectedLengths[product.id] || product.lengths[0]?.length || '20 inch';
  };

  const getProductColor = (product) => {
    return selectedColors[product.id] || product.colors[0]?.name || 'Natural Black';
  };

  const getCalculatedPrice = (product) => {
    const currentLength = getProductLength(product);
    const lengthObj = product.lengths.find(l => l.length === currentLength);
    return product.basePrice + (lengthObj ? lengthObj.priceAdd : 0);
  };

  const handleLengthChange = (productId, length) => {
    setSelectedLengths(prev => ({ ...prev, [productId]: length }));
  };

  const handleColorChange = (productId, colorName) => {
    setSelectedColors(prev => ({ ...prev, [productId]: colorName }));
  };

  const handleQuickAdd = (product) => {
    const length = getProductLength(product);
    const color = getProductColor(product);
    addToCart(product, { length, color });
  };

  const getWhatsAppInquiryUrl = (product) => {
    const length = getProductLength(product);
    const color = getProductColor(product);
    const price = getCalculatedPrice(product);
    const msg = `Hello Adams Hair Wigs, I would like to inquire about purchasing:\n\n• Unit: ${product.name}\n• Selected Length: ${length}\n• Selected Color: ${color}\n• Price: $${price}\n\nCould you please confirm availability and delivery timeframe? Thank you!`;
    return `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="products" className="py-20 lg:py-28 bg-[#080808] border-b border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Masterpiece Wigs Catalog</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#FDFBF7] tracking-tight">
            Featured Products
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto"></div>
          <p className="text-zinc-400 text-sm sm:text-base font-light">
            Individually inspected virgin hairpieces with dynamic length and color selections. Direct ordering and bespoke WhatsApp concierge available.
          </p>
        </div>

        {/* Filter Bar & Controls */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12 pb-6 border-b border-zinc-800/80">
          
          {/* Category Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setSearchQuery('');
                }}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                  selectedCategory.toLowerCase() === cat.toLowerCase()
                    ? 'bg-[#D4AF37] text-black shadow-md shadow-[#D4AF37]/20 scale-105'
                    : 'bg-[#141414] text-zinc-300 hover:text-white hover:bg-zinc-800 border border-zinc-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-wider text-zinc-400 font-medium">Sort By:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#141414] border border-zinc-700 text-zinc-200 text-xs px-3.5 py-2 rounded-lg focus:outline-none focus:border-[#D4AF37]"
            >
              <option value="featured">Featured Collection</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Product Results Counter & Search Indicator */}
        {searchQuery && (
          <div className="mb-6 flex items-center justify-between bg-zinc-900/60 p-3 rounded-lg border border-zinc-800 text-xs">
            <span className="text-zinc-300">
              Showing results for search: <strong className="text-[#D4AF37]">"{searchQuery}"</strong>
            </span>
            <button
              onClick={() => setSearchQuery('')}
              className="text-zinc-400 hover:text-white underline"
            >
              Clear search
            </button>
          </div>
        )}

        {/* Product Cards Grid */}
        {sortedProducts.length === 0 ? (
          <div className="text-center py-20 bg-[#121212] rounded-2xl border border-zinc-800 space-y-4">
            <p className="text-lg font-serif text-zinc-300">No wigs found matching your selection.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="px-6 py-2.5 bg-[#D4AF37] text-black font-semibold text-xs uppercase tracking-wider rounded-md"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {sortedProducts.map((product) => {
              const currentLength = getProductLength(product);
              const currentColor = getProductColor(product);
              const currentPrice = getCalculatedPrice(product);
              const isFav = isInWishlist(product.id);

              return (
                <div
                  key={product.id}
                  className="bg-[#121212] border border-zinc-800 hover:border-[#D4AF37]/50 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#D4AF37]/10 flex flex-col justify-between group"
                >
                  {/* Top Image Showcase */}
                  <div className="relative aspect-[3/4] overflow-hidden bg-zinc-950">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700"
                      loading="lazy"
                    />

                    {/* Badge */}
                    <div className="absolute top-3 left-3 bg-black/85 backdrop-blur-md border border-[#D4AF37]/40 px-2.5 py-1 rounded text-[10px] font-bold text-[#D4AF37] tracking-wider uppercase">
                      {product.badge}
                    </div>

                    {/* Wishlist Heart Button */}
                    <button
                      onClick={() => toggleWishlist(product)}
                      className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all cursor-pointer ${
                        isFav 
                          ? 'bg-[#D4AF37] text-black' 
                          : 'bg-black/60 text-white hover:text-[#D4AF37]'
                      }`}
                      aria-label="Save to wishlist"
                    >
                      <Heart className={`w-4 h-4 ${isFav ? 'fill-black' : ''}`} />
                    </button>

                    {/* Quick View Button on Hover */}
                    <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="w-full py-2.5 bg-black/90 hover:bg-[#D4AF37] text-zinc-100 hover:text-black border border-[#D4AF37]/50 rounded text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Quick View & Specs</span>
                      </button>
                    </div>
                  </div>

                  {/* Product Details Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    
                    <div className="space-y-2">
                      {/* Rating & Category */}
                      <div className="flex items-center justify-between text-xs text-zinc-400">
                        <span className="text-[10px] uppercase tracking-wider text-[#D4AF37] font-semibold">
                          {product.category}
                        </span>
                        <div className="flex items-center gap-1 text-amber-400">
                          <Star className="w-3.5 h-3.5 fill-amber-400" />
                          <span className="font-semibold text-zinc-200">{product.rating}</span>
                          <span className="text-zinc-500 text-[10px]">({product.reviewCount})</span>
                        </div>
                      </div>

                      {/* Product Title */}
                      <h3 
                        onClick={() => setSelectedProduct(product)}
                        className="text-base font-serif font-bold text-[#FDFBF7] hover:text-[#D4AF37] transition-colors cursor-pointer line-clamp-1"
                        title={product.name}
                      >
                        {product.name}
                      </h3>

                      {/* Hair & Lace Specs */}
                      <div className="text-[11px] text-zinc-400 flex items-center gap-1.5 truncate">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0"></span>
                        <span className="truncate">{product.laceType}</span>
                      </div>
                    </div>

                    {/* Interactive Length Selector Pills (updates price) */}
                    <div className="space-y-1.5 pt-2 border-t border-zinc-800/80">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-zinc-400 font-medium">Available Lengths:</span>
                        <span className="text-[#D4AF37] font-semibold">{currentLength}</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {product.lengths.map((lenObj) => (
                          <button
                            key={lenObj.length}
                            onClick={() => handleLengthChange(product.id, lenObj.length)}
                            className={`px-2 py-1 text-[10px] font-medium rounded transition-all cursor-pointer ${
                              currentLength === lenObj.length
                                ? 'bg-[#D4AF37] text-black font-bold shadow-sm'
                                : 'bg-zinc-900 text-zinc-300 hover:bg-zinc-800 border border-zinc-800'
                            }`}
                          >
                            {lenObj.length.split(' ')[0]}"
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Color Swatch Options */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-zinc-400 font-medium">Available Colors:</span>
                        <span className="text-zinc-300 truncate max-w-[120px] text-[10px]">{currentColor}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        {product.colors.map((c) => (
                          <button
                            key={c.name}
                            onClick={() => handleColorChange(product.id, c.name)}
                            style={{ backgroundColor: c.hex }}
                            title={c.name}
                            className={`w-4 h-4 rounded-full border transition-all cursor-pointer ${
                              currentColor === c.name
                                ? 'border-[#D4AF37] scale-125 ring-2 ring-[#D4AF37]/50'
                                : 'border-zinc-700 hover:scale-110'
                            }`}
                            aria-label={`Select color ${c.name}`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Price & Action Buttons */}
                    <div className="pt-3 border-t border-zinc-800/80 space-y-2.5">
                      <div className="flex items-baseline justify-between">
                        <span className="text-[10px] uppercase tracking-wider text-zinc-400">Total Price</span>
                        <span className="text-lg font-serif font-bold text-[#FAF5E8]">
                          ${currentPrice}
                        </span>
                      </div>

                      {/* Clear Purchase & Inquiry Buttons */}
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => handleQuickAdd(product)}
                          className="py-2.5 px-2 bg-gradient-to-r from-[#D4AF37] to-[#C5A059] hover:from-[#E0C170] hover:to-[#D4AF37] text-black font-bold text-[11px] uppercase tracking-wider rounded-md transition-all flex items-center justify-center gap-1 cursor-pointer shadow-md"
                          title="Add to shopping bag"
                        >
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>Add to Bag</span>
                        </button>

                        <a
                          href={getWhatsAppInquiryUrl(product)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-2.5 px-2 bg-[#171717] hover:bg-emerald-950/40 text-emerald-400 hover:text-emerald-300 border border-emerald-500/30 font-semibold text-[11px] uppercase tracking-wider rounded-md transition-all flex items-center justify-center gap-1 text-center"
                          title="Instant WhatsApp consultation"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>Inquire</span>
                        </a>
                      </div>

                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
