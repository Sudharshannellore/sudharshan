import React from 'react';
import { Code, Palette, Database, Globe, Settings, Settings2 } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Code className="w-8 h-8" />,
      skills: [
        { name: 'React', level: 88 },
        { name: 'JavaScript', level: 85 },
        { name: 'Tailwind CSS', level: 88 },
        { name: 'Bootstrap', level: 85 },
        { name: 'CSS3', level: 95 },
        { name: 'HTML5', level: 95 },
        { name: 'Visual Studio Code', level: 90 },
      ],
    },
    {
      title: 'Backend',
      icon: <Database className="w-8 h-8" />,
      skills: [
        { name: 'Java', level: 95 },
        { name: 'Spring Boot', level: 88 },
        { name: 'Hibernate', level: 80 },
        { name: 'Spring', level: 80 },
        { name: 'RESTful APIs', level: 88 },
        { name: 'J2EE', level: 88 },
        { name: 'MySQL', level: 80 },
      ],
    },
    {
      title: 'Tools',
      icon: <Settings2 className="w-8 h-8" />,
      skills: [
        { name: 'Git/GitHub', level: 88 },
        { name: 'Postman', level: 85 },
        { name: 'JUnit', level: 75 },
        { name: 'Maven', level: 78 },
        { name: 'Tomcat', level: 78 },
        { name: 'MS Excel', level: 90 },
        { name: 'Tableau', level: 90 },
      ],
    },
    {
        title: 'Others',
        icon: <Globe className="w-8 h-8" />,
        skills: [
          { name: 'OOPs', level: 88 },
          { name: 'Microservices Architecture', level: 85 },
          { name: 'MVC Architecture', level: 88 },
          { name: 'Communication', level: 95 },
          { name: 'Problem Solving', level: 95 }
        ],
      },
  ];

  return (
    <section id="skills" className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold mb-12 flex items-center gap-4">
          <Settings className="text-white" />
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-zinc-950 shadow-lg  p-6 rounded-lg hover:transform hover:scale-105 transition-transform"
            >
              <div className="flex items-center mb-4 text-white">
                {category.icon}
                <h3 className="text-xl font-semibold ml-2 text-white">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-200">{skill.name}</span>
                      <span className="text-gray-200">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-full h-2 transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;