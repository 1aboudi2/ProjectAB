import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export const SimpleNav: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-6 right-6 z-50">
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex space-x-3"
      >
        <Link 
          to="/" 
          className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
            location.pathname === '/' 
              ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg transform scale-105' 
              : 'bg-white bg-opacity-90 text-gray-700 hover:bg-opacity-100 hover:shadow-md backdrop-blur-sm'
          }`}
        >
          <motion.span
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Page 1
          </motion.span>
        </Link>
        <Link 
          to="/page2" 
          className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
            location.pathname === '/page2' 
              ? 'bg-gradient-to-r from-green-500 to-teal-500 text-white shadow-lg transform scale-105' 
              : 'bg-white bg-opacity-90 text-gray-700 hover:bg-opacity-100 hover:shadow-md backdrop-blur-sm'
          }`}
        >
          <motion.span
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Page 2
          </motion.span>
        </Link>
      </motion.div>
    </nav>
  );
};