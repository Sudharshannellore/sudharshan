import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="min-h-screen bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 flex items-center gap-4">
          <GraduationCap className="text-white" />
          Education
        </h2>
        
        <div className="space-y-8 cursor-pointer">
          <div className="bg-zinc-950 p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition-transform">
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Bachelor of Technology</h3>
              <span className="text-gray-400">2019 - 2023</span>
            </div>
            <p className="text-xl mb-2">Jawaharlal Nehru Technological University, Anantapur</p>
            <p className="text-gray-400">
              Specialized in Electronics and Communication Engineering Associated with Sree Venkateswara College Of Engineering, Nellore.
            </p>
          </div>

          <div className="bg-zinc-950 p-6 rounded-lg shadow-lg  hover:transform hover:scale-105 transition-transform ">
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">12th Grade</h3>
              <span className="text-gray-400">2018 - 2019</span>
            </div>
            <p className="text-xl mb-2">Narayana Junior College, Nellore</p>
            <p className="text-gray-400">
              Specialized in MPC
            </p>
          </div>

          <div className="bg-zinc-950 p-6 rounded-lg shadow-lg  hover:transform hover:scale-105 transition-transform">
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">10th Grade</h3>
              <span className="text-gray-400">2016 - 2017</span>
            </div>
            <p className="text-xl mb-2">Sri Balaji Vidyamandir, Nellore </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;