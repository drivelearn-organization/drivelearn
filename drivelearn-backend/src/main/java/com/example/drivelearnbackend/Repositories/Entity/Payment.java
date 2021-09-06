package com.example.drivelearnbackend.Repositories.Entity;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int paymentId;
    private double amount;
    private LocalDate date;


    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "student_id",referencedColumnName = "stuId")
    private Student student;

    @OneToOne
    @JoinColumn(name = "course_id",referencedColumnName = "courseId")
    private Cource cource;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "totai_payment_id",referencedColumnName = "id")
    private TotalPayment totalPayment;

    public Payment() {
    }

    public Payment(double amount, LocalDate date, Student student, Cource cource) {

        this.amount = amount;
        this.date = date;
        this.student = student;
        this.cource = cource;
    }

    public Payment(double amount, LocalDate date, Student student, Cource cource, TotalPayment totalPayment) {
        this.amount = amount;
        this.date = date;
        this.student = student;
        this.cource = cource;
        this.totalPayment = totalPayment;
    }

    public Payment(double amount, LocalDate date, Student student) {

        this.amount = amount;
        this.date = date;
        this.student = student;
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

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
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
