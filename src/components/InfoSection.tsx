import React from 'react';
import { motion } from 'framer-motion';
import { siteContent } from '../content/site';

export const InfoSection: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-4 sm:py-6"
    >
      <div className="w-full px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-4 sm:p-6 border border-white border-opacity-20 max-w-2xl mx-auto"
        >
          <div className="text-center mb-4">
            <h2 className="text-lg sm:text-xl font-light mb-2 text-white tracking-wide">
              Contact Information
            </h2>
            <div className="w-8 h-0.5 bg-gradient-to-r from-white to-blue-200 mx-auto mb-3 rounded-full"></div>
            <p className="text-blue-100 text-xs font-light">
              Academic credentials and contact details
            </p>
          </div>
          
          {/* Responsive layout: Info on left, Centered Photo */}
          <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 items-center">
            {/* Left side - Contact Information */}
            <div className="space-y-2">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.01 }}
                className="bg-white bg-opacity-10 rounded-lg p-2 border border-white border-opacity-20"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-white rounded flex items-center justify-center shadow-sm">
                    <span className="text-blue-900 text-xs">📧</span>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-white">Email</h3>
                    <p className="text-blue-200 text-xs font-light">{siteContent.personalInfo.email}</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.01 }}
                className="bg-white bg-opacity-10 rounded-lg p-2 border border-white border-opacity-20"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-white rounded flex items-center justify-center shadow-sm">
                    <span className="text-blue-900 text-xs">🎓</span>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-white">Student ID</h3>
                    <p className="text-blue-200 text-xs font-light">{siteContent.personalInfo.studentId}</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.01 }}
                className="bg-white bg-opacity-10 rounded-lg p-2 border border-white border-opacity-20"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-white rounded flex items-center justify-center shadow-sm">
                    <span className="text-blue-900 text-xs">🏫</span>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-white">Institution</h3>
                    <p className="text-blue-200 text-xs font-light">{siteContent.personalInfo.institution}</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.25 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.01 }}
                className="bg-white bg-opacity-10 rounded-lg p-2 border border-white border-opacity-20"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-white rounded flex items-center justify-center shadow-sm">
                    <span className="text-blue-900 text-xs">📚</span>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-white">Program</h3>
                    <p className="text-blue-200 text-xs font-light">{siteContent.personalInfo.program}</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.01 }}
                className="bg-white bg-opacity-10 rounded-lg p-2 border border-white border-opacity-20"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-white rounded flex items-center justify-center shadow-sm">
                    <span className="text-blue-900 text-xs">👨‍🏫</span>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-white">Academic Advisor</h3>
                    <p className="text-blue-200 text-xs font-light">{siteContent.personalInfo.academicAdvisor}</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Right side - Centered Profile Photo */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="relative">
                <motion.img
                  src="/profile.jpg"
                  alt="Profile"
                  className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-full border-3 border-white/40 shadow-xl object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzg0IiBoZWlnaHQ9IjM4NCIgdmlld0JveD0iMCAwIDM4NCAzODQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjE5MiIgY3k9IjE5MiIgcj0iMTkyIiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjE5MiIgY3k9IjE0NCIgcj0iNzIiIGZpbGw9IiM5Q0EzQUYiLz4KPHBhdGggZD0iOTYgMjg4Qzk2IDI4OCAyODggMjg4IDI4OCAyODhWMzIwSDI4OFYzODRIOTZWMzIwSDk2VjI4OFoiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+';
                  }}
                />
                {/* Status indicator */}
                <motion.div 
                  className="absolute -bottom-2 -right-2 w-6 h-6 bg-white rounded-full border-2 border-blue-900 flex items-center justify-center shadow-sm"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-blue-900 text-xs font-bold">✓</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
          
          {/* Bottom message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-4 text-center"
          >
            <div className="bg-white bg-opacity-10 rounded-lg p-3 border border-white border-opacity-20">
              <p className="text-blue-100 text-xs font-light mb-1">
                Available for academic collaboration and research opportunities
              </p>
              <p className="text-blue-200 text-xs">
                Specializing in cross-cultural communication and multilingual content adaptation
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};