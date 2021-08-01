import React from 'react';
import './Cards.css';


function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        <ul className='cards__items'>
               <div className="history">
                  <img src='images/image1.jpeg' alt="Logo"  width='100%' height='400px'/>
                  <br/><br/>
                  <h2><big>History</big></h2>
                  <p>
                                  DriveLEARN Driving School today is the combination of local 
                  traffic safety programs which have a long history in
                  Western, Sri Lanka. In 2001 the Abeyawickrama family, 
                  owners of DriveLEARN Driving School, joined forces with Western 
                  Driving School, the area’s pioneer driving school which was established in 1995. 
                  In January of 2006, Kirshner Driving School, which was formed in 1996, 
                  joined the Abeyawickrama Family. By combining the experience and attributes of 
                  each program as well as actively participating in State and National driver 
                  education profession organizations, we’ve developed a classroom and in-car 
                  curriculum that produces ticket and collision-free drivers. 
                  Today, DriveLEARN Driving School has grown to nearly 6 Puget 
                  Sound locations with more collective years of experience than any 
                  other school in Sri Lanka.
                  </p>
                  <br/><br/>
               </div>
          </ul>
          <br/><br/>
          <ul className='cards__items'>
               <div className='vision'>
               <i class="fa fa-bullseye" aria-hidden="true" />
               <h2><big>Vision</big></h2>
               <p>To become the leading provider of driver traing that teaches best driving techniques.</p>
               </div>
               &nbsp;&nbsp; &nbsp;&nbsp;
               <div className='mission'>
               <i class="fa fa-eye" aria-hidden="true"/>
               <h2><big>Mission</big></h2>
               <p>Our missio is to provide our students skills ability and knowledge to help them become a safe and knoledgeable driver.</p>
               </div>
               &nbsp;&nbsp; &nbsp;&nbsp;
               <div className='value'>
               <i class="fa fa-key" aria-hidden="true"/>
               <h2><big>Value</big></h2>
               <p>Committed for excellence quality services.</p>
               </div>

          </ul>
          
          
        </div>
      </div>
    </div>
  );
}

export default Cards;
