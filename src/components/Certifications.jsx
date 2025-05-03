import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'React',
      organization: 'Scaler',
      logo: 'https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg',
      link: 'https://moonshot.scaler.com/s/sl/bpSo4yMDzM?_gl=1*1350l3a*FPAU*MTIwMjQyMjUxMy4xNzQ0Mzc5MTQw*_ga*Nzg0MDM3MjAxLjE3NDQzNzkxMzg.*_ga_53S71ZZG1X*MTc0NjI2MTk4OS4yLjEuMTc0NjI2MzUyMy4wLjAuMTI4MTk2MDgyOQ..',
    },
    {
      title: 'Spring Boot',
      organization: 'Scaler',
      logo: 'https://www.vectorlogo.zone/logos/springio/springio-icon.svg',
      link: 'https://moonshot.scaler.com/s/li/RYKg8lwmnN',
    },
    {
      title: 'Java BootCamp With Spring',
      organization: 'Udemy',
      logo: 'https://www.vectorlogo.zone/logos/java/java-icon.svg',
      link: 'https://www.udemy.com/certificate/UC-8c1f4f28-0c4c-464a-8f05-cea88b98ef80/',
    },
    {
      title: 'Data Analysis',
      organization: 'Cisco',
      logo: 'https://www.vectorlogo.zone/logos/cisco/cisco-icon.svg',
      link: 'https://www.credly.com/badges/a6946022-547a-46ab-a4f3-d059d5f35301/linked_in_profile',
    },
    {
      title: 'Web Development',
      organization: 'Institute of Management, Technology and Finance',
      logo: 'https://www.vectorlogo.zone/logos/developerhubio/developerhubio-icon.svg',
      link: 'https://edu.gtf.pt/admin/tool/certificate/view.php?code=8603530965SN',
    },
    {
      title: 'SQL',
      organization: 'Internshala',
      logo: 'https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg',
      link: 'https://trainings.internshala.com/s/v/2052619/a0f3b8b0',
    },
  ];

  return (
    <section id="certifications" className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 flex items-center gap-4">
          <Award className="text-white" />
          Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="bg-zinc-950 p-4 rounded-lg overflow-hidden hover:shadow-zinc-600/30 hover:transform hover:scale-105 transition-transform"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <img
                    src={cert.logo}
                    alt={cert.organization}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 text-black mb-1">
                  {cert.title}
                </h3>
                <p className="text-sm text-white mb-1">{cert.organization}</p>
                <div className="flex items-center justify-center space-x-2 text-blue-600">
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-5 h-5 mt-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
