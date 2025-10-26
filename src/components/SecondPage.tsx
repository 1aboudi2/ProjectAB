import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { siteContent } from '../content/site';
import { InfoSection } from './InfoSection';

export const SecondPage: React.FC = () => {
  const [language, setLanguage] = useState<'en' | 'fr'>('en');

  const translations = {
    en: {
      welcomeTitle: "Research Portfolio",
      welcomeSubtitle: "Advanced translation studies and multilingual research",
      exploreProjects: "Explore Projects"
    },
    fr: {
      welcomeTitle: "Portfolio de Recherche",
      welcomeSubtitle: "Études avancées de traduction et recherche multilingue",
      exploreProjects: "Explorer les Projets"
    }
  };

  const currentText = translations[language];

  return (
    <div className="min-h-screen">
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

      {/* Responsive White Welcome Section */}
      <section 
        className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white px-4 py-8"
        style={{
          backgroundImage: `url(${siteContent.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* White overlay with blue marine accents */}
        <div className="absolute inset-0 bg-white/95"></div>
        
        {/* Animated geometric patterns */}
        <div className="absolute inset-0 opacity-5">
          <motion.div
            animate={{ 
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 20%, rgba(30, 64, 175, 0.1) 0%, transparent 50%),
                              radial-gradient(circle at 80% 80%, rgba(29, 78, 216, 0.1) 0%, transparent 50%),
                              radial-gradient(circle at 40% 60%, rgba(37, 99, 235, 0.1) 0%, transparent 50%)`,
              backgroundSize: '200px 200px'
            }}
          ></motion.div>
        </div>
        
        {/* Floating research elements */}
        <div className="absolute inset-0">
          {['📝', '🔬', '📖', '✍️'].map((symbol, i) => (
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
        <div className="relative z-10 text-center text-blue-900 w-full max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8 sm:mb-10"
          >
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 tracking-tight"
              style={{
                background: 'linear-gradient(135deg, #1e40af, #1d4ed8, #2563eb)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {currentText.welcomeTitle}
            </motion.h1>
            <motion.div 
              className="w-20 sm:w-24 md:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-6 sm:mb-8 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: '5rem' }}
              transition={{ duration: 1, delay: 0.5 }}
            ></motion.div>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-700 max-w-4xl mx-auto leading-relaxed font-medium px-4">
              {currentText.welcomeSubtitle}
            </p>
          </motion.div>
          
          {/* Responsive scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col items-center space-y-3 sm:space-y-4"
          >
            <span className="text-blue-600 text-xs sm:text-sm font-semibold tracking-widest uppercase">{currentText.exploreProjects}</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="w-6 h-10 sm:w-8 sm:h-12 border-2 border-blue-600 rounded-full flex justify-center p-1 sm:p-2"
            >
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="w-1 h-2 sm:h-3 bg-blue-600 rounded-full"
              ></motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Responsive Blue Marine Articles Section */}
      <div className="bg-gradient-to-b from-blue-900 to-blue-800 py-16 sm:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
              Translation Projects
            </h2>
            <div className="w-16 sm:w-20 md:w-24 lg:w-32 h-1 sm:h-1.5 md:h-2 bg-gradient-to-r from-white to-blue-200 mx-auto mb-6 sm:mb-8 rounded-full"></div>
            <p className="text-blue-100 max-w-3xl mx-auto text-base sm:text-lg lg:text-xl font-medium leading-relaxed px-4">
              Specialized translation work and research applications
            </p>
          </motion.div>
          
          {siteContent.secondPageArticles.map((article, index) => (
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
                className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-200 group-hover:border-blue-300"
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