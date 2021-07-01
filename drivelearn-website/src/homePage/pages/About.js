import React from 'react';
import '../../App.css';
import './../AboutBody.css';

function About() {
  return (
    <div className="about-section">
    <div className="inner-container">
        <h1>About Us</h1>
        <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus velit ducimus, enim inventore earum, eligendi nostrum pariatur necessitatibus eius dicta a voluptates sit deleniti autem error eos totam nisi neque voluptates sit deleniti autem error eos totam nisi neque.
        </p>
        <div className="skills">
            {/* <span>Web Design</span>
            <span>Photoshop & Illustrator</span>
            <span>Coding</span> */}
        </div>
    </div>
    </div>

  );
}

export default About;
