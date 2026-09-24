import React from 'react';
import { motion } from 'framer-motion';

export const HeartDoodle = ({ className = "" }) => (
  <svg 
    className={`text-brand-rose/50 ${className}`} 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);

export const BotanicalBranch = ({ className = "" }) => (
  <svg 
    className={`text-brand-green/40 ${className}`} 
    width="48" 
    height="48" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M12 22V8" />
    <path d="M12 18c-3.33-2-5-4-5-6s2-3 5-3" />
    <path d="M12 14c3.33-2 5-4 5-6s-2-3-5-3" />
  </svg>
);

export const FloatingElements = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <motion.div
        animate={{ y: [0, -15, 0], x: [0, 5, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10"
      >
        <HeartDoodle className="w-8 h-8 opacity-40" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 15, 0], x: [0, -5, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-20 right-10"
      >
        <BotanicalBranch className="w-12 h-12 opacity-30" />
      </motion.div>
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/2 right-20"
      >
        <HeartDoodle className="w-6 h-6 opacity-30" />
      </motion.div>
    </div>
  );
};
