package com.example.drivelearnbackend.Repositories.Entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
public class Cource {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int courseId;
    private Date examDate1;
    private Date examDate2;
    private Date examDate3;
    private Date trailDate;
    private Date startDate;
    private int barcodeNumber;
    private int status;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "studebt_id",referencedColumnName = "stuId")
    private Student student;

    @ManyToMany
    @JsonIgnore
    @JoinTable(
            name = "cource_vehicle_type_assoc",
            joinColumns = @JoinColumn(name = "courseId",referencedColumnName = "courseId"),
            inverseJoinColumns = @JoinColumn(name = "type_id",referencedColumnName = "typeId")
    )
    private List<VechileType> vechileTypes=new ArrayList<>();

    @OneToMany(mappedBy = "cource")
    @JsonManagedReference
    List<StuSession> sessionList=new ArrayList<>();

    public Cource() {
    }

    public Cource(int courseId, Date examDate1, Date examDate2, Date examDate3, Date trailDate, Date startDate, int barcodeNumber, int status, Student student, List<VechileType> vechileTypes, List<StuSession> sessionList) {
        this.courseId = courseId;
        this.examDate1 = examDate1;
        this.examDate2 = examDate2;
        this.examDate3 = examDate3;
        this.trailDate = trailDate;
        this.startDate = startDate;
        this.barcodeNumber = barcodeNumber;
        this.status = status;
        this.student = student;
        this.vechileTypes = vechileTypes;
        this.sessionList = sessionList;
    }

    public int getCourseId() {
        return courseId;
    }

    public void setCourseId(int courseId) {
        this.courseId = courseId;
    }

    public Date getExamDate1() {
        return examDate1;
    }

    public void setExamDate1(Date examDate1) {
        this.examDate1 = examDate1;
    }

    public Date getExamDate2() {
        return examDate2;
    }

    public void setExamDate2(Date examDate2) {
        this.examDate2 = examDate2;
    }

    public Date getExamDate3() {
        return examDate3;
    }

    public void setExamDate3(Date examDate3) {
        this.examDate3 = examDate3;
    }

    public Date getTrailDate() {
        return trailDate;
    }

    public void setTrailDate(Date trailDate) {
        this.trailDate = trailDate;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public int getBarcodeNumber() {
        return barcodeNumber;
    }

    public void setBarcodeNumber(int barcodeNumber) {
        this.barcodeNumber = barcodeNumber;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }

    public List<VechileType> getVechileTypes() {
        return vechileTypes;
    }

    public void setVechileTypes(List<VechileType> vechileTypes) {
        this.vechileTypes = vechileTypes;
    }

    public List<StuSession> getSessionList() {
        return sessionList;
    }

    public void setSessionList(List<StuSession> sessionList) {
        this.sessionList = sessionList;
    }
}
