import React, { useState } from 'react';
import './SendMessage.css';
import '../Branch-AddVehicles/ShowVehicles.css';
import SelectStudent from '../branch/SelectStudent';
import ViewMessage from './ViewMessage';


const SendMessage = () => {

    const [modal, setModal] = useState(false);
    const [modal1, setModal1] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    const toggleModal1 = () => {
        setModal1(!modal1);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    if (modal1) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (
        <div>
            <div style={{ position: "relative" }}>
                <h2 style={{ marginTop: "30px", marginLeft: "40px" }}>Message</h2>
                <form>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <div>
                            <input type='text' placeholder='Title' className="title" style={{ border: "1px black solid", padding: "10px", fontSize: "18px", width: "100%" }} />

                            <textarea placeholder='Message' className="message"></textarea>

                        </div>
                    </div>
                </form>

                <div style={{ position: "absolute", bottom: "0", right: "23%" }}>
                    <input className="select-btn" type='submit' onClick={toggleModal} value='Select Student' />
                </div>
            </div>

            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        < SelectStudent />
                        <button className="close-modal" onClick={toggleModal}>
                            Close
                        </button>
                    </div>
                </div>
            )}

            {modal1 && (
                <div className="modal">
                    <div onClick={toggleModal1} className="overlay"></div>
                    <div className="modal-content">
                        < ViewMessage />
                        <button className="close-modal" onClick={toggleModal1}>
                            Close
                        </button>
                    </div>
                </div>
            )}
            <div style={{ margin: "40px" }}>
                <h2>Sent Notification</h2>


                <table>
                    <tr>
                        <th>ID</th>
                        <th>Time</th>
                        <th>Title</th>
                        <th>View detail</th>

                    </tr>
                    <tr className='colum'>
                        <td>12</td>
                        <td>10:00 pm</td>
                        <td>Postpond the session</td>
                        <td><input type='submit' onClick={toggleModal1} value='View' className="view-btn" /></td>
                    </tr>

                </table>
            </div>
        </div>
    )
}

export default SendMessage