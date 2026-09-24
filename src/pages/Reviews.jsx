import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { BotanicalBranch, HeartDoodle } from '../components/Decorations';
import { Button } from '../components/Button';
import { Star, PenLine } from 'lucide-react';

// Generates a simple avatar placeholder from name initials
const InitialsAvatar = ({ name }) => {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  const colors = [
    'bg-brand-rose', 'bg-brand-green', 'bg-brand-lavender',
    'bg-brand-blush', 'bg-brand-peach'
  ];
  const color = colors[name.charCodeAt(0) % colors.length];

  return (
    <div
      className={`w-14 h-14 rounded-full ${color} flex items-center justify-center text-white font-serif font-bold text-xl border-2 border-white shrink-0`}
    >
      {initials}
    </div>
  );
};

export const Reviews = () => {
  // Start empty — no pre-loaded sample reviews
  const [userReviews, setUserReviews] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', rating: 5, review: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newReview = {
      id: Date.now(),
      name: formData.name,
      rating: formData.rating,
      review: formData.review,
      date: new Date().toLocaleDateString('en-IN', {
        day: 'numeric', month: 'long', year: 'numeric'
      })
    };

    setUserReviews((prev) => [newReview, ...prev]);
    setIsSubmitted(true);

    setTimeout(() => {
      setShowForm(false);
      setIsSubmitted(false);
      setFormData({ name: '', rating: 5, review: '' });
    }, 2500);
  };

  return (
    <PageTransition>
      <div className="min-h-screen pt-32 pb-24">

        {/* Header */}
        <section className="container mx-auto px-6 max-w-7xl mb-16 text-center relative">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif font-bold text-brand-brown mb-6 brush-stroke inline-block"
          >
            Customer Reviews ♡
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl font-serif text-brand-brown/70 max-w-2xl mx-auto italic"
          >
            Real People • Real Moments
          </motion.p>
        </section>

        {/* Reviews Grid */}
        <section className="container mx-auto px-6 max-w-7xl mb-16">
          <AnimatePresence>
            {userReviews.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
              >
                {userReviews.map((review, idx) => (
                  <motion.div
                    key={review.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: idx * 0.05 }}
                    className="bg-white/60 backdrop-blur-sm p-8 rounded-3xl border border-brand-peach/30 shadow-sm hover:shadow-lg hover:shadow-brand-rose/5 transition-all duration-300 relative"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <InitialsAvatar name={review.name} />
                      <div>
                        <h4 className="font-serif font-bold text-lg text-brand-brown">{review.name}</h4>
                        <p className="text-xs font-serif text-brand-brown/50">{review.date}</p>
                      </div>
                    </div>
                    <div className="flex gap-1 mb-4 text-brand-rose">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          fill={i < review.rating ? 'currentColor' : 'none'}
                          className={i < review.rating ? '' : 'text-brand-brown/20'}
                        />
                      ))}
                    </div>
                    <p className="font-serif text-brand-brown/80 italic leading-relaxed">
                      "{review.review}"
                    </p>
                    <BotanicalBranch className="absolute bottom-4 right-4 w-8 h-8 text-brand-peach/20" />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              /* Empty state */
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center py-20 text-center"
              >
                <HeartDoodle className="w-16 h-16 text-brand-rose/30 mb-6" />
                <h3 className="font-serif text-2xl font-semibold text-brand-brown mb-3">
                  No reviews yet
                </h3>
                <p className="font-serif text-brand-brown/60 max-w-md mx-auto">
                  Be the first to share your experience with GiftAura!
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Write Review CTA */}
          {!showForm && (
            <div className="text-center">
              <Button
                onClick={() => setShowForm(true)}
                variant="secondary"
                className="gap-2"
              >
                <PenLine size={18} />
                Write a Review
              </Button>
            </div>
          )}
        </section>

        {/* Review Form */}
        <AnimatePresence>
          {showForm && (
            <section className="container mx-auto px-6 max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                className="bg-white/80 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-brand-peach/50 shadow-xl"
              >
                <h3 className="font-serif text-2xl font-bold text-brand-brown mb-6 text-center">
                  Share Your Experience
                </h3>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10"
                  >
                    <div className="w-16 h-16 bg-brand-green/20 text-brand-green rounded-full flex items-center justify-center mx-auto mb-4">
                      <Star fill="currentColor" size={32} />
                    </div>
                    <h4 className="font-serif text-2xl font-bold text-brand-brown mb-2">Thank You!</h4>
                    <p className="font-serif text-brand-brown/70">Your review has been added successfully.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label className="font-serif text-sm font-semibold text-brand-brown">
                        Name <span className="text-brand-rose">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your name"
                        className="w-full bg-brand-primary/50 border border-brand-peach/50 rounded-xl px-4 py-3 font-serif focus:outline-none focus:border-brand-rose transition-colors"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    {/* Rating */}
                    <div className="space-y-2">
                      <label className="font-serif text-sm font-semibold text-brand-brown">Rating</label>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setFormData({ ...formData, rating: star })}
                            className="focus:outline-none transition-transform hover:scale-110"
                          >
                            <Star
                              size={28}
                              fill={star <= formData.rating ? 'currentColor' : 'none'}
                              className={star <= formData.rating ? 'text-brand-rose' : 'text-brand-brown/20'}
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Review text */}
                    <div className="space-y-2">
                      <label className="font-serif text-sm font-semibold text-brand-brown">
                        Your Review <span className="text-brand-rose">*</span>
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Tell us about your experience..."
                        className="w-full bg-brand-primary/50 border border-brand-peach/50 rounded-xl px-4 py-3 font-serif focus:outline-none focus:border-brand-rose transition-colors resize-none"
                        value={formData.review}
                        onChange={(e) => setFormData({ ...formData, review: e.target.value })}
                      />
                    </div>

                    <div className="flex gap-4 pt-4">
                      <Button type="submit" className="flex-1">Submit Review</Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setShowForm(false)}
                        className="flex-1"
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                )}
              </motion.div>
            </section>
          )}
        </AnimatePresence>

      </div>
    </PageTransition>
  );
};
