import React from 'react';
import '../css/card.css';

function Card() {
    return (
        <div className = "card-container">
        <div className ="card_container">
            <div className ="full-card">
                <div className ="imgBx">

                <i class="fas fa-user-tie"></i>

                </div>
                <div className ="card-content">
                    <div className = "first-moreInfo">
                        <p> Instructors</p>
                        <p className = "number">39</p>
                    </div>
                    
                    <div className = "moreInfo">
                    <p>Display more info <i class="fas fa-angle-double-right"></i></p>

                    </div>
                </div>
            </div>

            <div className ="full-card">
                <div className ="imgBx">
                <i class="fas fa-users"></i>
                </div>
                <div className ="card-content">
                    <div className = "first-moreInfo">
                        <p> Students</p>
                        <p className = "number">10000</p>
                    </div>
                    
                    <div className = "moreInfo">
 
                        <p>Display more info <i class="fas fa-angle-double-right"></i></p>

                    </div>
                </div>
            </div>
            <div className ="full-card">
                <div className ="imgBx">
                <i class="fas fa-coins"></i>
                </div>
                <div className ="card-content">
                    <div className = "first-moreInfo">
                        <p>Monthly Income</p>
                        <p id="payment" className = "number">LKR 20,00000</p>
                    </div>
                    
                    <div className = "moreInfo">
                    <p>Display more info <i class="fas fa-angle-double-right"></i></p>

                    </div>
                </div>
            </div>

           
        </div>
        
        

        </div>
        
    )
}

export default Card;
