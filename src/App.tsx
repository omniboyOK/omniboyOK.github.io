import { useState } from 'react';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Resume } from './components/Resume';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';

function App() {
  const [activeTab, setActiveTab] = useState<string>('home');

  const renderSection = () => {
    switch (activeTab) {
      case 'home':
        return <Home onNavigateToResume={() => setActiveTab('resume')} />;
      case 'resume':
        return <Resume />;
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigateToResume={() => setActiveTab('resume')} />;
    }
  };

  return (
    <div className="app-container">
      {/* Sticky Capsule Navigation */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <main style={{ flexGrow: 1, minHeight: '60vh' }}>
        {renderSection()}
      </main>

      {/* Neobrutalist Footer */}
      <footer className="app-footer">
        <div className="footer-card neo-card">
          <p>© {new Date().getFullYear()} — Diseñado por Pablo Barrea</p>
          <div className="footer-credits">
            <span>Omniboy</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
