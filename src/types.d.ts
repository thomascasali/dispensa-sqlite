// Type declarations for .jsx file imports
declare module '*.jsx' {
  const component: React.ComponentType<any>;
  export default component;
}

// Export types for slide components if needed
export interface SlideProps {
  id: number;
  title: string;
  category: string;
  content?: any;
}

export interface DashboardProps {
  onStartPresentation: (slideIndex?: number) => void;
  onGoToSlide: (slideIndex: number) => void;
}

export interface SlideViewerProps {
  initialSlide?: number;
  onBackToDashboard: () => void;
}