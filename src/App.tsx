import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SimpleNav } from './components/SimpleNav';
import { WelcomePage } from './components/WelcomePage';
import { SecondPage } from './components/SecondPage';
import { InfoSection } from './components/InfoSection';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <SimpleNav />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/page2" element={<SecondPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;