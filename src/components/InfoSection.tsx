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
      className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white bg-opacity-5 backdrop-blur-lg rounded-2xl p-12 border border-white border-opacity-10"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Translation Professional
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg font-light">
              International translation expertise and academic credentials
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white bg-opacity-10 rounded-xl p-6 border border-white border-opacity-20"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">📧</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-blue-300 text-sm font-light">{siteContent.personalInfo.email}</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white bg-opacity-10 rounded-xl p-6 border border-white border-opacity-20"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">🎓</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Student ID</h3>
                  <p className="text-indigo-300 text-sm font-light">{siteContent.personalInfo.studentNumber}</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white bg-opacity-10 rounded-xl p-6 border border-white border-opacity-20"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">🏫</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Institution</h3>
                  <p className="text-green-300 text-sm font-light">{siteContent.personalInfo.university}</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white bg-opacity-10 rounded-xl p-6 border border-white border-opacity-20"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">📚</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Program</h3>
                  <p className="text-purple-300 text-sm font-light">{siteContent.personalInfo.course}</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white bg-opacity-10 rounded-xl p-6 border border-white border-opacity-20"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">🌍</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Language Pairs</h3>
                  <p className="text-teal-300 text-sm font-light">{siteContent.personalInfo.translationPairs}</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white bg-opacity-10 rounded-xl p-6 border border-white border-opacity-20"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">👨‍🏫</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Academic Advisor</h3>
                  <p className="text-orange-300 text-sm font-light">{siteContent.personalInfo.advisor}</p>
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
            className="mt-12"
          >
            <div className="bg-white bg-opacity-10 rounded-xl p-8 border border-white border-opacity-20">
              <h3 className="text-xl font-semibold text-center mb-6 text-blue-300">Language Proficiency</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {siteContent.personalInfo.languages.map((language, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white bg-opacity-20 rounded-lg p-4 text-center"
                  >
                    <div className="text-2xl mb-2">🌐</div>
                    <p className="text-white font-medium">{language}</p>
                    <p className="text-gray-300 text-xs">Native/Advanced</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          <div className="mt-12 text-center">
            <div className="bg-white bg-opacity-10 rounded-xl p-6 border border-white border-opacity-20">
              <p className="text-gray-300 text-lg font-light mb-2">
                Open to international translation projects and academic collaboration
              </p>
              <p className="text-gray-400 text-sm">
                Specializing in cross-cultural communication and multilingual content adaptation
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};