import React, {useEffect, useState} from 'react';
import './../../BranchManager/errorBox.css';

const SuccessfulyMsgBox = ({closeModal,errorMsg}) => {
    return (
        <div className="sucsesebox">
        <a className="close__button" onClick = {()=>closeModal(false)}>X</a>
        <p>{errorMsg.errorMsg}</p>
            
        </div>
    )
}

export default SuccessfulyMsgBox
