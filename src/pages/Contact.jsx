import React from 'react';
import { motion } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { FloatingElements, HeartDoodle, BotanicalBranch } from '../components/Decorations';
import { Button } from '../components/Button';
import { MapPin, Mail, Phone, Heart } from 'lucide-react';
import { InstagramIcon as Instagram } from '../components/Icons';
import { business } from '../config/business';

export const Contact = () => {

  return (
    <PageTransition>
      <div className="min-h-screen pt-32 pb-24 overflow-hidden relative">
        <FloatingElements />
        
        {/* Header Section */}
        <section className="container mx-auto px-6 max-w-7xl mb-16 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif font-bold text-brand-brown mb-6 brush-stroke inline-block"
          >
            Let's Create Something Special
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl font-serif text-brand-brown/70 max-w-2xl mx-auto italic"
          >
            Together ♡
          </motion.p>
        </section>

        <section className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="w-full lg:w-1/3"
            >
              <div className="bg-brand-secondary/40 p-8 rounded-3xl border border-brand-peach/30 shadow-sm h-full flex flex-col">
                <h3 className="font-serif text-2xl font-bold text-brand-brown mb-6">Reach Out to Us</h3>
                
                <div className="space-y-8 flex-grow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center text-brand-rose shrink-0 border border-brand-peach/50">
                      <Instagram size={24} />
                    </div>
                    <div>
                      <h4 className="font-serif font-semibold text-brand-brown text-lg">Instagram</h4>
                      <p className="font-serif text-brand-brown/70 text-sm mb-2">Our preferred way to chat!</p>
                      <a href={business.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-brand-rose hover:text-brand-brown transition-colors font-serif font-medium">
                        {business.instagram}
                      </a>
                    </div>
                  </div>

                  {business.showEmail && (
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center text-brand-peach shrink-0 border border-brand-peach/50">
                        <Mail size={24} />
                      </div>
                      <div>
                        <h4 className="font-serif font-semibold text-brand-brown text-lg">Email</h4>
                        <a href={`mailto:${business.email}`} className="text-brand-brown/70 hover:text-brand-rose transition-colors font-serif text-sm">
                          {business.email}
                        </a>
                      </div>
                    </div>
                  )}

                  {business.showPhone && (
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center text-brand-blush shrink-0 border border-brand-peach/50">
                        <Phone size={24} />
                      </div>
                      <div>
                        <h4 className="font-serif font-semibold text-brand-brown text-lg">Phone</h4>
                        <a href={`tel:${business.phone}`} className="text-brand-brown/70 hover:text-brand-rose transition-colors font-serif text-sm">
                          {business.phone}
                        </a>
                      </div>
                    </div>
                  )}

                  {business.showAddress && (
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center text-brand-green shrink-0 border border-brand-peach/50">
                        <MapPin size={24} />
                      </div>
                      <div>
                        <h4 className="font-serif font-semibold text-brand-brown text-lg">Studio</h4>
                        <p className="text-brand-brown/70 font-serif text-sm">
                          {business.address}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-8 pt-8 border-t border-brand-peach/30 text-center">
                  <p className="font-script text-2xl text-brand-rose transform -rotate-2">
                    We can't wait to hear from you!
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="w-full lg:w-2/3"
            >
              <div className="bg-white/60 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-brand-peach/30 shadow-xl shadow-brand-brown/5 relative">
                <BotanicalBranch className="absolute top-4 right-4 w-16 h-16 text-brand-green/20 transform rotate-45" />
                
                <div className="flex flex-col items-center justify-center h-full min-h-[300px] text-center p-4">
                  <div className="w-20 h-20 bg-brand-rose/10 text-brand-rose rounded-full flex items-center justify-center mb-6 border border-brand-rose/20">
                    <Instagram size={32} />
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-brand-brown mb-4">Message Us Directly</h3>
                  <p className="font-serif text-lg text-brand-brown/70 max-w-md mx-auto mb-8">
                    To give you the most personal and tailored experience, we handle all our enquiries and orders via Instagram direct messages.
                  </p>
                  <Button onClick={() => window.open(business.instagramUrl, '_blank')} className="px-10 py-4 text-xl">
                    Send a Message <Instagram size={20} className="ml-2" />
                  </Button>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

      </div>
    </PageTransition>
  );
};
