import React, { useState } from 'react';
import AddVehicles from './AddVehicles';
import './ShowVehicles.css'
import UpdateVehicles from './UpdateVehicles';


const ShowVehicles = () => {

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
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
                <form>
                    <div style={{ display: "flex", flexWrap: "wrap", position: "relative" }}>
                        <input type="text" name="search" placeholder="Search.." style={{
                            width: "500px",
                            padding: "14px",
                            border: "2px solid #ccc",
                            borderRadius: "20px",
                            fontSize: "16px",


                        }} />
                        <div>
                            <input className='search-btn' type="submit" value="Q" />
                        </div>
                    </div>
                </form>
            </div>
            <div style={{ position: "absolute", right: "5%" }}>
                <button onClick={toggleModal} className="update-btn">Add New Vehicle</button>
            </div>

            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        < AddVehicles />
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
                        < UpdateVehicles />
                        <button className="close-modal" onClick={toggleModal1}>
                            Close
                        </button>
                    </div>
                </div>
            )}

            <div style={{ padding: "20px" }}>
                <h2 style={{ margin: "20px" }}>Vehicle</h2>


                <table>
                    <tr>
                        <th>ID</th>
                        <th>Reg No</th>
                        <th>Branch</th>
                        <th>Chassis No</th>
                        <th>Starting miles</th>
                        <th>Vehical Type</th>
                        <th>Status</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                    <tr className='colum'>
                        <td>12</td>
                        <td>HR 3323</td>
                        <td>Mathugama</td>
                        <td>#732w7</td>
                        <td>3</td>
                        <td>Car</td>
                        <td>Available</td>
                        <td><input type='submit' onClick={toggleModal1} value='Update' className='update-btn' /></td>
                        <td><input type='submit' value='Delete' className='delete-btn' /></td>
                    </tr>

                    

                </table>
            </div>

        </div>
    )
}

export default ShowVehicles