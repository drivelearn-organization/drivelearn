import React, {useEffect, useState} from 'react';
import './../../BranchManager/errorBox.css';

const Errorbox = ({closeModal}) => {
    const[toggle, setToggle] = useState(true);
   
    return (
        <div className="errorbox">
        <a className="close__button" onClick = {()=>closeModal(false)}>X</a>
        <p>heftgftrt</p>
            
        </div>
    )
}

export default Errorbox
