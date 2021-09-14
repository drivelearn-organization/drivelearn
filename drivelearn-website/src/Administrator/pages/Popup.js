import React from 'react';
import './../../App.css';
import './../../BranchManager/Popup.css';
import Nav from './../../HomePage/Nav';
import axios from 'axios';
const Popup = ({closeModal,empid}) => {

  

    return (
  <div className="modalBackground">
  <div className="modalContainer">
    <div className="titleCloseBtn">
      <button
        onClick={() => {
          closeModal(false);
        }}
      >
        X
      </button>
    </div>
    <div className="title">
      <h1>Are You Sure You Want to Continue?</h1>
    </div>
    <div className="body">
      <p>The next page looks amazing. Hope you want to go there!</p>
    </div>
    <div className="footer">
      <button
        onClick={() => {
          closeModal(false);
        }}
        id="cancelBtn"
      >
        Cancel
      </button>
      <button onClick={() => {
        axios.post('http://192.168.56.1:8080/drivelearn/deactiveEmployee',empid);
        closeModal(false);
      }}>Delete</button>
    </div>
  </div>
</div>
);

}

export default Popup;