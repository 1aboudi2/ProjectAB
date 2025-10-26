import React from 'react';
import { SecondPage } from '../components/SecondPage';
import { SimpleNav } from '../components/SimpleNav';
import { InfoSection } from '../components/InfoSection';

export const Project: React.FC = () => {
  return (
    <div className="min-h-screen">
      <SimpleNav />
      <SecondPage />
      <InfoSection />
    </div>
  );
};