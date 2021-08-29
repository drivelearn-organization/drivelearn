
import { Link } from "react-router-dom";
import "./../BranchManager/Sidebar.css";

const Sidebar = ({sidebarOpen, closeSidebar}) => {  
      return(
      <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
        <img src='images/LogoWhite.png' alt="Logo" width="50" height="50"/>
          <h1>DriveLEARN</h1>
        </div>
        <div className="closeicon" onClick={ () => closeSidebar()}>
        <i
          className="fa fa-times"
        ></i>
        </div>
      </div>

      <div className="sidebar__menu">
      <div className="sidebar__link active_menu_link">
          <i className="fa fa-home"></i>
          <a href="./">Home</a>
        </div>
        <div className="sidebar__link active_menu_link">
          <i className="fa fa-tachometer"></i>
          <a href="./administrator">Dashboard</a>
        </div>
        <h2>MANAGEMENT</h2>
        <div className="sidebar__link">
          <i className="fa fa-users" aria-hidden="true"></i>
          <a href="./adminstudent">Students</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-user-circle-o"></i>
          <a href="./adminmanager">Branch Managers</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-user-secret"></i>
          <a href="./admininstructor">Instructors</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-bus"></i>
          <a href="./adminvehicle">Vehicles</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-money"></i>
          <a href="#">Payments</a>
        </div>
        {/* <div className="sidebar__link">
          <i className="fa fa-clock-o"></i>
          <a href="#">Training Sessions</a>
        </div> */}
        <h2>PROFILE</h2>
        <div className="sidebar__link">
          <i className="fa fa-cog"></i>
          <a href="./adminsettings">Settings</a>
        </div>
        {/* <div className="sidebar__link">
          <i className="fa fa-user-plus"></i>
          <a href="#">Edit Profile</a>
        </div> */}
        <div className="sidebar__logout">
          <i className="fa fa-power-off"></i>
          {/* <a href="../HomePa">Logout</a> */}
        <Link to = "/" onClick={ () => sessionStorage.clear()}>Logout</Link>
        </div>
        <div className="sidebar__logout">
          <i className="fa fa-times-circle"></i>
          <a href="#">Deactivate</a>
        </div>
      </div>
    </div>
);

}

export default Sidebar;