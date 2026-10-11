import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/company';
import { useShop } from '../context/ShopContext';
import { 
  Sparkles, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  Share2, 
  ShieldCheck, 
  Check, 
  Lock 
} from 'lucide-react';
import { InstagramIcon, TikTokIcon, YouTubeIcon, PinterestIcon } from './SocialIcons';


export const Footer = () => {
  const { setSelectedCategory, setActivePolicy, setIsSizeGuideOpen, showToast } = useShop();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !newsletterEmail.includes('@')) {
      showToast('Please provide a valid email address.', 'info');
      return;
    }
    setSubscribed(true);
    showToast('Welcome to the Adams Hair Circle! Your $30 welcome code is on its way.');
  };

  const handleNavClick = (href, category = null) => {
    if (category) {
      setSelectedCategory(category);
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#050505] border-t border-zinc-800 text-zinc-400 text-xs">
      
      {/* Newsletter VIP Banner */}
      <div className="border-b border-zinc-800/80 py-12 bg-gradient-to-b from-[#080808] to-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center md:text-left max-w-xl">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Adams Hair Circle</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                Receive $30 Toward Your First Luxury Wig
              </h3>
              <p className="text-zinc-400 font-light text-xs sm:text-sm">
                Join our private collector's list for early access to limited hair drops, secret sales, and wig care masterclasses.
              </p>
            </div>

            <div className="w-full md:w-auto">
              {subscribed ? (
                <div className="flex items-center gap-2 text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-5 py-3 rounded-lg text-sm">
                  <Check className="w-4 h-4" />
                  <span>You're on the list! Check your inbox for code <strong>ADAMS30</strong>.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2.5 max-w-md w-full">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    className="bg-zinc-900 border border-zinc-700 text-zinc-100 placeholder-zinc-500 text-xs px-4 py-3 rounded-lg focus:outline-none focus:border-[#D4AF37] w-full sm:w-72"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-[#D4AF37] hover:bg-[#E6CA65] text-black font-bold text-xs uppercase tracking-wider rounded-lg transition-all shrink-0 cursor-pointer shadow-md"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="inline-block">
              <span className="font-serif tracking-[0.25em] text-2xl font-bold uppercase text-[#FAF5E8] block">
                ADAMS HAIR
              </span>
              <span className="text-[10px] tracking-[0.45em] text-[#D4AF37] font-semibold uppercase block -mt-1">
                HAIR WIGS • LUXURY ATELIER
              </span>
            </a>
            
            <p className="text-zinc-400 text-xs leading-relaxed max-w-sm font-light">
              Crafted for confidence. Discover premium virgin human hair wigs, invisible HD Swiss lace, and custom tailored hairpieces designed to celebrate your unique beauty.
            </p>

            <div className="space-y-1.5 text-xs text-zinc-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="hover:text-[#D4AF37] transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-[#D4AF37] transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37] mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={COMPANY_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 hover:border-[#D4AF37] text-zinc-300 hover:text-[#D4AF37] flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={COMPANY_INFO.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 hover:border-[#D4AF37] text-zinc-300 hover:text-[#D4AF37] flex items-center justify-center transition-all"
                aria-label="TikTok"
              >
                <TikTokIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={COMPANY_INFO.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 hover:border-[#D4AF37] text-zinc-300 hover:text-[#D4AF37] flex items-center justify-center transition-all"
                aria-label="YouTube"
              >
                <YouTubeIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={COMPANY_INFO.socials.pinterest}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 hover:border-[#D4AF37] text-zinc-300 hover:text-[#D4AF37] flex items-center justify-center transition-all"
                aria-label="Pinterest"
              >
                <PinterestIcon className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Column 1: Collections */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#FAF5E8]">
              Collections
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => handleNavClick('#products', 'Human Hair')}
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Human Hair Wigs
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('#products', 'Lace Front')}
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Lace Front Wigs
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('#products', 'Glueless')}
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Glueless Wigs
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('#products', 'Curly')}
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Curly & Wavy Wigs
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('#products', 'Straight')}
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Bone Straight Wigs
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('#products', 'Custom')}
                  className="hover:text-[#D4AF37] transition-colors text-[#D4AF37]"
                >
                  Custom Bespoke Wigs
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#FAF5E8]">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('#about'); }} className="hover:text-[#D4AF37] transition-colors">
                  About Our Brand
                </a>
              </li>
              <li>
                <a href="#why-us" onClick={(e) => { e.preventDefault(); handleNavClick('#why-us'); }} className="hover:text-[#D4AF37] transition-colors">
                  Why Choose Adams
                </a>
              </li>
              <li>
                <a href="#products" onClick={(e) => { e.preventDefault(); handleNavClick('#products'); }} className="hover:text-[#D4AF37] transition-colors">
                  Featured Catalog
                </a>
              </li>
              <li>
                <a href="#reviews" onClick={(e) => { e.preventDefault(); handleNavClick('#reviews'); }} className="hover:text-[#D4AF37] transition-colors">
                  Customer Testimonials
                </a>
              </li>
              <li>
                <a href="#faq" onClick={(e) => { e.preventDefault(); handleNavClick('#faq'); }} className="hover:text-[#D4AF37] transition-colors">
                  Care & FAQ
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }} className="hover:text-[#D4AF37] transition-colors">
                  Contact & Studio
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Customer Care & Policy Links as required */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#FAF5E8]">
              Client Care & Policies
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => setIsSizeGuideOpen(true)}
                  className="hover:text-[#D4AF37] transition-colors text-left"
                >
                  Head Sizing Guide
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActivePolicy('shipping')}
                  className="hover:text-[#D4AF37] transition-colors text-left"
                >
                  Shipping & Tracking Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActivePolicy('returns')}
                  className="hover:text-[#D4AF37] transition-colors text-left"
                >
                  Returns & Exchange Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActivePolicy('privacy')}
                  className="hover:text-[#D4AF37] transition-colors text-left"
                >
                  Privacy & Data Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActivePolicy('terms')}
                  className="hover:text-[#D4AF37] transition-colors text-left"
                >
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Payment Badges & Copyright */}
        <div className="mt-14 pt-8 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs text-zinc-500 text-center sm:text-left">
            © {new Date().getFullYear()} Adams Hair Wigs. All rights reserved. Confidence begins with the perfect hair.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 text-[11px] text-zinc-400">
            <span className="flex items-center gap-1 text-zinc-300">
              <Lock className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>256-Bit SSL Encrypted</span>
            </span>
            <span className="text-zinc-700">•</span>
            <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">Visa</span>
            <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">Mastercard</span>
            <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">Amex</span>
            <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">Apple Pay</span>
            <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">PayPal</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
