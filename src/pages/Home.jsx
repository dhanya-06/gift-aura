import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';
import { Button } from '../components/Button';
import { HamperCard } from '../components/HamperCard';
import { FloatingElements, HeartDoodle, BotanicalBranch } from '../components/Decorations';
import { occasions, hampers } from '../data/hampers';
import { business } from '../config/business';
import { ArrowRight, Heart } from 'lucide-react';
import { InstagramIcon as Instagram } from '../components/Icons';
import galleryFourth from '../assets/gallery-fourth.jpeg';
import galleryHamper from '../assets/gallery-hamper.jpg';

export const Home = () => {
  const navigate = useNavigate();
  const featuredHampers = hampers.filter(h => h.featured).slice(0, 6);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen">
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          <FloatingElements />
          
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              
              {/* Left Content */}
              <motion.div 
                className="w-full lg:w-1/2 z-10"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
              >
                <motion.div variants={itemVariants} className="flex items-center gap-2 mb-4">
                  <HeartDoodle className="w-5 h-5 text-brand-rose" />
                  <span className="font-script text-3xl text-brand-rose transform -rotate-2">
                    Let's make someone smile ♡
                  </span>
                </motion.div>
                
                <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl font-serif font-bold text-brand-brown leading-tight mb-6 relative">
                  Thoughtful <span className="brush-stroke">Gifts</span>,<br />
                  Beautiful Memories.
                </motion.h1>
                
                <motion.p variants={itemVariants} className="text-lg lg:text-xl font-serif text-brand-brown/80 mb-10 max-w-lg leading-relaxed">
                  Beautifully curated gift hampers made with love for every special moment in your life.
                </motion.p>
                
                <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                  <Button to="/services">
                    Explore Hampers <ArrowRight size={18} />
                  </Button>
                  <Button to="/contact" variant="secondary">
                    Create Your Gift <ArrowRight size={18} />
                  </Button>
                </motion.div>
              </motion.div>

              {/* Right Image */}
              <motion.div 
                className="w-full lg:w-1/2 relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <div className="relative w-full aspect-[4/3] lg:aspect-square">
                  <div className="absolute inset-0 bg-brand-peach/30 organic-shape scale-105"></div>
                  <div className="absolute inset-0 overflow-hidden organic-shape border-8 border-white/50 shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1200&auto=format&fit=crop" 
                      alt="Premium Gift Hamper" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Floating badges */}
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -right-4 top-1/4 bg-white/90 backdrop-blur px-4 py-2 rounded-2xl shadow-lg border border-brand-peach/30 font-script text-2xl text-brand-rose transform rotate-6"
                  >
                    Handmade with love
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Journey Section */}
        <section className="py-20 bg-brand-brown text-brand-primary relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-brand-primary/20 to-transparent"></div>

          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <div className="mb-16">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-6">
                {[
                  { step: '01', title: 'Choose' },
                  { step: '02', title: 'Customize' },
                  { step: '03', title: 'Confirm' },
                  { step: '04', title: 'Deliver' }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15 }}
                    className="relative z-10 flex flex-col items-center justify-center rounded-[28px] border border-brand-primary/10 bg-[#5f3129] px-4 py-8 text-center shadow-lg shadow-brand-brown/20"
                  >
                    <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-brand-rose font-serif text-2xl font-bold text-white shadow-lg shadow-brand-rose/20">
                      {item.step}
                    </div>
                    <h3 className="font-serif text-xl text-brand-primary">
                      {item.title}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="text-center mb-10">
              <h2 className="text-4xl font-serif font-bold mb-4 text-brand-primary">
                Follow Our Journey
              </h2>
              <HeartDoodle className="w-6 h-6 mx-auto text-brand-rose" />
            </div>

            <div className="text-center mb-8">
              <a
                href={business.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="font-serif text-lg text-brand-peach"
              >
                {business.instagram}
              </a>
            </div>

            <div className="mb-6 text-center">
              <h3 className="font-script text-3xl text-brand-primary">Gallery</h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 relative">
              {[
                '/hamper3.jpg',
                '/hamper1%20(1).jpg',
                galleryHamper,
                galleryFourth
              ].map((img, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="relative overflow-hidden rounded-[20px] border border-brand-primary/10 bg-white/5 shadow-lg shadow-brand-brown/10"
                >
                  <div className="aspect-square overflow-hidden">
                    <img src={img} alt="Gallery" className="h-full w-full object-cover" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-brand-peach/30 relative overflow-hidden">
          <div className="absolute inset-0 organic-shape bg-white/40 scale-150 transform -translate-y-1/4 z-0"></div>
          
          <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
            <BotanicalBranch className="w-16 h-16 mx-auto mb-6 text-brand-rose/60" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-brown mb-6">
              Your Special Moment Deserves a Special Gift.
            </h2>
            <p className="text-xl font-serif text-brand-brown/70 mb-10">
              Let GiftAura make it memorable.
            </p>
            <Button to="/services" className="px-10 py-4 text-xl">
              Create Your Gift <ArrowRight size={20} />
            </Button>
          </div>
        </section>
        
      </div>
    </PageTransition>
  );
};
