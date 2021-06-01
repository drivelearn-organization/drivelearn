package com.example.drivelearnbackend.Repositories.Entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
public class Cource {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int courseId;
    private Date examDate1;
    private Date examDate2;
    private Date examDate3;
    private Date trailDate;
    private Date startDate;
    private int barcodeNumber;
    private int status;

//    @ManyToOne
//    @JsonBackReference
//    @JoinColumn(name = "studebt_id",referencedColumnName = "stuId")
//    private Student student;
//
//    @ManyToMany
//    @JsonIgnore
//    @JoinTable(
//            name = "cource_vehicle_type_assoc",
//            joinColumns = @JoinColumn(name = "courseId",referencedColumnName = "courseId"),
//            inverseJoinColumns = @JoinColumn(name = "type_id",referencedColumnName = "typeId")
//    )
//    private List<VechileType> vechileTypes=new ArrayList<>();
//
//    @OneToMany(mappedBy = "cource")
//    @JsonManagedReference
//    List<StuSession> sessionList=new ArrayList<>();

}
