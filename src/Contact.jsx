import React, { useState } from 'react';
import './App.css';
import { FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact section-animate-bounce" id="contact">
      <div className="section-icon"><FaEnvelope size={36} /></div>
      <h2 className="fade-in">Contact</h2>
      <form className="contact-form fade-in" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn hover-animate">Send</button>
      </form>
    </section>
  );
};

export default Contact; 