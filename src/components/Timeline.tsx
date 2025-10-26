import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './Section';

const timelineSteps = [
  { title: "Intake", description: "Project analysis and requirements gathering", icon: "📋" },
  { title: "Analysis", description: "Content review and terminology research", icon: "🔍" },
  { title: "Translation", description: "Professional translation with CAT tools", icon: "✍️" },
  { title: "QA", description: "Quality assurance and proofreading", icon: "✅" },
  { title: "Delivery", description: "Final review and project delivery", icon: "📤" }
];

export const Timeline: React.FC = () => {
  return (
    <Section className="py-16 bg-gray-50 dark:bg-gray-900" delay={0.2}>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Translation Process
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          A systematic approach ensuring quality and consistency
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-accent-200 dark:bg-accent-800 hidden md:block" />
          
          <div className="space-y-12">
            {timelineSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="card">
                    <div className="flex items-center mb-4">
                      <div className="text-3xl mr-4">{step.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="hidden md:flex items-center justify-center w-12 h-12 bg-accent-600 rounded-full border-4 border-white dark:border-gray-900 relative z-10">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
