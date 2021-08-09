package com.example.drivelearnbackend.Controllers.DTO;

public class EmployeeDTO {

    private String moNumber;
    private String emNumber;
    private String fullName;
    private String nid;
    private String branch;
    private String username;
    private String password;
    private int role;

    public int getRole() {
        return role;
    }

    public void setRole(int role) {
        this.role = role;
    }

    public EmployeeDTO(String moNumber, String emNumber, String fullName, String nid, String branch, String username, String password) {
        this.moNumber = moNumber;
        this.emNumber = emNumber;
        this.fullName = fullName;
        this.nid = nid;
        this.branch = branch;
        this.username = username;
        this.password = password;
    }

    public EmployeeDTO() {
    }

    public String getMoNumber() {
        return moNumber;
    }

    public void setMoNumber(String moNumber) {
        this.moNumber = moNumber;
    }

    public String getEmNumber() {
        return emNumber;
    }

    public String getBranch() {
        return branch;
    }

    public void setBranch(String branch) {
        this.branch = branch;
    }

    public void setEmNumber(String emNumber) {
        this.emNumber = emNumber;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getNid() {
        return nid;
    }

    public void setNid(String nid) {
        this.nid = nid;
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
