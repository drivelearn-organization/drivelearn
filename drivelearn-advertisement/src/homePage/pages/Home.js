import React from 'react';
import Cards from '../Cards';
import '../../App.css';
import HeroSection from '../HeroSection';
import Navbar from './../Navbar';


function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Cards />
    </>
  );
}

export default Home;
