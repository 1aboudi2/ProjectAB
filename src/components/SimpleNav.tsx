import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export const SimpleNav: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-4 right-4 z-50">
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex space-x-2 sm:space-x-3"
      >
        <Link 
          to="/" 
          className={`px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-lg sm:rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
            location.pathname === '/' 
              ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md transform scale-105' 
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
          className={`px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-lg sm:rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
            location.pathname === '/page2' 
              ? 'bg-gradient-to-r from-green-500 to-teal-500 text-white shadow-md transform scale-105' 
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