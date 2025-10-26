import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Section } from './Section';
import { siteContent } from '../content/site';

export const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'source' | 'translation'>('source');
  const project = siteContent.sampleProject;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };

  return (
    <Section className="py-16" delay={0.4}>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Sample Translation
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Before and after comparison of the translated content
        </p>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        {/* Tab Navigation */}
        <div className="flex mb-6 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
          <button
            onClick={() => setActiveTab('source')}
            className={`flex-1 py-3 px-4 rounded-md font-medium transition-colors ${
              activeTab === 'source'
                ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            Source Excerpt
          </button>
          <button
            onClick={() => setActiveTab('translation')}
            className={`flex-1 py-3 px-4 rounded-md font-medium transition-colors ${
              activeTab === 'translation'
                ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            Final Translation
          </button>
        </div>
        
        {/* Tab Content */}
        <div className="card">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {activeTab === 'source' ? 'English (Source)' : 'French (Target)'}
            </h3>
            <button
              onClick={() => copyToClipboard(
                activeTab === 'source' ? project.sourceExcerpt : project.finalTranslation
              )}
              className="btn-secondary text-sm"
            >
              📋 Copy
            </button>
          </div>
          
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {activeTab === 'source' ? project.sourceExcerpt : project.finalTranslation}
            </p>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};
