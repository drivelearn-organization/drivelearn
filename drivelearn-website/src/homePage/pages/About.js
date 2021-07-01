import React from 'react';
import '../../App.css';
import './../AboutBody.css';

function About() {
  return (
    
    <div className="about-section">
    <div className="inner-container">
        <h1><big>Over 20 Years of Excellence in Drivers Education</big></h1>
        <p className="text">
        Official Driving School has provided superior driver education in Kalutara 
        for more than 20 years under the DriveLEARN Driving School brand. 
        Our programs are fully certified by the State 
        of kalutara and are lead by selected instructors that have completed 
        rigorous training and background checks, and training is in safe, late-model vehicles. 
        Our classroom are conveniently located in schools and at many DriveLEARN retail locations.
        </p>
        <h3>Official Driving School Core Values</h3>
        <ul>
        <li>We care</li>
        <li>We respect: people, time, values and needs</li>
        <li>We make every encounter engaging</li>
        <li>We do what we say with urgency, honesty and integrity</li>
        <li>We strive for excellence because what we do is important</li>
        </ul>

    </div>
    </div>

  );
}

export default About;
