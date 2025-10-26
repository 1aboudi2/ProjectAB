import React from 'react';
import { WelcomePage } from '../components/WelcomePage';
import { SimpleNav } from '../components/SimpleNav';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <SimpleNav />
      <WelcomePage />
    </div>
  );
};