package com.example.drivelearnbackend.Repositories.Entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
public class Cource {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int courseId;
    private LocalDateTime examDate1;
    private LocalDateTime examDate2;
    private LocalDateTime examDate3;
    private LocalDateTime trailDate;
    private LocalDateTime startDate;
    private int barcodeNumber;
    private int status;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "studebt_id",referencedColumnName = "stuId")
    private Student student;



    @OneToMany(mappedBy = "cource",fetch = FetchType.EAGER)
    @JsonManagedReference
    private List<CourceTypeAssoc> listCourceTypeAssoc;



    @OneToMany(mappedBy = "cource")
    @JsonManagedReference
    List<StuSession> sessionList=new ArrayList<>();

    public Cource() {
    }

    public Cource(Student student) {
        this.student = student;
    }

    public Cource(LocalDateTime startDate, Student student) {
        this.startDate = startDate;
        this.student = student;
    }

    public int getCourseId() {
        return courseId;
    }

    public void setCourseId(int courseId) {
        this.courseId = courseId;
    }

    public LocalDateTime getExamDate1() {
        return examDate1;
    }

    public void setExamDate1(LocalDateTime examDate1) {
        this.examDate1 = examDate1;
    }

    public LocalDateTime getExamDate2() {
        return examDate2;
    }

    public void setExamDate2(LocalDateTime examDate2) {
        this.examDate2 = examDate2;
    }

    public LocalDateTime getExamDate3() {
        return examDate3;
    }

    public void setExamDate3(LocalDateTime examDate3) {
        this.examDate3 = examDate3;
    }

    public LocalDateTime getTrailDate() {
        return trailDate;
    }

    public void setTrailDate(LocalDateTime trailDate) {
        this.trailDate = trailDate;
    }

    public LocalDateTime getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDateTime startDate) {
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

    public List<CourceTypeAssoc> getListCourceTypeAssoc() {
        return listCourceTypeAssoc;
    }

    public void setListCourceTypeAssoc(List<CourceTypeAssoc> listCourceTypeAssoc) {
        this.listCourceTypeAssoc = listCourceTypeAssoc;
    }

    public List<StuSession> getSessionList() {
        return sessionList;
    }

    public void setSessionList(List<StuSession> sessionList) {
        this.sessionList = sessionList;
    }
}
