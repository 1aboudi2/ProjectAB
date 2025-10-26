import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './Section';
import { siteContent } from '../content/site';

export const LanguagesStrip: React.FC = () => {
  return (
    <Section className="py-12" delay={0.6}>
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Languages
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Professional translation services across multiple language pairs
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-4">
        {siteContent.languages.map((language, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md border border-gray-200 dark:border-gray-700"
          >
            <span className="text-lg">{language.flag}</span>
            <span className="font-medium text-gray-900 dark:text-white">
              {language.code}
            </span>
            <span className="text-gray-500 dark:text-gray-400 text-sm">
              {language.name}
            </span>
          </motion.div>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          More language pairs available upon request
        </p>
      </div>
    </Section>
  );
};
