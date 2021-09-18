import React from 'react';
import './../../App.css';
import './../../BranchManager/Popup.css';
import Nav from './../../HomePage/Nav';
import axios from 'axios';
const Popup = (props) => {



    return (

        <div className="modalContainer">
            <div className="titleCloseBtn">
                <button
                    onClick={() => {
                        props.setDeactive(false);
                    }}
                >
                    X
                </button>
            </div>
            {/* <div className="title">
      <h1>Are You Sure You Want to Delete?</h1>
    </div> */}
            <div className="body">
                <p>Are You Sure You Want to Deactivate this Session?</p>
            </div>
            <div className="footer">
                <button
                    onClick={() => {
                        props.setDeactive(false);
                    }}
                    id="cancelBtn"
                >
                    Cancel
                </button>
                <button onClick={() => {
                    props.deleteSession();
                }}>Delete</button>
            </div>
        </div>

    );

}

export default Popup;