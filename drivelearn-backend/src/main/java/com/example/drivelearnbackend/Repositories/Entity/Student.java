package com.example.drivelearnbackend.Repositories.Entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
public class Student {

    @Id
    private int stuId;
    private Date registereddate;
    private String idnum;
    private String address;
    private Date Dob;
    private String username;
    private String password;
    private String contact;

//    @OneToMany(mappedBy = "student")
//    @JsonManagedReference
//    private List<Feedback> feedbacks=new ArrayList<>();
//
//    @ManyToOne
//    @JsonBackReference
//    @JoinColumn(name = "brnch_id",referencedColumnName = "branchid")
//    private Branch branch;
//
//    @OneToMany(mappedBy = "student")
//    @JsonManagedReference
//    private List<StuSession> stuSessionList=new ArrayList<>();
//
//    @OneToMany(mappedBy = "student")
//    @JsonManagedReference
//    private List<Cource> courceList=new ArrayList<>();
//
//    @OneToMany(mappedBy = "student")
//    @JsonManagedReference
//    private List<Payment> paymentList=new ArrayList<>();
//
//    @ManyToMany
//    @JsonIgnore
//    @JoinTable(
//            name = "student_vehicle_type_assoc",
//            joinColumns = @JoinColumn(name = "student_id",referencedColumnName = "stuId"),
//            inverseJoinColumns = @JoinColumn(name = "type_id",referencedColumnName = "typeId")
//    )
//    private List<VechileType> vechileTypes=new ArrayList<>();

}
