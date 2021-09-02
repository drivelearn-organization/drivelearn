package com.example.drivelearnbackend.Repositories.Entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
public class Vehicle {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int vechicleId;
    private String regiNumner;
    private String chacieNumber;
    private int currentLicenId;
    private int currentInsuranceId;
    private int startingMilage;
    private int status;
    private LocalDate addedDate;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "branch_id",referencedColumnName = "branchid")
    private Branch branch;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "type_id",referencedColumnName = "typeId")
    private VechileType vechileType;

    @OneToMany(mappedBy = "vehicle")
    @JsonManagedReference
    private List<Insuarance> insuaranceList;

    @OneToMany(mappedBy = "vehicle")
    @JsonManagedReference
    private List<License> licenseList;

    public Vehicle() {
    }

    public Vehicle(String regiNumner, String chacieNumber, int startingMilage, int status, LocalDate addedDate, Branch branch, VechileType vechileType) {
        this.regiNumner = regiNumner;
        this.chacieNumber = chacieNumber;
        this.startingMilage = startingMilage;
        this.status = status;
        this.addedDate = addedDate;
        this.branch = branch;
        this.vechileType = vechileType;
    }

    public int getVechicleId() {
        return vechicleId;
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

    public Branch getBranch() {
        return branch;
    }

    public void setBranch(Branch branch) {
        this.branch = branch;
    }

    public VechileType getVechileType() {
        return vechileType;
    }

    public void setVechileType(VechileType vechileType) {
        this.vechileType = vechileType;
    }

    public List<Insuarance> getInsuaranceList() {
        return insuaranceList;
    }

    public void setInsuaranceList(List<Insuarance> insuaranceList) {
        this.insuaranceList = insuaranceList;
    }

    public List<License> getLicenseList() {
        return licenseList;
    }

    public void setLicenseList(List<License> licenseList) {
        this.licenseList = licenseList;
    }
}
