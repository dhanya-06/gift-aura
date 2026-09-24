import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { About } from './pages/About';
import { Reviews } from './pages/Reviews';
import { Contact } from './pages/Contact';
import { CategoryPage } from './pages/CategoryPage';

function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/categories/:category" element={<CategoryPage />} />
            <Route path="*" element={
              <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
                <h1 className="text-4xl font-serif text-brand-brown mb-4">404 - Page Not Found</h1>
                <p className="text-brand-brown/70 font-serif mb-6">Oops! The page you're looking for doesn't exist.</p>
                <a href="/" className="text-brand-rose underline font-serif">Go back home</a>
              </div>
            } />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}

export default App;
