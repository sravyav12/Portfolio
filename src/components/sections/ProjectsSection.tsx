import { useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  demoLink: string;
  imageUrl: string; // new image field
}

const projects: ProjectProps[] = [
  {
    title: "Fault Classifier",
    description: "ML + NLP-based wind turbine fault classifier that reduced downtime by 40%.",
    technologies: ["Python", "Scikit-learn", "NLTK"],
    demoLink: "https://your-fault-classifier.com",
    imageUrl: "https://via.placeholder.com/100x100?text=🧠"
  },
  {
    title: "EchoVerse",
    description: "A real-time AI-powered bot to preserve meaningful conversations with loved ones.",
    technologies: ["Python", "FastAPI", "WebSockets", "GPT-4"],
    demoLink: "https://your-echoverse-demo.com",
    imageUrl: "https://via.placeholder.com/100x100?text=💬"
  }
];

const ProjectCard = ({ project }: { project: ProjectProps }) => {
  return (
    <a
      href={project.demoLink}
      target="_blank"
      rel="noreferrer"
      className="group block relative max-w-4xl mb-8 rounded-lg bg-[#0a192f] p-6 transition-all duration-300 hover:bg-[#1c2235]/80 flex flex-col md:flex-row md:items-center md:gap-8 hover:shadow-md"
    >
      {/* Left: Image */}
      <div className="md:w-1/4 w-full mb-4 md:mb-0 flex justify-start md:justify-end">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-20 h-20 rounded-md object-cover shadow-sm"
        />
      </div>

      {/* Right: Content */}
      <div className="md:w-3/4 w-full">
        <div className="flex items-center gap-2 mb-2">
          <h3 className="text-base sm:text-lg text-white transition-colors duration-300 group-hover:text-custom-accent font-normal">
            {project.title}
          </h3>
          <ExternalLink
            size={16}
            className="text-white group-hover:text-custom-accent transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </div>

        <p className="text-sm text-slate-400 leading-relaxed mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="bg-[#1f2937] text-custom-accent text-xs font-normal px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </a>
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
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
