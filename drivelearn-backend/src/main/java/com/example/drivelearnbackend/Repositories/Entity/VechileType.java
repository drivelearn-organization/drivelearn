package com.example.drivelearnbackend.Repositories.Entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

@Entity
public class VechileType {
    @Id
    private int typeId;
    private int minimumTrainingTime;
    private String typeName;
    private String priorRequirement;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "category_id", referencedColumnName = "categoryId")
    private VehicleCategory category;

    @OneToMany(mappedBy = "vechileType")
    @JsonManagedReference
    private List<Vehicle> vehicleList=new ArrayList<>();

    @OneToMany(mappedBy = "vechileType")
    @JsonManagedReference
    private List<CourceTypeAssoc> courceTypeAssocList=new ArrayList<>();

    public VechileType() {
    }

    public VechileType(int typeId, int minimumTrainingTime, String typeName, String priorRequirement, VehicleCategory category, List<Vehicle> vehicleList) {
        this.typeId = typeId;
        this.minimumTrainingTime = minimumTrainingTime;
        this.typeName = typeName;
        this.priorRequirement = priorRequirement;
        this.category = category;
        this.vehicleList = vehicleList;
    }

    public int getTypeId() {
        return typeId;
    }

    public void setTypeId(int typeId) {
        this.typeId = typeId;
    }

    public int getMinimumTrainingTime() {
        return minimumTrainingTime;
    }

    public void setMinimumTrainingTime(int minimumTrainingTime) {
        this.minimumTrainingTime = minimumTrainingTime;
    }

    public String getTypeName() {
        return typeName;
    }

    public void setTypeName(String typeName) {
        this.typeName = typeName;
    }

    public String getPriorRequirement() {
        return priorRequirement;
    }

    public void setPriorRequirement(String priorRequirement) {
        this.priorRequirement = priorRequirement;
    }

    public VehicleCategory getCategory() {
        return category;
    }

    public void setCategory(VehicleCategory category) {
        this.category = category;
    }

    public List<Vehicle> getVehicleList() {
        return vehicleList;
    }

    public void setVehicleList(List<Vehicle> vehicleList) {
        this.vehicleList = vehicleList;
    }
}
