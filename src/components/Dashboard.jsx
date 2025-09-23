import React from 'react';
import { Play, Book, BarChart3, Settings, Database, Code, BookOpen, Server, Zap, User, Users } from 'lucide-react';
import { slides, slideCategories, getTotalSlides, getSlidesByCategory } from '../data/slides.jsx';

const Dashboard = ({ onStartPresentation, onGoToSlide }) => {
  const totalSlides = getTotalSlides();

  const getCategoryGradient = (category) => {
    const gradients = {
      blue: 'from-blue-900 to-blue-800',
      purple: 'from-purple-900 to-purple-800',
      green: 'from-green-900 to-green-800',
      orange: 'from-orange-900 to-orange-800',
      cyan: 'from-cyan-900 to-cyan-800',
      red: 'from-red-900 to-red-800'
    };
    return gradients[slideCategories[category]?.color] || 'from-gray-900 to-gray-800';
  };

  const getCategoryIcon = (category) => {
    const icons = {
      intro: Database,
      theory: BookOpen,
      sqlite: Database,
      sql: Code,
      practice: Settings,
      advanced: Zap
    };
    return icons[category] || Book;
  };

  const getCategoryTextColor = (category) => {
    const colors = {
      blue: 'text-blue-300',
      purple: 'text-purple-300',
      green: 'text-green-300',
      orange: 'text-orange-300',
      cyan: 'text-cyan-300',
      red: 'text-red-300'
    };
    return colors[slideCategories[category]?.color] || 'text-gray-300';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      {/* Header */}
      <div className="relative z-10 bg-gray-900/80 backdrop-blur-lg border-b border-gray-700 shadow-2xl">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 animate-fadeInUp">
              <Database size={48} className="text-blue-400 animate-float" />
              <div>
                <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Basi di Dati SQLite
                </h1>
                <p className="text-gray-400 mt-2 text-lg">ITTS Rimini - Corso Interattivo by Thomas Casali</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">{totalSlides}</div>
                <div className="text-sm text-gray-400">Slide Totali</div>
              </div>
              <button
                onClick={() => onStartPresentation(0)}
                className="group flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Play size={24} className="group-hover:animate-pulse" />
                <span className="text-lg font-semibold">Inizia Presentazione</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-8">
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {Object.entries(slideCategories).map(([key, category]) => {
            const categorySlides = getSlidesByCategory(key);
            const IconComponent = getCategoryIcon(key);
            return (
              <div key={key} className={`bg-gradient-to-br ${getCategoryGradient(key)} p-6 rounded-xl border border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer`}>
                <div className="flex flex-col items-center text-center">
                  <IconComponent className={`${getCategoryTextColor(key)} mb-3`} size={32} />
                  <h3 className="font-semibold text-white text-sm mb-1">{category.name}</h3>
                  <div className="text-3xl font-bold text-white mb-1">
                    {categorySlides.length}
                  </div>
                  <div className="text-xs text-gray-300">slide</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Course Sections */}
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <BookOpen className="mr-3 text-blue-400" size={32} />
              Naviga per Argomento
            </h2>
            <div className="space-y-8">
              {Object.entries(slideCategories).map(([key, category]) => {
                const categorySlides = getSlidesByCategory(key);
                const IconComponent = getCategoryIcon(key);
                if (categorySlides.length === 0) return null;

                return (
                  <div key={key} className="bg-gray-900/60 backdrop-blur-lg rounded-xl border border-gray-700 p-6 shadow-xl">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <IconComponent className={`${getCategoryTextColor(key)} mr-3`} size={28} />
                        <h3 className="text-2xl font-semibold text-white">{category.name}</h3>
                      </div>
                      <span className={`text-sm bg-gradient-to-r ${getCategoryGradient(key)} px-4 py-2 rounded-full text-white font-medium`}>
                        {categorySlides.length} slide
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {categorySlides.map((slide) => (
                        <button
                          key={slide.id}
                          onClick={() => onGoToSlide(slide.id - 1)}
                          className="text-left p-4 rounded-xl bg-gray-800/50 border border-gray-600 hover:border-blue-500 hover:bg-gray-700/50 transition-all duration-300 group transform hover:scale-102"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-medium text-white group-hover:text-blue-300 transition-colors">
                                {slide.title}
                              </div>
                              <div className="text-sm text-gray-400 mt-1">Slide {slide.id}</div>
                            </div>
                            <Play size={20} className="text-gray-500 group-hover:text-blue-400 transition-colors" />
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Course Progress */}
            <div className="bg-gray-900/60 backdrop-blur-lg rounded-xl border border-gray-700 p-6 shadow-xl">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <BarChart3 className="mr-3 text-blue-400" size={24} />
                Panoramica Corso
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">Progresso</span>
                    <span className="text-white font-medium">0%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-3 rounded-full transition-all duration-500" style={{ width: '0%' }}></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-blue-900/50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-400">{totalSlides}</div>
                    <div className="text-xs text-gray-400">Slide Totali</div>
                  </div>
                  <div className="bg-green-900/50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-400">6</div>
                    <div className="text-xs text-gray-400">Sezioni</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-blue-900/60 to-cyan-900/60 backdrop-blur-lg rounded-xl border border-blue-700 p-6 shadow-xl">
              <h3 className="text-xl font-semibold text-white mb-6">🚀 Accesso Rapido</h3>
              <div className="space-y-4">
                <button
                  onClick={() => onStartPresentation(0)}
                  className="w-full flex items-center justify-between p-4 bg-gray-800/50 border border-gray-600 rounded-lg hover:bg-gray-700/50 hover:border-blue-500 transition-all duration-300 group"
                >
                  <span className="font-medium text-white group-hover:text-blue-300">Inizia dall'inizio</span>
                  <Play size={20} className="text-blue-400 group-hover:animate-pulse" />
                </button>
                <button
                  onClick={() => onGoToSlide(7)} // Vai alla prima slide pratica
                  className="w-full flex items-center justify-between p-4 bg-gray-800/50 border border-gray-600 rounded-lg hover:bg-gray-700/50 hover:border-orange-500 transition-all duration-300 group"
                >
                  <span className="font-medium text-white group-hover:text-orange-300">Vai alla pratica</span>
                  <Settings size={20} className="text-orange-400 group-hover:animate-pulse" />
                </button>
              </div>
            </div>

            {/* Course Info */}
            <div className="bg-gray-900/60 backdrop-blur-lg rounded-xl border border-gray-700 p-6 shadow-xl">
              <h3 className="text-xl font-semibold text-white mb-6">📋 Info Corso</h3>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Durata stimata:</span>
                  <span className="font-medium text-white">2-3 ore</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Livello:</span>
                  <span className="font-medium text-blue-400">Principiante</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Prerequisiti:</span>
                  <span className="font-medium text-green-400">Nessuno</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Istituto:</span>
                  <span className="font-medium text-purple-400">ITTS Rimini</span>
                </div>
              </div>
            </div>

            {/* Learning Path */}
            <div className="bg-gradient-to-br from-purple-900/60 to-pink-900/60 backdrop-blur-lg rounded-xl border border-purple-700 p-6 shadow-xl">
              <h3 className="text-xl font-semibold text-white mb-6">🎯 Percorso di Apprendimento</h3>
              <div className="space-y-3">
                {Object.entries(slideCategories).map(([key, category], index) => (
                  <div key={key} className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${getCategoryGradient(key)} flex items-center justify-center text-white font-bold text-sm`}>
                      {index + 1}
                    </div>
                    <span className="text-gray-300 text-sm">{category.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;