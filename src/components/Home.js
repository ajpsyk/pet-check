import React from 'react';
import Hero from './Hero';
import Features from './Features';
import Benefits from './Benefits';


const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <Features />
      <Benefits />
    </div>
  )
}

export default Home;