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
      className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white py-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white bg-opacity-5 backdrop-blur-lg rounded-2xl p-12 border border-white border-opacity-10"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-4 text-white tracking-wide">
              Contact Information
            </h2>
            <div className="w-20 h-px bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg font-light">
              Academic credentials and contact details
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white bg-opacity-5 rounded-xl p-6 border border-white border-opacity-10"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">📧</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Email</h3>
                  <p className="text-blue-300 text-sm font-light">{siteContent.personalInfo.email}</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white bg-opacity-5 rounded-xl p-6 border border-white border-opacity-10"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">🎓</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Student ID</h3>
                  <p className="text-indigo-300 text-sm font-light">{siteContent.personalInfo.studentNumber}</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white bg-opacity-5 rounded-xl p-6 border border-white border-opacity-10"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">🏫</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Institution</h3>
                  <p className="text-green-300 text-sm font-light">{siteContent.personalInfo.university}</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white bg-opacity-5 rounded-xl p-6 border border-white border-opacity-10"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">📚</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Program</h3>
                  <p className="text-purple-300 text-sm font-light">{siteContent.personalInfo.course}</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white bg-opacity-5 rounded-xl p-6 border border-white border-opacity-10 md:col-span-2 lg:col-span-1"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">👨‍🏫</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Academic Advisor</h3>
                  <p className="text-orange-300 text-sm font-light">{siteContent.personalInfo.advisor}</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-white bg-opacity-5 rounded-xl p-6 border border-white border-opacity-10">
              <p className="text-gray-300 text-lg font-light mb-2">
                Available for academic collaboration and research opportunities
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