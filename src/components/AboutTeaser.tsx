import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './Section';
import { siteContent } from '../content/site';

export const AboutTeaser: React.FC = () => {
  return (
    <Section className="py-16" delay={0.2}>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {siteContent.about.title}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          {siteContent.about.description}
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {siteContent.about.highlights.map((highlight, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="card text-center"
          >
            <div className="w-12 h-12 bg-accent-100 dark:bg-accent-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-accent-600 dark:text-accent-400 text-xl">✓</span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 font-medium">
              {highlight}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
