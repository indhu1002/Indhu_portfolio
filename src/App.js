import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Certifications from './Certifications';
import Education from './Education';
import Internship from './Internship';
import Contact from './Contact';
import React, { useState, useEffect } from 'react';

function App() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : false;
  });

  useEffect(() => {
    document.body.className = dark ? 'dark' : '';
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <div className={`App${dark ? ' dark' : ''}`}>
      <button
        className="theme-toggle"
        onClick={() => setDark((d) => !d)}
        aria-label="Toggle dark mode"
        title="Toggle dark/light mode"
      >
        {dark ? '🌞' : '🌙'}
      </button>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Education />
      <Internship />
      <Contact />
    </div>
  );
}

export default App;
