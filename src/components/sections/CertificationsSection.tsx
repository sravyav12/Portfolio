import { useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    description: "Verified cloud computing expertise and understanding of the AWS platform.",
    issuer: "Amazon Web Services",
    year: "2023",
    url: "https://cp.certmetrics.com/amazon/en/public/verify/credential/7bb87da6776d4c278aede31bd41a0c5b",
  },
  {
    title: "Salesforce Platform Developer I",
    description: "Certified platform developer with skills in customizing applications using declarative capabilities.",
    issuer: "Salesforce",
    year: "2022",
    url: "/Portfolio/Cert4780737_PlatformDeveloperI_20240821.pdf"
  },
];

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
        <div className="space-y-6">
          {certifications.map((cert, idx) => (
            <a
              key={idx}
              href={cert.url}
              target="_blank"
              rel="noreferrer"
              className="group block max-w-3xl rounded-lg bg-[#0a192f] transition-all duration-300 ease-in-out p-6 border border-transparent hover:border-white/10 hover:bg-[#1c2235]/80 hover:shadow-md hover:backdrop-blur-sm"
            >
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-base sm:text-lg font-medium text-white group-hover:text-custom-accent transition-colors duration-300">
                  {cert.title}
                </h3>
                <ExternalLink
                  size={16}
                  className="text-white group-hover:text-custom-accent transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </div>

              <p className="text-sm text-custom-subtle mb-2">
                {cert.description}
              </p>
              <p className="text-xs text-gray-400">
                Issued by {cert.issuer} · {cert.year}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
