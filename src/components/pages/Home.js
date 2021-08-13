import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Team from '../Team';
import HeroSection from '../HeroSection';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Team />
    </>
  );
}

export default Home;