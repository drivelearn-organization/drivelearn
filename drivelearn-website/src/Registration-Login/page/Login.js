import React from 'react';
import '../../App.css';
import './../Login.css';
import Nav from './../Nav';
// import Footer from './../../homePage/Footer';

function Login() {
    return (
          <>
          <Nav />
          <div className="login-wrapper">
            <form action="" className="form" >
               <img src="images/avatar.png" alt="Logo" />
               <h2>Login</h2>
               <div className="input-group">
               <input type="text" name="loginUser" id="loginUser" required />
               <label for="loginUser">User Name</label>
               </div>
               <div className="input-group">
               <input type="password" name="loginPassword" id="loginPassword" required />
               <label for="loginPassword">Password</label>
               </div>
               <input type="submit" value="Login" className="submit-btn" />
               <a href="#forgot-pw" className="forgot-pw">Forgot Password?</a>
              </form>

            <div id="forgot-pw">
               <form action="" className="form" >
                <a href="./login" className="close">&times;</a> 
                <h2>Reset Password</h2>
                <div className="input-group">
                <input type="email" name="email" id="email" required />
                <label for="email">Email</label>
                 </div>
                <input type="submit" value="Submit" class="submit-btn" /> 
                </form>  
            </div>
  </div>  
  </>
);

}

export default Login;