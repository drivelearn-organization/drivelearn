import React, {useEffect, useState} from 'react';
import './../../BranchManager/errorBox.css';

const Errorbox = ({closeModal,errorMsg}) => {
    const[toggle, setToggle] = useState(true);
   
    return (
        <div className="errorbox">
        <a className="close__button" onClick = {()=>closeModal(false)}>X</a>
        <p>{errorMsg.errorMsg}</p>
            
        </div>
    )
}

export default Errorbox
