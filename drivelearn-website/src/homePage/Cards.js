import React from 'react';
import './Cards.css';


function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
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
          <ul className='cards__items'>
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
