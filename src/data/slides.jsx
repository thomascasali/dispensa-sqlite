import { introSlides } from './slides/introSlides.jsx';
import { theorySlides } from './slides/theorySlides.jsx';
import { sqliteSlides } from './slides/sqliteSlides.jsx';
import { sqlSlides } from './slides/sqlSlides.jsx';
import { practiceSlides } from './slides/practiceSlides.jsx';
import { advancedSlides } from './slides/advancedSlides.jsx';
import { missingSlides } from './slides/missingSlides.jsx';

// Combina tutte le slide in ordine
export const slides = [
  ...introSlides,      // Slide 1-2, 40
  ...theorySlides,     // Slide 3-4, 33, 37
  ...sqliteSlides,     // Slide 5-6, 18-19, 29-30
  ...sqlSlides,        // Slide 7, 9-12, 22-24, 27-28
  ...practiceSlides,   // Slide 8, 13-14, 21, 39
  ...advancedSlides,   // Slide 15-17, 20, 25-26, 31-32, 34-36, 38
  ...missingSlides     // Slide 21-30 (slide aggiuntive per completare 40)
].sort((a, b) => a.id - b.id); // Ordina per ID per mantenere la sequenza corretta

export const slideCategories = {
  intro: { name: "Introduzione", color: "blue", icon: "Database" },
  theory: { name: "Teoria", color: "purple", icon: "BookOpen" },
  sqlite: { name: "SQLite", color: "green", icon: "Database" },
  sql: { name: "SQL", color: "cyan", icon: "Code" },
  practice: { name: "Pratica", color: "orange", icon: "Settings" },
  advanced: { name: "Avanzato", color: "red", icon: "Zap" }
};

export const getTotalSlides = () => slides.length;
export const getSlidesByCategory = (category) => slides.filter(slide => slide.category === category);
export const getSlideById = (id) => slides.find(slide => slide.id === id);