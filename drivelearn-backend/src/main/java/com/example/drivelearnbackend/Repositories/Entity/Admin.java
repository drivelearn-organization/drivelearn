package com.example.drivelearnbackend.Repositories.Entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Admin {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "adminId")
    private int adminId;
    private String name;
    private String password;


//    @JsonManagedReference
//    @OneToMany(mappedBy = "admin")
//    private List<Employee> employees=new ArrayList<>();


}
