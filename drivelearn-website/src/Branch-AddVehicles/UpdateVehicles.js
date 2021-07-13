import React, { useState, useEffect } from 'react';
import './AddVehicles.css';
import Validation from './AddVehicleErrors';


const UpdateVehicles = ({submitForm}) => {

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

    const [errors, setErrors] = useState({});
    const [dataIsCorrect, setDataIsCorrect] = useState(false);

    const handleChange = (event) => {
        setValue({
            ...value,
            [event.target.name]: event.target.value,
        });
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(value));
        setDataIsCorrect(true);
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && dataIsCorrect) {
            submitForm(true);
        }
    }, [errors]);

    return (
        <div>
            <div className='vehical-form'>
                <h2 style={{ marginTop: "30px", marginLeft: "40px" }}>Update Vehical</h2>
                <form>
                    <div className='double-colum'>
                        <div className='a'>
                            <div className='detail-input'>
                                <div className="error-warp">
                                    <label>Vehical No</label>
                                    {errors.VehicleNo && <p className='error'>{errors.VehicleNo}</p>}
                                </div>


                                <div className='input-feild'>
                                    <input type='text' name='VehicleNo' value={value.VehicleNo} onChange={handleChange} />

                                </div>
                            </div>
                        </div>

                        <div className='b'>
                            <div className='detail-input'>
                                <div className="error-warp">
                                    <label>Starting Mileage</label>
                                    {errors.StartingMileage && <p className='error'>{errors.StartingMileage}</p>}
                                </div>


                                <div className='input-feild'>
                                    <input type='text' name='StartingMileage' value={value.StartingMileage} onChange={handleChange} />

                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='double-colum'>
                        <div className='a'>
                            <div className='detail-input'>
                                <div className="error-warp">
                                    <label>Register Date</label>
                                    {errors.RegisterDate && <p className='error'>{errors.RegisterDate}</p>}
                                </div>


                                <div className='input-feild'>
                                    <input type='text' name='RegisterDate' value={value.RegisterDate} onChange={handleChange} />

                                </div>
                            </div>
                        </div>

                        <div className='b'>
                            <div className='detail-input'>
                                <div className='error-warp'>
                                    <label>Vehical type</label>
                                    {errors.VehicleType && <p className='error'>{errors.VehicleType}</p>}
                                </div>
                                <div className='input-feild'>
                                    <input type='text' name='VehicleType' value={value.VehicleType} onChange={handleChange} />

                                </div>
                            </div>
                        </div>

                    </div>


                    <div className='double-colum'>
                        <div className='a'>
                            <div className='detail-input'>
                                <div className="error-warp">
                                    <label>Branch</label>
                                    {errors.Branch && <p className='error'>{errors.Branch}</p>}
                                </div>


                                <div className='input-feild'>
                                    <input type='text' name='Branch' value={value.Branch} onChange={handleChange} />

                                </div>
                            </div>
                        </div>

                        <div className='b'>
                            <div className='detail-input'>
                                <div className="error-warp">
                                    <label>Chessis No</label>
                                    {errors.ChessisNo && <p className='error'>{errors.ChessisNo}</p>}
                                </div>
                                <div className='input-feild'>
                                    <input type='text' name='ChessisNo' value={value.ChessisNo} onChange={handleChange} />

                                </div>
                            </div>
                        </div>

                    </div>

                    <h4 style={{ marginLeft: "10px", marginTop: "20px", textAlign: "center" }}>Register Details</h4>
                    <div>
                        <div className='double-colum'>
                            <div className='a'>
                                <div className='detail-input'>
                                    <div className="error-warp">
                                        <label>License starting date</label>
                                        {errors.L_StartingDate && <p className='error'>{errors.L_StartingDate}</p>}
                                    </div>

                                    <div className='input-feild'>
                                        <input type='date' name='L_StartingDate' value={value.L_StartingDate} onChange={handleChange} />

                                    </div>
                                </div>
                            </div>

                            <div className='b'>
                                <div className='detail-input'>
                                    <div className="error-warp">
                                        <label>License expire date</label>
                                        {errors.L_ExpireDate && <p className='error'>{errors.L_ExpireDate}</p>}
                                    </div>

                                    <div className='input-feild'>
                                        <input type='date' name="L_ExpireDate" value={value.L_ExpireDate} onChange={handleChange} />

                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className='double-colum'>
                            <div className='a'>
                                <div className='detail-input'>
                                    <div className="error-warp">
                                        <label>Insurance starting date</label>
                                        {errors.I_StartingDate && <p className='error'>{errors.I_StartingDate}</p>}
                                    </div>
                                    <div className='input-feild'>
                                        <input type='date' name='I_StartingDate' value={value.I_StartingDate} onChange={handleChange} />

                                    </div>
                                </div>
                            </div>

                            <div className='b'>
                                <div className='detail-input'>
                                    <div className="error-warp">
                                        <label>Insurance expire date</label>
                                        {errors.I_ExpireDate && <p className='error'>{errors.I_ExpireDate}</p>}
                                    </div>

                                    <div className='input-feild'>
                                        <input type='date' name='I_ExpireDate' value={value.I_ExpireDate} onChange={handleChange} />

                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>

                    <div style={{ position: "relative" }}>
                        <input className="submit-btn" type='submit' value='Update' onClick={handleFormSubmit} />
                    </div>

                </form>
            </div>
        </div>
    )
}

export default UpdateVehicles;