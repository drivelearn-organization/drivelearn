import React from 'react';
import '../../App.css';
import './../Registration.css';
import Nav from './../Nav';

function Registration() {
    return (

         <div>
            <Nav />
            <div className="registration-wrapper">
            <form action="" className="Regform" >
               <h2>Sign Up</h2>
               <div className="reg-group">
               <input className="content" type="text" name="regUser" id="regUser" required />
               <label for="regUser">Full Name</label>
               </div>
               <div className="reg-group">
               <input className="content" type="text" name="regUser" id="regUser" required />
               <label for="regUser">Address</label>
               </div>
               <div className="reg-group">
               <input className="content" type="text" name="regUser" id="regUser" required />
               <label for="regUser">NIC</label>
               </div>
               <div className="reg-group">
               <input className="content" type="date" Value="DOB" name="regUser" id="regUser" required />
               <label for="regUser">Date Of Birth</label>
               </div>
               <div className="reg-group">
               <input className="content" type="text" name="regUser" id="regUser" required />
               <label for="regUser">Mobile</label>
               </div>
               <div className="reg-group">
               <input className="content" type="email" name="regUser" id="regUser" required />
               <label for="regUser">Email</label>
               </div>
               <div className="reg-group">
               <input className="content" type="text" name="regUser" id="regUser" required />
               <label for="regUser">Username</label>
               </div>
               <div className="reg-group">
               <input className="content" type="password" name="regUser" id="regUser" required />
               <label for="regUser">Password</label>
               </div>

               <div className="reg-group">
               <input className="content" type="password" name="loginPassword" id="loginPassword" required />
               <label for="regPassword">Confirm <br/>Password</label>
               </div>

               <div className="reg-group">
               <label for="regType">Register as</label>
               <select className="option" name="Register_as" required>
               <option disabled="disabled" selected="selected">--Choose Option--</option>
               <option>Administrator</option>
               <option>Branch Manager</option>
               </select>
               </div>

               {/* <div className="reg-group">
               <label for="Gender">Gender</label>
               <label className="radio">
                 <input className="radio-one" type="radio" value="male" />
                  Male
                </label>
               <label className="radio">
                <input className="radio-two" type="radio" value="female" />
                Female
                </label>
               </div> */}

               <br/>
               <div className="regButton">
               <input type="reset" value="Reset" className="reset-btn" />
               <input type="submit" value="Submit" className="submit-btn" />
               </div>
               <br/><br/>
               <a href="./login" className="forgot-pw">Already have an account?</a>
              </form>
              </div> 
        </div>

    );

}

export default Registration;