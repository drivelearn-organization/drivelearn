package com.example.drivelearnbackend.Repositories.Entity;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Insuarance {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int insuaranceId;
    private double amount;
    private Date payedDate;
    private Date expireDate;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "vehicleId",referencedColumnName = "vechicleId")
    private Vehicle vehicle;

    public Insuarance() {
    }

    public Insuarance(int insuaranceId, double amount, Date payedDate, Date expireDate, Vehicle vehicle) {
        this.insuaranceId = insuaranceId;
        this.amount = amount;
        this.payedDate = payedDate;
        this.expireDate = expireDate;
        this.vehicle = vehicle;
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

    public Vehicle getVehicle() {
        return vehicle;
    }

    public void setVehicle(Vehicle vehicle) {
        this.vehicle = vehicle;
    }
}
