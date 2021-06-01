package com.example.drivelearnbackend.Repositories.Entity;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.Date;

@Entity
public class License {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int licenseId;
    private double amount;
    private Date payedDate;
    private Date expireDate;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "vehicleId",referencedColumnName = "vechicleId")
    private Vehicle vehicle;

    public License() {
    }

    public License(int licenseId, double amount, Date payedDate, Date expireDate, Vehicle vehicle) {
        this.licenseId = licenseId;
        this.amount = amount;
        this.payedDate = payedDate;
        this.expireDate = expireDate;
        this.vehicle = vehicle;
    }

    public int getLicenseId() {
        return licenseId;
    }

    public void setLicenseId(int licenseId) {
        this.licenseId = licenseId;
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

    public Vehicle getVehicle() {
        return vehicle;
    }

    public void setVehicle(Vehicle vehicle) {
        this.vehicle = vehicle;
    }
}
