import React from 'react';
import { motion } from 'framer-motion';
import { siteContent } from '../content/site';

export const WelcomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* International Translation Welcome Section */}
      <section 
        className="h-screen flex items-center justify-center relative overflow-hidden"
        style={{
          backgroundImage: `url(${siteContent.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Translation-themed gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-blue-900/75 to-indigo-900/85"></div>
        
        {/* Language/Translation pattern overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(59, 130, 246, 0.1) 10px, rgba(59, 130, 246, 0.1) 20px),
                            repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(147, 51, 234, 0.1) 10px, rgba(147, 51, 234, 0.1) 20px)`
          }}></div>
        </div>
        
        {/* Floating language symbols */}
        <div className="absolute inset-0">
          {['🌍', '📚', '✍️', '🔤', '🗣️', '📖'].map((symbol, i) => (
            <motion.div
              key={i}
              className="absolute text-2xl opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 10, -10, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            >
              {symbol}
            </motion.div>
          ))}
        </div>
        
        {/* Professional content layout */}
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
          {/* Profile Picture with translation theme */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <img
                src={siteContent.profileImage}
                alt="Profile"
                className="w-32 h-32 md:w-36 md:h-36 rounded-full border-4 border-white shadow-2xl object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0IiBoZWlnaHQ9IjE0NCIgdmlld0JveD0iMCAwIDE0NCAxNDQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjcyIiBjeT0iNzIiIHI9IjcyIiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjcyIiBjeT0iNTQiIHI9IjI3IiBmaWxsPSIjOUNBM0FGIi8+CjxwYXRoIGQ9Ik0zNiAxMDhDMzYgMTA4IDEwOCAxMDggMTA4IDEwOFYxMjZIMTA4VjE0NEgzNlYxMjZIMzZWMTA4WiIgZmlsbD0iIzlDQTNBRiIvPgo8L3N2Zz4=';
                }}
              />
              {/* Translation indicator */}
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white flex items-center justify-center">
                <span className="text-white text-xs">🌍</span>
              </div>
            </div>
          </motion.div>
          
          {/* Welcome text with translation theme */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mb-6"
          >
            <h1 className="text-4xl md:text-6xl font-light text-white mb-4 tracking-wide">
              {siteContent.welcomeTitle}
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-light">
              {siteContent.welcomeSubtitle}
            </p>
          </motion.div>
          
          {/* Translation credentials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <h3 className="text-sm font-semibold text-blue-300 mb-2">UNIVERSITY</h3>
              <p className="text-white text-sm">{siteContent.personalInfo.university}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <h3 className="text-sm font-semibold text-purple-300 mb-2">PROGRAM</h3>
              <p className="text-white text-sm">{siteContent.personalInfo.course}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <h3 className="text-sm font-semibold text-indigo-300 mb-2">LANGUAGE PAIRS</h3>
              <p className="text-white text-sm">{siteContent.personalInfo.translationPairs}</p>
            </div>
          </motion.div>
          
          {/* Language proficiency indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-8"
          >
            <div className="flex flex-wrap justify-center gap-3">
              {siteContent.personalInfo.languages.map((language, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                  className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30"
                >
                  <span className="text-white text-sm font-medium">{language}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Professional scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="mt-12"
          >
            <div className="flex flex-col items-center space-y-2">
              <span className="text-gray-300 text-sm font-light tracking-wider">EXPLORE TRANSLATION WORK</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center"
              >
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1 h-3 bg-gray-300 rounded-full mt-2"
                ></motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Translation Articles Section */}
      <div className="bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 py-20">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-4">
              Translation Research
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
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
              className="mb-12 group"
            >
              <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border-l-4 border-slate-200 dark:border-slate-700 group-hover:border-blue-500">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-semibold">{article.id}</span>
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
                  <span className="text-sm text-gray-500 dark:text-gray-400 font-light">
                    {article.date}
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed font-light">
                  {article.content}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};