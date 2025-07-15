import React, { useState, useEffect } from 'react';
import './App.css';
import profileImg from './assets/profile.jpg';

const Hero = () => {
  const fullName = 'I am Indhu';
  const [typedName, setTypedName] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout;
    if (!isDeleting && index <= fullName.length) {
      setTypedName(fullName.slice(0, index));
      timeout = setTimeout(() => setIndex(index + 1), 120);
      if (index === fullName.length) {
        timeout = setTimeout(() => setIsDeleting(true), 1200);
      }
    } else if (isDeleting && index >= 0) {
      setTypedName(fullName.slice(0, index));
      timeout = setTimeout(() => setIndex(index - 1), 60);
      if (index === 0) {
        timeout = setTimeout(() => setIsDeleting(false), 600);
      }
    }
    return () => clearTimeout(timeout);
  }, [index, isDeleting, fullName]);

  useEffect(() => {
    if (!isDeleting && index === 0) setIndex(1);
  }, [isDeleting, index]);

  return (
    <section className="hero section-animate-fade" id="home">
      <div className="hero-content fade-in">
        <h2>Hi!</h2>
        <h1 className="typewriter">{typedName}<span className="type-cursor">|</span></h1>
        <h3>Web Developer</h3>
        <a href="/Indhu_Resume.pdf" className="btn" download>Download Resume</a>
      </div>
      <div className="hero-img-wrapper fade-in">
        <img src={profileImg} alt="Profile" className="profile-img" />
      </div>
    </section>
  );
};

export default Hero; 