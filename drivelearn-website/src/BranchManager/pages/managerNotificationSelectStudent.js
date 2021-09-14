import React, { useEffect, useState } from 'react';
import '../../App.css';
import './../managerNotification.css';
import './../filterButton.css';
import Navbar from '../Navbar';
import Sidebar from '../managerSidebar';
import axios from 'axios';



const ManagerNotificationsSelectStudent = (props) => {

    const [getStudent, setStudent] = useState([]);
    const [getNotification, setNotification] = useState([]);
    const [viewNotification, setViewNotification] = useState([]);
    const [stateCustomer, setCustomerState] = useState([]);
    const [getNotoficationId, setNotificationId] = useState([]);

    console.log(getNotoficationId.notificationId);





    useEffect(() => {

        Student();
        viewGetNotification();

    }, []);


    const Student = () => {

        axios
            .get("http://localhost:8080/drivelearn/students")
            .then(d => {
                setStudent(d.data);
            })
    }

    const testToggle = () => {
        if (false) {
            props.toggleModal1();
        } else {
            props.toggleModal1();

        }

    }


    const sendNotification = () => {
        let receiverUserIdAtrray = [];
        let notificationId = getNotoficationId.notificationId;
        let reciverType = 3;
        getStudent.forEach(d => {
            if (d.select) {
                receiverUserIdAtrray.push(d.stuID);
            }


        });

        let data = {
            notificationId,
            reciverType,
            receiverUserIdAtrray
        }

        console.log(data);

        axios
            .post(`http://localhost:8080/notification/addstudentlist`, data)
            .then(data => {
                console.log(data);
                setNotification(data.data);

            })
            .catch(err => alert(err));

    };

    const viewGetNotification = (props) => {
        axios
            .get("http://localhost:8080/notification/getallnotificationbybranch/" + sessionStorage.getItem('branchId'))
            .then(data => {
                setViewNotification(data.data);


            })
    }

    console.log(getNotification);

    const submit = e => {
        let senderUsername = "Nimal";
        let senderUserId = 1;
        let senderType = 1;
        let header = e.target[0].value;
        let message = e.target[1].value;


        let data = {
            senderUsername,
            senderUserId,
            senderType,
            header,
            message

        }
        //notification(data);
        props.setMetaData(data);
    };


    const notification = (data) => {



        axios
            .post(`http://localhost:8080/notification/addNotification`, data)
            .then(data => {
                console.log(data);
                setNotificationId(data.data);

            })
            .catch(err => alert(err));

        sendNotification();
    }

    console.log(viewNotification);

    return (



        <div className="main__container">
            <div className="main__title">
                <div className="main__greeting">
                    <h1>Select Students</h1>
                    <p> {sessionStorage.getItem('branchName')} Branch</p>
                </div>
            </div>
            <br />
            <div className="table_responsive" style={{ height: "50vh" }}>





                <div className="search">
                    <div className="search_box">
                        <div className="dropdown">
                            <div className="default_option">All</div>
                            {/* <ul>
                                    <li>All</li>
                                    <li>Recent</li>
                                    <li>Popular</li>
                                   </ul> */}
                        </div>
                        <div className="search_field">
                            <input type="text" className="input" placeholder="Search" />
                            <i className="fas fa-search"></i>
                        </div>
                    </div>

                </div>


                <br />
                <div style={{ overflow: "hidden" }}>
                    <table>
                        <thead>
                            <tr>
                                <th><input type="checkbox" onChange={e => {
                                    let value = e.target.checked;
                                    props.setStudent(
                                        props.getStudent.map(d => {
                                            d.select = value;
                                            console.log(d);
                                            return d;
                                        })
                                    );
                                }} /></th>
                                <th>Reg No</th>
                                <th>Full Name</th>
                                <th>NIC</th>
                            </tr>
                        </thead>

                        <tbody>
                            {

                                props.getStudent.map(d => (
                                    <tr key={d.stuID}>

                                        <td>
                                            <input type="checkbox" checked={d.select}
                                                onChange={e => {
                                                    let value = e.target.checked;
                                                    props.setStudent(
                                                        props.getStudent.map(sd => {
                                                            console.log(sd);
                                                            if (sd.stuID === d.stuID) {
                                                                sd.select = value;
                                                                console.log(sd.select);
                                                            }
                                                            return sd;
                                                        })
                                                    );
                                                }} />
                                            <span className="checkmarks"></span>
                                        </td>
                                        <td >{d.stuID}</td>
                                        <td>{d.name}</td>
                                        <td>{d.nid}</td>
                                    </tr>
                                ))
                            }
                        </tbody>


                    </table>
                </div>
                <br />
                {/*<input type="submit" className="add-btn" onClick={() => {
                            sendNotification();

                        }} />*/}






            </div>





            <div className="table_responsive" style={{ marginTop: "2%", overflow: "hidden" }}>
                <div style={{ position: "relative", left: "68%" }}>
                    <button className="add-btn" onClick={(e) => props.sendNotification(e)}>Add Message</button>
                    <button style={{ marginLeft: "3%" }} className="reset-btn" onClick={props.toggleModal}>Close</button>
                </div>
            </div>


        </div>



    );

}

export default ManagerNotificationsSelectStudent;