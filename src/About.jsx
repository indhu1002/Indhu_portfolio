import React from 'react';
import './App.css';
import { FaUser } from 'react-icons/fa';

const About = () => {
  return (
    <section className="about section-animate-slide" id="about">
      <div className="about-content about-card">
        <div className="section-icon"><FaUser size={36} /></div>
        <h2>About Me <span role="img" aria-label="sparkles">✨</span></h2>
        <p className="about-highlight">Hi! I'm <span className="about-name">Dande Indhu</span>, a passionate Web Developer with experience in building responsive and interactive web applications. I love turning ideas into reality using code and am always eager to learn new technologies and improve my skills.</p>
        <blockquote className="about-quote">“Programming isn’t about what you know; it’s about what you can figure out”</blockquote>
      </div>
    </section>
  );
};

export default About; 