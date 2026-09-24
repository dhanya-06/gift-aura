import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Heart, ShoppingBag, Menu, X } from 'lucide-react';
import { services } from '../data/services';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [isFavOpen, setIsFavOpen] = useState(false);
  const searchInputRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
    setIsFavOpen(false);
    setSearchQuery('');
  }, [location]);

  // Auto-focus search input when opened
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Live search
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }
    const q = searchQuery.toLowerCase();
    const results = services.filter(
      (service) =>
        service.title.toLowerCase().includes(q) ||
        service.items.some((item) => item.toLowerCase().includes(q))
    );
    setSearchResults(results.slice(0, 5));
  }, [searchQuery]);

  // Sync favourites when HamperCard dispatches ga-fav-update
  useEffect(() => {
    const sync = () => {
      try {
        const saved = JSON.parse(localStorage.getItem('ga_favourites') || '[]');
        setFavourites(saved);
      } catch {
        setFavourites([]);
      }
    };
    window.addEventListener('ga-fav-update', sync);
    return () => window.removeEventListener('ga-fav-update', sync);
  }, []);

  const removeFavourite = (id) => {
    const updated = favourites.filter((f) => f.id !== id);
    setFavourites(updated);
    localStorage.setItem('ga_favourites', JSON.stringify(updated));
    window.dispatchEvent(new Event('ga-fav-update'));
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleSearchSelect = (service) => {
    setIsSearchOpen(false);
    setSearchQuery('');
    navigate(`/services?hamperId=${service.id}`);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'glass-nav py-4 shadow-sm' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="text-3xl font-script text-brand-brown hover:text-brand-rose transition-colors relative group"
          >
            GiftAura
            <span className="absolute -top-2 -right-4 text-brand-rose opacity-0 group-hover:opacity-100 transition-opacity">
              <Heart size={14} fill="currentColor" />
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-serif text-lg transition-colors hover:text-brand-rose relative group ${
                  location.pathname === link.path ? 'text-brand-rose' : 'text-brand-brown'
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 w-full h-0.5 bg-brand-rose transform origin-left transition-transform duration-300 ${
                    location.pathname === link.path
                      ? 'scale-x-100'
                      : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className="hidden md:flex items-center gap-4 text-brand-brown">
            {/* Search */}
            <button
              onClick={() => { setIsSearchOpen(true); setIsFavOpen(false); }}
              className="hover:text-brand-rose transition-colors p-2"
              aria-label="Search"
            >
              <Search size={20} />
            </button>

            {/* Favourites */}
            <button
              onClick={() => { setIsFavOpen((p) => !p); setIsSearchOpen(false); }}
              className="hover:text-brand-rose transition-colors p-2 relative"
              aria-label="Favourites"
            >
              <Heart size={20} fill={favourites.length ? 'currentColor' : 'none'} />
              {favourites.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-brand-rose text-white text-[10px] rounded-full flex items-center justify-center font-bold">
                  {favourites.length}
                </span>
              )}
            </button>

            {/* Cart placeholder */}
            <Link to="/services" className="hover:text-brand-rose transition-colors p-2 relative" aria-label="Shop">
              <ShoppingBag size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-brand-rose rounded-full" />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-brand-brown p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* ── Search overlay ── */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center pt-28 px-4"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-brand-brown/40 backdrop-blur-md"
              onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }}
            />

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="relative w-full max-w-2xl"
            >
              {/* Search input */}
              <div className="flex items-center bg-brand-primary rounded-2xl shadow-2xl px-5 py-4 gap-3">
                <Search size={20} className="text-brand-rose shrink-0" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search gift hampers..."
                  className="flex-1 bg-transparent font-serif text-lg text-brand-brown placeholder-brand-brown/40 focus:outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Escape' && setIsSearchOpen(false)}
                />
                <button onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }}>
                  <X size={20} className="text-brand-brown/50 hover:text-brand-rose" />
                </button>
              </div>

              {/* Results dropdown */}
              <AnimatePresence>
                {searchQuery && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="mt-2 bg-brand-primary rounded-2xl shadow-xl overflow-hidden border border-brand-peach/40"
                  >
                    {searchResults.length > 0 ? (
                      searchResults.map((service) => (
                        <button
                          key={service.id}
                          onClick={() => handleSearchSelect(service)}
                          className="w-full flex items-center gap-4 px-5 py-4 hover:bg-brand-peach/30 transition-colors text-left border-b border-brand-peach/20 last:border-0"
                        >
                          <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0">
                            <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <p className="font-serif font-semibold text-brand-brown">{service.title}</p>
                            <p className="text-xs font-serif text-brand-brown/60">{service.items.length} items included</p>
                          </div>
                        </button>
                      ))
                    ) : (
                      <p className="px-5 py-6 font-serif text-brand-brown/60 text-center">
                        No services found for "{searchQuery}"
                      </p>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Favourites panel ── */}
      <AnimatePresence>
        {isFavOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex justify-end"
          >
            <div
              className="absolute inset-0 bg-brand-brown/30 backdrop-blur-sm"
              onClick={() => setIsFavOpen(false)}
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="relative w-80 max-w-[90vw] bg-brand-primary shadow-2xl h-full flex flex-col"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-brand-peach/40">
                <h3 className="font-serif text-xl font-bold text-brand-brown flex items-center gap-2">
                  <Heart size={18} fill="currentColor" className="text-brand-rose" />
                  My Favourites
                </h3>
                <button onClick={() => setIsFavOpen(false)}>
                  <X size={20} className="text-brand-brown/60 hover:text-brand-rose" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {favourites.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <Heart size={40} className="text-brand-rose/20 mb-4" />
                    <p className="font-serif text-brand-brown/60">
                      No favourites yet. Tap the ♡ on a hamper to save it here!
                    </p>
                  </div>
                ) : (
                  favourites.map((fav) => (
                    <div
                      key={fav.id}
                      className="flex items-center gap-3 bg-white/60 p-3 rounded-2xl border border-brand-peach/30"
                    >
                      <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0">
                        <img src={fav.image} alt={fav.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-serif font-semibold text-brand-brown text-sm truncate">{fav.name}</p>
                        <p className="text-xs font-serif text-brand-rose">₹{fav.price.toLocaleString('en-IN')}</p>
                      </div>
                      <button
                        onClick={() => removeFavourite(fav.id)}
                        className="text-brand-brown/40 hover:text-brand-rose transition-colors shrink-0"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))
                )}
              </div>

              <div className="p-6 border-t border-brand-peach/40">
                <Link
                  to="/services"
                  onClick={() => setIsFavOpen(false)}
                  className="block text-center font-serif text-brand-rose underline underline-offset-4 hover:text-brand-brown transition-colors"
                >
                  Browse all hampers →
                </Link>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-brand-primary/95 backdrop-blur-md pt-24 px-6 md:hidden flex flex-col h-screen"
          >
            <nav className="flex flex-col gap-6 items-center mt-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-serif text-3xl transition-colors ${
                    location.pathname === link.path ? 'text-brand-rose brush-stroke' : 'text-brand-brown'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="mt-auto mb-10 flex justify-center gap-8 text-brand-brown">
              <button
                className="p-2 hover:text-brand-rose transition-colors"
                onClick={() => { setIsMobileMenuOpen(false); setIsSearchOpen(true); }}
              >
                <Search size={24} />
              </button>
              <button
                className="p-2 hover:text-brand-rose transition-colors relative"
                onClick={() => { setIsMobileMenuOpen(false); setIsFavOpen(true); }}
              >
                <Heart size={24} fill={favourites.length ? 'currentColor' : 'none'} />
                {favourites.length > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-brand-rose text-white text-[10px] rounded-full flex items-center justify-center font-bold">
                    {favourites.length}
                  </span>
                )}
              </button>
              <Link to="/services" className="p-2 hover:text-brand-rose transition-colors">
                <ShoppingBag size={24} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
