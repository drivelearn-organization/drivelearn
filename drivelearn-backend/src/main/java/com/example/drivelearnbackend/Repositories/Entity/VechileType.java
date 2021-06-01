package com.example.drivelearnbackend.Repositories.Entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class VechileType {
    @Id
    private int typeId;
    private int minimumTrainingTime;
    private String typeName;
    private String priorRequirement;

//    @ManyToOne
//    @JsonBackReference
//    @JoinColumn(name = "category_id", referencedColumnName = "categoryId")
//    private VehicleCategory category;
//
//    @OneToMany(mappedBy = "vechileType")
//    @JsonManagedReference
//    private List<Vehicle> vehicleList=new ArrayList<>();
//

}
