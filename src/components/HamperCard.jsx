import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { Button } from './Button';

const isFavourited = (id) => {
  try {
    const saved = JSON.parse(localStorage.getItem('ga_favourites') || '[]');
    return saved.some((f) => f.id === id);
  } catch {
    return false;
  }
};

export const HamperCard = ({ hamper, onClick }) => {
  const [faved, setFaved] = useState(() => isFavourited(hamper.id));

  // Keep in sync when localStorage changes (e.g. removed from panel)
  useEffect(() => {
    const sync = () => setFaved(isFavourited(hamper.id));
    window.addEventListener('storage', sync);
    return () => window.removeEventListener('storage', sync);
  }, [hamper.id]);

  const toggleFav = (e) => {
    e.stopPropagation();
    try {
      let saved = JSON.parse(localStorage.getItem('ga_favourites') || '[]');
      if (faved) {
        saved = saved.filter((f) => f.id !== hamper.id);
      } else {
        saved = [{ id: hamper.id, name: hamper.name, image: hamper.image, price: hamper.price }, ...saved];
      }
      localStorage.setItem('ga_favourites', JSON.stringify(saved));
      // Notify Navbar and any other listener
      window.dispatchEvent(new Event('ga-fav-update'));
      setFaved(!faved);
    } catch {}
  };

  return (
    <motion.div
      className="group relative bg-white/50 backdrop-blur-sm rounded-[40px] p-4 pb-6 shadow-sm hover:shadow-xl hover:shadow-brand-rose/10 transition-all duration-500 cursor-pointer border border-brand-peach/30"
      whileHover={{ y: -8 }}
      onClick={() => onClick(hamper)}
    >
      {/* Favourite button */}
      <motion.button
        onClick={toggleFav}
        whileTap={{ scale: 0.8 }}
        className={`absolute top-4 right-4 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm ${
          faved
            ? 'bg-brand-rose text-white'
            : 'bg-white/80 text-brand-rose opacity-0 group-hover:opacity-100'
        }`}
        aria-label={faved ? 'Remove from favourites' : 'Add to favourites'}
      >
        <Heart size={16} fill={faved ? 'currentColor' : 'none'} />
      </motion.button>

      {/* Image Container (Circular/Organic) */}
      <div className="relative w-full aspect-square mb-6 overflow-hidden rounded-[40%_60%_70%_30%/40%_50%_60%_50%] group-hover:rounded-[50%] transition-all duration-700 ease-in-out border-4 border-brand-primary">
        <img
          src={hamper.image}
          alt={hamper.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-brown/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="px-4 text-center">
        <span className="text-xs uppercase tracking-widest text-brand-rose font-semibold mb-2 block">
          {hamper.occasion}
        </span>
        <h3 className="font-serif text-2xl font-semibold mb-2 text-brand-brown line-clamp-1 group-hover:text-brand-rose transition-colors">
          {hamper.name}
        </h3>
        <p className="text-brand-brown/70 font-serif text-sm mb-4 line-clamp-2 min-h-[40px]">
          {hamper.description}
        </p>
        <div className="font-serif text-xl font-medium text-brand-brown mb-6">
          ₹{hamper.price.toLocaleString('en-IN')}
        </div>

        <div className="flex flex-col gap-2">
          <Button
            variant="secondary"
            className="w-full py-2 text-sm"
            onClick={(e) => { e.stopPropagation(); onClick(hamper); }}
          >
            View Details
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
