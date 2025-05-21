import { useEffect } from 'react';
import AboutSection from './sections/AboutSection';
import ExperienceSection from './sections/ExperienceSection';
import ProjectsSection from './sections/ProjectsSection';
import CertificationsSection from './sections/CertificationsSection';
import ContactSection from './sections/ContactSection';
import { useSpotlight } from '../context/SpotlightContext';

const MainContent = () => {
  const { setActiveSection } = useSpotlight();

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    const handleScroll = () => {
      const rightPane = document.querySelector('.right-pane');
      const scrollPosition = rightPane?.scrollTop || 0;
      const rightPaneHeight = rightPane?.clientHeight || 0;

      let lastVisibleSection: HTMLElement | null = null;

      sections.forEach((section) => {
        const el = section as HTMLElement;
        const sectionTop = el.offsetTop - 100;
        const sectionBottom = sectionTop + el.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          el.classList.add('fade-in');
          setActiveSection(el.id);
        }

        const buffer = 200;
        if (scrollPosition + rightPaneHeight >= el.offsetTop + buffer) {
          lastVisibleSection = el;
        }
      });

      if (lastVisibleSection) {
        setActiveSection(lastVisibleSection.id);
      }
    };

    const rightPane = document.querySelector('.right-pane');
    if (rightPane) {
      rightPane.addEventListener('scroll', handleScroll);
      handleScroll();

      return () => rightPane.removeEventListener('scroll', handleScroll);
    }
  }, [setActiveSection]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const rightPane = document.querySelector('.right-pane');
      if (rightPane) {
        rightPane.scrollBy({
          top: e.deltaY,
          behavior: 'auto',
        });
      }
      e.preventDefault();
    };

    document.addEventListener('wheel', handleWheel, { passive: false });
    return () => document.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <div className="right-pane flex-1 overflow-y-scroll h-screen px-10 py-12 relative z-0">
      <div className="max-w-3xl ml-[-40px] space-y-28">
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
        <footer className="text-center py-4 text-xs text-custom-subtle">
          &copy; 2025 Sravya. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default MainContent;
