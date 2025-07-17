import React from 'react';
import './App.css';
import profileImg from './assets/profile.jpg';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <section className="hero section-animate-fade" id="home">
      <div className="hero-img-wrapper fade-in">
        <img src={profileImg} alt="Profile" className="profile-img" />
      </div>
      <div className="hero-content fade-in">
        <h1 className="hero-greeting">Hi! I am Indhu</h1>
        <div className="typewriter-container" style={{ margin:0, padding:0 }}>
          <Typewriter
            options={{
              strings: [
                'Web Developer',
                'Python Programmer',
                'Creative Coder'
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
              delay: 50,
              cursor: '', // Remove unwanted vertical line
              wrapperClassName: 'typewriter-wrapper',
              cursorClassName: 'typewriter-cursor'
            }}
          />
        </div>
        <a href="/Indhu_Resume.pdf" className="btn hero-resume-btn" download>Download Resume</a>
      </div>
    </section>
  );
};

export default Hero; 