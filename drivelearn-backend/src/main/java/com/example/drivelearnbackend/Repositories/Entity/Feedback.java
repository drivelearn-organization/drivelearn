package com.example.drivelearnbackend.Repositories.Entity;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;

@Entity
public class Feedback {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int feedbackid;
    private LocalDate date;
    private int start;
    private int end;
    private int reverse;
    private int searingBalance;
    private int cluchBalance;
    private int gear;
    @ManyToOne
    @JoinColumn(name = "trainer_id",referencedColumnName = "empid")
    private Employee trainer;

    @ManyToOne
    @JoinColumn(name = "Stu_session_id",referencedColumnName = "stuSessionId")
    private StuSession stuSession;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "student_id",referencedColumnName = "stuId")
    private Student student;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "vehicle_type_id", referencedColumnName = "typeId")
    private VechileType type;

    public Feedback() {
    }

    public Feedback(LocalDate date, int start, int end, int reverse, int searingBalance, int cluchBalance, int gear, Student student,VechileType type) {
        this.date = date;
        this.start = start;
        this.end = end;
        this.reverse = reverse;
        this.searingBalance = searingBalance;
        this.cluchBalance = cluchBalance;
        this.gear = gear;
        this.student = student;
        this.type=type;
    }

    public int getStart() {
        return start;
    }

    public void setStart(int start) {
        this.start = start;
    }

    public int getEnd() {
        return end;
    }

    public void setEnd(int end) {
        this.end = end;
    }

    public int getReverse() {
        return reverse;
    }

    public void setReverse(int reverse) {
        this.reverse = reverse;
    }

    public int getSearingBalance() {
        return searingBalance;
    }

    public void setSearingBalance(int searingBalance) {
        this.searingBalance = searingBalance;
    }

    public int getCluchBalance() {
        return cluchBalance;
    }

    public void setCluchBalance(int cluchBalance) {
        this.cluchBalance = cluchBalance;
    }

    public int getGear() {
        return gear;
    }

    public void setGear(int gear) {
        this.gear = gear;
    }

    public int getFeedbackid() {
        return feedbackid;
    }

    public void setFeedbackid(int feedbackid) {
        this.feedbackid = feedbackid;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public Employee getTrainer() {
        return trainer;
    }

    public void setTrainer(Employee trainer) {
        this.trainer = trainer;
    }

    public StuSession getStuSession() {
        return stuSession;
    }

    public void setStuSession(StuSession stuSession) {
        this.stuSession = stuSession;
    }

    public Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }

    public VechileType getType() {
        return type;
    }

    public void setType(VechileType type) {
        this.type = type;
    }
}
