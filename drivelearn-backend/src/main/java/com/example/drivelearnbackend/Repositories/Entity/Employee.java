package com.example.drivelearnbackend.Repositories.Entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int empid;
    private String moNumber;
    private String emNumber;
    private int role;
    private String firstName;
    private String lastName;
    private String NID;
    private int isActive;
    private String username;
    private String password;
//    @ManyToOne
//    @JsonBackReference
//    @JoinColumn(name = "admin_id",referencedColumnName = "adminId")
//    private Admin admin;
//
//    @ManyToOne
//    @JsonBackReference
//    @JoinColumn(name = "branch_id", referencedColumnName = "branchid")
//    private Branch branch;
//
//    @OneToMany(mappedBy = "employee")
//    @JsonManagedReference
//    List<Installment> installmentList=new ArrayList<>();
//
//    @OneToMany(mappedBy = "trainer")
//    @JsonManagedReference
//    List<Session> trainersSessionList=new ArrayList<>();
//
//    @OneToMany(mappedBy = "assigner")
//    @JsonManagedReference
//    List<Session> assinersSessionList=new ArrayList<>();


}
