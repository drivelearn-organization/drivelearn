package com.example.drivelearnbackend.Controllers.DTO;

import java.util.Date;

public class VehicleDTO{

    private int vechicleId;
    private String regiNumner;
    private String ChacieNumber;
    private int currentLicenId;
    private int currentInsuranceId;
    private int startingMilage;
    private int status;
    private Date addedDate;
    private String branchName;
    private String vehicleType;

    private int insuaranceId;
    private double amount;
    private Date payedDate;
    private Date expireDate;

    private int licenseId;
    private double licenceAmount;
    private Date licencePayedDate;
    private Date licenceExpireDate;

    public VehicleDTO() {
    }

    public int getVechicleId() {
        return vechicleId;
    }

    public String getBranchName() {
        return branchName;
    }

    public void setBranchName(String branchName) {
        this.branchName = branchName;
    }

    public String getVehicleType() {
        return vehicleType;
    }

    public void setVehicleType(String vehicleType) {
        this.vehicleType = vehicleType;
    }

    public void setVechicleId(int vechicleId) {
        this.vechicleId = vechicleId;
    }

    public String getRegiNumner() {
        return regiNumner;
    }

    public void setRegiNumner(String regiNumner) {
        this.regiNumner = regiNumner;
    }

    public String getChacieNumber() {
        return ChacieNumber;
    }

    public void setChacieNumber(String chacieNumber) {
        ChacieNumber = chacieNumber;
    }

    public int getCurrentLicenId() {
        return currentLicenId;
    }

    public void setCurrentLicenId(int currentLicenId) {
        this.currentLicenId = currentLicenId;
    }

    public int getCurrentInsuranceId() {
        return currentInsuranceId;
    }

    public void setCurrentInsuranceId(int currentInsuranceId) {
        this.currentInsuranceId = currentInsuranceId;
    }

    public int getStartingMilage() {
        return startingMilage;
    }

    public void setStartingMilage(int startingMilage) {
        this.startingMilage = startingMilage;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public Date getAddedDate() {
        return addedDate;
    }

    public void setAddedDate(Date addedDate) {
        this.addedDate = addedDate;
    }

    public int getInsuaranceId() {
        return insuaranceId;
    }

    public void setInsuaranceId(int insuaranceId) {
        this.insuaranceId = insuaranceId;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public Date getPayedDate() {
        return payedDate;
    }

    public void setPayedDate(Date payedDate) {
        this.payedDate = payedDate;
    }

    public Date getExpireDate() {
        return expireDate;
    }

    public void setExpireDate(Date expireDate) {
        this.expireDate = expireDate;
    }

    public int getLicenseId() {
        return licenseId;
    }

    public void setLicenseId(int licenseId) {
        this.licenseId = licenseId;
    }

    public double getLicenceAmount() {
        return licenceAmount;
    }

    public void setLicenceAmount(double licenceAmount) {
        this.licenceAmount = licenceAmount;
    }

    public Date getLicencePayedDate() {
        return licencePayedDate;
    }

    public void setLicencePayedDate(Date licencePayedDate) {
        this.licencePayedDate = licencePayedDate;
    }

    public Date getLicenceExpireDate() {
        return licenceExpireDate;
    }

    public void setLicenceExpireDate(Date licenceExpireDate) {
        this.licenceExpireDate = licenceExpireDate;
    }
}
