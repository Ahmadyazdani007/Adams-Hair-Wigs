import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/company';
import { useShop } from '../context/ShopContext';
import { 
  Sparkles, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  Share2 
} from 'lucide-react';
import { InstagramIcon, TikTokIcon, YouTubeIcon, PinterestIcon } from './SocialIcons';


export const ContactSection = () => {
  const { showToast } = useShop();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceInterest: 'Ready-to-Wear Glueless Unit',
    lengthPreference: '22 - 26 inch',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      showToast('Please fill out your name, email, and message.', 'info');
      return;
    }

    setSubmitted(true);
    showToast('Inquiry sent successfully! An Adams Hair specialist will contact you shortly.');
  };

  const getCustomWhatsAppUrl = () => {
    const text = `Hello Adams Hair Wigs,\n\nI would like to consult with a specialist:\n• Name: ${formData.name || 'Guest'}\n• Interest: ${formData.serviceInterest}\n• Preferred Length: ${formData.lengthPreference}\n• Inquiry: ${formData.message || 'I have a question regarding wig fitting and ordering.'}`;
    return `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#080808] border-b border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Atelier Inquiries & Support</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#FDFBF7] tracking-tight">
            Contact & Custom Consultations
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto"></div>
          <p className="text-zinc-400 text-sm sm:text-base font-light">
            Whether you need assistance choosing the right lace tint, custom cap measurements, or wish to commission a bespoke unit, our team is at your service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Business Details & Contact Placeholders */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="bg-[#121212] border border-zinc-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold block">
                  Get In Touch
                </span>
                <h3 className="text-2xl font-serif font-bold text-white mt-1">
                  Adams Hair Concierge
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Editable business contacts and showroom locations:
                </p>
              </div>

              {/* Editable Business Contact Placeholders */}
              <div className="space-y-4 pt-2 border-t border-zinc-800 text-xs">
                
                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#D4AF37] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-zinc-500 block text-[10px] uppercase tracking-wider">Business Phone Number</span>
                    <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-zinc-200 hover:text-[#D4AF37] font-medium text-sm transition-colors">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#D4AF37] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-zinc-500 block text-[10px] uppercase tracking-wider">Business Email</span>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-zinc-200 hover:text-[#D4AF37] font-medium text-sm transition-colors">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                {/* WhatsApp Contact */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-zinc-500 block text-[10px] uppercase tracking-wider">WhatsApp Concierge</span>
                    <a 
                      href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent('Hello Adams Hair Wigs, I would like to inquire about your wigs.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:text-emerald-300 font-semibold text-sm transition-colors"
                    >
                      {COMPANY_INFO.whatsappNumber} (Direct Chat)
                    </a>
                  </div>
                </div>

                {/* Studio Showroom Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#D4AF37] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-zinc-500 block text-[10px] uppercase tracking-wider">Studio & Showroom Address</span>
                    <p className="text-zinc-300 font-medium">
                      {COMPANY_INFO.address}
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#D4AF37] shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-zinc-500 block text-[10px] uppercase tracking-wider">Consultation Hours</span>
                    <p className="text-zinc-300">
                      {COMPANY_INFO.hours}
                    </p>
                  </div>
                </div>

              </div>

              {/* Social Media Links Placeholder */}
              <div className="pt-4 border-t border-zinc-800 space-y-2">
                <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-semibold block">
                  Follow Our Hair Transformations
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={COMPANY_INFO.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-[#D4AF37] text-zinc-300 hover:text-[#D4AF37] flex items-center justify-center transition-all"
                    aria-label="Instagram"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={COMPANY_INFO.socials.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-[#D4AF37] text-zinc-300 hover:text-[#D4AF37] flex items-center justify-center transition-all"
                    aria-label="TikTok"
                  >
                    <TikTokIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={COMPANY_INFO.socials.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-[#D4AF37] text-zinc-300 hover:text-[#D4AF37] flex items-center justify-center transition-all"
                    aria-label="YouTube"
                  >
                    <YouTubeIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={COMPANY_INFO.socials.pinterest}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-[#D4AF37] text-zinc-300 hover:text-[#D4AF37] flex items-center justify-center transition-all"
                    aria-label="Pinterest"
                  >
                    <PinterestIcon className="w-4 h-4" />
                  </a>
                </div>

              </div>

            </div>

            {/* Instant WhatsApp Quick Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-950/40 via-zinc-900 to-zinc-950 border border-emerald-500/30 shadow-xl space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs uppercase tracking-wider">
                <MessageCircle className="w-4 h-4" />
                <span>Prefer Instant Messaging?</span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Connect directly with our hair colorists and master stylists via WhatsApp for live photos, video lace demos, and instant quotes.
              </p>
              <a
                href={getCustomWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-all shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat Now via WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#121212] border border-zinc-800 rounded-2xl p-6 sm:p-10 shadow-2xl relative">
              
              {submitted ? (
                <div className="py-16 text-center space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-white">
                    Thank You, {formData.name}!
                  </h3>
                  <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                    Your inquiry has been received. Our dedicated wig concierge will review your preferences and get back to you at <strong className="text-[#D4AF37]">{formData.email}</strong> within 12–24 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        serviceInterest: 'Ready-to-Wear Glueless Unit',
                        lengthPreference: '22 - 26 inch',
                        message: ''
                      });
                    }}
                    className="mt-4 px-6 py-2.5 bg-zinc-800 hover:bg-[#D4AF37] text-zinc-200 hover:text-black text-xs uppercase tracking-wider font-semibold rounded-lg transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold block">
                      Send a Message
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-white mt-1">
                      Wig Inquiry & Bespoke Request
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1 font-light">
                      Please tell us what style or custom service you are interested in.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs text-zinc-300 font-medium block">
                        Full Name <span className="text-[#D4AF37]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Lauren Taylor"
                        className="w-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-100 placeholder-zinc-500 px-3.5 py-3 rounded-lg focus:outline-none focus:border-[#D4AF37] transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs text-zinc-300 font-medium block">
                        Email Address <span className="text-[#D4AF37]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. lauren@example.com"
                        className="w-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-100 placeholder-zinc-500 px-3.5 py-3 rounded-lg focus:outline-none focus:border-[#D4AF37] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label className="text-xs text-zinc-300 font-medium block">
                        Phone / WhatsApp (Optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +1 (555) 000-0000"
                        className="w-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-100 placeholder-zinc-500 px-3.5 py-3 rounded-lg focus:outline-none focus:border-[#D4AF37] transition-colors"
                      />
                    </div>

                    {/* Service Interest */}
                    <div className="space-y-1.5">
                      <label className="text-xs text-zinc-300 font-medium block">
                        Category of Interest
                      </label>
                      <select
                        value={formData.serviceInterest}
                        onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                        className="w-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-200 px-3.5 py-3 rounded-lg focus:outline-none focus:border-[#D4AF37] transition-colors"
                      >
                        <option value="Ready-to-Wear Glueless Unit">Ready-to-Wear Glueless Unit</option>
                        <option value="HD Lace Frontal Wig">HD Lace Frontal Wig</option>
                        <option value="Bespoke Custom Made Unit">Bespoke Custom Made Unit</option>
                        <option value="Curly & Textured Collection">Curly & Textured Collection</option>
                        <option value="Bone Straight Silky Unit">Bone Straight Silky Unit</option>
                        <option value="Cap Sizing & Shade Matching Advice">Cap Sizing & Shade Matching Advice</option>
                      </select>
                    </div>
                  </div>

                  {/* Length Preference */}
                  <div className="space-y-1.5">
                    <label className="text-xs text-zinc-300 font-medium block">
                      Desired Length Range
                    </label>
                    <select
                      value={formData.lengthPreference}
                      onChange={(e) => setFormData({ ...formData, lengthPreference: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-200 px-3.5 py-3 rounded-lg focus:outline-none focus:border-[#D4AF37] transition-colors"
                    >
                      <option value="10 - 14 inch (Bob / Shoulder)">10 - 14 inch (Bob / Shoulder)</option>
                      <option value="16 - 20 inch (Mid-Length Natural)">16 - 20 inch (Mid-Length Natural)</option>
                      <option value="22 - 26 inch (Glamour Length)">22 - 26 inch (Glamour Length)</option>
                      <option value="28 - 34 inch (Dramatic Luxury)">28 - 34 inch (Dramatic Luxury)</option>
                      <option value="Not sure yet, need recommendation">Not sure yet, need recommendation</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs text-zinc-300 font-medium block">
                      Your Message or Style Notes <span className="text-[#D4AF37]">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Include any specific details such as head circumference, preferred part (middle or side), skin tone for lace tinting, or delivery deadline..."
                      className="w-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-100 placeholder-zinc-500 px-3.5 py-3 rounded-lg focus:outline-none focus:border-[#D4AF37] transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-[#D4AF37] via-[#E0C170] to-[#C5A059] text-black font-bold text-xs uppercase tracking-[0.2em] rounded-lg transition-all shadow-xl hover:shadow-[#D4AF37]/30 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiries to Adams Hair</span>
                  </button>

                  <p className="text-[11px] text-zinc-500 text-center">
                    We respect your privacy. Your information is never sold or shared.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
