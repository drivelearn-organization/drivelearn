import React from 'react'
import './../../App.css';
import './../../BranchManager/Popup.css';
import axios from 'axios';
const activeBox = ({closeModal,empid,location}) => {
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
          {/* <div className="title">
            <h1>Are You Sure You Want to Delete?</h1>
          </div> */}
          <div className="body">
            <p>Are You Sure You Want to Active this Employee?</p>
          </div>
          <div className="footer">
            <button id="close_popupBox"
              onClick={() => {
                closeModal(false);
              }}
              
            >
              Cancel
            </button>
            <button id = "active_popupBox" onClick={() => {
               axios.post('http://192.168.56.1:8080/drivelearn/activeEmployee',empid) 
              .then(response =>{
                window.location = location;
                })
              closeModal(false);
            }}>Activate</button>
          </div>
        </div>
      </div>
      );
      
}

export default activeBox
