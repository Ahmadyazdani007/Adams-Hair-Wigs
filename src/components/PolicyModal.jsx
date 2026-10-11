import React from 'react';
import { useShop } from '../context/ShopContext';
import { X, ShieldCheck, Truck, RotateCcw, FileText } from 'lucide-react';

export const PolicyModal = () => {
  const { activePolicy, setActivePolicy } = useShop();

  if (!activePolicy) return null;

  const contentMap = {
    shipping: {
      title: "Shipping, Insurance & Delivery Policy",
      icon: Truck,
      subtitle: "Insured door-to-door worldwide courier delivery",
      text: [
        "Processing Time: In-stock ready-to-wear glueless wigs and closures ship within 24 to 48 business hours. Each unit passes a multi-point quality inspection before sealing in luxury protective packaging.",
        "Custom & Bespoke Lead Times: Custom colored balayage units and made-to-measure bespoke units require 7 to 12 business days for artisanal hand-knotting, custom toning, and ventilation.",
        "Delivery Rates: Complimentary express courier shipping applies to all orders exceeding $250. Standard insured shipping for smaller accessories is a flat rate of $25.",
        "Signature & Tracking: All shipments require direct adult signature upon delivery to prevent package loss. A live FedEx/DHL tracking number is emailed immediately upon courier collection."
      ]
    },
    returns: {
      title: "14-Day Return & Exchange Policy",
      icon: RotateCcw,
      subtitle: "Uncompromising hygiene standards & client satisfaction",
      text: [
        "Eligibility Window: Items may be returned or exchanged within 14 calendar days from the confirmed delivery date.",
        "Hygiene & Condition: As human hair wigs are classified as intimate personal hygiene items, returned units must be in 100% brand new, unworn, and unwashed condition.",
        "Lace Integrity: The HD Swiss lace front MUST be completely uncut and unaltered. Any unit with cut lace, plucked hairline modifications, perfume scent, makeup tint, or bleached knots cannot be accepted for refund.",
        "Custom Commissions: Bespoke units built to custom head scans or individualized dye formulations are custom-tailored for a specific individual and are non-refundable; however, we provide complimentary fitting adjustment services."
      ]
    },
    privacy: {
      title: "Privacy & Personal Data Policy",
      icon: ShieldCheck,
      subtitle: "Your personal details and styling preferences are protected",
      text: [
        "Data Collection: We collect only necessary contact information (name, shipping address, email, phone number) and styling specifications to fulfill orders and provide tailored concierge support.",
        "Data Protection: We utilize 256-bit SSL bank-grade encryption across our platform. Payment information is securely processed through PCI-compliant gateways; Adams Hair Wigs never stores raw credit card details.",
        "No Third-Party Sharing: We will never sell, rent, or trade your personal information to third-party advertisers.",
        "Account Rights: You may request the deletion or export of your client profile at any time by contacting concierge@adamshairwigs.com."
      ]
    },
    terms: {
      title: "Terms & Conditions of Service",
      icon: FileText,
      subtitle: "Transparent client expectations and warranty guidelines",
      text: [
        "Authenticity Guarantee: Adams Hair Wigs guarantees 100% genuine virgin human hair strands for all labeled units with zero synthetic blend adulteration.",
        "Color Representation: While we photograph our wigs in controlled editorial studio lighting, minor perceptual differences may occur across individual phone and monitor calibration displays.",
        "Heat Styling: Virgin human hair units may be heat styled up to 450°F (230°C); thermal protectant is recommended to maintain moisture integrity.",
        "Customer Consultations: Our video and WhatsApp consultations are complimentary advisory services to guide your selection."
      ]
    }
  };

  const current = contentMap[activePolicy] || contentMap.shipping;
  const Icon = current.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="bg-[#141414] border border-[#D4AF37]/50 rounded-2xl max-w-xl w-full p-6 sm:p-8 space-y-6 relative shadow-2xl my-auto">
        
        {/* Close Button */}
        <button
          onClick={() => setActivePolicy(null)}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white p-1"
          aria-label="Close policy"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-[#D4AF37] text-xs font-semibold uppercase tracking-widest">
            <Icon className="w-4 h-4" />
            <span>Adams Hair Official Terms</span>
          </div>
          <h3 className="text-2xl font-serif font-bold text-white">
            {current.title}
          </h3>
          <p className="text-xs text-zinc-400">
            {current.subtitle}
          </p>
        </div>

        {/* Body */}
        <div className="space-y-4 pt-2 border-t border-zinc-800 text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
          {current.text.map((paragraph, idx) => (
            <div key={idx} className="p-3 bg-zinc-900/60 rounded-xl border border-zinc-800">
              <p>{paragraph}</p>
            </div>
          ))}
        </div>

        {/* Close CTA */}
        <div className="pt-2 text-right">
          <button
            onClick={() => setActivePolicy(null)}
            className="px-6 py-2.5 bg-[#D4AF37] text-black font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
          >
            I Understand
          </button>
        </div>

      </div>
    </div>
  );
};
