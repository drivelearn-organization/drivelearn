package com.example.drivelearnbackend.Repositories.Entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int empid;
    private String moNumber;
    private String emNumber;
    private int role;
    private String fullName;
    private String nid;
    private int isActive;
    private String username;
    private String password;
    private LocalDate registeredDate;
    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "admin_id",referencedColumnName = "adminId")
    private Admin admin;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "branch_id", referencedColumnName = "branchid")
    private Branch branch;

    @OneToMany(mappedBy = "employee")
    @JsonManagedReference
    List<Installment> installmentList=new ArrayList<>();

    @OneToMany(mappedBy = "trainer")
    @LazyCollection(LazyCollectionOption.FALSE)
    @JsonManagedReference
    List<Session> trainersSessionList=new ArrayList<>();

    @OneToMany(mappedBy = "assigner")
    @JsonManagedReference
    List<Session> assinersSessionList=new ArrayList<>();

    public Employee() {
    }

    public Employee( String moNumber, String emNumber, int role, String fullName, String nid, int isActive, String username, String password, LocalDate registeredDate, Admin admin, Branch branch, List<Installment> installmentList, List<Session> trainersSessionList, List<Session> assinersSessionList) {
        this.moNumber = moNumber;
        this.emNumber = emNumber;
        this.role = role;
        this.fullName = fullName;
        this.nid = nid;
        this.isActive = isActive;
        this.username = username;
        this.password = password;
        this.registeredDate = registeredDate;
        this.admin = admin;
        this.branch = branch;
        this.installmentList = installmentList;
        this.trainersSessionList = trainersSessionList;
        this.assinersSessionList = assinersSessionList;
    }

    public int getEmpid() {
        return empid;
    }

    public void setEmpid(int empid) {
        this.empid = empid;
    }

    public String getMoNumber() {
        return moNumber;
    }

    public void setMoNumber(String moNumber) {
        this.moNumber = moNumber;
    }

    public String getEmNumber() {
        return emNumber;
    }

    public void setEmNumber(String emNumber) {
        this.emNumber = emNumber;
    }

    public int getRole() {
        return role;
    }

    public void setRole(int role) {
        this.role = role;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getNid() {
        return nid;
    }

    public void setNid(String nid) {
        this.nid = nid;
    }

    public int getIsActive() {
        return isActive;
    }

    public void setIsActive(int isActive) {
        this.isActive = isActive;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public LocalDate getRegisteredDate() {
        return registeredDate;
    }

    public void setRegisteredDate(LocalDate registeredDate) {
        this.registeredDate = registeredDate;
    }

    public Admin getAdmin() {
        return admin;
    }

    public void setAdmin(Admin admin) {
        this.admin = admin;
    }

    public Branch getBranch() {
        return branch;
    }

    public void setBranch(Branch branch) {
        this.branch = branch;
    }

    public List<Installment> getInstallmentList() {
        return installmentList;
    }

    public void setInstallmentList(List<Installment> installmentList) {
        this.installmentList = installmentList;
    }

    public List<Session> getTrainersSessionList() {
        return trainersSessionList;
    }

    public void setTrainersSessionList(List<Session> trainersSessionList) {
        this.trainersSessionList = trainersSessionList;
    }

    public List<Session> getAssinersSessionList() {
        return assinersSessionList;
    }

    public void setAssinersSessionList(List<Session> assinersSessionList) {
        this.assinersSessionList = assinersSessionList;
    }
}
