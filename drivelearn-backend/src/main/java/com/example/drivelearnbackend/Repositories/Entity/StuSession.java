package com.example.drivelearnbackend.Repositories.Entity;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;

@Entity
public class StuSession {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int stuSessionId;
    private LocalDate date;
    private int status;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "session_id",referencedColumnName = "sessionId")
    private Session session;



    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "course_id",referencedColumnName = "courseId")
    private Cource cource;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "student_id",referencedColumnName = "stuId")
    private Student student;

    public StuSession(LocalDate date, int status, Session session, Cource cource, Student student) {
        this.date = date;
        this.status = status;
        this.session = session;
        this.cource = cource;
        this.student = student;
    }

    public StuSession() {
    }

    public int getStuSessionId() {
        return stuSessionId;
    }

    public void setStuSessionId(int stuSessionId) {
        this.stuSessionId = stuSessionId;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public Session getSession() {
        return session;
    }

    public void setSession(Session session) {
        this.session = session;
    }

    public Cource getCource() {
        return cource;
    }

    public void setCource(Cource cource) {
        this.cource = cource;
    }

    public Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }
}
