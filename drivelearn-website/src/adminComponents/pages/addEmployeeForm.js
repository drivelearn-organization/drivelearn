import React, {Text} from 'react'
import '../css/UserDetailsForm.css'

function addEmployeeForm() {
    return (
        <div className ="emp-card-container">
            <div class="heading-secondary margin-b-m margin-t-m">
                <p class="center-text"> Add Employee</p>
            </div>
            <form className="dash-content__form" method="POST">
                <div className="dash-content__input">
                    <lable className="dash-content__lable">First Name: </lable>
                    <input type ="text" class="form__input"/>
                </div>
                <div className="dash-content__input">
                    <lable className="dash-content__lable">Last Name: </lable>
                    <input type ="text" class="form__input"/>
                </div>
                <div className="dash-content__input">
                    <lable className="dash-content__lable">Email: </lable>
                    <input type ="text" class="form__input"/>
                </div>
                <div className="dash-content__input">
                    <lable className="dash-content__lable">Phone number: </lable>
                    <input type ="text" class="form__input"/>
                </div>
                <div className="dash-content__input">
                    <lable className="dash-content__lable">Address: </lable>
                    <input type="textarea" class="form__input"/>
                </div>
                <div className="dash-content__input">
                    <lable className="dash-content__lable">City:</lable>
                    <input type ="text" class="form__input"/>
                </div>
                <div className="dash-content__input">
                    <lable className="dash-content__lable">User Role:</lable>
                    <select name="cars" class="form__input">
                      
                        <option value="">Instructor</option>
                        <option value="">Branch Manegaer</option>
                      
                    </select>
                </div>
                <div className="dash-content__input">
                    <lable className="dash-content__lable">Branch</lable>
                    <select name="cars" class="form__input">
                      
                        <option value="">Matar</option>
                        <option value="">Galle</option>
                      
                    </select>
                </div>
                <button class="btn btn-round-blue margin-b-l margin-t-s" type="submit">Save Settings</button>
            </form>
        </div>
    )
}

export default addEmployeeForm
