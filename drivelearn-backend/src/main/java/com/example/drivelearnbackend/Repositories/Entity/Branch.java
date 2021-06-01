package com.example.drivelearnbackend.Repositories.Entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Branch {

    @Id
    private int branchid;
    private String branchName;

//    @OneToMany(mappedBy = "branch")
//    @JsonManagedReference
//    List<Employee> employeeList=new ArrayList<>();
//
//    @OneToMany(mappedBy = "branch")
//    @JsonManagedReference
//    List<Vehicle> vehicleList=new ArrayList<>();
//
//    @OneToMany(mappedBy = "branch")
//    @JsonManagedReference
//    List<Student> studentList=new ArrayList<>();


}
