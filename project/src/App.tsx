import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import RolesSection from './components/roles/RolesSection';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Resume from './components/Resume';
import Certifications from './components/Certifications';
function App() {
  return (
    <div className="min-h-screen bg-gradient-animate">
      {/* Overlay pattern */}
      <div className="fixed inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
      
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-dark-950 to-transparent" />
            <About />
            <RolesSection />
            <Skills />
            <Experience />
            <Projects />
            <Certifications/>
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;