import React from 'react';
import { motion } from 'framer-motion';
import { useCountUp } from '../hooks/useInView';
import { Section } from './Section';
import { siteContent } from '../content/site';

const KpiCounter: React.FC<{ 
  label: string; 
  value: number; 
  unit: string; 
  description: string; 
}> = ({ label, value, unit, description }) => {
  const { count, ref } = useCountUp(value);

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="card text-center"
    >
      <div className="text-3xl font-bold text-accent-600 dark:text-accent-400 mb-2">
        {count}{unit}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        {label}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm">
        {description}
      </p>
    </motion.div>
  );
};

export const KpiCounters: React.FC = () => {
  const project = siteContent.sampleProject;

  return (
    <Section className="py-16" delay={0.8}>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Results & Impact
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Key performance indicators demonstrating project success
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {project.kpis.map((kpi, index) => (
          <KpiCounter
            key={index}
            label={kpi.label}
            value={kpi.value}
            unit={kpi.unit}
            description={kpi.description}
          />
        ))}
      </div>
    </Section>
  );
};
