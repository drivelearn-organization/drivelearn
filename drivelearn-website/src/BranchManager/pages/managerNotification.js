import React, { useEffect, useState } from 'react';
import '../../App.css';
import './../managerNotification.css';
import './../filterButton.css';
import './../modal.css';
import Navbar from '../Navbar';
import Sidebar from '../managerSidebar';
import axios from 'axios';
import ManagerNotificationsSelectStudent from './managerNotificationSelectStudent';
import {Base} from './../../base';


const ManagerNotifications = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [getStudent, setStudent] = useState([]);
    const [getNotification, setNotification] = useState({
        header: "",
        message: ""
    });
    const [viewNotification, setViewNotification] = useState([]);
    const [stateCustomer, setCustomerState] = useState([]);
    const [getNotoficationId, setNotificationId] = useState([]);
    const [modal, setModal] = useState(false);
    const [getMetaData, setMetaData] = useState([]);
    const [show,setshow] = useState(false);
    //const [showModelError,setModelError] = useState(true);
const [errorShow,seterrorShow] = useState(false);
const [successShow,setsuccessShow] = useState(false);
    //console.log(getNotoficationId);

    const openSidebar = () => {
        setSidebarOpen(true);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };


    const toggleModal = () => {
        if(getNotification.header !== "" && getNotification.message !==""){
           console.log("open test");
            setModal(!modal);
            setshow(false);
        }else{
            setshow(true);
        }

        
    };

    const toggleModal1=() =>{
        // if(sendNotification()){
        //       setModal(modal);
        // }else{
        //     setModal(!modal);
        // }
        setModal(!modal);
    }



    useEffect(() => {

        Student();
        viewGetNotification();
        console.log(getMetaData);
    }, []);


    const Student = () => {

        axios
            .get(Base+"/drivelearn/students")
            .then(d => {
                setStudent(d.data);
            })
    }


    const sendNotification = (e) => {
        let receiverUserIdAtrray = [];
        let notificationId = "";
        let reciverType = 3;
        let senderUsername = sessionStorage.getItem('username');
        let senderUserId = parseInt(sessionStorage.getItem('empId'));
        let senderType = parseInt(sessionStorage.getItem('role'));
        let header = getNotification.header;
        let message = getNotification.message;
        getStudent.forEach(d => {
            if (d.select) {
                receiverUserIdAtrray.push(d.stuID);
            }


        });

        console.log(receiverUserIdAtrray);

        let data = {
            notificationId,
            reciverType,
            receiverUserIdAtrray,
            senderUsername,
            senderUserId,
            senderType,
            header,
            message
        }

        setModal(!modal); 
        console.log(receiverUserIdAtrray.length);
        console.log(data);

        if(receiverUserIdAtrray.length == 0){
        //    setModelError(true);
        //    console.log("uptest");
        //setModelError(false);
        seterrorShow(true);
      //  setsuccessShow(false);
       // return true;
       
          
        
     }else{
       
       
       // setModal(!modal); 
            
           // event.preventDefault();


//setModal(!modal); 
        axios
            .post(Base+`/listnotification/addnotification`, data)
            .then(data => {
                console.log(data);
                setNotification(data.data);

            })
            .catch(err => alert(err));
      
        // setModelError(true);
      // e.preventDefault();
      window.location.reload();
       seterrorShow(false);
       //setsuccessShow(true);
      
       }
        

       

    }


    

    const viewGetNotification = () => {
        axios
            .get(Base+"/notification/getallnotificationbybranch/" + sessionStorage.getItem('branchId'))
            .then(data => {
                setViewNotification(data.data.reverse());


            })
    }

    console.log(getNotification);
    console.log(getStudent);

    const submit = e => {
        let senderUsername = sessionStorage.getItem('username');
        let senderUserId = sessionStorage.getItem('empId');
        let senderType = sessionStorage.getItem('role');
        let header = e.target[0].value;
        let message = e.target[1].value;


        let data = {
            senderUsername,
            senderUserId,
            senderType,
            header,
            message

        }

        setNotification(data);

        // notification(data);
    };


    const notification = (data) => {



        axios
            .post(Base+`/notification/addNotification`, data)
            .then(data => {
                console.log(data);
                setNotificationId(data.data);

            })
            .catch(err => alert(err));

        sendNotification();
    }

    console.log(viewNotification);

    return (
        <div className="container">
            <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
            <main>
                <div className="main__container">
                    <div className="main__title">
                        <div className="main__greeting">
                            <h1>Manage Notifications</h1>
                            <p> {sessionStorage.getItem('branchName')} Branch</p>
                        </div>
                    </div>
                    <br /><br />
                    <div className="table_responsive">
                        <form
                        //onSubmit={e => {
                        //  e.preventDefault();
                        //submit(e);
                        //}}
                        >
                            <div className="message">
                                <p>Message</p>
                                <br />
                                <input placeholder="Title" className="title" onChange={(e) => {
                                    setNotification({
                                        header: e.target.value,
                                        message: getNotification.message
                                    });
                                }}></input>
                                <br />
                                <textarea placeholder="Description" className="description" onChange={
                                    (e) => {
                                        setNotification({
                                            header: getNotification.header,
                                            message: e.target.value
                                        });
                                    }
                                }></textarea>

                            

                                <div  style={{background: "red",marginTop: "5px",display: show ? "block" : "none"}}>
                                    <p style={{color: "white",padding: "10px",margin: "5px",border: "5px solid white"}}>Title Feild OR Message Feild is Empty.</p>
                                </div> 

                                <div  style={{background: "red",marginTop: "5px",display: errorShow ? "block" : "none"}}>
                                    <p style={{color: "white",padding: "10px",margin: "5px",border: "5px solid white"}}>Message Send Fail . You Have Not Selected Student </p>
                                </div> 
                                <div  style={{background: "Green",marginTop: "5px",display: successShow ? "block" : "none"}}>
                                    <p style={{color: "white",padding: "10px",margin: "5px",border: "5px solid white"}}>Message is Sent Successfull </p>
                                </div> 

                            </div>

                            

                            {modal && (
                                <div className="modal">
                                    <div className="overlay">
                                        <div className="modal-content" style={{
                                            background: "white",
                                            zIndex: "0"
                                        }}>
                                            <ManagerNotificationsSelectStudent toggleModal1={toggleModal1} /*showModelError={showModelError}*/ setMetaData={setMetaData} sendNotification={sendNotification} getStudent={getStudent} setStudent={setStudent} toggleModal={toggleModal} />

                                        </div>
                                    </div>
                                </div>
                            )}

                            

                            <br />

                            <br />
                            {/*<input type="submit" className="add-btn" onClick={() => {
                            sendNotification();

                        }} />*/}
                           
                        </form>
                        <button className="add-btn" onClick={toggleModal}>add student</button>
                        <br /><br />
                        <hr />
                        <p>Sent Notifications</p>
                        <br />
                        <table>
                            <thead>
                                <tr>
                                    <th>Notification No</th>
                                    <th>Full Name</th>
                                    <th>Header</th>
                                    <th>Message</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {viewNotification.map(d => (
                                    <tr>
                                        <td>{d.notificationId}</td>
                                        <td>{d.senderUsername}</td>
                                        <td>{d.header}</td>
                                        <td>{d.message}</td>
                                        <td>
                                            <span className="action_btn">
                                                <a href="./managerviewnotification" className="eye"><i className="fa fa-eye"></i></a>
                                                
                                            </span>
                                        </td>
                                    </tr>
                                ))
                                }


                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
            <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
        </div>
    );

}

export default ManagerNotifications;