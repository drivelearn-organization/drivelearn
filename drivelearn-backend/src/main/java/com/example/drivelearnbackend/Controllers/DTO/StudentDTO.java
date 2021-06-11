package com.example.drivelearnbackend.Controllers.DTO;

import java.util.Date;

public class StudentDTO {
    private String name;
    private String address;
    private String NID;
    private String contact;
    private String branch;
    private String username;
            private String password;
//    private Date DOB;

    public StudentDTO(String name, String address, String NID, String contact, String branch, String username, String password) {
        this.name = name;
        this.address = address;
        this.NID = NID;
        this.contact = contact;
        this.branch = branch;
        this.username = username;
        this.password = password;
    }

//    public StudentDTO(String name, String address, String NID, String contact, String branch, String username, String password, Date DOB) {
//        this.name = name;
//        this.address = address;
//        this.NID = NID;
//        this.contact = contact;
//        this.branch = branch;
//        this.username = username;
//        this.password = password;
//        this.DOB = DOB;
//    }

//    public Date getDOB() {
//        return DOB;
//    }
//
//    public void setDOB(Date DOB) {
//        this.DOB = DOB;
//    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getNID() {
        return NID;
    }

    public void setNID(String NID) {
        this.NID = NID;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public String getBranch() {
        return branch;
    }

    public void setBranch(String branch) {
        this.branch = branch;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}
