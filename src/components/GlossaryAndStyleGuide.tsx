import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './Section';
import { siteContent } from '../content/site';

export const GlossaryAndStyleGuide: React.FC = () => {
  const project = siteContent.sampleProject;

  return (
    <Section className="py-16 bg-gray-50 dark:bg-gray-900" delay={0.6}>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Quality Assurance
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Glossary and style guide ensure consistency and accuracy
        </p>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Glossary */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="card"
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            📚 Glossary
          </h3>
          <div className="space-y-4">
            {project.glossary.map((item, index) => (
              <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-3 last:border-b-0">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {item.term}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 ml-2">
                      ({item.context})
                    </span>
                  </div>
                  <span className="text-accent-600 dark:text-accent-400 font-medium">
                    {item.translation}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* Style Guide */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="card"
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            📝 Style Guide
          </h3>
          <div className="space-y-4">
            {project.styleGuide.map((rule, index) => (
              <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-3 last:border-b-0">
                <div className="flex justify-between items-start">
                  <span className="font-medium text-gray-900 dark:text-white">
                    {rule.rule}
                  </span>
                  <span className="text-gray-600 dark:text-gray-300 text-right max-w-xs">
                    {rule.guideline}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
