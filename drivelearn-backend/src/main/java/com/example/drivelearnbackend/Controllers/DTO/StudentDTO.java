package com.example.drivelearnbackend.Controllers.DTO;

import java.time.LocalDate;

public class StudentDTO {
    private String name;
    private String address;
    private String nid;
    private String contact;
    private String branch;
    private String username;
    private String password;
    private String day;
    private String month;
    private String year;
    private int count;
    private  String sdob;
    private int stuID;

    private LocalDate Dob;
    public StudentDTO(String name, String address, String nid, String contact, String branch, String username, LocalDate dob, int stuID, int count) {
        this.name = name;
        this.address = address;
        this.nid = nid;
        this.contact = contact;
        this.branch = branch;
        this.username = username;
        Dob = dob;
        this.stuID = stuID;
        this.count = count;
    }





    public StudentDTO(String name, String address, String nid, String contact, String branch, String username, String password, String day, String month, String year) {
        this.name = name;
        this.address = address;
        this.nid = nid;
        this.contact = contact;
        this.branch = branch;
        this.username = username;
        this.password = password;
        this.day = day;
        this.month = month;
        this.year = year;
    }

    public StudentDTO(String name, String address, String nid, String contact, String branch, String username, String password, String day, String month, String year,int stuID) {
        this.name = name;
        this.address = address;
        this.nid = nid;
        this.contact = contact;
        this.branch = branch;
        this.username = username;
        this.password = password;
        this.day = day;
        this.month = month;
        this.year = year;
        this.stuID = stuID;
    }

    public StudentDTO() {
    }

    public StudentDTO(String name, String nid, int stuID) {
        this.name = name;
        this.nid = nid;
        this.stuID = stuID;
    }

    //    public LocalDate getDto() {
//        return dto;
//    }
//
//    public void setDto(LocalDate dto) {
//        this.dto = dto;
//    }

    public String getSdob() {
        return sdob;
    }

    public void setSdob(String sdob) {
        this.sdob = sdob;
    }

    public int getCount() { return count; }

    public LocalDate getDob() { return Dob; }

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

    public String getNid() {
        return nid;
    }

    public int getStuID() {
        return stuID;
    }

    public void setStuID(int stuID) {
        this.stuID = stuID;
    }

    public void setNid(String nid) {
        this.nid = nid;
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

    public void setCount(int count) { this.count = count; }

    public void setDob(LocalDate dob) { Dob = dob; }

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

    public String getDay() {
        return day;
    }

    public void setDay(String day) {
        this.day = day;
    }

    public String getMonth() {
        return month;
    }

    public void setMonth(String month) {
        this.month = month;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }
}
