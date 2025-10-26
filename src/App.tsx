import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SimpleNav } from './components/SimpleNav';
import { WelcomePage } from './components/WelcomePage';
import { ResearchPage } from './components/ResearchPage';
import { ContactPage } from './components/ContactPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <SimpleNav />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;