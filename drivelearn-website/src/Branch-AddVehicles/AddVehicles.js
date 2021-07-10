import React ,{useState,useEffect} from 'react';
import './AddVehicles.css';


const AddVehicles = () => {

    const [value, setValue] = useState({
        VehicleNo: "",
        StartingMileage: "",
        RegisterDate: "",
        VehicleType: "",
        Branch: "",
        ChessisNo: "",
        L_StartingDate: "",
        L_ExpireDate: "",
        I_StartingDate: "",
        I_ExpireDate: "",
        
      });

    return (
        <div>
            <div className='vehical-form'>
                <h2 style={{ marginTop: "30px", marginLeft: "40px" }}>Add Vehical</h2>
                <form>
                    <div className='double-colum'>
                        <div className='a'>
                            <div className='detail-input'>
                                <label>Vehical No</label>

                                <div className='input-feild'>
                                    <input type='text' name='VehicleNo' />
                                </div>
                            </div>
                        </div>

                        <div className='b'>
                            <div className='detail-input'>
                                <label>Starting Mileage</label>

                                <div className='input-feild'>
                                    <input type='text' name='StartingMileage' />
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='double-colum'>
                        <div className='a'>
                            <div className='detail-input'>
                                <label>Register Date</label>

                                <div className='input-feild'>
                                    <input type='text' name='RegisterDate' />
                                </div>
                            </div>
                        </div>

                        <div className='b'>
                            <div className='detail-input'>
                                <label>Vehical type</label>

                                <div className='input-feild'>
                                    <input type='text' name='VehicleType' />
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className='double-colum'>
                        <div className='a'>
                            <div className='detail-input'>
                                <label>Branch</label>

                                <div className='input-feild'>
                                    <input type='text' name='Branch' />
                                </div>
                            </div>
                        </div>

                        <div className='b'>
                            <div className='detail-input'>
                                <label>Chessis No</label>

                                <div className='input-feild'>
                                    <input type='text' name='ChessisNo' />
                                </div>
                            </div>
                        </div>

                    </div>

                    <h4 style={{ marginLeft: "10px", marginTop: "20px", textAlign: "center" }}>Register Details</h4>
                    <div>
                        <div className='double-colum'>
                            <div className='a'>
                                <div className='detail-input'>
                                    <label>License starting date</label>

                                    <div className='input-feild'>
                                        <input type='date' name='L_StartingDate' />
                                    </div>
                                </div>
                            </div>

                            <div className='b'>
                                <div className='detail-input'>
                                    <label>License expire date</label>

                                    <div className='input-feild'>
                                        <input type='date' name="L_ExpireDate" />
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className='double-colum'>
                            <div className='a'>
                                <div className='detail-input'>
                                    <label>Insurance starting date</label>

                                    <div className='input-feild'>
                                        <input type='date' name='I_StartingDate' />
                                    </div>
                                </div>
                            </div>

                            <div className='b'>
                                <div className='detail-input'>
                                    <label>Insurance expire date</label>

                                    <div className='input-feild'>
                                        <input type='date' name='I_ExpireDate' />
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>

                    <div style={{ position: "relative" }}>
                        <input className="submit-btn" type='submit' value='Add' />
                    </div>

                </form>
            </div>
        </div>
    )
}

export default AddVehicles;