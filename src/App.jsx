import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {

  return (
    <>
         <div className="bg-black text-white">
         <Header/>
         <Home/>
         <Education/>
         <Skills/>
         <Projects/>
         <Certifications/>
         <Services/>
         <Contact/>
         </div>
    </>
  )
}

export default App
