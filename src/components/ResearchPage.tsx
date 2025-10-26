import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { siteContent } from '../content/site';

export const ResearchPage: React.FC = () => {
  const [language, setLanguage] = useState<'en' | 'fr'>('en');

  const translations = {
    en: {
      welcomeTitle: "Translation Research",
      welcomeSubtitle: "Academic insights and linguistic analysis",
      exploreProjects: "Explore Projects"
    },
    fr: {
      welcomeTitle: "Recherche en Traduction",
      welcomeSubtitle: "Perspectives académiques et analyse linguistique",
      exploreProjects: "Explorer les Projets"
    }
  };

  const currentText = translations[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 relative overflow-hidden">
      {/* Language Toggle */}
      <div className="fixed top-4 left-4 z-50">
        <div className="flex bg-blue-900/20 backdrop-blur-sm rounded-lg p-1 border border-blue-900/30 shadow-md">
          <button
            onClick={() => setLanguage('en')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-300 ${
              language === 'en' 
                ? 'bg-blue-900 text-white shadow-sm' 
                : 'text-blue-900 hover:text-blue-700'
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLanguage('fr')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-300 ${
              language === 'fr' 
                ? 'bg-blue-900 text-white shadow-sm' 
                : 'text-blue-900 hover:text-blue-700'
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
        {/* Light gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-blue-50/85 to-blue-100/90"></div>
        
        {/* Subtle animated patterns */}
        <div className="absolute inset-0 opacity-5">
          <motion.div
            animate={{ 
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                              radial-gradient(circle at 75% 75%, rgba(37, 99, 235, 0.05) 0%, transparent 50%)`,
              backgroundSize: '300px 300px'
            }}
          ></motion.div>
        </div>
        
        {/* Elegant floating elements */}
        <div className="absolute inset-0">
          {['🔬', '📊', '📈', '🎯'].map((symbol, i) => (
            <motion.div
              key={i}
              className="absolute text-lg sm:text-xl opacity-15"
              style={{
                left: `${20 + i * 20}%`,
                top: `${30 + i * 15}%`,
              }}
              animate={{
                y: [0, -15, 0],
                rotate: [0, 8, -8, 0],
                opacity: [0.15, 0.25, 0.15],
              }}
              transition={{
                duration: 5 + i * 0.3,
                repeat: Infinity,
                delay: i * 0.6,
              }}
            >
              {symbol}
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <div className="text-center z-10 max-w-4xl mx-auto">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <motion.img
                src="/profile.jpg"
                alt="Profile"
                className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full border-4 border-blue-600/30 shadow-2xl object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzg0IiBoZWlnaHQ9IjM4NCIgdmlld0JveD0iMCAwIDM4NCAzODQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjE5MiIgY3k9IjE5MiIgcj0iMTkyIiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjE5MiIgY3k9IjE0NCIgcj0iNzIiIGZpbGw9IiM5Q0EzQUYiLz4KPHBhdGggZD0iOTYgMjg4Qzk2IDI4OCAyODggMjg4IDI4OCAyODhWMzIwSDI4OFYzODRIOTZWMzIwSDk2VjI4OFoiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+';
                }}
              />
              <motion.div
                className="absolute -top-2 -right-2 w-8 h-8 bg-blue-900 rounded-full border-2 border-white flex items-center justify-center shadow-lg"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-white text-sm font-bold">✓</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Welcome Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-blue-900 mb-4 tracking-wide"
            style={{
              background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #60a5fa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {currentText.welcomeTitle}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl lg:text-2xl text-blue-700 mb-8 font-light max-w-2xl mx-auto leading-relaxed"
          >
            {currentText.welcomeSubtitle}
          </motion.p>

          {/* Academic Pattern */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-8"
          >
            <div className="flex justify-center space-x-4">
              {['🔬', '📊', '📈', '🎯'].map((symbol, index) => (
                <motion.div
                  key={symbol}
                  className="text-2xl sm:text-3xl"
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                >
                  {symbol}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Scroll Down Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col items-center"
          >
            <p className="text-blue-600 text-sm mb-2">{currentText.exploreProjects}</p>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-blue-600 text-2xl"
            >
              ↓
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Articles Section */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 relative overflow-hidden">
        <div className="pt-20 pb-20 px-6">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-blue-900 mb-4 tracking-wide">
                Advanced Research
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-6 rounded-full"></div>
              <p className="text-lg sm:text-xl text-blue-700 font-light max-w-2xl mx-auto">
                Specialized translation methodologies and cross-cultural analysis
              </p>
            </motion.div>

            {/* Articles Grid */}
            <div className="space-y-8">
              {siteContent.articles.map((article, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="p-8 sm:p-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-1">
                            {article.title}
                          </h3>
                          <p className="text-sm text-blue-600 font-medium">
                            {article.languagePair}
                          </p>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500 font-medium">
                        {article.date}
                      </div>
                    </div>
                    
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="prose prose-blue max-w-none"
                    >
                      <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                        {article.content}
                      </p>
                    </motion.div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
