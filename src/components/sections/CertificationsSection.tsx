import { useEffect, useRef } from 'react';

const CertificationsSection = () => {
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
    <section id="certifications" ref={sectionRef} className="section-container">
      <div className="section-content">
        <h2 className="text-3xl font-semibold mb-4 text-custom-accent"></h2>
        <div className="space-y-4">
          <div className="group relative max-w-3xl mb-4 rounded-2xl bg-[#112240] transition-all duration-300 ease-in-out p-4 border border-transparent hover:border-white/10 hover:bg-[#1c2235]/80 hover:shadow-md">
            <h3 className="text-xl font-bold mb-2 text-custom-accent">AWS Certified Cloud Practitioner</h3>
            <p className="text-sm text-custom-subtle mb-2">
              Verified cloud computing expertise and understanding of the AWS platform.
            </p>
            <p className="text-xs text-gray-400">Issued by Amazon Web Services · 2023</p>
          </div>
          
          <div className="group relative max-w-3xl mb-4 rounded-2xl bg-[#112240] transition-all duration-300 ease-in-out p-4 border border-transparent hover:border-white/10 hover:bg-[#1c2235]/80 hover:shadow-md">
            <h3 className="text-xl font-bold mb-2 text-custom-accent">Salesforce Platform Developer I</h3>
            <p className="text-sm text-custom-subtle mb-2">
              Certified platform developer with skills in customizing applications using declarative capabilities.
            </p>
            <p className="text-xs text-gray-400">Issued by Salesforce · 2022</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;