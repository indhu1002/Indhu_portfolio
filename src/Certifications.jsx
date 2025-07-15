import React from 'react';
import './App.css';
import cert1 from './assets/cert1.jpg';
import cert2 from './assets/cert2.jpg';
import cert3 from './assets/cert3.jpg';
import cert5 from './assets/cert5.jpg';
import cert6 from './assets/cert6.jpg';
import cert7 from './assets/cert7.jpg';
import cert8 from './assets/cert8.jpg';
import { FaCertificate } from 'react-icons/fa';

const certs = [
  { src: cert1, alt: 'Certificate 1' },
  { src: cert2, alt: 'Certificate 2' },
  { src: cert3, alt: 'Certificate 3' },
  { src: cert5, alt: 'Certificate 5' },
  { src: cert6, alt: 'Certificate 6' },
  { src: cert7, alt: 'Certificate 7' },
  { src: cert8, alt: 'Certificate 8' },
];

const Certifications = () => {
  return (
    <section className="certifications section-animate-flip" id="certifications">
      <div className="section-icon"><FaCertificate size={36} /></div>
      <h2 className="fade-in">Certifications</h2>
      <div className="cert-list fade-in">
        {certs.map((cert, idx) => (
          <a
            href={cert.src}
            target="_blank"
            rel="noopener noreferrer"
            key={idx}
            className="cert-link"
          >
            <img src={cert.src} alt={cert.alt} className="cert-img hover-animate" />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Certifications; 