import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video2021.mp4' autoPlay loop muted />
      <h1>DriveLEARN</h1>
      <h5>What are you waiting for?</h5>
      <p>The right driving school is accredited <br /> according to state laws and will prepare <br /> you to be a safe confident driver,<br />
          Driving is a seriuos activity that <br /> requires adequate preparation and practice.</p> 
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        {/* <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Button <i className='far fa-play-circle' />
        </Button> */}
      </div>
    </div>
  );
}

export default HeroSection;
