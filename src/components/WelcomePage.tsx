import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { siteContent } from '../content/site';

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
      <div className="fixed top-6 left-6 z-50">
        <div className="flex bg-white/10 backdrop-blur-sm rounded-full p-1 border border-white/20">
          <button
            onClick={() => setLanguage('en')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              language === 'en' 
                ? 'bg-white text-gray-900 shadow-lg' 
                : 'text-white hover:text-gray-200'
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLanguage('fr')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              language === 'fr' 
                ? 'bg-white text-gray-900 shadow-lg' 
                : 'text-white hover:text-gray-200'
            }`}
          >
            FR
          </button>
        </div>
      </div>

      {/* Modern Engaging Welcome Section */}
      <section 
        className="h-screen flex items-center justify-center relative overflow-hidden"
        style={{
          backgroundImage: `url(${siteContent.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dynamic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/70 to-indigo-900/80"></div>
        
        {/* Animated geometric patterns */}
        <div className="absolute inset-0 opacity-20">
          <motion.div
            animate={{ 
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                              radial-gradient(circle at 80% 80%, rgba(147, 51, 234, 0.3) 0%, transparent 50%),
                              radial-gradient(circle at 40% 60%, rgba(99, 102, 241, 0.3) 0%, transparent 50%)`,
              backgroundSize: '400px 400px'
            }}
          ></motion.div>
        </div>
        
        {/* Floating translation elements */}
        <div className="absolute inset-0">
          {['🌐', '📚', '✍️', '🔤'].map((symbol, i) => (
            <motion.div
              key={i}
              className="absolute text-3xl opacity-40"
              style={{
                left: `${20 + i * 20}%`,
                top: `${30 + i * 15}%`,
              }}
              animate={{
                y: [0, -40, 0],
                rotate: [0, 15, -15, 0],
                opacity: [0.4, 0.8, 0.4],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 6 + i * 2,
                repeat: Infinity,
                delay: i * 1.5,
              }}
            >
              {symbol}
            </motion.div>
          ))}
        </div>
        
        {/* Professional content layout */}
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
          {/* Modern Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-10"
          >
            <div className="relative inline-block">
              <motion.img
                src={siteContent.profileImage}
                alt="Profile"
                className="w-36 h-36 md:w-40 md:h-40 rounded-full border-4 border-white/30 shadow-2xl object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjE2MCIgdmlld0JveD0iMCAwIDE2MCAxNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjgwIiBjeT0iODAiIHI9IjgwIiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjgwIiBjeT0iNjAiIHI9IjMwIiBmaWxsPSIjOUNBM0FGIi8+CjxwYXRoIGQ9Ik00MCAxMjBDNDAgMTIwIDEyMCAxMjAgMTIwIDEyMFYxNDBIMTIwVjE2MEgwVjE0MEgwVjEyMFoiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+';
                }}
              />
              {/* Modern status indicator */}
              <motion.div 
                className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full border-4 border-white flex items-center justify-center"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-white text-xs">✓</span>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Dynamic title and subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mb-8"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white mb-6"
              style={{
                background: 'linear-gradient(135deg, #60a5fa, #a78bfa, #c084fc)',
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
              className="w-32 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 mx-auto mb-8 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: '8rem' }}
              transition={{ duration: 1, delay: 1 }}
            ></motion.div>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-medium">
              {currentText.welcomeSubtitle}
            </p>
          </motion.div>
          
          {/* Simplified credentials grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10"
          >
            {[
              { label: currentText.institution, value: siteContent.personalInfo.university, color: 'from-blue-500 to-blue-600' },
              { label: currentText.program, value: siteContent.personalInfo.course, color: 'from-purple-500 to-purple-600' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`bg-gradient-to-br ${item.color} rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <h3 className="text-sm font-semibold text-white/80 mb-2 tracking-wider uppercase">{item.label}</h3>
                <p className="text-white text-base font-medium">{item.value}</p>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Modern scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="flex flex-col items-center space-y-4"
          >
            <span className="text-gray-300 text-sm font-medium tracking-wider uppercase">{currentText.exploreWork}</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-8 h-12 border-2 border-white/60 rounded-full flex justify-center p-2"
            >
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-white rounded-full"
              ></motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Modern Articles Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-800 py-24">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Translation Research
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg font-medium leading-relaxed">
              Bridging languages and cultures through professional translation
            </p>
          </motion.div>
          
          {siteContent.articles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="mb-16 group"
            >
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-slate-800 rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-slate-700 group-hover:border-blue-300 dark:group-hover:border-blue-500"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-white text-sm font-bold">{article.id}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                        {article.category}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">
                        {article.languages}
                      </span>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                    {article.date}
                  </span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
                  {article.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed font-medium">
                  {article.content}
                </p>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};