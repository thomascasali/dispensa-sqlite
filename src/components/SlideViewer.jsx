import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';
import { slides } from '../data/slides.jsx';

const SlideViewer = ({ onBackToDashboard, initialSlide = 0 }) => {
  const [currentSlide, setCurrentSlide] = useState(initialSlide);
  const [animationKey, setAnimationKey] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
      setAnimationKey(animationKey + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
      setAnimationKey(animationKey + 1);
    }
  };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
    setAnimationKey(animationKey + 1);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'Escape') onBackToDashboard();
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide, onBackToDashboard]);

  const progressPercent = ((currentSlide + 1) / slides.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-blue-500 transition-all duration-300 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 pt-12 min-h-screen flex flex-col">
        <div className="max-w-7xl mx-auto flex-1 flex flex-col w-full">
          {/* Slide Header */}
          <div className="text-center mb-4 md:mb-6 flex-shrink-0">
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-600 text-white border border-gray-500 rounded-lg shadow-sm hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft size={20} />
                <span className="hidden sm:inline">Precedente</span>
              </button>

              <div className="text-center">
                <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {slides[currentSlide].title}
                </h1>
                <div className="text-sm text-gray-400 mt-2">
                  Slide {currentSlide + 1} di {slides.length}
                </div>
              </div>

              <button
                onClick={nextSlide}
                disabled={currentSlide === slides.length - 1}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-sm hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <span className="hidden sm:inline">Successiva</span>
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Slide Content */}
          <div
            key={animationKey}
            className="bg-gray-900/50 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-700 p-6 md:p-12 flex-1 overflow-y-auto animate-fadeIn min-h-0"
          >
            <div className="min-h-full">
              {slides[currentSlide].content}
            </div>
          </div>

          {/* Navigation Footer */}
          <div className="bg-gray-900/80 backdrop-blur-lg border-t border-gray-700 p-4 mt-4 rounded-lg">
            <div className="flex items-center justify-between">
              <button
                onClick={onBackToDashboard}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
              >
                <Home size={20} />
                <span>Dashboard</span>
              </button>

              <div className="flex items-center space-x-4">
                <span className="text-gray-400">
                  Slide {currentSlide + 1} di {slides.length}
                </span>
                <div className="w-64 bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>

              {/* Slide Navigation Dots */}
              <div className="flex space-x-1 overflow-x-auto max-w-xs">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentSlide
                        ? 'bg-blue-500 w-6'
                        : 'bg-gray-500 hover:bg-gray-400'
                    }`}
                    title={`Vai alla slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Keyboard Instructions */}
          <div className="text-center text-sm text-gray-500 mt-2 flex-shrink-0">
            Usa le frecce ← → per navigare | ESC per tornare alla dashboard
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default SlideViewer;