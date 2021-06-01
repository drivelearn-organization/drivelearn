package com.example.drivelearnbackend.Repositories.Entity;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Feedback {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int feedbackid;
    private Date date;
    private String start;
    private String end;
    private String reverse;
    private String searingBalance;
    private String cluchBalance;
    private String gear;
//    @ManyToOne
//    @JoinColumn(name = "trainer_id",referencedColumnName = "empid")
//    private Employee trainer;
//
//    @ManyToOne
//    @JoinColumn(name = "Stu_session_id",referencedColumnName = "stuSessionId")
//    private StuSession stuSession;
//
//    @ManyToOne
//    @JsonBackReference
//    @JoinColumn(name = "student_id",referencedColumnName = "stuId")
//    private Student student;


}
