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

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "tainer_id",referencedColumnName = "empid")
    private Employee trainer;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "assigner_id",referencedColumnName = "empid")
    private Employee assigner;

    @OneToMany(mappedBy = "session")
    @JsonManagedReference
    List<StuSession> stuSessions=new ArrayList<>();

    public Session() {
    }

    public Session(int sessionId, Date date, int status, int numOfStudent, String route, Date startTime, Date endTime, Employee trainer, Employee assigner, List<StuSession> stuSessions) {
        this.sessionId = sessionId;
        this.date = date;
        this.status = status;
        this.numOfStudent = numOfStudent;
        this.route = route;
        this.startTime = startTime;
        this.endTime = endTime;
        this.trainer = trainer;
        this.assigner = assigner;
        this.stuSessions = stuSessions;
    }

    public int getSessionId() {
        return sessionId;
    }

    public void setSessionId(int sessionId) {
        this.sessionId = sessionId;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public int getNumOfStudent() {
        return numOfStudent;
    }

    public void setNumOfStudent(int numOfStudent) {
        this.numOfStudent = numOfStudent;
    }

    public String getRoute() {
        return route;
    }

    public void setRoute(String route) {
        this.route = route;
    }

    public Date getStartTime() {
        return startTime;
    }

    public void setStartTime(Date startTime) {
        this.startTime = startTime;
    }

    public Date getEndTime() {
        return endTime;
    }

    public void setEndTime(Date endTime) {
        this.endTime = endTime;
    }

    public Employee getTrainer() {
        return trainer;
    }

    public void setTrainer(Employee trainer) {
        this.trainer = trainer;
    }

    public Employee getAssigner() {
        return assigner;
    }

    public void setAssigner(Employee assigner) {
        this.assigner = assigner;
    }

    public List<StuSession> getStuSessions() {
        return stuSessions;
    }

    public void setStuSessions(List<StuSession> stuSessions) {
        this.stuSessions = stuSessions;
    }
}
