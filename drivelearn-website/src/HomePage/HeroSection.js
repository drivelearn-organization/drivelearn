import React from 'react';
// import { Button } from './Button';
import './HeroSection.css';
import '../App.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <img className='image1' src='/images/vehicles.jpg' alt="Logo" />
      <h1>DriveLEARN</h1>
      <h5>WELCOME</h5>
      <p>The right driving school is accredited <br /> according to state laws and will prepare <br /> you to be a safe confident driver,<br />
          Driving is a seriuos activity that <br /> requires adequate preparation and practice.</p> 
    </div>
  );
}

export default HeroSection;
