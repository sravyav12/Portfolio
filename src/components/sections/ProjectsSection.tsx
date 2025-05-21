import { useEffect, useRef } from 'react';

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  demoLink: string;
  githubLink: string;
}

const projects: ProjectProps[] = [
  {
    title: "Fault Classifier",
    description: "ML + NLP-based wind turbine fault classifier that reduced downtime by 40%.",
    technologies: ["Python", "Scikit-learn", "NLTK"],
    demoLink: "#",
    githubLink: "#"
  },
  {
    title: "EchoVerse",
    description: "A real-time AI-powered bot to preserve meaningful conversations with loved ones.",
    technologies: ["Python", "FastAPI", "WebSockets", "GPT-4"],
    demoLink: "#",
    githubLink: "#"
  }
];

const ProjectCard = ({ project }: { project: ProjectProps }) => {
  return (
    <div className="project-card bg-[#112240] p-5 rounded-xl shadow hover:-translate-y-1 hover:shadow-xl transition border border-transparent hover:border-custom-accent">
      <h3 className="text-xl font-bold mb-2 text-custom-accent">{project.title}</h3>
      <p className="text-sm text-custom-subtle mb-3">
        {project.description}
      </p>
      <p className="text-xs text-gray-400 mb-2">{project.technologies.join(' · ')}</p>
      <div className="text-sm space-x-3">
        <a href={project.demoLink} className="underline-hover">🔗 Live</a>
        <a href={project.githubLink} className="underline-hover">💻 GitHub</a>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
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
    <section id="projects" ref={sectionRef} className="section-container">
      <div className="section-content">
        <h2 className="text-3xl font-semibold mb-8 text-custom-accent"></h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;