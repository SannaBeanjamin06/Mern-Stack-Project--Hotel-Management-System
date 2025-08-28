import React from 'react';
import { Sun, Hotel } from 'lucide-react';
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import './AboutUs.scss';

const AboutUsPage = () => {
  return (
    <div className="about-us">

      <Navbar />
      

      <section className="about-us__hero">
        <div className="about-us__hero-bg"></div>
        <h1 className="about-us__hero-title">About Us</h1>
      </section>

      <main className="about-us__main">
        <div className="about-us__main-grid">
          <div className="about-us__main-image">
            
          </div>
          <div>
            <Hotel className="about-us__main-icon" size={48} />
            <h2 className="about-us__main-title">Welcome To Our Resort</h2>
            <p>"Welcome to the THE ROYAL SUITES, where elegance meets comfort. Situated in the vibrant downtown district, pristine stretch of coastline and in the foothills of the majestic mountains, our hotels offers cozy accommodations with all the essentials for a comfortable stay. We pride ourselves on our friendly staff, convenient locations, and affordable rates."</p>

          </div>

          <div>
            <Sun className="about-us__main-icon" size={48} />
            <h2 className="about-us__main-title">Why Choose Us?</h2>
            <p> " Our hotel is a sanctuary for travelers seeking both sophistication and serenity. Each of our carefully designed rooms offers panoramic views, personalized service, and state-of-the-art amenities. Whether you’re here for business or leisure, we provide a unique blend of modern luxury and timeless charm. Our award-winning spa, fine dining restaurants, and world-class meeting facilities make Royal Suites the perfect destination for your next stay. Experience the art of hospitality with us."            </p>

          </div>
          <div className="about-us__main-images">
            
          </div>
        </div>

        <section className="about-us__services">
          <h2 className="about-us__services-title">Our Services</h2>
          <div className="about-us__services-grid">
            <div>
              <Hotel className="about-us__services-icon" size={52} />
              <h3 className="about-us__services-item-title">Luxurious Rooms</h3>
              <p>Experience comfort in our beautifully designed rooms.</p>
            </div>
            <div>
              <Sun className="about-us__services-icon" size={52} />
              <h3 className="about-us__services-item-title">Outdoor Activities</h3>
              <p>Enjoy a variety of outdoor activities and adventures.</p>
            </div>
            <div>
              <Hotel className="about-us__services-icon" size={52} />
              <h3 className="about-us__services-item-title">Spa & Wellness</h3>
              <p>Relax and rejuvenate at our world-class spa facilities.</p>
            </div>
          </div>
        </section>
      </main>
      <div className="fillings"></div>
      <Footer/>
    </div>

  );
};

export default AboutUsPage;