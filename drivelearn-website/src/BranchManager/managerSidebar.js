import "./Sidebar.css";
import { Link } from "react-router-dom";
import Logo from "../ImgFolder/LogoWhite.png"


const Sidebar = ({sidebarOpen, closeSidebar}) => {  
      return(
      <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
        <img src={Logo} alt="Logo" width="50" height="50"/>
          <h1>DriveLEARN</h1>
        </div>
        &nbsp;&nbsp;&nbsp;
        <div className="closeicon" onClick={ () => closeSidebar()}>
        <i
          className="fa fa-times"
        ></i>
        </div>
      </div>

      <div className="sidebar__menu">
      {/* <div className="sidebar__link active_menu_link">
          <i className="fa fa-home"></i>
          <a href="./">Home</a>
        </div> */}
        <div className="sidebar__link active_menu_link">
          <i className="fa fa-tachometer"></i>
          {/* <a href="./branchmanager">Dashboard</a> */}
          <Link to = "/branchmanager" >Dashboard</Link>
        </div>
        <h2>MANAGEMENT</h2>
        <div className="sidebar__link">
          <i className="fa fa-users" aria-hidden="true"></i>
          {/* <a href="./managerstudent">Students</a> */}
          <Link to = "/managerstudent" >Students</Link>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-user-secret"></i>
          {/* <a href="./managerinstructor">Instructors</a> */}
          <Link to = "/managerinstructor" >Instructors</Link>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-bus"></i>
          {/* <a href="./adminvehicle">Vehicles</a> */}
          <Link to = "/managervehicle" >Vehicles</Link>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-money"></i>
          {/* <a href="./managerpayment">Payments</a> */}
          <Link to = "/managerpayment" >Payments</Link>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-clock-o"></i>
          {/* <a href="./managersession">Training Sessions</a> */}
          <Link to = "/managersession" >Training Sessions</Link>
        </div>
        <div className="sidebar__link">
        <i class="fas fa-envelope"></i>
          {/* <a href="#">Notifications</a> */}
          <Link to = "/managernotification" >Notifications</Link>
        </div>
        {/* <div className="sidebar__link">
          <i className="fa fa-bell"></i>
          <a href="#">Notifications</a>
        </div> */}
        <h2>PROFILE</h2>
        <div className="sidebar__link">
          <i className="fa fa-cog"></i>
          {/* <a href="./managersettings">Settings</a> */}
          <Link to = "/managersettings" >Settings</Link>
        </div>
        <div className="sidebar__logout">
          <i className="fa fa-power-off"></i>
          <Link to = "/" onClick={ () => sessionStorage.clear()}>Logout</Link>
        </div>
        {/* <div className="sidebar__logout">
          <i className="fa fa-times-circle"></i>
          <a href="#">Deactivate</a>
        </div> */}
      </div>
    </div>
);

}

export default Sidebar;