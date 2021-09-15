import React from 'react';
import Barchart from './Barchart';
import Card from './card';
import '../css/Home.css';


function Home() {
    return (
        <div>
             <Card/>
             <div className = "charContent">
              <div className ="studentChart">
              <div className = "studentChart-content">
                Monthly Registerd Student 2021
              </div>
            
              <Barchart/>
              </div>
              <div className = "incomeChart">
              <div className = "incomeChart-content">
                  Monthly Income 2021
              </div>
             
              <Barchart/>
              </div>

             </div>
           
           
        </div>
    )
}

export default Home;

