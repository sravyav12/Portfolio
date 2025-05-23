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
    description: "Crafted accessible, scalable web applications by developing RESTful APIs (Spring Boot, Swagger) and building ReactJS frontends aligned with WCAG standards. Improved backend performance using PostgreSQL and SQLAlchemy, and automated CI/CD workflows via Jenkins and Docker for reliable deployments.",
    skills: ["Springboot", "React.js", "PostgreSQL", "Docker"]
  },
  {
    date: "May 2023 — Aug 2023",
    company: "MTX Group Inc",
    title: "Salesforce Developer Intern",
    url: "https://www.mtxb2b.com/",
    description: "Developed Lightning Web Components and Apex-based workflows to streamline approval processes and enhance user productivity. Built dashboards and reports delivering real-time insights, enabling data-driven decisions for internal stakeholders.",
    skills: ["Salesforce Admin", "Apex", "Lightning Web Components", "WorkFlows"]
  },
  {
    date: "Oct 2020 — Oct 2021",
    company: "Cognizant Technology Solutions",
    title: "Programmer Analyst",
    url: "https://www.cognizant.com/us/en/about-cognizant/contact-us",
    description: "Engineered secure, cloud-native backend systems with AWS Lambda, Express.js, and PostgreSQL, and integrated WebRTC/Peer.js for real-time video features. Enhanced performance using API Gateway caching, Dockerized microservices with Kubernetes, and reduced costs through automation and TDD practices.",
    skills: ["AWS Lambda", "Express.js", "WebRTC", "Kubernetes"]
  },
  {
    date: "Apr 2020 — Sep 2020",
    company: "AccrueSoft Services ",
    title: "Web Developer",
    url: "https://www.accruesoft.com/",
    description: "Built responsive frontends with React, Angular, and Bootstrap, while developing secure server-side apps using Flask, Express.js, and TypeScript. Improved uptime and deployment stability through zero-downtime Kubernetes upgrades and Docker volume separation.",    
    skills: ["TypeScript", "Flask", "Angular","Jest"]
  },
    {
    date: "Dec 2019 — Apr 2020",
    company: "Cognizant Technology Solutions",
    title: "Programmer Analyst Trainee",
    url: "https://www.cognizant.com/us/en/about-cognizant/contact-us",
    description: "Contributed to internal tool development by building Flask-based APIs and SQL-driven reports, while assisting in UI integration using HTML, CSS, and JavaScript. Gained hands-on experience with Agile workflows, Postman testing, and documentation practices in a collaborative development environment.",    
    skills: ["JavaScript", "HTML", "CSS", "Jinja2"]
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

        <a href="/Portfolio/Sravya_Vaddi_Resume.pdf" target="_blank" rel="noreferrer"
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