package com.example.drivelearnbackend.Repositories.Entity;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.util.Date;

@Entity
public class StuSession {
    @Id
    private int stuSessionId;
    private Date date;
    private int status;

//    @ManyToOne
//    @JsonBackReference
//    @JoinColumn(name = "session_id",referencedColumnName = "sessionId")
//    private Session session;
//
//    @ManyToOne
//    @JoinColumn(name = "vehicle_id",referencedColumnName = "vechicleId")
//    private Vehicle vehicle;
//
//    @ManyToOne
//    @JsonBackReference
//    @JoinColumn(name = "course_id",referencedColumnName = "courseId")
//    private Cource cource;
//
//    @ManyToOne
//    @JsonBackReference
//    @JoinColumn(name = "student_id",referencedColumnName = "stuId")
//    private Student student;


}
