package com.example.drivelearnbackend.Repositories.Entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int stuId;
    private String name;
    private LocalDate registereddate;
    private String idnum;
    private String address;
    private LocalDate Dob;
    private String username;
    private String password;
    private String contact;

    @OneToMany(mappedBy = "student")
    @JsonManagedReference
    private List<Feedback> feedbacks=new ArrayList<>();

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "brnch_id",referencedColumnName = "branchid")
    private Branch branch;

    @OneToMany(mappedBy = "student")
    @JsonManagedReference
    private List<StuSession> stuSessionList=new ArrayList<>();

    @OneToMany(mappedBy = "student",fetch = FetchType.EAGER)
    @JsonManagedReference
    private List<Cource> courceList=new ArrayList<>();

    @OneToMany(mappedBy = "student")
    @JsonManagedReference
    private List<Payment> paymentList=new ArrayList<>();

    @ManyToMany
    @JsonIgnore
    @JoinTable(
            name = "student_vehicle_type_assoc",
            joinColumns = @JoinColumn(name = "student_id",referencedColumnName = "stuId"),
            inverseJoinColumns = @JoinColumn(name = "type_id",referencedColumnName = "typeId")
    )
    private List<VechileType> vechileTypes=new ArrayList<>();

    public Student() {
    }

    public Student(String name, LocalDate registereddate, String idnum, String address, LocalDate dob, String username, String password, String contact, List<Feedback> feedbacks, Branch branch, List<StuSession> stuSessionList, List<Cource> courceList, List<Payment> paymentList, List<VechileType> vechileTypes) {
        this.name = name;
        this.registereddate = registereddate;
        this.idnum = idnum;
        this.address = address;
        Dob = dob;
        this.username = username;
        this.password = password;
        this.contact = contact;
        this.feedbacks = feedbacks;
        this.branch = branch;
        this.stuSessionList = stuSessionList;
        this.courceList = courceList;
        this.paymentList = paymentList;
        this.vechileTypes = vechileTypes;
    }

    public Student(LocalDate registereddate, String idnum, String address, LocalDate dob, String username, String password, String contact, List<Feedback> feedbacks, Branch branch, List<StuSession> stuSessionList, List<Cource> courceList, List<Payment> paymentList, List<VechileType> vechileTypes) {

        this.registereddate = registereddate;
        this.idnum = idnum;
        this.address = address;
        Dob = dob;
        this.username = username;
        this.password = password;
        this.contact = contact;
        this.feedbacks = feedbacks;
        this.branch = branch;
        this.stuSessionList = stuSessionList;
        this.courceList = courceList;
        this.paymentList = paymentList;
        this.vechileTypes = vechileTypes;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getStuId() {
        return stuId;
    }

    public void setStuId(int stuId) {
        this.stuId = stuId;
    }

    public LocalDate getRegistereddate() {
        return registereddate;
    }

    public void setRegistereddate(LocalDate registereddate) {
        this.registereddate = registereddate;
    }

    public String getIdnum() {
        return idnum;
    }

    public void setIdnum(String idnum) {
        this.idnum = idnum;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public LocalDate getDob() {
        return Dob;
    }

    public void setDob(LocalDate dob) {
        Dob = dob;
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

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public List<Feedback> getFeedbacks() {
        return feedbacks;
    }

    public void setFeedbacks(List<Feedback> feedbacks) {
        this.feedbacks = feedbacks;
    }

    public Branch getBranch() {
        return branch;
    }

    public void setBranch(Branch branch) {
        this.branch = branch;
    }

    public List<StuSession> getStuSessionList() {
        return stuSessionList;
    }

    public void setStuSessionList(List<StuSession> stuSessionList) {
        this.stuSessionList = stuSessionList;
    }

    public List<Cource> getCourceList() {
        return courceList;
    }

    public void setCourceList(List<Cource> courceList) {
        this.courceList = courceList;
    }

    public List<Payment> getPaymentList() {
        return paymentList;
    }

    public void setPaymentList(List<Payment> paymentList) {
        this.paymentList = paymentList;
    }

    public List<VechileType> getVechileTypes() {
        return vechileTypes;
    }

    public void setVechileTypes(List<VechileType> vechileTypes) {
        this.vechileTypes = vechileTypes;
    }
}
