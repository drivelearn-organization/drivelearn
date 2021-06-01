package com.example.drivelearnbackend.Repositories.Entity;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.util.Date;

@Entity
public class Installment {
    @Id
    private int installmentId;
    private double amount;
    private Date date;

//    @ManyToOne
//    @JsonBackReference
//    private Employee employee;
//
//    @ManyToOne
//    @JsonBackReference
//    @JoinColumn(name = "student_id",referencedColumnName = "stuId")
//    private Student student;

}
