import React, {Text} from 'react'
import '../css/UserDetailsForm.css'

function UserDetailsForm() {
    return (
        <div className ="emp-card-container">
            <form className="dash-content__form" method="POST">
                <div className="dash-content__input">
                    <lable className="dash-content__lable">First Name</lable>
                    <input type ="text" class="form__input"/>
                </div>
                <div className="dash-content__input">
                    <lable className="dash-content__lable">Last Name</lable>
                    <input type ="text" class="form__input"/>
                </div>
                <div className="dash-content__input">
                    <lable className="dash-content__lable">Email</lable>
                    <input type ="text" class="form__input"/>
                </div>
                <div className="dash-content__input">
                    <lable className="dash-content__lable">Phone number</lable>
                    <input type ="text" class="form__input"/>
                </div>
                <div className="dash-content__input">
                    <lable className="dash-content__lable">Address</lable>
                    <input type="textarea" class="form__input"/>
                </div>
                <div className="dash-content__input">
                    <lable className="dash-content__lable">City</lable>
                    <input type ="text" class="form__input"/>
                </div>
                <div className="dash-content__input">
                    <lable className="dash-content__lable">User Role</lable>
                    <select name="cars" class="form__input">
                      
                        <option value="">Instructor</option>
                        <option value="">Branch Manegaer</option>
                      
                    </select>
                </div>

            </form>
        </div>
    )
}

export default UserDetailsForm
