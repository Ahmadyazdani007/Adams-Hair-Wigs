import React, { useState } from 'react';
import { REVIEWS, REVIEW_STATS } from '../data/reviews';
import { useShop } from '../context/ShopContext';
import { 
  Star, 
  CheckCircle2, 
  Sparkles, 
  MessageSquarePlus, 
  X, 
  Check, 
  Filter 
} from 'lucide-react';

export const CustomerReviews = () => {
  const { showToast } = useShop();
  const [reviewList, setReviewList] = useState(REVIEWS);
  const [selectedRatingFilter, setSelectedRatingFilter] = useState('all');
  const [isWriteReviewOpen, setIsWriteReviewOpen] = useState(false);

  // New review form state
  const [formData, setFormData] = useState({
    author: '',
    location: '',
    productName: '',
    rating: 5,
    title: '',
    comment: ''
  });

  const handleFilter = (rating) => {
    setSelectedRatingFilter(rating);
  };

  const filteredReviews = reviewList.filter(rev => {
    if (selectedRatingFilter === 'all') return true;
    return rev.rating === parseInt(selectedRatingFilter, 10);
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.author.trim() || !formData.comment.trim() || !formData.title.trim()) {
      showToast('Please fill out all required review fields.', 'info');
      return;
    }

    const newRev = {
      id: `rev-custom-${Date.now()}`,
      author: formData.author,
      location: formData.location || 'Verified Client',
      verifiedBuyer: true,
      rating: Number(formData.rating),
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      productName: formData.productName || 'Adams Hair Custom Unit',
      title: formData.title,
      comment: formData.comment,
      avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(formData.author)}&backgroundColor=121212&textColor=D4AF37`,
      tags: ['Verified Feedback']
    };

    setReviewList([newRev, ...reviewList]);
    setIsWriteReviewOpen(false);
    setFormData({
      author: '',
      location: '',
      productName: '',
      rating: 5,
      title: '',
      comment: ''
    });
    showToast('Thank you! Your verified review has been submitted.');
  };

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#080808] border-b border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Client Experiences</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#FDFBF7] tracking-tight">
            Customer Reviews
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto"></div>
          <p className="text-zinc-400 text-sm sm:text-base font-light">
            Read verified feedback from clients who have experienced our 100% Remy virgin human hair, glueless caps, and melted HD Swiss lace.
          </p>
        </div>

        {/* Rating Summary Bar */}
        <div className="bg-[#121212] border border-zinc-800 rounded-2xl p-6 sm:p-8 mb-12 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Big Score */}
            <div className="md:col-span-4 text-center md:text-left space-y-2 border-b md:border-b-0 md:border-r border-zinc-800 pb-6 md:pb-0 md:pr-6">
              <div className="text-5xl font-serif font-bold text-white flex items-baseline justify-center md:justify-start gap-2">
                <span>{REVIEW_STATS.averageRating}</span>
                <span className="text-lg font-sans text-zinc-500 font-normal">/ 5.0</span>
              </div>
              <div className="flex justify-center md:justify-start text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs text-zinc-400">
                Based on verified client feedback across ready-to-wear and bespoke commissions.
              </p>
            </div>

            {/* Middle Breakdown Bars */}
            <div className="md:col-span-5 space-y-2 text-xs text-zinc-300">
              <div className="flex items-center gap-3">
                <span className="w-12 text-zinc-400">5 Stars</span>
                <div className="flex-1 bg-zinc-900 h-2 rounded-full overflow-hidden border border-zinc-800">
                  <div className="bg-[#D4AF37] h-full" style={{ width: `${REVIEW_STATS.fiveStarPercentage}%` }}></div>
                </div>
                <span className="w-10 text-right text-zinc-400">{REVIEW_STATS.fiveStarPercentage}%</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-12 text-zinc-400">4 Stars</span>
                <div className="flex-1 bg-zinc-900 h-2 rounded-full overflow-hidden border border-zinc-800">
                  <div className="bg-[#D4AF37]/60 h-full" style={{ width: `${REVIEW_STATS.fourStarPercentage}%` }}></div>
                </div>
                <span className="w-10 text-right text-zinc-400">{REVIEW_STATS.fourStarPercentage}%</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-12 text-zinc-400">3 Stars</span>
                <div className="flex-1 bg-zinc-900 h-2 rounded-full overflow-hidden border border-zinc-800">
                  <div className="bg-[#D4AF37]/30 h-full" style={{ width: '0%' }}></div>
                </div>
                <span className="w-10 text-right text-zinc-500">0%</span>
              </div>
            </div>

            {/* Right Action: Write a Review */}
            <div className="md:col-span-3 text-center md:text-right">
              <button
                onClick={() => setIsWriteReviewOpen(true)}
                className="w-full sm:w-auto px-6 py-3 bg-[#1C1C1C] hover:bg-[#D4AF37] text-[#D4AF37] hover:text-black border border-[#D4AF37]/50 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer mx-auto md:ml-auto"
              >
                <MessageSquarePlus className="w-4 h-4" />
                <span>Write a Review</span>
              </button>
            </div>

          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2 text-xs">
            <span className="text-zinc-500 hidden sm:inline">Filter by:</span>
            <button
              onClick={() => handleFilter('all')}
              className={`px-3 py-1.5 rounded-full border text-xs transition-colors ${
                selectedRatingFilter === 'all' 
                  ? 'border-[#D4AF37] bg-[#D4AF37]/20 text-[#D4AF37] font-semibold' 
                  : 'border-zinc-800 text-zinc-400 hover:text-white'
              }`}
            >
              All Reviews
            </button>
            <button
              onClick={() => handleFilter('5')}
              className={`px-3 py-1.5 rounded-full border text-xs transition-colors ${
                selectedRatingFilter === '5' 
                  ? 'border-[#D4AF37] bg-[#D4AF37]/20 text-[#D4AF37] font-semibold' 
                  : 'border-zinc-800 text-zinc-400 hover:text-white'
              }`}
            >
              5 Star Reviews
            </button>
          </div>

          <span className="text-xs text-zinc-400">
            Showing {filteredReviews.length} verified testimonials
          </span>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#121212] border border-zinc-800/80 hover:border-[#D4AF37]/40 rounded-xl p-6 transition-all duration-300 flex flex-col justify-between space-y-4 hover:shadow-xl hover:shadow-[#D4AF37]/5"
            >
              <div className="space-y-3">
                {/* Review Header: User info & rating */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={rev.avatar}
                      alt={rev.author}
                      className="w-10 h-10 rounded-full object-cover border border-[#D4AF37]/30 bg-zinc-900"
                    />
                    <div>
                      <h4 className="text-sm font-semibold text-[#FAF5E8]">{rev.author}</h4>
                      <p className="text-[11px] text-zinc-500">{rev.location}</p>
                    </div>
                  </div>

                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Verified Buyer Badge & Item Purchased */}
                <div className="p-2 bg-zinc-950/60 rounded-md border border-zinc-800/80 flex items-center justify-between text-[11px]">
                  <span className="text-zinc-400 truncate max-w-[200px]" title={rev.productName}>
                    {rev.productName}
                  </span>
                  {rev.verifiedBuyer && (
                    <span className="flex items-center gap-1 text-emerald-400 font-medium shrink-0">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Verified Buyer</span>
                    </span>
                  )}
                </div>

                {/* Title and Feedback */}
                <div>
                  <h5 className="text-sm font-serif font-bold text-white mb-1.5">
                    "{rev.title}"
                  </h5>
                  <p className="text-xs text-zinc-300 leading-relaxed font-light">
                    {rev.comment}
                  </p>
                </div>
              </div>

              {/* Date & Tags */}
              <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[10px] text-zinc-500">
                <span>{rev.date}</span>
                <div className="flex gap-1.5">
                  {rev.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="bg-zinc-900 text-[#D4AF37] px-2 py-0.5 rounded border border-[#D4AF37]/20">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Write a Review Modal */}
      {isWriteReviewOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#141414] border border-[#D4AF37]/50 rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-5 relative shadow-2xl">
            <button
              onClick={() => setIsWriteReviewOpen(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white p-1"
              aria-label="Close review dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                Share Your Experience
              </span>
              <h3 className="text-2xl font-serif font-bold text-white">
                Submit Client Review
              </h3>
              <p className="text-xs text-zinc-400">
                Your genuine feedback helps fellow clients find the right wig silhouette.
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs text-zinc-300 font-medium">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    placeholder="e.g. Vanessa B."
                    className="w-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-100 p-2.5 rounded-lg focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-zinc-300 font-medium">City / Country</label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Chicago, IL"
                    className="w-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-100 p-2.5 rounded-lg focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs text-zinc-300 font-medium">Wig Model / Style Purchased</label>
                <input
                  type="text"
                  value={formData.productName}
                  onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                  placeholder="e.g. Aura Silk Bone Straight HD Glueless Unit"
                  className="w-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-100 p-2.5 rounded-lg focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs text-zinc-300 font-medium">Rating (1 to 5 Stars)</label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => setFormData({ ...formData, rating: star })}
                      className="p-1 cursor-pointer focus:outline-none"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          star <= formData.rating 
                            ? 'text-amber-400 fill-amber-400' 
                            : 'text-zinc-600'
                        }`}
                      />
                    </button>
                  ))}
                  <span className="text-xs text-[#D4AF37] font-bold ml-2">
                    {formData.rating} Stars
                  </span>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs text-zinc-300 font-medium">Review Headline *</label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g. Absolutely obsessed with this hairline!"
                  className="w-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-100 p-2.5 rounded-lg focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs text-zinc-300 font-medium">Your Feedback *</label>
                <textarea
                  required
                  rows={3}
                  value={formData.comment}
                  onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                  placeholder="Tell us about the hair quality, lace melt, comfort, and wearability..."
                  className="w-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-100 p-2.5 rounded-lg focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 py-3 bg-[#D4AF37] hover:bg-[#E6CA65] text-black font-bold text-xs uppercase tracking-wider rounded-lg transition-all"
                >
                  Submit Verified Review
                </button>
                <button
                  type="button"
                  onClick={() => setIsWriteReviewOpen(false)}
                  className="px-4 py-3 border border-zinc-700 text-zinc-300 hover:text-white text-xs uppercase tracking-wider rounded-lg"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </section>
  );
};
