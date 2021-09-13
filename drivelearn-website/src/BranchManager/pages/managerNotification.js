import React, { useEffect, useState } from 'react';
import '../../App.css';
import './../managerNotification.css';
import './../filterButton.css';
import Navbar from '../Navbar';
import Sidebar from '../managerSidebar';
import axios from 'axios';


const ManagerNotifications = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [getStudent, setStudent] = useState([]);
    const [getNotification, setNotification] = useState([]);
    const [viewNotification, setViewNotification] = useState([]);
    const [stateCustomer, setCustomerState] = useState([]);
    const [getNotoficationId,setNotificationId] = useState([]);

    console.log(getNotoficationId.notificationId);

    const openSidebar = () => {
        setSidebarOpen(true);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };



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

    const viewGetNotification=()=>{
        axios
        .get("http://localhost:8080/notification/getallnotificationbybranch/"+sessionStorage.getItem('branchId'))
        .then(data =>{
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
        notification(data);
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
                        onSubmit={e => {
                            e.preventDefault();
                            submit(e);
                          }}
                        >
                            <div className="message">
                                <p>Message</p>
                                <br />
                                <input placeholder="Title" className="title"></input>
                                <br />
                                <textarea placeholder="Description" className="description"></textarea>
                                <br />
                                
                                <br /><br />


                            </div>
                       
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
                            <label className="select-all"><p>Select all</p>
                                <input type="checkbox" checked="checked" />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <br /><br />
                        <p>Students</p>

                        <br />
                        <table>
                            <thead>
                                <tr>
                                    <th><input type="checkbox" onChange={e => {
                                        let value = e.target.checked;
                                        setStudent(
                                            getStudent.map(d => {
                                                d.select = value;
                                                console.log(d);
                                                return d;
                                            })
                                        );
                                    }}  /></th>
                                    <th>Reg No</th>
                                    <th>Full Name</th>
                                    <th>NIC</th>
                                </tr>
                            </thead>

                            <tbody>
                                {

                                    getStudent.map(d => (
                                        <tr key={d.stuID}>

                                            <td>
                                                <input type="checkbox" checked={d.select}
                                                    onChange={e => {
                                                        let value = e.target.checked;
                                                        setStudent(
                                                            getStudent.map(sd => {
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
                                            <td>{d.stuID}</td>
                                            <td>{d.name}</td>
                                            <td>{d.nid}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                        <br />
                        {/*<input type="submit" className="add-btn" onClick={() => {
                            sendNotification();

                        }} />*/}
                        <input type="submit" value="Add" className="add-btn" />

</form>
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
                                { viewNotification.map(d => (
                                <tr>
                                    <td>{d.notificationId}</td>
                                    <td>{d.senderUsername}</td>
                                    <td>{d.header}</td>
                                    <td>{d.message}</td>
                                    <td>
                                        <span className="action_btn">
                                            <a href="./managerviewnotification" className="eye"><i className="fa fa-eye"></i></a>
                                            <a href="#" className="trash"><i className="fa fa-trash"></i></a>
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