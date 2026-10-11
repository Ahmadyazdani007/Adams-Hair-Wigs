import React, { useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { COMPANY_INFO } from '../data/company';
import { 
  ShoppingBag, 
  Heart, 
  Search, 
  Menu, 
  X, 
  Sparkles, 
  Ruler, 
  Phone,
  MessageCircle
} from 'lucide-react';

export const Header = () => {
  const { 
    cartItemCount, 
    setIsCartOpen, 
    wishlist, 
    setIsWishlistOpen,
    setIsWigFinderOpen,
    setIsSizeGuideOpen,
    searchQuery,
    setSearchQuery,
    setSelectedCategory
  } = useShop();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href, category = null) => {
    setMobileMenuOpen(false);
    if (category) {
      setSelectedCategory(category);
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      handleNavClick('#products');
      setSearchOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Luxury Announcement Bar */}
      <div className="bg-[#050505] text-[#D4AF37] border-b border-[#D4AF37]/20 py-2 px-4 text-xs tracking-wider">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2 justify-center">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse"></span>
            <span className="font-medium text-[#FAF5E8]">
              Complimentary Worldwide Express Delivery on orders over $250
            </span>
            <span className="hidden md:inline text-[#D4AF37]/60">•</span>
            <span className="hidden md:inline text-zinc-400">100% Virgin Hair & HD Melt Guarantee</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] uppercase tracking-widest">
            <button
              onClick={() => setIsWigFinderOpen(true)}
              className="flex items-center gap-1.5 text-[#D4AF37] hover:text-[#FAF5E8] transition-colors font-semibold"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Wig Finder Quiz</span>
            </button>
            <span className="text-[#D4AF37]/40">|</span>
            <button
              onClick={() => setIsSizeGuideOpen(true)}
              className="flex items-center gap-1.5 text-zinc-300 hover:text-[#D4AF37] transition-colors"
            >
              <Ruler className="w-3.5 h-3.5" />
              <span>Sizing Guide</span>
            </button>
            <span className="text-[#D4AF37]/40">|</span>
            <a 
              href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent('Hello Adams Hair Wigs, I would like to inquire about a wig.')}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-[#080808]/95 backdrop-blur-md border-[#D4AF37]/25 shadow-xl shadow-black/60 py-3.5' 
          : 'bg-[#080808]/85 backdrop-blur-sm border-zinc-800/80 py-4.5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-300 hover:text-[#D4AF37] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-zinc-300 hover:text-[#D4AF37]"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Brand Logo */}
          <a 
            href="#" 
            className="flex flex-col items-center group cursor-pointer text-center"
          >
            <div className="flex items-center gap-2">
              <span className="w-4 h-[1px] bg-[#D4AF37]/60 group-hover:w-6 transition-all"></span>
              <span className="font-serif tracking-[0.25em] text-xl sm:text-2xl font-bold uppercase text-[#FAF5E8] group-hover:text-[#D4AF37] transition-colors">
                ADAMS HAIR
              </span>
              <span className="w-4 h-[1px] bg-[#D4AF37]/60 group-hover:w-6 transition-all"></span>
            </div>
            <span className="text-[9px] tracking-[0.45em] text-[#D4AF37] font-sans font-semibold uppercase -mt-0.5">
              HAIR WIGS • LUXURY ATELIER
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7 text-xs uppercase tracking-[0.16em] font-medium text-zinc-300">
            <a 
              href="#collections" 
              onClick={(e) => { e.preventDefault(); handleNavClick('#collections'); }}
              className="hover:text-[#D4AF37] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#D4AF37] hover:after:w-full after:transition-all"
            >
              Collections
            </a>
            <a 
              href="#products" 
              onClick={(e) => { e.preventDefault(); handleNavClick('#products'); }}
              className="hover:text-[#D4AF37] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#D4AF37] hover:after:w-full after:transition-all"
            >
              Featured Wigs
            </a>
            <a 
              href="#why-us" 
              onClick={(e) => { e.preventDefault(); handleNavClick('#why-us'); }}
              className="hover:text-[#D4AF37] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#D4AF37] hover:after:w-full after:transition-all"
            >
              Why Adams
            </a>
            <a 
              href="#about" 
              onClick={(e) => { e.preventDefault(); handleNavClick('#about'); }}
              className="hover:text-[#D4AF37] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#D4AF37] hover:after:w-full after:transition-all"
            >
              About Us
            </a>
            <a 
              href="#reviews" 
              onClick={(e) => { e.preventDefault(); handleNavClick('#reviews'); }}
              className="hover:text-[#D4AF37] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#D4AF37] hover:after:w-full after:transition-all"
            >
              Reviews
            </a>
            <a 
              href="#faq" 
              onClick={(e) => { e.preventDefault(); handleNavClick('#faq'); }}
              className="hover:text-[#D4AF37] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#D4AF37] hover:after:w-full after:transition-all"
            >
              FAQ
            </a>
            <a 
              href="#contact" 
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
              className="hover:text-[#D4AF37] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#D4AF37] hover:after:w-full after:transition-all text-[#D4AF37]"
            >
              Contact
            </a>
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Desktop Search Toggle */}
            <div className="hidden lg:block relative">
              {searchOpen ? (
                <form onSubmit={handleSearchSubmit} className="flex items-center">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search styles, lengths, HD lace..."
                    className="w-56 bg-zinc-900/90 text-sm text-zinc-100 placeholder-zinc-500 px-3 py-1.5 rounded-full border border-[#D4AF37]/50 focus:outline-none focus:border-[#D4AF37]"
                    autoFocus
                  />
                  <button 
                    type="button" 
                    onClick={() => setSearchOpen(false)}
                    className="p-1.5 ml-1 text-zinc-400 hover:text-white"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  className="p-2 text-zinc-300 hover:text-[#D4AF37] transition-colors"
                  aria-label="Search wigs"
                >
                  <Search className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Wishlist Button */}
            <button
              onClick={() => setIsWishlistOpen(true)}
              className="p-2 text-zinc-300 hover:text-[#D4AF37] transition-colors relative"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlist.length > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 text-[10px] font-bold bg-[#D4AF37] text-black rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Shopping Cart Drawer Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2 bg-[#121212] hover:bg-[#1C1C1C] text-zinc-100 hover:text-[#D4AF37] border border-[#D4AF37]/40 px-3.5 py-2 rounded-full transition-all group"
              aria-label="Shopping Cart"
            >
              <div className="relative">
                <ShoppingBag className="w-4 h-4 text-[#D4AF37]" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1.5 -right-2 w-4 h-4 text-[10px] font-bold bg-[#D4AF37] text-black rounded-full flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline text-xs font-semibold tracking-wider uppercase">
                Bag
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Search Bar Expandable */}
        {searchOpen && (
          <div className="lg:hidden px-4 pt-3 pb-2 border-t border-zinc-800 bg-[#0A0A0A]">
            <form onSubmit={handleSearchSubmit} className="flex items-center gap-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search wigs, textures, colors..."
                className="w-full bg-zinc-900 text-sm text-zinc-100 placeholder-zinc-500 px-3 py-2 rounded-lg border border-[#D4AF37]/40 focus:outline-none"
              />
              <button
                type="submit"
                className="px-3 py-2 bg-[#D4AF37] text-black font-semibold text-xs uppercase tracking-wider rounded-lg shrink-0"
              >
                Search
              </button>
            </form>
          </div>
        )}

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#D4AF37]/20 bg-[#0B0B0B] px-6 py-6 space-y-4 animate-fade-in shadow-2xl">
            <div className="flex flex-col space-y-3 text-sm tracking-wider uppercase font-medium">
              <a
                href="#collections"
                onClick={(e) => { e.preventDefault(); handleNavClick('#collections'); }}
                className="py-2 text-zinc-200 hover:text-[#D4AF37] border-b border-zinc-800/60"
              >
                Shop Collections
              </a>
              <a
                href="#products"
                onClick={(e) => { e.preventDefault(); handleNavClick('#products'); }}
                className="py-2 text-zinc-200 hover:text-[#D4AF37] border-b border-zinc-800/60"
              >
                Featured Wigs
              </a>
              <a
                href="#why-us"
                onClick={(e) => { e.preventDefault(); handleNavClick('#why-us'); }}
                className="py-2 text-zinc-200 hover:text-[#D4AF37] border-b border-zinc-800/60"
              >
                Why Adams Hair
              </a>
              <a
                href="#about"
                onClick={(e) => { e.preventDefault(); handleNavClick('#about'); }}
                className="py-2 text-zinc-200 hover:text-[#D4AF37] border-b border-zinc-800/60"
              >
                About Our Atelier
              </a>
              <a
                href="#reviews"
                onClick={(e) => { e.preventDefault(); handleNavClick('#reviews'); }}
                className="py-2 text-zinc-200 hover:text-[#D4AF37] border-b border-zinc-800/60"
              >
                Customer Reviews
              </a>
              <a
                href="#faq"
                onClick={(e) => { e.preventDefault(); handleNavClick('#faq'); }}
                className="py-2 text-zinc-200 hover:text-[#D4AF37] border-b border-zinc-800/60"
              >
                Care & FAQ
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
                className="py-2 text-[#D4AF37] font-semibold"
              >
                Contact & Custom Inquiries
              </a>
            </div>

            <div className="pt-4 border-t border-zinc-800 space-y-3">
              <button
                onClick={() => { setMobileMenuOpen(false); setIsWigFinderOpen(true); }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-black font-semibold text-xs tracking-wider uppercase rounded-md shadow-md"
              >
                <Sparkles className="w-4 h-4" />
                Find My Wig (60s Quiz)
              </button>
              <button
                onClick={() => { setMobileMenuOpen(false); setIsSizeGuideOpen(true); }}
                className="w-full flex items-center justify-center gap-2 py-2 px-4 border border-zinc-700 text-zinc-300 text-xs tracking-wider uppercase rounded-md hover:border-[#D4AF37]"
              >
                <Ruler className="w-4 h-4" />
                Head Sizing Guide
              </button>
              <div className="pt-2 text-center text-xs text-zinc-400">
                <span>Direct Concierge: </span>
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-[#D4AF37] hover:underline font-medium">
                  {COMPANY_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
