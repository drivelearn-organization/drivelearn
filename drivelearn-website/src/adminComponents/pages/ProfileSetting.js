import React from 'react'
import "../css/ProfileSetting.css"

function ProfileSetting() {
    return (
        <div className ="emp-card-container">
            <div class="heading-secondary margin-b-m margin-t-m">
                <p class="center-text">Account Settings </p>
            </div>
            <form className="dash-content__form" method="POST">
                <div className="dash-content__input">
                    <lable className="dash-content__lable">First Name: </lable>
                    <input type ="text" class="form__input"  value ="Hasani"/>
                </div>
                <div className="dash-content__input">
                    <lable className="dash-content__lable">Last Name: </lable>
                    <input type ="text" class="form__input" value ="Nimeshika"/>
                </div>
                <div className="dash-content__input">
                    <lable className="dash-content__lable">Email: </lable>
                    <input type ="text" class="form__input"  value ="hasani@gamil.com"/>
                </div>
                <div className="dash-content__input">
                    <lable className="dash-content__lable">Phone number: </lable>
                    <input type ="text" class="form__input" value ="071 2444719"/>
                </div>
                <div className="dash-content__input">
                    <lable className="dash-content__lable">Address: </lable>
                    <input type="textarea" class="form__input"value ="No.35/A, Matara Road, Sri Lanka"/>
                </div>
                <div className="dash-content__input">
                    <lable className="dash-content__lable">City:</lable>
                    <input type ="text" class="form__input" value ="Matara"/>
                </div>
                {/* <div className="dash-content__input">
                    <lable className="dash-content__lable">User Role:</lable>
                    <select name="cars" class="form__input">
                      
                        <option value="">Instructor</option>
                        <option value="">Branch Manegaer</option>
                      
                    </select>
                </div> */}
                <div className="dash-content__input">
                    <lable className="dash-content__lable">Branch</lable>
                    <select name="cars" class="form__input">
                      
                        <option value="">Matara</option>
                        <option value="" selected>Galle</option>
                      
                    </select>
                </div>
                <div className="image_box">
                <img src="" alt="photo" className="settings_profile_picture"/>
                <label for="file-upload" class="custom-file-upload">
                <i class="fas fa-cloud-upload-alt"></i> Choose a new photo
                </label>
                <input id="file-upload" type="file"/>
                </div>
                <button class="btn btn-round-blue margin-b-l margin-t-end" type="submit">Save Settings</button>
            </form>
            <div class="seperator"></div>
            <div class="heading-secondary margin-b-m margin-t-m">
                <p class="center-text">Pasword change </p>
            </div>
            <form className="dash-content__form" method="POST">
                <div className="dash-content__input">
                    <lable className="dash-content__lable">Current Pasword: </lable>
                    <input type ="password" class="form__input" placeholder="*************"/>
                </div>
                <div className="dash-content__input">
                    <lable className="dash-content__lable">New Pasword: </lable>
                    <input type ="password" class="form__input" placeholder="*************"/>
                </div>
                <div className="dash-content__input">
                    <lable className="dash-content__lable">Confirm Password: </lable>
                    <input type ="password" class="form__input" placeholder="*************"/>
                </div>
                <button class="btn btn-round-blue margin-b-l margin-t-end" type="submit">Save Settings</button>
            </form>
        </div>
    )
}

export default ProfileSetting
