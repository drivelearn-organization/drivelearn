package com.example.drivelearnbackend.Controllers.DTO;

import java.time.LocalDate;

public class UpdateVehicleDTO {

    private int vechicleId;
    private String regiNumner;
    private String chacieNumber;
    private int currentLicenId;
    private int currentInsuranceId;
    private int startingMilage;
    private int status;
    private LocalDate addedDate;
    private String branchName;
    private String vehicleType;
    private String vehicleNumber;

    private int insuaranceId;
    private double amount;
    private LocalDate payedDate;
    private LocalDate expireDate;

    private int licenseId;
    private double licenceAmount;
    private LocalDate licencePayedDate;
    private LocalDate licenceExpireDate;

    public UpdateVehicleDTO() {
    }

    public UpdateVehicleDTO(int vechicleId, String regiNumner) {
        this.vechicleId = vechicleId;
        this.regiNumner = regiNumner;
    }

    public UpdateVehicleDTO(int vechicleId, String regiNumner, String chacieNumber, int startingMilage, String vehicleType, LocalDate expireDate, LocalDate licenceExpireDate,LocalDate payedDate,LocalDate licencePayedDate) {
        this.vechicleId = vechicleId;
        this.regiNumner = regiNumner;
        this.chacieNumber = chacieNumber;
        this.startingMilage = startingMilage;
        this.vehicleType = vehicleType;
        this.expireDate = expireDate;
        this.licenceExpireDate = licenceExpireDate;
        this.payedDate=payedDate;
        this.licencePayedDate=licencePayedDate;
    }

    public String getVehicleNumber() {
        return vehicleNumber;
    }

    public void setVehicleNumber(String vehicleNumber) {
        this.vehicleNumber = vehicleNumber;
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
        return chacieNumber;
    }

    public void setChacieNumber(String chacieNumber) {
        this.chacieNumber = chacieNumber;
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

    public LocalDate getAddedDate() {
        return addedDate;
    }

    public void setAddedDate(LocalDate addedDate) {
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

    public LocalDate getPayedDate() {
        return payedDate;
    }

    public void setPayedDate(LocalDate payedDate) {
        this.payedDate = payedDate;
    }

    public LocalDate getExpireDate() {
        return expireDate;
    }

    public void setExpireDate(LocalDate expireDate) {
        this.expireDate = expireDate;
    }

    public LocalDate getLicencePayedDate() {
        return licencePayedDate;
    }

    public void setLicencePayedDate(LocalDate licencePayedDate) {
        this.licencePayedDate = licencePayedDate;
    }

    public LocalDate getLicenceExpireDate() {
        return licenceExpireDate;
    }

    public void setLicenceExpireDate(LocalDate licenceExpireDate) {
        this.licenceExpireDate = licenceExpireDate;
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

}
