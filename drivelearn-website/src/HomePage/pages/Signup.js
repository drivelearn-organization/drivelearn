import React, {useState} from 'react';
import '../../App.css';
import '../Signup.css';
import Nav from '../Nav';
import axios from 'axios';
import { getRoles } from '@testing-library/react';

function Signup() {

   
    const[state, setState] = useState({
        moNumber:'',
        fullName: '',
        username: '',
        password: '',
        branch: '',
        nid: '',
        role: ''
    });

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        }) 
     
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post('http://192.168.56.1:8080/employee/register',state)

        

        

        console.log(state);
       
    }

    return (
 
         <div className="background">
            <Nav />
            
            <div className="registration-wrapper">
            <form action="" className="Regform" onSubmit={handleSubmit}>
               <h2>Sign Up</h2>

               <div className="reg-group">
               <input className="content" type="text" name="fullName" id="regUser" value={state.fullName} onChange={handleChange} required />
               <label for="regUser">Full Name</label>
               </div>

               <div className="reg-group">
               <input className="content" type="text" name="regUser" id="regUser" required />
               <label for="regUser">Address</label>
               </div>

               <div className="reg-group">
               <input className="content" type="text" name="nid" id="regUser" value={state.nid} onChange={handleChange} required />
               <label for="regUser">NIC</label>
               </div>

               <div className="reg-group">
               <input className="content" type="date" Value="DOB" name="regUser"  id="regUser" required />
               <label for="regUser">Date Of Birth</label>
               </div>

               <div className="reg-group">
               <input className="content" type="text" name="moNumber" id="regUser" value={state.moNumber} onChange={handleChange} required />
               <label for="regUser">Mobile</label>
               </div>

               <div className="reg-group">
               <input className="content" type="email" name="regUser" id="regUser" required />
               <label for="regUser">Email</label>
               </div>

               <div className="reg-group">
               <input className="content" type="text" name="username" id="regUser" value={state.username} onChange={handleChange} required />
               <label for="regUser">Username</label>
               </div>

               <div className="reg-group">
               <input className="content" type="password" name="password" id="regUser" value={state.password} onChange={handleChange} required />
               <label for="regUser">Password</label>
               </div>

               <div className="reg-group">
               <input className="content" type="password" name="loginPassword" id="loginPassword"  required />
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
               <label for="regType">Branch</label>
               <select className="option" name="branch"  onChange={handleChange} required>
               <option disabled="disabled" selected="selected">--Choose Option--</option>
               <option value ="mathugama">mathugama</option>
               <option value ="kaluthatara">kaluthatara</option>
               <option value ="Aluthgama">Aluthgama</option>
               </select>
               </div>
               <br/><br/>

               <div className="reg-group">
               <label for="regType">Register as</label>
               <select className="option" name="role" onChange={handleChange} required>
               <option disabled="disabled" selected="selected">--Choose Option--</option>
               <option value ="4">Administrator</option>
               <option value ="1">Branch Manager</option>
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