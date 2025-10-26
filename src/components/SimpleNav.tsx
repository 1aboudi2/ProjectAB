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
          to="/welcome" 
          className={`px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-lg sm:rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
            location.pathname === '/' || location.pathname === '/welcome'
              ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md transform scale-105' 
              : 'bg-white bg-opacity-90 text-gray-700 hover:bg-opacity-100 hover:shadow-md backdrop-blur-sm'
          }`}
        >
          <motion.span
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Welcome
          </motion.span>
        </Link>
        <Link 
          to="/research" 
          className={`px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-lg sm:rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
            location.pathname === '/research'
              ? 'bg-gradient-to-r from-green-500 to-teal-500 text-white shadow-md transform scale-105' 
              : 'bg-white bg-opacity-90 text-gray-700 hover:bg-opacity-100 hover:shadow-md backdrop-blur-sm'
          }`}
        >
          <motion.span
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Research
          </motion.span>
        </Link>
        <Link 
          to="/contact" 
          className={`px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-lg sm:rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
            location.pathname === '/contact'
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md transform scale-105' 
              : 'bg-white bg-opacity-90 text-gray-700 hover:bg-opacity-100 hover:shadow-md backdrop-blur-sm'
          }`}
        >
          <motion.span
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact
          </motion.span>
        </Link>
      </motion.div>
    </nav>
  );
};