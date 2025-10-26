import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { siteContent } from '../content/site';
import { InfoSection } from './InfoSection';

export const WelcomePage: React.FC = () => {
  const [language, setLanguage] = useState<'en' | 'fr'>('en');

  const translations = {
    en: {
      welcomeTitle: "Welcome",
      welcomeSubtitle: "Bridging cultures through language and translation",
      institution: "Institution",
      program: "Program",
      exploreWork: "Explore Work"
    },
    fr: {
      welcomeTitle: "Bienvenue",
      welcomeSubtitle: "Relier les cultures par la langue et la traduction",
      institution: "Institution",
      program: "Programme",
      exploreWork: "Explorer le Travail"
    }
  };

  const currentText = translations[language];

  return (
    <div className="min-h-screen">
      {/* Language Toggle */}
      <div className="fixed top-4 left-4 z-50">
        <div className="flex bg-white/15 backdrop-blur-md rounded-lg p-1 border border-white/25 shadow-md">
          <button
            onClick={() => setLanguage('en')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-300 ${
              language === 'en' 
                ? 'bg-white text-blue-900 shadow-sm' 
                : 'text-white hover:text-blue-100'
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLanguage('fr')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-300 ${
              language === 'fr' 
                ? 'bg-white text-blue-900 shadow-sm' 
                : 'text-white hover:text-blue-100'
            }`}
          >
            FR
          </button>
        </div>
      </div>

      {/* Responsive Welcome Section */}
      <section 
        className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-8"
        style={{
          backgroundImage: `url(${siteContent.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Rich dark blue marine gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-blue-800/90 to-blue-700/95"></div>
        
        {/* Subtle animated patterns */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{ 
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                              radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)`,
              backgroundSize: '200px 200px'
            }}
          ></motion.div>
        </div>
        
        {/* Elegant floating elements */}
        <div className="absolute inset-0">
          {['🌐', '📚', '✍️', '🔤'].map((symbol, i) => (
            <motion.div
              key={i}
              className="absolute text-lg sm:text-xl opacity-20"
              style={{
                left: `${15 + i * 22}%`,
                top: `${25 + i * 18}%`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, -10, 0],
                opacity: [0.2, 0.4, 0.2],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                delay: i * 2,
              }}
            >
              {symbol}
            </motion.div>
          ))}
        </div>
        
        {/* Responsive content layout */}
        <div className="relative z-10 text-center text-white w-full max-w-6xl mx-auto">
          {/* Responsive Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mb-8 sm:mb-10"
          >
            <div className="relative inline-block">
              <motion.img
                src={siteContent.profileImage}
                alt="Profile"
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full border-3 sm:border-4 border-white/50 shadow-xl object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjE2MCIgdmlld0JveD0iMCAwIDE2MCAxNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjgwIiBjeT0iODAiIHI9IjgwIiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjgwIiBjeT0iNjAiIHI9IjMwIiBmaWxsPSIjOUNBM0FGIi8+CjxwYXRoIGQ9Ik00MCAxMjBDNDAgMTIwIDEyMCAxMjAgMTIwIDEyMFYxNDBIMTIwVjE2MEgwVjE0MEgwVjEyMFoiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+';
                }}
              />
              {/* Responsive status indicator */}
              <motion.div 
                className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full border-2 sm:border-3 border-blue-900 flex items-center justify-center shadow-md"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <span className="text-blue-900 text-xs sm:text-sm font-bold">✓</span>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Responsive title and subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mb-8 sm:mb-10"
          >
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 tracking-tight"
              style={{
                background: 'linear-gradient(135deg, #ffffff, #f0f9ff, #e0f2fe)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              {currentText.welcomeTitle}
            </motion.h1>
            <motion.div 
              className="w-20 sm:w-24 md:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-6 sm:mb-8 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: '5rem' }}
              transition={{ duration: 1.5, delay: 1.2 }}
            ></motion.div>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed font-light px-4">
              {currentText.welcomeSubtitle}
            </p>
          </motion.div>
          
          {/* Responsive credentials grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto mb-8 sm:mb-12"
          >
            {[
              { label: currentText.institution, value: siteContent.personalInfo.university },
              { label: currentText.program, value: siteContent.personalInfo.course }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.3 + index * 0.2 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="bg-white/15 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/25"
              >
                <h3 className="text-xs sm:text-sm font-bold text-white/90 mb-2 sm:mb-3 tracking-widest uppercase">{item.label}</h3>
                <p className="text-white text-sm sm:text-base lg:text-lg font-semibold leading-relaxed">{item.value}</p>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Responsive scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="flex flex-col items-center space-y-3 sm:space-y-4"
          >
            <span className="text-blue-200 text-xs sm:text-sm font-semibold tracking-widest uppercase">{currentText.exploreWork}</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="w-6 h-10 sm:w-8 sm:h-12 border-2 border-white/60 rounded-full flex justify-center p-1 sm:p-2"
            >
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="w-1 h-2 sm:h-3 bg-white rounded-full"
              ></motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Responsive Articles Section */}
      <div className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4 sm:mb-6 tracking-tight">
              Translation Research
            </h2>
            <div className="w-16 sm:w-20 md:w-24 lg:w-32 h-1 sm:h-1.5 md:h-2 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-6 sm:mb-8 rounded-full"></div>
            <p className="text-blue-700 max-w-3xl mx-auto text-base sm:text-lg lg:text-xl font-medium leading-relaxed px-4">
              Bridging languages and cultures through professional translation
            </p>
          </motion.div>
          
          {siteContent.articles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="mb-12 sm:mb-16 lg:mb-20 group"
            >
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-200 group-hover:border-blue-400"
              >
                <div className="flex items-start justify-between mb-6 sm:mb-8">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-white text-sm sm:text-base lg:text-lg font-bold">{article.id}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs sm:text-sm font-bold text-blue-600 uppercase tracking-wider">
                        {article.category}
                      </span>
                      <span className="text-xs sm:text-sm text-blue-500 font-mono">
                        {article.languages}
                      </span>
                    </div>
                  </div>
                  <span className="text-sm sm:text-base text-blue-600 font-semibold">
                    {article.date}
                  </span>
                </div>
                
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-4 sm:mb-6 group-hover:text-blue-700 transition-colors leading-tight">
                  {article.title}
                </h3>
                <p className="text-blue-700 text-base sm:text-lg lg:text-xl leading-relaxed font-medium">
                  {article.content}
                </p>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
      
      {/* Compact Contact Information */}
      <div className="py-8 px-4">
        <InfoSection />
      </div>
    </div>
  );
};