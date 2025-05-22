import { useEffect, useRef } from 'react';

const AboutSection = () => {
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
    <section id="about" ref={sectionRef} className="section-container">
      <div className="section-content">
        <h2 className="text-3xl font-semibold mb-4 text-custom-accent"></h2>
        <p className="text-custom-subtle">
          Hey there! I am Sravya Vaddi! I am a Masters Graduate with a major in Computer Science from{' '}
          <a 
            href="https://www.albany.edu/computer-science" 
            target="_blank" 
            className="hover text-custom-text hover:text-custom-accent"
            rel="noreferrer"
          >
            University at Albany
          </a>. I'm a passionate Full Stack Developer who finds joy in turning ideas into interactive, meaningful software. 
          What started as curiosity evolved into a love for crafting clean, efficient code—whether it's building intuitive 
          user interfaces or designing resilient backend systems.<br/><br/>
          
          I thrive on solving real problems through technology and enjoy the creative process behind every line of code. 
          Over time, I've also grown increasingly interested in the data side of things, how it flows, how it's structured, 
          and how it can drive smarter applications. That curiosity has led me to explore areas of data engineering and 
          machine learning alongside my development work.<br/><br/>
          
          With every project, I aim to blend thoughtful design with solid engineering, always pushing myself to learn, adapt, 
          and build tools that make an impact. I love collaborating with others who are equally driven by purpose and creativity. 
          Whether it's debugging a tricky issue or bringing a new feature to life, I find fulfillment in the process as much as the outcome. 
          Every challenge is a chance to grow and that's what keeps me excited about building software.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;