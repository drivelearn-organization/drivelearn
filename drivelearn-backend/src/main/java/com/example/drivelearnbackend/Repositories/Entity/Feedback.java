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

    public Feedback() {
    }

    public Feedback(int feedbackid, Date date, String start, String end, String reverse, String searingBalance, String cluchBalance, String gear, Employee trainer, StuSession stuSession, Student student) {
        this.feedbackid = feedbackid;
        this.date = date;
        this.start = start;
        this.end = end;
        this.reverse = reverse;
        this.searingBalance = searingBalance;
        this.cluchBalance = cluchBalance;
        this.gear = gear;
        this.trainer = trainer;
        this.stuSession = stuSession;
        this.student = student;
    }

    public int getFeedbackid() {
        return feedbackid;
    }

    public void setFeedbackid(int feedbackid) {
        this.feedbackid = feedbackid;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getStart() {
        return start;
    }

    public void setStart(String start) {
        this.start = start;
    }

    public String getEnd() {
        return end;
    }

    public void setEnd(String end) {
        this.end = end;
    }

    public String getReverse() {
        return reverse;
    }

    public void setReverse(String reverse) {
        this.reverse = reverse;
    }

    public String getSearingBalance() {
        return searingBalance;
    }

    public void setSearingBalance(String searingBalance) {
        this.searingBalance = searingBalance;
    }

    public String getCluchBalance() {
        return cluchBalance;
    }

    public void setCluchBalance(String cluchBalance) {
        this.cluchBalance = cluchBalance;
    }

    public String getGear() {
        return gear;
    }

    public void setGear(String gear) {
        this.gear = gear;
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
}
