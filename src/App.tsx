import { useEffect } from 'react';
import Layout from './components/Layout';
import { SpotlightProvider } from './context/SpotlightContext';

function App() {
  // Handle mouse movement for spotlight effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <SpotlightProvider>
      <Layout />
    </SpotlightProvider>
  );
}

export default App;