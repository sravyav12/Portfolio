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
    date: "Sep 2024 — May 2025",
    company: "Singular Analysts Inc",
    title: "Software Engineer",
    url: "https://singularanalysts.com/",
    description: "Built scalable pipelines and automated fault classification for wind turbines using NLP, FastAPI, and real-time monitoring dashboards.",
    skills: ["Python", "FastAPI", "NLP"]
  },
  {
    date: "May 2023 — Aug 2023",
    company: "MTX Group Inc",
    title: "Salesforce Developer Intern",
    url: "https://www.mtxb2b.com/",
    description: "Built fault classification models and internal tools using FastAPI and NLP; improved automation for turbine event categorization and reporting.",
    skills: ["Scikit-learn", "FastAPI", "NLP"]
  },
  {
    date: "Oct 2020 — Oct 2021",
    company: "Cognizant Technology Solutions",
    title: "Programmer Analyst",
    url: "https://www.cognizant.com/us/en/about-cognizant/contact-us",
    description: "Designed and developed responsive web UIs, created RESTful APIs, and participated in weekly UAT demos for clients using JavaScript and jQuery.",
    skills: ["JavaScript", "HTML", "jQuery"]
  },
  {
    date: "Apr 2020 — Sep 2020",
    company: "AccrueSoft Services ",
    title: "Web Developer",
    url: "https://www.accruesoft.com/",
    description: "Designed and developed responsive web UIs, created RESTful APIs, and participated in weekly UAT demos for clients using JavaScript and jQuery.",
    skills: ["JavaScript", "HTML", "jQuery"]
  },
    {
    date: "Dec 2019 — Apr 2020",
    company: "Cognizant Technology Solutions",
    title: "Programmer Analyst Trainee",
    url: "https://www.cognizant.com/us/en/about-cognizant/contact-us",
    description: "Designed and developed responsive web UIs, created RESTful APIs, and participated in weekly UAT demos for clients using JavaScript and jQuery.",
    skills: ["JavaScript", "HTML", "jQuery"]
  },
];


const ExperienceCard = ({ experience }: { experience: ExperienceProps }) => {
  return (
    <a
      href={experience.url}
      target="_blank"
      rel="noreferrer"
      className="group block relative max-w-4xl mb-8 rounded-lg bg-[#0a192f] p-6 transition-all duration-300 hover:bg-[#1c2235]/80 flex flex-col md:flex-row md:items-center md:gap-8 hover:shadow-md"
    >
      {/* Left: Date */}
      <div className="md:w-1/4 w-full mb-4 md:mb-0 flex justify-start md:justify-end">
        <div className="text-xs text-slate-400 tracking-widest uppercase md:text-right whitespace-nowrap pt-[2px]">
          {experience.date}
        </div>
      </div>

      {/* Right: Content */}
      <div className="md:w-3/4 w-full">
        <div className="flex items-center gap-2 mb-2">
          <h3 className="text-base sm:text-lg text-white transition-colors duration-300 group-hover:text-custom-accent font-normal">
            {experience.title} · {experience.company}
          </h3>
          <ExternalLink
            size={16}
            className="text-white group-hover:text-custom-accent transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </div>

        <p className="text-sm text-slate-400 leading-relaxed mb-4">
          {experience.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {experience.skills.map((skill, idx) => (
            <span
              key={idx}
              className="bg-[#1f2937] text-custom-accent text-xs font-normal px-3 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </a>
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

        <a href="/Portfolio/Sravya_Vaddi_Resume.pdf"
        target="_blank"
        rel="noreferrer"
        className="group inline-flex items-center text-custom-text hover:text-custom-accent transition-colors duration-300">
          <span>View Full Resume</span>
          <ExternalLink size={16}
          className="ml-1 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"/>
          </a>

      </div>
    </section>
  );
};

export default ExperienceSection;