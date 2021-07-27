import React from 'react';
import '../css/manageStudent.css';

function manageStudent() {
    return (
        <div className ="emp-card-container">
            <form className="searchbar-admin" method="POST">
            <input type="text" class="searchbar-admin_search" placeholder="Search user by name or id"></input>
            <div className="search-icon"><i class="fas fa-search"></i></div>
            </form>
            
        

        <div className ="view-payment-datails">
                <div>Stu id</div>
                <div>Name</div>
                <div>Contact No</div>
                <div className ="branch">Branch</div>
                <div>Course</div>
                <div className ="total_payment">Total payment</div>
                <div className ="rest_amount">Rest amount</div>
               
            </div>
        
        <div className ="fullCard">
            <div className="manage-users-id">#1</div>  
            <div className="manage-users-name">Hasani</div>
            <div>0712444719</div>
            <div>Matara</div>
            <div>light vehicle</div>
            <div>20 000</div>
            <div>10 000</div>
            
         
        </div>
        <div className ="fullCard">
            <div className="manage-users-id">#2</div>  
            <div className="manage-users-name">Raini</div>
            <div>0712444719</div>
            <div>Matara</div>
            <div>Heavy vehicle</div>
            <div>20 000</div>
            <div>10 000</div>
            
         
        </div>
        
        </div>
       
    )
}

export default manageStudent
