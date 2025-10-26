import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { AboutTeaser } from '../components/AboutTeaser';
import { ServicesGrid } from '../components/ServicesGrid';
import { LanguagesStrip } from '../components/LanguagesStrip';
import { Footer } from '../components/Footer';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <main>
        <Hero />
        <AboutTeaser />
        <ServicesGrid />
        <LanguagesStrip />
      </main>
      <Footer />
    </div>
  );
};
