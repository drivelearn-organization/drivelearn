package com.example.drivelearnbackend.Controllers.DTO;

public class EmployeeTypeDTO {

    private int empid;
    private String fullName;
    private String username;

    public EmployeeTypeDTO() {
    }

    public EmployeeTypeDTO(int empid, String fullName, String username) {
        this.empid = empid;
        this.fullName = fullName;
        this.username = username;
    }

    public int getEmpid() {
        return empid;
    }

    public void setEmpid(int empid) {
        this.empid = empid;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
