import React from 'react';
import { motion } from 'framer-motion';
import { siteContent } from '../content/site';

export const InfoSection: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white bg-opacity-5 backdrop-blur-lg rounded-3xl p-16 border border-white border-opacity-10"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-thin mb-6 text-white tracking-wide">
              Professional Information
            </h2>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto mb-8"></div>
            <p className="text-gray-300 text-lg font-light max-w-2xl mx-auto">
              Academic credentials and professional contact details
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white bg-opacity-5 rounded-xl p-8 border border-white border-opacity-10"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-14 h-14 bg-slate-700 rounded-xl flex items-center justify-center">
                  <span className="text-white text-xl">📧</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">Email</h3>
                  <p className="text-gray-300 text-sm font-light">{siteContent.personalInfo.email}</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white bg-opacity-5 rounded-xl p-8 border border-white border-opacity-10"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-14 h-14 bg-slate-700 rounded-xl flex items-center justify-center">
                  <span className="text-white text-xl">🎓</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">Student ID</h3>
                  <p className="text-gray-300 text-sm font-light">{siteContent.personalInfo.studentNumber}</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white bg-opacity-5 rounded-xl p-8 border border-white border-opacity-10"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-14 h-14 bg-slate-700 rounded-xl flex items-center justify-center">
                  <span className="text-white text-xl">🏫</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">Institution</h3>
                  <p className="text-gray-300 text-sm font-light">{siteContent.personalInfo.university}</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white bg-opacity-5 rounded-xl p-8 border border-white border-opacity-10"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-14 h-14 bg-slate-700 rounded-xl flex items-center justify-center">
                  <span className="text-white text-xl">📚</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">Program</h3>
                  <p className="text-gray-300 text-sm font-light">{siteContent.personalInfo.course}</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white bg-opacity-5 rounded-xl p-8 border border-white border-opacity-10"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-14 h-14 bg-slate-700 rounded-xl flex items-center justify-center">
                  <span className="text-white text-xl">🌍</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">Language Pairs</h3>
                  <p className="text-gray-300 text-sm font-light">{siteContent.personalInfo.translationPairs}</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white bg-opacity-5 rounded-xl p-8 border border-white border-opacity-10"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-14 h-14 bg-slate-700 rounded-xl flex items-center justify-center">
                  <span className="text-white text-xl">👨‍🏫</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">Academic Advisor</h3>
                  <p className="text-gray-300 text-sm font-light">{siteContent.personalInfo.advisor}</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Language Proficiency Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="bg-white bg-opacity-5 rounded-2xl p-12 border border-white border-opacity-10">
              <h3 className="text-2xl font-light text-center mb-8 text-white tracking-wide">Language Proficiency</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {siteContent.personalInfo.languages.map((language, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white bg-opacity-10 rounded-xl p-6 text-center border border-white border-opacity-10"
                  >
                    <div className="text-3xl mb-3">🌐</div>
                    <p className="text-white font-medium text-lg">{language}</p>
                    <p className="text-gray-400 text-sm font-light">Advanced Proficiency</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          <div className="text-center">
            <div className="bg-white bg-opacity-5 rounded-2xl p-8 border border-white border-opacity-10">
              <p className="text-gray-300 text-lg font-light mb-3">
                Available for international translation projects and academic collaboration
              </p>
              <p className="text-gray-400 text-sm font-light">
                Specializing in cross-cultural communication and multilingual content adaptation
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};