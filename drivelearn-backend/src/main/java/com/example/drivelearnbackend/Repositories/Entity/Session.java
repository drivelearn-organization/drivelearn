package com.example.drivelearnbackend.Repositories.Entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
public class Session {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int sessionId;
    private Date date;
    private int status;
    private int numOfStudent;
    private String route;
    private Date startTime;
    private Date endTime;

//    @ManyToOne
//    @JsonBackReference
//    @JoinColumn(name = "tainer_id",referencedColumnName = "empid")
//    private Employee trainer;
//
//    @ManyToOne
//    @JsonBackReference
//    @JoinColumn(name = "assigner_id",referencedColumnName = "empid")
//    private Employee assigner;
//
//    @OneToMany(mappedBy = "session")
//    @JsonManagedReference
//    List<StuSession> stuSessions=new ArrayList<>();

}
