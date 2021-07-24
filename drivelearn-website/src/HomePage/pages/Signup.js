import React from 'react';
import '../../App.css';
import './../Signup.css';
import Nav from './../Nav';

function Signup() {
    return (

         <div className="background">
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
               <label for="regType">Gender</label>
               <select className="option" name="Register_as" required>
               <option disabled="disabled" selected="selected">--Choose Option--</option>
               <option>Male</option>
               <option>Female</option>
               </select>
               </div>
               <br/><br/>
               <div className="reg-group">
               <label for="regType">Register as</label>
               <select className="option" name="Register_as" required>
               <option disabled="disabled" selected="selected">--Choose Option--</option>
               <option>Administrator</option>
               <option>Branch Manager</option>
               </select>
               </div>
               
               <div className="regButton">
               <input type="reset" value="Clear" className="reset-btn" />
               <input type="submit" value="Submit" className="submit1-btn" />
               </div>
               <br/><br/>
               <a href="./login" className="forgot-pw">Already have an account?</a>
              </form>
              </div> 
        </div>

    );

}

export default Signup;