package com.example.drivelearnbackend.Repositories.Entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
public class Vehicle {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int vechicleId;
    private String regiNumner;
    private String ChacieNumber;
    private int currentLicenId;
    private int currentInsuranceId;
    private int startingMilage;
    private int status;
    private Date addedDate;

//    @ManyToOne
//    @JsonBackReference
//    @JoinColumn(name = "branch_id",referencedColumnName = "branchid")
//    private Branch branch;
//
//    @ManyToOne
//    @JsonBackReference
//    @JoinColumn(name = "type_id",referencedColumnName = "typeId")
//    private VechileType vechileType;
//
//    @OneToMany(mappedBy = "vehicle")
//    @JsonManagedReference
//    private List<Insuarance> insuaranceList;
//
//    @OneToMany(mappedBy = "vehicle")
//    @JsonManagedReference
//    private List<License> licenseList;


}
