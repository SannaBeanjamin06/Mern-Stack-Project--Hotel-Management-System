import React, { useState } from 'react';
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import './ContactUs.scss';

const ContactUs = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your form has been submitted');
  };

  return (
    <div className="contact-us">
    <Navbar/>
    <section className="contact-us__hero">
      <div className="contact-us__hero-bg"></div>
      <h1 className="contact-us__hero-title">Need Help?</h1>
      <p className="contact-us__hero-subtitle">Contact us if you have any questions.</p>
    </section>
      <div className="contact-container">
        <div className="get-in-touch">
          <div className="headtag">
          <h2>Get In Touch</h2></div>
          <p>
          Whether you have questions about room availability, booking inquiries, or special requests, we are here to assist you. Our dedicated team is available to ensure your stay with us is comfortable and memorable. Reach out for any assistance, and we will respond promptly.
          </p>
          <address>
            <p>94 DownTown Street, The Luxury Roadside, Udaipur, Rajasthan 313001</p>
            <p>Phone: +91 9876543210</p>
            <p>Email: contactus@gmail.com</p>
          </address>
          <div className="links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
        <div className="contact-form">
          <div className="headtag">
          <h2>Contact Form</h2></div>
          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" value={formState.name} onChange={handleChange} required />
            <label>Email</label>
            <input type="email" name="email" value={formState.email} onChange={handleChange} required />
            <label>Subject</label>
            <input type="text" name="subject" value={formState.subject} onChange={handleChange} required />
            <label>Message</label>
            <textarea name="message" value={formState.message} onChange={handleChange} required />
            <button type="submit">Send Email</button>
          </form>
        </div>
      </div>
      <div className="fillings"></div>
<Footer/>
    </div>
  );
};

export default ContactUs;
