import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MapPin, Mail, Phone } from 'lucide-react';
import { InstagramIcon as Instagram } from './Icons';
import { business } from '../config/business';

export const Footer = () => {
  return (
    <footer className="bg-brand-brown text-brand-primary pt-16 pb-8 relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-brand-rose opacity-50"></div>
      
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link to="/" className="text-4xl font-script text-brand-primary mb-4 block">
              GiftAura
            </Link>
            <p className="font-serif text-brand-primary/80 mb-6 italic">
              "Thoughtful Gifts for Every Occasion"
            </p>
            <div className="flex gap-4">
              <a 
                href={business.instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center hover:bg-brand-rose hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-6 flex items-center gap-2">
              Quick Links
              <Heart size={14} className="text-brand-rose" />
            </h3>
            <ul className="space-y-3 font-serif">
              <li><Link to="/" className="hover:text-brand-rose transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-brand-rose transition-colors">Services</Link></li>
              <li><Link to="/about" className="hover:text-brand-rose transition-colors">About Us</Link></li>
              <li><Link to="/reviews" className="hover:text-brand-rose transition-colors">Reviews</Link></li>
              <li><Link to="/contact" className="hover:text-brand-rose transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-6 flex items-center gap-2">
              Collections
              <Heart size={14} className="text-brand-peach" />
            </h3>
            <ul className="space-y-3 font-serif">
              <li><Link to="/categories/birthday-hampers" className="hover:text-brand-peach transition-colors">Birthday Hampers</Link></li>
              <li><Link to="/categories/anniversary-gifts" className="hover:text-brand-peach transition-colors">Anniversary Gifts</Link></li>
              <li><Link to="/categories/couple-hampers" className="hover:text-brand-peach transition-colors">Couple Hampers</Link></li>
              <li><Link to="/categories/self-care-boxes" className="hover:text-brand-peach transition-colors">Self-Care Boxes</Link></li>
              <li><Link to="/categories/custom-gifts" className="hover:text-brand-peach transition-colors">Custom Gifts</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-6 flex items-center gap-2">
              Get in Touch
              <Heart size={14} className="text-brand-blush" />
            </h3>
            <ul className="space-y-4 font-serif text-brand-primary/90">
              {business.showEmail && (
                <li className="flex items-start gap-3">
                  <Mail size={18} className="mt-1 text-brand-peach flex-shrink-0" />
                  <a href={`mailto:${business.email}`} className="hover:text-brand-peach transition-colors">
                    {business.email}
                  </a>
                </li>
              )}
              
              {business.showPhone && (
                <li className="flex items-start gap-3">
                  <Phone size={18} className="mt-1 text-brand-peach flex-shrink-0" />
                  <a href={`tel:${business.phone}`} className="hover:text-brand-peach transition-colors">
                    {business.phone}
                  </a>
                </li>
              )}
              
              {business.showAddress && (
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="mt-1 text-brand-peach flex-shrink-0" />
                  <span>{business.address}</span>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-primary/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 font-serif text-brand-primary/60 text-sm">
          <p>© 2026 GiftAura. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart size={12} className="text-brand-rose" fill="currentColor" /> for special moments
          </p>
        </div>
      </div>
    </footer>
  );
};
