import { useState } from 'react';
import Dashboard from './components/Dashboard.jsx';
import SlideViewer from './components/SlideViewer.jsx';

function App() {
  const [currentView, setCurrentView] = useState('dashboard'); // 'dashboard' | 'presentation'
  const [startSlide, setStartSlide] = useState(0);

  const handleStartPresentation = (slideIndex = 0) => {
    setStartSlide(slideIndex);
    setCurrentView('presentation');
  };

  const handleBackToDashboard = () => {
    setCurrentView('dashboard');
  };

  const handleGoToSlide = (slideIndex: number) => {
    setStartSlide(slideIndex);
    setCurrentView('presentation');
  };

  return (
    <div className="App">
      {currentView === 'dashboard' ? (
        <Dashboard
          onStartPresentation={handleStartPresentation}
          onGoToSlide={handleGoToSlide}
        />
      ) : (
        <SlideViewer
          initialSlide={startSlide}
          onBackToDashboard={handleBackToDashboard}
        />
      )}
    </div>
  );
}

export default App;