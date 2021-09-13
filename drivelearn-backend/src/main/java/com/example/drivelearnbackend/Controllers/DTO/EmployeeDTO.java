package com.example.drivelearnbackend.Controllers.DTO;

import java.time.LocalDate;

public class EmployeeDTO {

    private String moNumber;
    private String emNumber;
    private String fullName;
    private String nid;
    private String branch;
    private String username;
    private String password;
    private int role;
    private int count;
    private LocalDate registerDate;
    private int empid;
    private String password2;
    private String password3;
    private int branchId;

    public int getBranchId() {
        return branchId;
    }

    public void setBranchId(int branchId) {
        this.branchId = branchId;
    }

    public EmployeeDTO(String username, String password, int role, String branch, int branchId,int empid) {

        this.username = username;
        this.password = password;
        this.role = role;
        this.branch = branch;
        this.branchId = branchId;
        this.empid=empid;
    }

    public EmployeeDTO(String username, String password, int role) {
        this.username = username;
        this.password = password;
        this.role = role;
    }

    public EmployeeDTO(int empid, String moNumber, String fullName, String nid, String branch, int count, LocalDate registerDate,String password,String password2, String password3) {
        this.moNumber = moNumber;
        this.fullName = fullName;
        this.nid = nid;
        this.branch = branch;
        this.password = password;
        this.count = count;
        this.registerDate = registerDate;
        this.empid = empid;
        this.password = password;
        this.password2 = password2;
        this.password3 = password3;
    }
    public EmployeeDTO(int empid, String moNumber, String fullName, String nid, String branch, int count, LocalDate registerDate) {
        this.moNumber = moNumber;
        this.fullName = fullName;
        this.nid = nid;
        this.branch = branch;
        this.password = password;
        this.count = count;
        this.registerDate = registerDate;
        this.empid = empid;

    }

    public EmployeeDTO(String fullName, int empid) {
        this.fullName = fullName;
        this.empid = empid;
    }

    public int getEmpid() {
        return empid;
    }

    public void setEmpid(int empid) {
        this.empid = empid;
    }

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
    public String getPassword2() { return password2; }

    public void setPassword2(String password2) { this.password2 = password2; }

    public String getPassword3() { return password3; }

    public void setPassword3(String password3) { this.password3 = password3; }

    public LocalDate getRegisterDate() { return registerDate; }

    public int getCount() { return count; }

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
    public void setRegisterDate(LocalDate registerDate) { this.registerDate = registerDate; }
    public void setCount(int count) { this.count = count; }

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
