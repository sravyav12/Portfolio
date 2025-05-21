import { createContext, useContext, useState, ReactNode } from 'react';

interface SpotlightContextType {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const SpotlightContext = createContext<SpotlightContextType | undefined>(undefined);

export function SpotlightProvider({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <SpotlightContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </SpotlightContext.Provider>
  );
}

export function useSpotlight() {
  const context = useContext(SpotlightContext);
  if (context === undefined) {
    throw new Error('useSpotlight must be used within a SpotlightProvider');
  }
  return context;
}