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



    private double jan;
    private double feb;
    private double march;
    private double apr;
    private double may;
    private double jun;
    private double jul;
    private double au;
    private double sep;
    private double oct;
    private double nov;
    private double dec;

    public DashboardDTO(double jan, double feb, double march, double apr, double may, double jun, double jul, double au, double sep, double oct, double nov, double dec) {
        this.jan = jan;
        this.feb = feb;
        this.march = march;
        this.apr = apr;
        this.may = may;
        this.jun = jun;
        this.jul = jul;
        this.au = au;
        this.sep = sep;
        this.oct = oct;
        this.nov = nov;
        this.dec = dec;
    }

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

    public double getJan() {
        return jan;
    }

    public void setJan(double jan) {
        this.jan = jan;
    }

    public double getFeb() {
        return feb;
    }

    public void setFeb(double feb) {
        this.feb = feb;
    }

    public double getMarch() {
        return march;
    }

    public void setMarch(double march) {
        this.march = march;
    }

    public double getApr() {
        return apr;
    }

    public void setApr(double apr) {
        this.apr = apr;
    }

    public double getMay() {
        return may;
    }

    public void setMay(double may) {
        this.may = may;
    }

    public double getJun() {
        return jun;
    }

    public void setJun(double jun) {
        this.jun = jun;
    }

    public double getJul() {
        return jul;
    }

    public void setJul(double jul) {
        this.jul = jul;
    }

    public double getAu() {
        return au;
    }

    public void setAu(double au) {
        this.au = au;
    }

    public double getSep() {
        return sep;
    }

    public void setSep(double sep) {
        this.sep = sep;
    }

    public double getOct() {
        return oct;
    }

    public void setOct(double oct) {
        this.oct = oct;
    }

    public double getNov() {
        return nov;
    }

    public void setNov(double nov) {
        this.nov = nov;
    }

    public double getDec() {
        return dec;
    }

    public void setDec(double dec) {
        this.dec = dec;
    }
}
