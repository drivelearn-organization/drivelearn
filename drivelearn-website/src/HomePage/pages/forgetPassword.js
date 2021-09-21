import React, { useState } from 'react';
import emailjs from "emailjs-com";
import { Base } from '../../base';
import axios from 'axios';
import '../Login.css';
import '../../BranchManager/managerViewStudent.css';


export default function ForgetPassword(props) {

    const [key, setkey] = useState("459812");
    const [show, setshow] = useState(false);
    const [employ, setemploy] = useState([]);
    const [user, setuser] = useState();
    const [usererror, setusererror] = useState(false);
    const [result, setresult] = useState();
    const [emailerror, setemailerror] = useState(false);
    const [changepw, setchangepw] = useState(false);
    const [otp, setotp] = useState();
    const [otperror, setotperror] = useState(false);
    const [finish, setfinish] = useState(false);
    const [complete, setcomplete] = useState(false);
    const [password, setpassword] = useState([{
        username: "",

        password2: "",
        password3: ""
    }]);

    //setkey();

    console.log(user);

    const Employee = () => {

        let name = "";
        axios
            .get(Base + "/resetpassword/settingProfile/" + user)
            .then(d => {
                setemploy(d.data);
                name = d.data.fullName;
                console.log(d.data);
                setmsg(d.data.FullName);
            }).catch(err => setmsg(""))





    }

    const setmsg = (fullName) => {
        console.log(fullName);
        if (fullName != "") {
            setshow(true);
            setusererror(false);
            console.log("not null");
        } else {
            console.log("null");
            setusererror(true);

        }
    }


    function sendEmail(e) {
        e.preventDefault();
        console.log(e.target);
        emailjs.sendForm('service_zebka8c', 'template_jmkwhti', e.target, 'user_viKyoDyIeOyFV3JWLGykv')
            .then((result) => {
                console.log(result.text);
                setresult(result.text);
                setemailerror(true);

            }, (error) => {
                console.log("error.text");
                setemailerror(false);
            });
        e.target.reset()

    }
    console.log(password);

    const changepassword = () => {
        console.log(password);



        axios.post('http://localhost:8080/resetpassword/resetEmployee', password)
            .then(response => {
                console.log(response.data);

                if (response.data == "Updated successfully") {
                    console.log("right");
                    setfinish(false);
                    setcomplete(true);
                } else {
                    console.log("wrong");
                    setfinish(true);
                    setcomplete(false);
                }

            })


    }

    const checkOTP = () => {
        if (otp == key) {
            console.log("test fine");
            setotperror(true);
        } else {
            console.log("test fail");
            setotperror(false);
        }
    }



    return (
        <div>
            <div className="container" style={{ position: "relative", padding: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>

                <div style={{ height: "30vh", position: "absolute", top: "5%" }}>

                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>

                        <div style={{ display: !complete ? "block" : "none" }}>

                            <i className="fa fa-lock" style={{ color: "red", fontSize: "100px", display: "flex", alignItems: "center", justifyContent: "center" }}></i>
                            <p style={{ fontSize: "30px" }}>Reset Password</p>

                        </div>

                        <div style={{ display: complete ? "block" : "none", background: "#7FFF00", marginTop: "5px" }}>
                            <p style={{ color: "black", padding: "10px", margin: "5px", border: "5px solid white" }}>Password Changed Successfully</p>
                            <div style={{display: "flex",alignItems: "center",justifyContent:"center",margin: "20px",border: "3px solid white",borderRadius: "50%",height: "30vh"}}><i  className="fa fa-check" style={{color:"white",fontSize: "100px"}} aria-hidden="true"></i></div>
                        </div>
                    </div>
                    <div style={{ display: !show ? "block" : "none" }} className="input-group">


                        <input type="text" placeholder="User Name" style={{ padding: "10px", marginTop: "10px", width: "100%", display: "block" }} onChange={(e) => setuser(e.target.value)} />
                        <input type="submit" value="Check" className="update-btn" style={{ color: "white", marginTop: "10px" }} onClick={Employee} />
                    </div>

                    <div style={{ display: usererror ? "block" : "none" }}>

                        <div style={{ background: "red", marginTop: "5px" }}>
                            <p style={{ color: "white", padding: "10px", margin: "5px", border: "5px solid white" }}>This User Name is not exit in the drineLearn </p>
                        </div>
                    </div>


                    <div style={{ display: show ? "block" : "none" }}>

                        <div style={{ display: !otperror ? "block" : "none", background: "#7FFF00", marginTop: "5px" }}>
                            <p style={{ color: "black", padding: "10px", margin: "5px", border: "5px solid white" }}>User name is found. Please enter your email address </p>
                        </div>

                        <div style={{ display: !otperror ? "block" : "none" }}>
                            <form onSubmit={sendEmail}>
                                <div className="">

                                    <div className="">
                                        <input type="email" style={{ padding: "10px", marginTop: "10px", width: "100%" }} placeholder="Email Address" name="email" />
                                    </div>
                                    <div className="">
                                        <input type="hidden" className="" placeholder="Subject" name="key" value={key} />
                                    </div>

                                    <div className="">
                                        <input type="submit" className="update-btn" style={{ color: "white", width: "50%", marginTop: "10px" }} value="Send Message"></input>
                                    </div>
                                </div>
                            </form>

                            <div style={{ display: emailerror ? "block" : "none" }}>
                                <input type="text" style={{ padding: "10px", marginTop: "10px", width: "100%" }} onChange={(e) => setotp(e.target.value)} />
                                <input type="submit" value="Submit" className="update-btn" style={{ color: "white", width: "20%", marginTop: "10px", width: "40%" }} onClick={checkOTP} />
                            </div>
                        </div>

                    </div>



                    <div style={{ display: otperror ? "block" : "none" }}>
                        <div style={{display: !complete ? "block" : "none"}}>
                            <p style={{ fontSize: "20px", display: "flex", alignItems: "center", justifyContent: "center" }} >Change password</p>
                            <input type="password" placeholder="New Password" style={{ padding: "10px", marginTop: "10px", width: "100%" }} onChange={(e) =>
                                setpassword(
                                    {
                                        username: user,

                                        password2: e.target.value,
                                        password3: password.password3
                                    }
                                )

                            } />
                            <input type="password" placeholder="Confirm Password" style={{ padding: "10px", marginTop: "10px", width: "100%" }} onChange={(e) =>
                                setpassword(
                                    {
                                        username: user,

                                        password2: password.password2,
                                        password3: e.target.value
                                    }
                                )

                            } />

                            <div style={{ display: finish ? "block" : "none", background: "red", marginTop: "5px" }}>
                                <p style={{ color: "black", padding: "10px", margin: "5px", border: "5px solid white" }}>Confirm password is not matched with New password </p>
                            </div>

                            <input type="submit" value="Change" className="update-btn" style={{ color: "white", marginTop: "10px" }} onClick={changepassword} />
                        </div>
                    </div>
                </div>

            </div>

            <input type="submit" value="Cancel" className="reset-btn" onClick={props.toggle} style={{ height: "8vh", width: "20%", position: "absolute", bottom: "5%", right: "0px", color: "white" }} />
        </div>
    )
}