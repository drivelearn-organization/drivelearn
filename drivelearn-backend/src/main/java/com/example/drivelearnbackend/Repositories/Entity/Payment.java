package com.example.drivelearnbackend.Repositories.Entity;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Payment {
    @Id
    private int paymentId;
    private double amount;
    private Date date;

//    @ManyToOne
//    @JsonBackReference
//    @JoinColumn(name = "student_id",referencedColumnName = "stuId")
//    private Student student;
//
//    @OneToOne
//    @JoinColumn(name = "course_id",referencedColumnName = "courseId")
//    private Cource cource;

}
