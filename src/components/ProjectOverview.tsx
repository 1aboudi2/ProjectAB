import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './Section';
import { siteContent } from '../content/site';

export const ProjectOverview: React.FC = () => {
  const project = siteContent.sampleProject;
  
  return (
    <Section className="py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Project Overview
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          A detailed look at a recent translation project
        </p>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="card max-w-4xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Client</label>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">{project.clientName}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Domain</label>
              <p className="text-lg text-gray-900 dark:text-white">{project.domain}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Language Pair</label>
              <p className="text-lg text-gray-900 dark:text-white">
                {project.sourceLanguage} → {project.targetLanguage}
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Word Count</label>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">{project.wordCount} words</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Tools Used</label>
              <div className="flex flex-wrap gap-2 mt-1">
                {project.tools.map((tool, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-accent-100 dark:bg-accent-900 text-accent-700 dark:text-accent-300 rounded-full text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Delivery Date</label>
              <p className="text-lg text-gray-900 dark:text-white">{project.deliveryDate}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};
