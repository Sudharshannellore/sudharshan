import React, { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';


function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (
    <header className="fixed w-full bg-black/90 backdrop-blur-sm text-white z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold">sudharshan</a>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
        <a href="#home" className="hover:text-gray-300 transition">Home</a> 
        <a href="#education" className="hover:text-gray-300 transition">Education</a>
          <a href="#skills" className="hover:text-gray-300 transition">Skills</a>
          <a href="#projects" className="hover:text-gray-300 transition">Projects</a>
          <a href="#certifications" className="hover:text-gray-300 transition">Certifications</a>
          <a href="#services" className="hover:text-gray-300 transition">Services</a>
          <a href="#contact" className="hover:text-gray-300 transition">Contact</a>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="absolute top-full left-0 w-full bg-black/90 backdrop-blur-sm md:hidden">
            <div className="flex flex-col p-4 gap-4">
            <a href="#home" className="hover:text-gray-300 transition">Home</a>   
          <a href="#education" className="hover:text-gray-300 transition">Education</a>
          <a href="#skills" className="hover:text-gray-300 transition">Skills</a>
          <a href="#projects" className="hover:text-gray-300 transition">Projects</a>
          <a href="#certifications" className="hover:text-gray-300 transition">Certifications</a>
          <a href="#services" className="hover:text-gray-300 transition">Services</a>
          <a href="#contact" className="hover:text-gray-300 transition">Contact</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
