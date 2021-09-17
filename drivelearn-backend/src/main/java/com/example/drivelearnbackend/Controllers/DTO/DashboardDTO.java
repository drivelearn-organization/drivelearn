package com.example.drivelearnbackend.Controllers.DTO;

public class DashboardDTO {

    private int branchManagerCount;
    private int insructorCount;
    private int studentCount;
    private int  vehiclelistCount;
    private double paymentDetailsCount;
    private double paymentDetailsCount1;
    private double paymentDetailsCount2;
    private double paymentDetailsCount3;

    public DashboardDTO(int branchManagerCount, int insructorCount, int studentCount, int vehiclelistCount, double paymentDetailsCount, double paymentDetailsCount1, double paymentDetailsCount2, double paymentDetailsCount3) {
        this.branchManagerCount = branchManagerCount;
        this.insructorCount = insructorCount;
        this.studentCount = studentCount;
        this.vehiclelistCount = vehiclelistCount;
        this.paymentDetailsCount = paymentDetailsCount;
        this.paymentDetailsCount1 = paymentDetailsCount1;
        this.paymentDetailsCount2 = paymentDetailsCount2;
        this.paymentDetailsCount3 = paymentDetailsCount3;
    }

    public double getPaymentDetailsCount3() {
        return paymentDetailsCount3;
    }

    public void setPaymentDetailsCount3(double paymentDetailsCount3) {
        this.paymentDetailsCount3 = paymentDetailsCount3;
    }

    public double getPaymentDetailsCount() {
        return paymentDetailsCount;
    }

    public void setPaymentDetailsCount(double paymentDetailsCount) {
        this.paymentDetailsCount = paymentDetailsCount;
    }

    public double getPaymentDetailsCount1() {
        return paymentDetailsCount1;
    }

    public void setPaymentDetailsCount1(double paymentDetailsCount1) {
        this.paymentDetailsCount1 = paymentDetailsCount1;
    }

    public double getPaymentDetailsCount2() {
        return paymentDetailsCount2;
    }

    public void setPaymentDetailsCount2(double paymentDetailsCount2) {
        this.paymentDetailsCount2 = paymentDetailsCount2;
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
