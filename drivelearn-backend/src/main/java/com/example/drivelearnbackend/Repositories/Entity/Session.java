package com.example.drivelearnbackend.Repositories.Entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.LinkedList;
import java.util.List;

@Entity
public class Session {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int sessionId;
    private LocalDate date;
    private int status;
    private int numOfStudent;
    private String route;
    private String startTime;
    private String endTime;
    private String ladtitude;
    private String longatitude;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "tainer_id",referencedColumnName = "empid")
    private Employee trainer;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "assigner_id",referencedColumnName = "empid")
    private Employee assigner;

    @OneToMany(mappedBy = "session",fetch = FetchType.EAGER)
    @JsonManagedReference
    List<StuSession> stuSessions=new ArrayList<>();

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "branch_id", referencedColumnName = "branchid")
    private Branch branch;


    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "vehicle_type_id", referencedColumnName = "typeId")
    private VechileType type;

    public Session() {
    }

    public Session(LocalDate date, int status, int numOfStudent, String route, String startTime, String endTime, Employee trainer, Employee assigner) {
        this.date = date;
        this.status = status;
        this.numOfStudent = numOfStudent;
        this.route = route;
        this.startTime = startTime;
        this.endTime = endTime;
        this.trainer = trainer;
        this.assigner = assigner;
    }

    public Session(LocalDate date, int status, int numOfStudent, String route, String startTime, String endTime, Employee trainer, Employee assigner, Branch branch) {
        this.date = date;
        this.status = status;
        this.numOfStudent = numOfStudent;
        this.route = route;
        this.startTime = startTime;
        this.endTime = endTime;
        this.trainer = trainer;
        this.assigner = assigner;
        this.branch = branch;
    }

    public Branch getBranch() {
        return branch;
    }

    public void setBranch(Branch branch) {
        this.branch = branch;
    }

    public int getSessionId() {
        return sessionId;
    }

    public void setSessionId(int sessionId) {
        this.sessionId = sessionId;
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

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public String getEndTime() {
        return endTime;
    }

    public void setEndTime(String endTime) {
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

    public void setStuSessions(LinkedList<StuSession> stuSessions) {
        this.stuSessions = stuSessions;
    }

    public void setStuSessions(List<StuSession> stuSessions) {
        this.stuSessions = stuSessions;
    }

    public VechileType getType() {
        return type;
    }

    public void setType(VechileType type) {
        this.type = type;
    }

    public Session(LocalDate date, int status, int numOfStudent, String route, String startTime, String endTime, Employee trainer, Employee assigner, Branch branch, VechileType type) {
        this.date = date;
        this.status = status;
        this.numOfStudent = numOfStudent;
        this.route = route;
        this.startTime = startTime;
        this.endTime = endTime;
        this.trainer = trainer;
        this.assigner = assigner;
        this.branch = branch;
        this.type = type;
    }

    public String getLadtitude() {
        return ladtitude;
    }

    public void setLadtitude(String ladtitude) {
        this.ladtitude = ladtitude;
    }

    public String getLongatitude() {
        return longatitude;
    }

    public void setLongatitude(String longatitude) {
        this.longatitude = longatitude;
    }
}
