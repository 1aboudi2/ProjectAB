import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { siteContent } from '../content/site';

export const ContactPage: React.FC = () => {
  const [language, setLanguage] = useState<'en' | 'fr'>('en');

  const translations = {
    en: {
      title: "Contact Information",
      subtitle: "Academic credentials and contact details"
    },
    fr: {
      title: "Informations de Contact",
      subtitle: "Informations académiques et coordonnées"
    }
  };

  const currentText = translations[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 relative overflow-hidden">
      {/* Language Toggle */}
      <div className="fixed top-4 left-4 z-50">
        <div className="flex bg-white/10 backdrop-blur-md rounded-lg p-1 border border-white/20 shadow-md">
          <button
            onClick={() => setLanguage('en')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-300 ${
              language === 'en' 
                ? 'bg-white text-gray-900 shadow-sm' 
                : 'text-white hover:text-gray-200'
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLanguage('fr')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-300 ${
              language === 'fr' 
                ? 'bg-white text-gray-900 shadow-sm' 
                : 'text-white hover:text-gray-200'
            }`}
          >
            FR
          </button>
        </div>
      </div>

      {/* Subtle animated background patterns */}
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

      {/* Main Content Container */}
      <div className="min-h-screen flex items-center justify-center px-4 py-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-6xl"
        >
          {/* Glass-morphism Card */}
          <div className="bg-gradient-to-br from-amber-50/20 via-orange-50/15 to-yellow-50/20 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
            <div className="p-8 sm:p-12 lg:p-16">
              
              {/* Title Section */}
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center mb-12"
              >
                <h1 className="text-3xl sm:text-4xl font-light text-white mb-2 tracking-wide">
                  {currentText.title}
                </h1>
                <div className="w-12 h-0.5 bg-gradient-to-r from-white to-gray-300 rounded-full mx-auto mb-4"></div>
                <p className="text-gray-300 text-sm font-light">
                  {currentText.subtitle}
                </p>
              </motion.div>

              {/* Two Column Layout - Contact Info Left, Photo Right */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center justify-items-center">
                
                {/* Left Side - All Contact Information Boxes */}
                <div className="space-y-4 w-full max-w-md">
                  {/* Email */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <div className="w-full bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300 shadow-lg p-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-xl">📧</span>
                        <label className="text-xs font-medium text-gray-300">Email</label>
                      </div>
                      <div className="text-sm text-white font-light leading-relaxed">{siteContent.personalInfo.email}</div>
                    </div>
                  </motion.div>

                  {/* Student ID */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <div className="w-full bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300 shadow-lg p-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-xl">🎓</span>
                        <label className="text-xs font-medium text-gray-300">Student ID</label>
                      </div>
                      <div className="text-sm text-white font-light leading-relaxed">{siteContent.personalInfo.studentNumber}</div>
                    </div>
                  </motion.div>

                  {/* Institution */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <div className="w-full bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300 shadow-lg p-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-xl">🏛️</span>
                        <label className="text-xs font-medium text-gray-300">Institution</label>
                      </div>
                      <div className="text-sm text-white font-light leading-relaxed">{siteContent.personalInfo.university}</div>
                    </div>
                  </motion.div>

                  {/* Program */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <div className="w-full bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300 shadow-lg p-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-xl">📊</span>
                        <label className="text-xs font-medium text-gray-300">Program</label>
                      </div>
                      <div className="text-sm text-white font-light leading-relaxed">{siteContent.personalInfo.course}</div>
                    </div>
                  </motion.div>

                  {/* Academic Advisor */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <div className="w-full bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300 shadow-lg p-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-xl">👨‍🏫</span>
                        <label className="text-xs font-medium text-gray-300">Academic Advisor</label>
                      </div>
                      <div className="text-sm text-white font-light leading-relaxed">{siteContent.personalInfo.advisor}</div>
                    </div>
                  </motion.div>
                </div>

                {/* Right Side - Full Body Photo */}
                <div className="flex justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="relative"
                  >
                    <motion.img
                      src="/profile.jpg"
                      alt="Profile"
                      className="w-64 h-80 sm:w-72 sm:h-96 lg:w-80 lg:h-[28rem] rounded-2xl border-4 border-white/30 shadow-2xl object-cover"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      onError={(e) => {
                        e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDMyMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMjAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjE2MCIgY3k9IjEyMCIgcj0iNDAiIGZpbGw9IiM5Q0EzQUYiLz4KPHBhdGggZD0iODAgMjAwSDI0MFYzODBIMjAwVjM2MEgxMjBWMzQwSDgwVjIwMFoiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+';
                      }}
                    />
                    <motion.div
                      className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full border-2 border-gray-900 flex items-center justify-center shadow-lg"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <span className="text-gray-900 text-sm font-bold">✓</span>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
