import React from 'react';
import './SendMessage.css';
import '../Branch-AddVehicles/ShowVehicles.css';


const SendMessage = () => {
    return (
        <div>
            <h2 style={{ marginTop: "30px", marginLeft: "40px" }}>Message</h2>
            <form>
                <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <div style={{position: "relative"}}>
                        <input type='text' placeholder='Title' className="title" style={{ border: "1px black solid", padding: "10px", fontSize: "18px", width: "100%" }} />

                        <textarea placeholder='Message' className="message"></textarea>


                        <div style={{ position: "absolute", bottom: "0", right: "-60px" }}>
                            <input className="select-btn" type='submit' value='Select Student' />
                        </div>
                    </div>
                </div>
            </form>
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
                        <td><input type='submit' value='View' className="view-btn" /></td>
                    </tr>

                </table>
            </div>
        </div>
    )
}

export default SendMessage