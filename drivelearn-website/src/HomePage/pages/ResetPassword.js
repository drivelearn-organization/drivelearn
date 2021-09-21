import React, { useState, useEffect, useRef } from 'react';
import '../../App.css';
import emailjs from "emailjs-com";


import axios from 'axios';

import { Base } from '../../base';
import { EmailJSResponseStatus } from 'emailjs-com';
const ResetPassword = (props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [getData, setGetData] = useState([]);
  const [toggle, settoggle] = useState(false);
  const [newtoggle, setnewtoggle] = useState(true);
  const [disabled, setDisabled] = useState(true);
  const [modal, setModal] = useState(false);
  const [email, setemail] = useState();
  const [Msg, setMsg] = useState({
    errorMsg: ''
  });

  const [errMsg, seterrMsg] = useState({
    errorMsg: ''
  });

  const [state, setState] = useState({

    username: sessionStorage.getItem('username'),
    fullName: '',
    nid: '',
    registerDate: '',
    moNumber: '',
    branch: '',
    empid: '',


  });

  const [newPassword, setNewPassword] = useState({

    username: sessionStorage.getItem('username'),
    password: '',
    password2: '',
    password3: ''

  });

  console.log(email);

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  useEffect(() => {
    axios.get(Base + '/drivelearn/settingProfile/' + sessionStorage.getItem('username'))
      .then(response => {
        setGetData(response.data)
        console.log(response.data);

        setState({
          fullName: response.data.fullName,
          nid: response.data.nid,
          username: sessionStorage.getItem('username'),
          registerDate: response.data.registerDate,
          moNumber: response.data.moNumber,
          branch: response.data.branch,
          empid: response.data.empid,

        })
      })



  }, []);

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
    setDisabled(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(Base + '/drivelearn/settingMyProfile', state)
      .then(response => {

        if (response.data === "Updated successfully") {
          console.log(response.data);
          settoggle(true);
          setMsg({
            errorMsg: response.data
          })
          window.location = '/branchmanager';

        } else {

          setModal(true);
          seterrMsg({
            errorMsg: response.data
          })
        }
      })

  }

  const handleChangePassword = (e) => {
    setNewPassword({
      ...newPassword,
      [e.target.name]: e.target.value
    })
    setnewtoggle(false);
  }

  const handleSubmitPassword = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8080/drivelearn/settingMyProfilePassword', newPassword)
      .then(response => {

        if (response.data === "Updated successfully") {
          console.log(response.data);
          settoggle(true);
          setMsg({
            errorMsg: response.data
          })
          window.location = '/branchmanager';

        } else {

          setModal(true);
          seterrMsg({
            errorMsg: response.data
          })
        }
      })

  }

  //const form = useRef();

  const ResetPassword = (e) => {
    let data = {
      key: "12345"
    }

    e.preventDefault();
    console.log(e.target);

    emailjs.sendForm("service_zebka8c", "template_jmkwhti", e.target, "user_viKyoDyIeOyFV3JWLGykv")
      .then(res => {
        console.log(res);
      });


  }


  return (

    <div className="main__container">
      {/* <!-- MAIN TITLE STARTS HERE --> */}


      {/* <!-- MAIN TITLE ENDS HERE -->

       <!-- CHARTS STARTS HERE --> */}
      <div className="charts">
        <div className="charts__left">


          <div className="charts__left__title">
            <div>
              <p>Change Password</p>
            </div>
          </div>
          <form onSubmit={{ ResetPassword }}>
            <div className="card-p">
              <p className="text">Email Address</p>
              <input className="data" type="text" name="email" id="email" placeholder="Email" onChange={(e) => setemail(e.target.value)} />
              {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
            </div>
            <button>test</button>
            <input type="submit" value="Send" ></input>
          </form>

          <form className="charts__right__cardss" onSubmit={handleSubmitPassword}>
            <div className="card-p">
              <p className="text">Current Password</p>
              <input className="data" type="password" name="password" id="firstname" placeholder="Current Password" value={newPassword.password} onChange={handleChangePassword} />
              {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
            </div>

            <div className="card-p">
              <p className="text">New password</p>
              <input className="data" type="password" name="password2" id="firstname" placeholder="New Password" value={newPassword.password2} onChange={handleChangePassword} />
              {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
            </div>

            <div className="card-p">
              <p className="text">Confirm Password</p>
              <input className="data" type="Password" name="password3" id="firstname" placeholder="Confirm Password" value={newPassword.password3} onChange={handleChangePassword} />
              {/* <div class="alert-danger" id="firstNameError">
                   * First name can't be empty and must contain only letters
                </div> */}
            </div>
            <center>
              <input type="submit" value="Update" className="update-btn" disabled={newtoggle} style={{ opacity: newtoggle ? "0.7" : "1" }} />
              &nbsp;&nbsp;&nbsp;
              <input type="submit" value="Clear" onClick={props.toggle} className="reset1-btn" />
            </center>
          </form>
        </div>


      </div>
      {/* <!-- CHARTS ENDS HERE --> */}
    </div>

  );

}

export default ResetPassword;