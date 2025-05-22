import { useEffect, useRef, useState } from 'react';

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);

  const handleEmailCopy = () => {
    navigator.clipboard.writeText('svaddi05@gmail.com').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800); // 1.8s
    });
  };

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

        <div className="group max-w-3xl rounded-lg bg-[#0a192f] transition-all duration-300 ease-in-out p-6 border border-transparent hover:border-white/10 hover:bg-[#1c2235]/80 hover:shadow-md hover:backdrop-blur-sm">
          <h3 className="text-base sm:text-lg font-medium mb-4 transition-colors duration-300 group-hover:text-custom-accent">
            Get In Touch
          </h3>

          <p className="text-sm text-custom-subtle leading-relaxed mb-6">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll do my best to get back to you!
          </p>

          <div className="space-y-4">
            <div
              className="flex items-center gap-4 cursor-pointer"
              onClick={handleEmailCopy}
            >
              <div className="flex items-center">
                <span className="text-custom-accent mr-2">📧</span>
                <span className="text-custom-text group-hover:text-custom-accent underline-hover transition-all duration-300">
                  svaddi05@gmail.com
                </span>

              </div>

              {copied && (
                <div className="border border-white/20 text-gray-200 text-xs px-3 py-1 rounded-full bg-[#1e293b] shadow-sm transition-opacity duration-300">
                  Copied!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
