import { useEffect, useRef } from 'react';

const ContactSection = () => {
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
    <section id="contact" ref={sectionRef} className="section-container">
      <div className="section-content">
        <h2 className="text-3xl font-semibold mb-4 text-custom-accent"></h2>
        <div className="bg-[#112240] p-6 rounded-xl border border-transparent hover:border-white/10 transition-all duration-300">
          <h3 className="text-2xl font-bold mb-4 text-custom-accent">Get In Touch</h3>
          <p className="text-custom-subtle mb-6">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll do my best to get back to you!
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-custom-accent mr-2">📧</span>
              <a href="mailto:svaddi05@gmail.com" className="text-custom-text hover:text-custom-accent underline-hover">
                svaddi05@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <span className="text-custom-accent mr-2">🔗</span>
              <a href="https://linkedin.com/in/v12sravya" target="_blank" rel="noreferrer" className="text-custom-text hover:text-custom-accent underline-hover">
                linkedin.com/in/v12sravya
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;