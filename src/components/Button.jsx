import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Button = ({ 
  children, 
  to, 
  onClick, 
  variant = 'primary', 
  className = "", 
  type = "button" 
}) => {
  const baseClasses = "inline-flex items-center justify-center px-8 py-3 rounded-full font-serif text-lg transition-all duration-300 transform hover:-translate-y-1";
  
  const variants = {
    primary: "bg-brand-rose text-white hover:bg-brand-brown hover:shadow-lg hover:shadow-brand-rose/20",
    secondary: "bg-brand-peach text-brand-brown hover:bg-brand-blush hover:shadow-lg hover:shadow-brand-peach/30",
    outline: "border-2 border-brand-brown text-brand-brown hover:bg-brand-brown hover:text-white"
  };

  const Component = to ? Link : 'button';
  const props = to ? { to } : { onClick, type };

  return (
    <Component 
      {...props} 
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      <motion.span
        whileHover={{ x: 3 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="flex items-center gap-2"
      >
        {children}
      </motion.span>
    </Component>
  );
};
