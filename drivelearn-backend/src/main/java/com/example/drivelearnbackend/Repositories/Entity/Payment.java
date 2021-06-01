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

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "student_id",referencedColumnName = "stuId")
    private Student student;

    @OneToOne
    @JoinColumn(name = "course_id",referencedColumnName = "courseId")
    private Cource cource;

    public Payment() {
    }

    public Payment(int paymentId, double amount, Date date, Student student, Cource cource) {
        this.paymentId = paymentId;
        this.amount = amount;
        this.date = date;
        this.student = student;
        this.cource = cource;
    }

    public int getPaymentId() {
        return paymentId;
    }

    public void setPaymentId(int paymentId) {
        this.paymentId = paymentId;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }

    public Cource getCource() {
        return cource;
    }

    public void setCource(Cource cource) {
        this.cource = cource;
    }
}
