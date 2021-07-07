import React from 'react';
import './ShowVehicles.css'


const ShowVehicles = () => {
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
            <div style={{padding: "20px"}}>
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
                        <td><input type='submit' value='Update' className='update-btn' /></td>
                        <td><input type='submit' value='Delete' className='delete-btn' /></td>
                    </tr>

                </table>
            </div>

        </div>
    )
}

export default ShowVehicles