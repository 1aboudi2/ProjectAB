import React from 'react';
import { motion } from 'framer-motion';
import { siteContent } from '../content/site';

export const SecondPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Modern Research Welcome Section */}
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
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/80 via-teal-900/70 to-cyan-900/80"></div>
        
        {/* Animated geometric patterns */}
        <div className="absolute inset-0 opacity-20">
          <motion.div
            animate={{ 
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 20%, rgba(16, 185, 129, 0.3) 0%, transparent 50%),
                              radial-gradient(circle at 80% 80%, rgba(20, 184, 166, 0.3) 0%, transparent 50%),
                              radial-gradient(circle at 40% 60%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)`,
              backgroundSize: '400px 400px'
            }}
          ></motion.div>
        </div>
        
        {/* Floating research elements */}
        <div className="absolute inset-0">
          {['📝', '🔬', '📖', '✍️'].map((symbol, i) => (
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white mb-6"
              style={{
                background: 'linear-gradient(135deg, #10b981, #14b8a6, #06b6d4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Research Portfolio
            </motion.h1>
            <motion.div 
              className="w-32 h-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 mx-auto mb-8 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: '8rem' }}
              transition={{ duration: 1, delay: 0.5 }}
            ></motion.div>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-medium">
              Advanced translation studies and multilingual research
            </p>
          </motion.div>
          
          {/* Modern scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col items-center space-y-4"
          >
            <span className="text-gray-300 text-sm font-medium tracking-wider uppercase">Explore Projects</span>
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

      {/* Modern Research Articles Section */}
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
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Translation Projects
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg font-medium leading-relaxed">
              Specialized translation work and research applications
            </p>
          </motion.div>
          
          {siteContent.secondPageArticles.map((article, index) => (
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
                className="bg-white dark:bg-slate-800 rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-slate-700 group-hover:border-emerald-300 dark:group-hover:border-emerald-500"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-white text-sm font-bold">{article.id}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
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
                
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-tight">
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