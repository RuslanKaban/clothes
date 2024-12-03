import React from 'react';
import './Hero.css'; 
import heroImage from '../assets/heroImg.jpg';

const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero__content">
        <h1 className="hero__title">Show your swag</h1>
        <p className="hero__subtitle">But remember... Swag is not just clothes, it is your energy and charisma.</p>
        <button className="hero__button">Shop Now</button>
      </div>
    </section>
  );
};

export default Hero;
