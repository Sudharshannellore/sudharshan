import React from 'react';
import { ArrowRight, ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Home = () => {


  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-black text-white pt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-5xl font-bold mb-6">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Sudharshan Rao Nellore</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8">
          Versatile Full Stack Developer | Proficient in Frontend & Backend Development | Technology Enthusiast | Continuous Learner          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a 
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition"
            >
              View My Work
              <ArrowRight size={20} />
            </a>
                <a href="https://drive.google.com/file/d/1zDo5POqUGSZ7q6N_PS9vqGdc0tPeRsUQ/view?usp=sharing" target='_blank' className="inline-flex items-center gap-2 px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition">
                    Download Resume
                </a>
          </div>
        </div>
        <div className="flex justify-center md:justify-center space-x-6 mt-8">
              <a href="https://github.com/Sudharshannellore" target="_blank" rel="noopener noreferrer">
                <Github className="text-white hover:text-gray-400 transition" size={25} />
              </a>
              <a  href="https://www.linkedin.com/in/sudharshannellore/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="text-white hover:text-gray-400 transition" size={25} />
              </a>
              <a href="mailto:sudharshannellore@gmail.com">
              <Mail className="text-white hover:text-gray-400 transition" size={25} />
            </a>
            </div>
            <div className='relative'>
            <div className="absolute -top-5 -bottom-2 -right-4 w-24 h-24 bg-white rounded-full flex items-center justify-center animate-bounce">
                        <a href="#contact">
                        <span className="text-black font-bold cursor-pointer">Hire Me!</span>
                        </a>
              </div>
            </div>
      </div>
    </section>
  );
};

export default Home;