import React from 'react';
import { Code2, Globe, Database, Wrench } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies',
      icon: <Code2 className="w-12 h-12" />,
    },
    {
      title: 'Backend Development',
      description: 'Scalable and secure server-side solutions',
      icon: <Database className="w-12 h-12" />,
    },
    {
      title: 'Data Analysis',
      description: 'Turning Data into Actionable Insights',
      icon: <Globe className="w-12 h-12" />,
    },
  ];

  return (
    <section id="services" className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold mb-12 flex items-center gap-4">
          <Wrench className="text-white" />
          My Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-zinc-950 shadow-lg text-center  p-6 rounded-lg hover:transform hover:scale-105 transition-transform"
            >
              <div className="text-purple-600 mb-4 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;