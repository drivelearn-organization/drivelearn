package com.example.drivelearnbackend.Repositories.Entity;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
public class License {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int licenseId;
    private double amount;
    private LocalDate payedDate;
    private LocalDate expireDate;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "vehicleId",referencedColumnName = "vechicleId")
    private Vehicle vehicle;

    public License() {
    }

    public License(LocalDate payedDate, LocalDate expireDate,Vehicle vehicle) {
        this.payedDate = payedDate;
        this.expireDate = expireDate;
        this.vehicle=vehicle;
    }

    public License(int licenseId, double amount, LocalDate payedDate, LocalDate expireDate, Vehicle vehicle) {
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

    public Vehicle getVehicle() {
        return vehicle;
    }

    public void setVehicle(Vehicle vehicle) {
        this.vehicle = vehicle;
    }
}
