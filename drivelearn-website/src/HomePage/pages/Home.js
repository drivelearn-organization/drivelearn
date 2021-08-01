import React from 'react';
import Cards from '../Card';
import '../../App.css';
import HeroSection from '../HeroSection';
import Nav from '../Nav';


function Home() {
  return (
    <>
      <Nav />
      <HeroSection />
      <Cards />
    </>
  );
}

export default Home;
