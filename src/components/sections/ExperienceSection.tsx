import { useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';

interface ExperienceProps {
  date: string;
  company: string;
  title: string;
  url: string;
  description: string;
  skills: string[];
}

const experiences: ExperienceProps[] = [
  {
    date: "Sep 2024 — Present",
    company: "MTX Group Inc",
    title: "Salesforce Developer Intern",
    url: "https://www.mtxb2b.com/",
    description: "Built scalable pipelines and automated fault classification for wind turbines using NLP, FastAPI, and real-time monitoring dashboards.",
    skills: ["Python", "FastAPI", "NLP"]
  },
  {
    date: "Jun 2020 — Oct 2021",
    company: "MTX Group Inc",
    title: "Salesforce Developer Intern",
    url: "https://www.mtxb2b.com/",
    description: "Built fault classification models and internal tools using FastAPI and NLP; improved automation for turbine event categorization and reporting.",
    skills: ["Scikit-learn", "FastAPI", "NLP"]
  },
  {
    date: "Aug 2019 — May 2020",
    company: "MTX Group Inc",
    title: "Salesforce Developer Intern",
    url: "https://www.mtxb2b.com/",
    description: "Designed and developed responsive web UIs, created RESTful APIs, and participated in weekly UAT demos for clients using JavaScript and jQuery.",
    skills: ["JavaScript", "HTML", "jQuery"]
  },
  {
    date: "May 2023 — Aug 2023",
    company: "MTX Group Inc",
    title: "Salesforce Developer Intern",
    url: "https://www.mtxb2b.com/",
    description: "Designed and developed responsive web UIs, created RESTful APIs, and participated in weekly UAT demos for clients using JavaScript and jQuery.",
    skills: ["JavaScript", "HTML", "jQuery"]
  },
];

const ExperienceCard = ({ experience }: { experience: ExperienceProps }) => {
  return (
    <div className="group relative max-w-3xl mb-8 rounded-2xl bg-[#0a192f] transition-all duration-300 ease-in-out p-6 border border-transparent hover:border-white/10 hover:bg-[#1c2235]/80 hover:shadow-md hover:backdrop-blur-sm">
      <div className="text-sm text-slate-400 font-medium mb-2">{experience.date}</div>
      <div className="flex items-center gap-2 mb-2">
        <h3 className="text-base sm:text-lg font-medium transition-colors duration-300">
          <span className="group-hover:text-custom-accent transition-colors duration-300">
            <a href={experience.url} target="_blank" rel="noreferrer">
              {experience.title} · {experience.company}
            </a>
          </span>
        </h3>
        
        <a href={experience.url} target="_blank" rel="noreferrer" className="inline-block transition-transform transition-colors duration-300 text-custom-text group-hover:text-custom-accent group-hover:translate-x-1 group-hover:-translate-y-1">
          <ExternalLink size={16} />
        </a>
      </div>
      <p className="text-sm text-custom-subtle leading-relaxed mb-4">
        {experience.description}
      </p>
      <div className="flex flex-wrap gap-2 mt-2">
        {experience.skills.map((skill, idx) => (
          <span key={idx} className="bg-[#1e293b] text-custom-accent text-xs font-medium px-3 py-1 rounded-full">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="section-container">
      <div className="section-content">
        <h2 className="text-3xl font-semibold mb-4 text-custom-accent"></h2>
        
        {experiences.map((exp, idx) => (
          <ExperienceCard key={idx} experience={exp} />
        ))}

        <a href="/Sravya_Vaddi_Resume.pdf" target="_blank" className="group inline-flex items-center text-custom-text hover:text-custom-accent transition-colors duration-300">
          <span>View Full Resume</span>
          <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
            ↗
          </span>
        </a>
      </div>
    </section>
  );
};

export default ExperienceSection;