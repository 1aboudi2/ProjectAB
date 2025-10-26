import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Section } from '../components/Section';
import { ProjectOverview } from '../components/ProjectOverview';
import { Timeline } from '../components/Timeline';
import { Tabs } from '../components/Tabs';
import { GlossaryAndStyleGuide } from '../components/GlossaryAndStyleGuide';
import { KpiCounters } from '../components/KpiCounters';
import { Footer } from '../components/Footer';

export const Project: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <main>
        <ProjectOverview />
        <Timeline />
        <Tabs />
        <GlossaryAndStyleGuide />
        <KpiCounters />
        
        {/* Back to Home Button */}
        <Section className="py-16">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link to="/" className="btn-primary">
                ← Back to Home
              </Link>
            </motion.div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
};
