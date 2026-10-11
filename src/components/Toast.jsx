import React from 'react';
import { useShop } from '../context/ShopContext';
import { CheckCircle, Info, Sparkles } from 'lucide-react';

export const Toast = () => {
  const { toast } = useShop();

  if (!toast.show) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 bg-[#141414] border border-[#D4AF37]/60 text-[#FDFBF7] rounded-lg shadow-2xl shadow-black/80 backdrop-blur-md animate-fade-in transition-all">
      {toast.type === 'info' ? (
        <Info className="w-5 h-5 text-[#D4AF37] shrink-0" />
      ) : (
        <Sparkles className="w-5 h-5 text-[#D4AF37] shrink-0" />
      )}
      <span className="text-sm font-medium tracking-wide">{toast.message}</span>
    </div>
  );
};
