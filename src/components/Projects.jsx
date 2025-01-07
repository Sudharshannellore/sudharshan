import React from 'react';
import { Folder, Link } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Future Vault',
      description: 'Developed a Virtual Time Capsule using React.js and Spring Boot, enabling users to create and share secure digital capsules with memorable text, unlockable under specific conditions.',
      image: '/projectimg/futurevault.png',
      tags: ['React','Java', 'Spring Boot', 'Spring Security', 'RESTful API'],
      githubLink: 'https://github.com/Sudharshannellore/Future_Vault-Time-Capsule-.git',
    },
    {
      title: 'Marvel Dashboard',
      description: 'Analyzed Marvel Cinematic Universe data to uncover insights on Budget vs. Gross, yearly revenue trends, opening weekend performance, and audience vs. critics scores. Highlighted success factors, enhancing Tableau skills and data storytelling in entertainment analytics.',
      image: '/projectimg/marveldashboard.png',
      tags: ['Excel', 'Tableau'],
      githubLink: 'https://public.tableau.com/app/profile/sudharshan.rao.nellore/viz/shared/25JF9BBPR',
    },
    {
      title: 'Excel Dashboard',
      description: 'Developed an IPL (2008-2024) Performance Dashboard in Excel, analyzing season winners, top players, match outcomes, and key statistics using excel.',
      image: '/projectimg/ipldashboard.png',
      tags: ['Excel'],
      githubLink: 'https://onedrive.live.com/edit?id=5AFFDF819F91A575!sb3640c9967bb4829b23609866615d1f2&resid=5AFFDF819F91A575!sb3640c9967bb4829b23609866615d1f2&cid=5affdf819f91a575&ithint=file%2cxlsx&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3gvYy81YWZmZGY4MTlmOTFhNTc1L0Vaa01aTE83WnlsSXNqWUpobVlWMGZJQm4xTEhDMlhDX3FDUk5MQ01Ba25JVXc_ZT1mTWI1M0M&migratedtospo=true&wdo=2',
    },
    {
      title: 'Library Management',
      description: 'Developed a modular, scalable Library Management System using Java and Spring Boot, showcasing expertise in microservices architecture for independent deployment and seamless future enhancements',
      image: '/projectimg/restapi.png',
      tags: ['Java','Spring Boot','Microservices','RESTful APIs'],
      githubLink: 'https://github.com/Sudharshannellore/Library-Management.git',
    },
    {
      title: 'Online Streaming Platform',
      description: 'Developed a movie streaming platform using React.js, leading to a 50% increase in user satisfaction, a 30% boost in retention through responsive design, a 40% enhancement in security, and a 20% improvement in load times.',
      image: '/projectimg/streaming.png',
      tags: ['React'],
      githubLink: 'https://github.com/Sudharshannellore/cinema',
    },
    {
      title: 'Online Banking Application',
      description: 'The project involves developing an online banking application for business banks, offering account management, secure login, transaction handling, and account closure, ensuring a comprehensive and secure banking experience for clients',
      image: '/projectimg/bank.png',
      tags: ['Java', 'Spring Boot', 'JSP', 'JavaScript'],
      githubLink: 'https://github.com/Sudharshannellore/BusinessBank',
    },
    {
      title: 'Product Management Application',
      description: 'A Product Management application, performing basic CRUD operations and generating responses',
      image: '/projectimg/productmanage.png',
      tags: ['Java', 'Servlets', 'JSP', 'JDBC', 'HTML5', 'CSS3', 'Javascript'],
      githubLink: 'https://github.com/Sudharshannellore/ProductManagement',
    },
  ];

  return (
    <section id="projects" className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold mb-12 flex items-center gap-4">
          <Folder className="text-white" />
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-zinc-950 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform"
            >
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <div className="flex space-x-4">
                    <a
                      href={project.githubLink}
                      className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
                      target='_blank'
                    >
                      <Link className="w-6 h-6 text-white" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-zinc-700 text-white text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;