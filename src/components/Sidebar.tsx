import { Github, Instagram, Linkedin } from 'lucide-react';
import { useSpotlight } from '../context/SpotlightContext';

const Sidebar = () => {
  const { activeSection, setActiveSection } = useSpotlight();

  const handleNavClick = (section: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      const rightPane = document.querySelector('.right-pane');
      if (rightPane) {
        rightPane.scrollTo({
          top: element.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <div className="w-1/2 flex flex-col justify-start pl-20 sticky top-0 h-screen overflow-hidden z-10">
      <div className="pointer-events-auto flex flex-col justify-start pl-20 h-full">
        <div className="mb-8 mt-24">
          <h1 className="text-5xl font-bold text-custom-text mb-2">Sravya Vaddi</h1>
          <p className="text-lg text-custom-subtle">Full Stack Developer</p>
          <p><span className="text-slate-500">Turning ideas into reality is my thing!</span></p>
        </div>
        
        {/* Vertical Navbar */}
        <nav className="mt-20">
          <div className="transform -translate-x-24">
            <ul className="space-y-6">
              {[
                { name: 'About', target: 'about' },
                { name: 'Experience', target: 'experience' },
                { name: 'Projects', target: 'projects' },
                { name: 'Certifications', target: 'certifications' },
                { name: 'Contact', target: 'contact' }
              ].map((item) => (
                <li key={item.target}>
                  <a 
                    href={`#${item.target}`} 
                    className={`nav-link group flex items-center ${activeSection === item.target ? 'active' : ''}`}
                    onClick={handleNavClick(item.target)}
                  >
                    <span className="nav-indicator h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200"></span>
                    <span className="nav-text ml-4 text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200">
                      {item.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        
        <div className="mt-auto mb-16 flex space-x-4">
          <a href="https://github.com/sravya-vaddi" target="_blank" aria-label="GitHub" rel="noreferrer">
            <Github className="w-6 h-6 text-slate-400 hover:text-custom-accent transition-colors" />
          </a>
          <a href="https://instagram.com/sravyeaahhh" target="_blank" aria-label="Instagram" rel="noreferrer">
            <Instagram className="w-6 h-6 text-slate-400 hover:text-custom-accent transition-colors" />
          </a>
          <a href="https://linkedin.com/in/v12sravya" target="_blank" aria-label="LinkedIn" rel="noreferrer">
            <Linkedin className="w-6 h-6 text-slate-400 hover:text-custom-accent transition-colors" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;