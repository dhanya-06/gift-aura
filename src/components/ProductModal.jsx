import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, ShoppingBag } from 'lucide-react';
import { InstagramIcon as Instagram } from './Icons';
import { Button } from './Button';
import { business } from '../config/business';

export const ProductModal = ({ hamper, isOpen, onClose }) => {
  if (!hamper) return null;

  const handleOrder = () => {
    window.open(business.instagramUrl, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-brown/40 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-brand-primary w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl flex flex-col md:flex-row hide-scrollbar"
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-white/50 backdrop-blur-md rounded-full text-brand-brown hover:bg-brand-rose hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            {/* Image Gallery */}
            <div className="w-full md:w-1/2 p-6 md:p-8 bg-brand-secondary/30 rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none flex flex-col gap-4">
              <div className="w-full aspect-square rounded-[30px] overflow-hidden">
                <img 
                  src={hamper.image} 
                  alt={hamper.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              {hamper.gallery && hamper.gallery.length > 1 && (
                <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
                  {hamper.gallery.map((img, idx) => (
                    <div key={idx} className="w-20 h-20 flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer border-2 border-transparent hover:border-brand-rose transition-colors">
                      <img src={img} alt={`${hamper.name} detail ${idx + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Details */}
            <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col">
              <span className="text-xs uppercase tracking-widest text-brand-rose font-semibold mb-2">
                {hamper.occasion}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4 text-brand-brown">
                {hamper.name}
              </h2>
              <div className="font-serif text-2xl font-medium text-brand-brown mb-6">
                ₹{hamper.price.toLocaleString('en-IN')}
              </div>
              
              <p className="text-brand-brown/80 font-serif mb-8 leading-relaxed">
                {hamper.description}
              </p>

              <div className="mb-8">
                <h4 className="font-serif text-lg font-semibold mb-3 flex items-center gap-2">
                  <Heart size={16} className="text-brand-rose" />
                  What's inside
                </h4>
                <ul className="space-y-2">
                  {hamper.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-brand-brown/80 font-serif">
                      <span className="text-brand-rose mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {hamper.customizationOptions && (
                <div className="mb-8 bg-brand-peach/20 p-4 rounded-2xl">
                  <h4 className="font-serif text-lg font-semibold mb-2">Can be customized:</h4>
                  <p className="text-sm text-brand-brown/70 font-serif">
                    {hamper.customizationOptions.join(" • ")}
                  </p>
                </div>
              )}

              <div className="mt-auto pt-6 flex flex-col gap-3 border-t border-brand-brown/10">
                <Button className="w-full gap-2" onClick={handleOrder}>
                  <Instagram size={20} />
                  Order via Instagram
                </Button>
                <p className="text-center text-xs font-serif text-brand-brown/60">
                  You will be redirected to our Instagram DM to place your order.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
