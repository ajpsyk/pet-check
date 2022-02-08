import React from 'react';
import '../styles/Hero.css';
import Pet_Check_Homepage_BG_1 from '../../images/Pet_Check_Homepage_BG_1.png';

const Hero = () => {
  return (
    <div className="hero-page">
      <img className="hero-page-bg" src={Pet_Check_Homepage_BG_1} width="1100px"></img>
      <h2 className="page-one-header">The Veternarian's App</h2>
      <br></br>
      <p className="app-description">Increase client compliance with pet medication reminders, appointment scheduling, and confirmations.</p>
      <button className="learn-more-btn">Learn More</button>
    </div>
  )
};

export default Hero;