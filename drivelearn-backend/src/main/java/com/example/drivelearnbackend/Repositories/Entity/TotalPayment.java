package com.example.drivelearnbackend.Repositories.Entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.LinkedList;
import java.util.List;

@Entity
public class TotalPayment {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private double amount;
    private LocalDate date;

    @OneToMany(mappedBy = "totalPayment")
    @LazyCollection(LazyCollectionOption.FALSE)
    @JsonManagedReference
    private List<Payment> payments=new LinkedList<Payment>();

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "student_id",referencedColumnName = "stuId")
    private Student student;

    public TotalPayment() {
    }

    public TotalPayment(double amount, LocalDate date, Student student) {
        this.amount = amount;
        this.date = date;
        this.student = student;
    }

    public TotalPayment(double amount, LocalDate date) {
        this.amount = amount;
        this.date = date;
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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

    public java.util.List<Payment> getPayments() {
        return payments;
    }

    public void setPayments(LinkedList<Payment> payments) {
        this.payments = payments;
    }

    public void setPayments(List<Payment> payments) {
        this.payments = payments;
    }

    public Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }
}
