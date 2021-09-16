package com.example.drivelearnbackend.Controllers.DTO;

public class DashboardDTO {

    private int branchManagerCount;
    private int insructorCount;
    private int studentCount;
    private int  vehiclelistCount;

    public DashboardDTO(int branchManagerCount, int insructorCount, int studentCount, int vehiclelistCount) {
        this.branchManagerCount = branchManagerCount;
        this.insructorCount = insructorCount;
        this.studentCount = studentCount;
        this.vehiclelistCount = vehiclelistCount;
    }

    public int getBranchManagerCount() {
        return branchManagerCount;
    }

    public void setBranchManagerCount(int branchManagerCount) {
        this.branchManagerCount = branchManagerCount;
    }

    public int getInsructorCount() {
        return insructorCount;
    }

    public void setInsructorCount(int insructorCount) {
        this.insructorCount = insructorCount;
    }

    public int getStudentCount() {
        return studentCount;
    }

    public void setStudentCount(int studentCount) {
        this.studentCount = studentCount;
    }

    public int getVehiclelistCount() {
        return vehiclelistCount;
    }

    public void setVehiclelistCount(int vehiclelistCount) {
        this.vehiclelistCount = vehiclelistCount;
    }
}
