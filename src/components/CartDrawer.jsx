import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { COMPANY_INFO } from '../data/company';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  MessageCircle, 
  Truck, 
  Tag, 
  Check, 
  Lock 
} from 'lucide-react';

export const CartDrawer = () => {
  const { 
    cart, 
    isCartOpen, 
    setIsCartOpen, 
    removeFromCart, 
    updateQuantity, 
    clearCart,
    cartSubtotal, 
    isFreeShipping, 
    amountToFreeShipping, 
    freeShippingThreshold,
    showToast 
  } = useShop();

  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [discountCodeApplied, setDiscountCodeApplied] = useState('');
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

  // Checkout modal form state
  const [checkoutData, setCheckoutData] = useState({
    fullName: '',
    email: '',
    phone: '',
    shippingAddress: '',
    city: '',
    postalCode: '',
    country: 'United States',
    notes: ''
  });
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  if (!isCartOpen) return null;

  const handleApplyPromo = (e) => {
    e.preventDefault();
    const code = promoCode.trim().toUpperCase();
    if (code === 'ADAMS10' || code === 'LUXURY10') {
      setDiscountPercent(10);
      setDiscountCodeApplied(code);
      showToast('Promo code applied! 10% discount added.');
    } else if (code === 'ADAMS30') {
      setDiscountPercent(12);
      setDiscountCodeApplied(code);
      showToast('VIP Circle code applied! $30 equivalent discount added.');
    } else {
      showToast('Invalid promo code. Try "ADAMS10".', 'info');
    }
  };

  const discountAmount = Math.round((cartSubtotal * discountPercent) / 100);
  const finalTotal = Math.max(0, cartSubtotal - discountAmount);

  // Pre-filled WhatsApp Order URL
  const getWhatsAppOrderUrl = () => {
    const itemsList = cart.map(item => 
      `• ${item.quantity}x ${item.name} (${item.length}, ${item.color}, Cap: ${item.capSize}) - $${item.unitPrice * item.quantity}`
    ).join('\n');

    const msg = `Hello Adams Hair Wigs,\n\nI would like to place an order with the following bag details:\n\n${itemsList}\n\nSubtotal: $${cartSubtotal}\n${discountPercent > 0 ? `Discount (${discountCodeApplied}): -$${discountAmount}\n` : ''}Final Total: $${finalTotal}\nShipping: Complimentary Express\n\nName: ${checkoutData.fullName || 'Guest'}\nDelivery: ${checkoutData.shippingAddress || 'To be specified'}\n\nPlease confirm availability and provide secure payment link. Thank you!`;

    return `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(msg)}`;
  };

  const handleProcessOrderRequest = (e) => {
    e.preventDefault();
    if (!checkoutData.fullName.trim() || !checkoutData.email.trim() || !checkoutData.shippingAddress.trim()) {
      showToast('Please provide your name, email, and shipping address.', 'info');
      return;
    }
    setOrderConfirmed(true);
    showToast('Order request submitted successfully!');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fade-in">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#121212] border-l border-[#D4AF37]/40 shadow-2xl flex flex-col justify-between">
          
          {/* Cart Header */}
          <div className="p-6 border-b border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-[#D4AF37]" />
              <h3 className="text-lg font-serif font-bold text-white tracking-wide">
                Your Shopping Bag ({cart.length})
              </h3>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Meter */}
          <div className="px-6 py-3 bg-zinc-950/80 border-b border-zinc-800/80 text-xs">
            {isFreeShipping ? (
              <div className="flex items-center gap-2 text-emerald-400 font-medium">
                <Truck className="w-4 h-4 shrink-0" />
                <span>You've unlocked Complimentary Worldwide Express Shipping!</span>
              </div>
            ) : (
              <div className="space-y-1.5">
                <div className="flex justify-between text-zinc-300">
                  <span>Add <strong className="text-[#D4AF37]">${amountToFreeShipping}</strong> more for free express shipping:</span>
                </div>
                <div className="w-full bg-zinc-900 h-1.5 rounded-full overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-[#D4AF37] to-[#FAF5E8] h-full transition-all duration-500"
                    style={{ width: `${Math.min(100, (cartSubtotal / freeShippingThreshold) * 100)}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-20 space-y-4">
                <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mx-auto text-zinc-500">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <p className="text-base font-serif text-zinc-300">Your shopping bag is currently empty.</p>
                <p className="text-xs text-zinc-500 max-w-xs mx-auto">
                  Explore our curated collections of 100% Remy virgin human hair wigs.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-2.5 bg-[#D4AF37] text-black text-xs font-bold uppercase tracking-wider rounded-lg"
                >
                  Start Exploring
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div 
                  key={item.id}
                  className="flex gap-4 p-3 bg-zinc-950/60 rounded-xl border border-zinc-800/80"
                >
                  {/* Thumbnail */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-24 object-cover rounded-lg border border-zinc-800 shrink-0"
                  />

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="text-xs font-serif font-bold text-white line-clamp-1 pr-2">
                          {item.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-zinc-500 hover:text-red-400 p-0.5"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="text-[11px] text-zinc-400 space-y-0.5 mt-1">
                        <div>Length: <span className="text-zinc-200">{item.length}</span></div>
                        <div>Color: <span className="text-zinc-200">{item.color}</span></div>
                        <div>Cap: <span className="text-zinc-200">{item.capSize}</span></div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-zinc-900">
                      <div className="flex items-center gap-2 bg-zinc-900 px-2 py-1 rounded border border-zinc-800">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="text-zinc-400 hover:text-white"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold text-white px-1">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="text-zinc-400 hover:text-white"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="text-sm font-serif font-bold text-[#D4AF37]">
                        ${item.unitPrice * item.quantity}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Cart Footer */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-zinc-800 bg-[#0E0E0E] space-y-4">
              
              {/* Promo code form */}
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Promo code (e.g. ADAMS10)"
                  className="bg-zinc-900 border border-zinc-800 text-xs text-zinc-100 placeholder-zinc-500 px-3 py-2 rounded-lg flex-1 focus:outline-none focus:border-[#D4AF37]"
                />
                <button
                  type="submit"
                  className="px-3 py-2 bg-zinc-800 hover:bg-[#D4AF37] text-zinc-200 hover:text-black text-xs font-bold uppercase rounded-lg transition-colors shrink-0"
                >
                  Apply
                </button>
              </form>

              {/* Price Calculations */}
              <div className="space-y-1.5 text-xs text-zinc-300">
                <div className="flex justify-between">
                  <span>Bag Subtotal</span>
                  <span>${cartSubtotal}</span>
                </div>
                {discountPercent > 0 && (
                  <div className="flex justify-between text-[#D4AF37]">
                    <span>Discount ({discountCodeApplied} - {discountPercent}%)</span>
                    <span>-${discountAmount}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Insured Express Shipping</span>
                  <span className="text-emerald-400 font-medium">
                    {isFreeShipping ? 'FREE' : '$25'}
                  </span>
                </div>
                <div className="flex justify-between pt-2 border-t border-zinc-800 text-sm font-serif font-bold text-white">
                  <span>Estimated Total</span>
                  <span className="text-[#D4AF37]">
                    ${isFreeShipping ? finalTotal : finalTotal + 25}
                  </span>
                </div>
              </div>

              {/* Checkout Trigger */}
              <button
                onClick={() => setIsCheckoutModalOpen(true)}
                className="w-full py-3.5 bg-gradient-to-r from-[#D4AF37] to-[#C5A059] hover:from-[#E0C170] hover:to-[#D4AF37] text-black font-bold text-xs uppercase tracking-widest rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <div className="text-[10px] text-zinc-500 text-center flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Secure SSL Checkout & WhatsApp Order Available</span>
              </div>

            </div>
          )}

        </div>
      </div>

      {/* Checkout Preview / Order Confirmation Modal */}
      {isCheckoutModalOpen && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in">
          <div className="bg-[#141414] border border-[#D4AF37]/50 rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-6 relative shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => { setIsCheckoutModalOpen(false); setOrderConfirmed(false); }}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white p-1"
              aria-label="Close checkout"
            >
              <X className="w-5 h-5" />
            </button>

            {orderConfirmed ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-white">
                  Order Received!
                </h3>
                <p className="text-xs text-zinc-300 leading-relaxed max-w-sm mx-auto">
                  Thank you, <strong>{checkoutData.fullName}</strong>. To ensure exact cap sizing and flawless hairline construction, an Adams Hair specialist has received your specifications.
                </p>

                <div className="p-4 bg-zinc-900 rounded-xl border border-zinc-800 text-left text-xs space-y-1 text-zinc-400">
                  <div className="text-white font-semibold mb-1">What Happens Next:</div>
                  <div>1. Order verification sent to <strong>{checkoutData.email}</strong>.</div>
                  <div>2. Secure payment link (Stripe / Apple Pay / Wire) issued.</div>
                  <div>3. Tracking details provided once unit is inspected and dispatched.</div>
                </div>

                <div className="pt-2">
                  <a
                    href={getWhatsAppOrderUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Confirm Instantly via WhatsApp</span>
                  </a>
                </div>

                <button
                  onClick={() => {
                    clearCart();
                    setIsCheckoutModalOpen(false);
                    setIsCartOpen(false);
                  }}
                  className="w-full py-2.5 border border-zinc-700 text-zinc-300 text-xs uppercase tracking-wider rounded-lg"
                >
                  Return to Home
                </button>
              </div>
            ) : (
              <form onSubmit={handleProcessOrderRequest} className="space-y-4">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold block">
                    Secure Order Checkout
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-white mt-1">
                    Complete Your Hairpiece Order
                  </h3>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Total: <strong className="text-[#D4AF37]">${finalTotal}</strong> ({cart.length} item{cart.length > 1 ? 's' : ''})
                  </p>
                </div>

                {/* Instant WhatsApp Order Alternative */}
                <div className="p-3.5 bg-emerald-950/40 rounded-xl border border-emerald-500/40 flex items-center justify-between gap-3">
                  <div className="text-xs">
                    <span className="text-emerald-400 font-bold block">Prefer WhatsApp Checkout?</span>
                    <span className="text-zinc-300 text-[11px]">Send cart directly to our specialist.</span>
                  </div>
                  <a
                    href={getWhatsAppOrderUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold uppercase tracking-wider rounded-lg shrink-0 flex items-center gap-1"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp Order</span>
                  </a>
                </div>

                <div className="text-xs font-semibold uppercase text-zinc-400 pt-1 tracking-wider">
                  Or enter your shipping details:
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs text-zinc-300 font-medium">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={checkoutData.fullName}
                      onChange={(e) => setCheckoutData({ ...checkoutData, fullName: e.target.value })}
                      placeholder="e.g. Jessica Williams"
                      className="w-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-100 p-2.5 rounded-lg focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs text-zinc-300 font-medium">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={checkoutData.email}
                      onChange={(e) => setCheckoutData({ ...checkoutData, email: e.target.value })}
                      placeholder="e.g. jessica@example.com"
                      className="w-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-100 p-2.5 rounded-lg focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs text-zinc-300 font-medium">Phone Number</label>
                    <input
                      type="tel"
                      value={checkoutData.phone}
                      onChange={(e) => setCheckoutData({ ...checkoutData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-100 p-2.5 rounded-lg focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs text-zinc-300 font-medium">Country</label>
                    <input
                      type="text"
                      value={checkoutData.country}
                      onChange={(e) => setCheckoutData({ ...checkoutData, country: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-100 p-2.5 rounded-lg focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-zinc-300 font-medium">Shipping Address *</label>
                  <input
                    type="text"
                    required
                    value={checkoutData.shippingAddress}
                    onChange={(e) => setCheckoutData({ ...checkoutData, shippingAddress: e.target.value })}
                    placeholder="Street Address, Apartment or Suite"
                    className="w-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-100 p-2.5 rounded-lg focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs text-zinc-300 font-medium">City</label>
                    <input
                      type="text"
                      value={checkoutData.city}
                      onChange={(e) => setCheckoutData({ ...checkoutData, city: e.target.value })}
                      placeholder="e.g. New York"
                      className="w-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-100 p-2.5 rounded-lg focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs text-zinc-300 font-medium">Postal / ZIP</label>
                    <input
                      type="text"
                      value={checkoutData.postalCode}
                      onChange={(e) => setCheckoutData({ ...checkoutData, postalCode: e.target.value })}
                      placeholder="10001"
                      className="w-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-100 p-2.5 rounded-lg focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#D4AF37] hover:bg-[#E6CA65] text-black font-bold text-xs uppercase tracking-wider rounded-lg transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Submit Order & Request Secure Invoice</span>
                </button>

                <p className="text-[10px] text-zinc-500 text-center">
                  * Adams Hair Wigs structures luxury orders with personalized cap verification before finalizing charges.
                </p>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
