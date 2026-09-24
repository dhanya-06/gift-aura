import React from 'react';
import { motion } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { FloatingElements, HeartDoodle, BotanicalBranch } from '../components/Decorations';
import { Heart, Gift, Sparkles, Smile } from 'lucide-react';

export const About = () => {
  const values = [
    { title: "Thoughtful", icon: <Heart className="w-6 h-6 text-brand-rose" />, desc: "Every item is chosen with intention." },
    { title: "Personal", icon: <Smile className="w-6 h-6 text-brand-rose" />, desc: "Tailored to make them feel special." },
    { title: "Beautiful", icon: <Sparkles className="w-6 h-6 text-brand-rose" />, desc: "Aesthetic packaging that wows." },
    { title: "Memorable", icon: <Gift className="w-6 h-6 text-brand-rose" />, desc: "Gifts that turn into cherished memories." }
  ];

  const process = [
    { title: "Choose", desc: "Select a base hamper or occasion." },
    { title: "Customize", desc: "Add personal touches and photos." },
    { title: "Confirm", desc: "Review details and place the order." },
    { title: "Deliver", desc: "We deliver smiles to their doorstep." }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen pt-32 pb-24 overflow-hidden">
        
        {/* Hero Section */}
        <section className="container mx-auto px-6 max-w-7xl mb-24 relative">
          <FloatingElements />
          
          <div className="text-center mb-20 relative z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-serif font-bold text-brand-brown mb-4 brush-stroke inline-block"
            >
              About Us
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl font-serif text-brand-brown/70 max-w-2xl mx-auto italic"
            >
              More Than Just a Gift...
            </motion.p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
            {/* Story Text */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-4xl font-serif font-bold text-brand-brown">
                  Our Story ♡
                </h2>
              </div>
              
              <div className="space-y-6 font-serif text-lg text-brand-brown/80 leading-relaxed">
                <p>
                  GiftAura was born from a simple belief — every occasion deserves a little more love. We noticed that finding a gift that feels truly personal and aesthetic was often a struggle.
                </p>
                <p>
                  We wanted to change that by creating thoughtfully curated hampers designed to turn simple moments into lasting memories. Each of our boxes is more than just a collection of items; it's a curated experience.
                </p>
                <p>
                  From hand-written notes to carefully tied ribbons, we ensure that when your loved one opens a GiftAura hamper, they feel the warmth and love you intended for them.
                </p>
              </div>

              <div className="mt-10 p-6 bg-brand-secondary/40 rounded-3xl border border-brand-peach/30 relative transform -rotate-1">
                <HeartDoodle className="absolute -top-3 -right-3 w-8 h-8 text-brand-rose opacity-60" />
                <p className="font-script text-3xl text-brand-rose leading-relaxed text-center">
                  "Small Hampers...<br/>Big Smiles..."
                </p>
              </div>
            </motion.div>

            {/* Story Image */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="relative aspect-[4/5] max-w-md mx-auto">
                <div className="absolute inset-0 bg-brand-peach/20 rounded-[40px] transform rotate-3 scale-105"></div>
                <div className="absolute inset-0 bg-white p-3 rounded-[32px] shadow-2xl shadow-brand-brown/10 transform -rotate-2">
                  <img 
                    src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800&auto=format&fit=crop" 
                    alt="Gift Aura Story" 
                    className="w-full h-full object-cover rounded-[20px]"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-brand-primary p-4 rounded-2xl shadow-lg border border-brand-peach/30 transform rotate-12">
                    <p className="font-script text-xl text-brand-brown">
                      Handpicked with Love<br/>for Your Special Moments
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-brand-brown text-brand-primary relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-brand-primary/20 to-transparent"></div>
          
          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold mb-4">Our Values</h2>
              <BotanicalBranch className="w-12 h-12 mx-auto text-brand-peach/40" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((val, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-brand-primary/5 p-8 rounded-3xl text-center border border-brand-primary/10 hover:bg-brand-primary/10 transition-colors"
                >
                  <div className="w-16 h-16 mx-auto bg-brand-primary/10 rounded-full flex items-center justify-center mb-6">
                    {val.icon}
                  </div>
                  <h3 className="text-xl font-serif font-semibold mb-3 text-brand-peach">{val.title}</h3>
                  <p className="font-serif text-brand-primary/80">{val.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 relative">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-16 relative">
              <h2 className="text-4xl font-serif font-bold text-brand-brown mb-4">
                How We Bring Joy
              </h2>
            </div>

            <div className="relative">
              {/* Vertical line for timeline */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-brand-peach/50 md:-translate-x-1/2"></div>
              
              <div className="space-y-12">
                {process.map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                      idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    <div className="w-full md:w-1/2" />
                    
                    {/* Circle marker */}
                    <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-brand-rose transform -translate-x-1/2 md:translate-x-[-50%] mt-6 md:mt-0 shadow-lg shadow-brand-rose/30 border-4 border-brand-primary z-10"></div>
                    
                    <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${
                      idx % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'
                    }`}>
                      <div className="bg-white/60 backdrop-blur-sm p-6 rounded-3xl border border-brand-peach/30 shadow-sm hover:shadow-md transition-shadow">
                        <span className="font-script text-4xl text-brand-rose/40 block mb-2">0{idx + 1}</span>
                        <h3 className="text-2xl font-serif font-bold text-brand-brown mb-2">{step.title}</h3>
                        <p className="font-serif text-brand-brown/70">{step.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
};
