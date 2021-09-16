import React, {useState} from 'react';
import '../../App.css';
import '../Login.css';
import Nav from '../Nav';
import axios from 'axios';
// import Footer from './../../homePage/Footer';
import {Base} from './../../base';

function Login() {

  const[resstate, setRestate] = useState([]);
  const[modal, setModal] = useState(false);

  const[state, setState] = useState({
   
      username: '',
      password: '',
     
  });

  const handleChange = (e) => {
    setState({
        ...state,
        [e.target.name]: e.target.value
    }) 
    setModal(false)
}

  const handleSubmit = (e) =>{
    e.preventDefault()
    axios.post(Base+'/drivelearn/login',state)
    .then(response => {
      console.log(response.data);
      if(response.data.username != null){
        if(response.data.role == 4){
          window.location = '/administrator';
       
        }else{
          window.location = '/branchmanager';
          
        }
        sessionStorage.setItem('username',response.data.username);
        sessionStorage.setItem('password',response.data.password);
        sessionStorage.setItem('role',response.data.role);
        sessionStorage.setItem('branchName',response.data.branch);
        sessionStorage.setItem('branchId',response.data.branchId);
        sessionStorage.setItem('empId',response.data.empid);
        //pass branch 
        // sessionStorage.clear();
      }else{
        setModal(true)
        
        setState({
            username: '',
            password: '',

        }
          
        )
    }
    }) 
   
}

    return (
          <div className="login-background">
          <Nav />
          <div className="login-wrapper">
            <form action="" className="form" method='POST' onSubmit={handleSubmit}>
               <img src="images/avatar.png" alt="Logo" />
               
               <h2>Login</h2>
               <div className="loginErrorBox" style={{display: modal ? "flex":"none"}}>
              
                 <p>Incorrect Password or Username</p>
                 <button onClick = {() => {setModal(false)}}>X</button>
               </div>
               <div className="input-group">
               <input type="text" name="username" id="loginUser" value={state.username} onChange={handleChange} required />
               <label for="loginUser">User Name</label>
               </div>
               <div className="input-group">
               <input type="password" name="password" id="loginPassword" value={state.password} onChange={handleChange} required />
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
  </div>
);

}

export default Login;