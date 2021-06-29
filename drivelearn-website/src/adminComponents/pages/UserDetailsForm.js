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
            </form>
        </div>
    )
}

export default UserDetailsForm
