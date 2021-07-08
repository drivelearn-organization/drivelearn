import React from 'react';
import "../css/SelectStudent.css";



const SelectStudent = () => {
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
            <div style={{ padding: "20px", position: "relative" }}>

                <h2 style={{ margin: "20px" }}>Student</h2>


                <table>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                            </label>
                        </th>
                        <th>ID</th>
                        <th>Reg No</th>
                        <th>Name</th>
                        <th>National Id No</th>


                    </tr>
                    <tr className='colum'>
                        <td>  <label>
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                        </label></td>
                        <td>12</td>
                        <td>XX 3323</td>
                        <td>Kamal Perera</td>
                        <td>891033195v</td>
                       
                    </tr>

                    <tr className='colum'>
                        <td>  <label>
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                        </label></td>
                        <td>13</td>
                        <td>XX 3324</td>
                        <td>Nayomi Silva</td>
                        <td>978221124v</td>
                       
                    </tr>

                </table>

                <div style={{marginTop: "40px", position: "absolute",right: "15px"}}>
                    <form>
                        <input type="submit" className="send-btn" value="Send Message" />
                    </form>
                </div>
            </div>

        </div>
    )
}

export default SelectStudent