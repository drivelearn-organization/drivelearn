package com.example.drivelearnbackend.Repositories.Entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Admin {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "adminId")
    private int adminId;
    private String name;
    private String password;
    private String username;


    @JsonManagedReference
    @OneToMany(mappedBy = "admin")
    private List<Employee> employees = new ArrayList<>();

    public Admin() {
    }


    public Admin(String name, String password, String username) {
        this.name = name;
        this.password = password;
        this.username = username;
    }

    public Admin(int adminId, String name, String username, String password) {
        this.name = name;
        this.password = password;
        this.username = username;
        this.adminId = adminId;
    }


    public Admin(String name, String password, List<Employee> employees) {
        this.name = name;
        this.password = password;
        this.employees = employees;
    }

    public int getAdminId() {
        return adminId;
    }

    public void setAdminId(int adminId) {
        this.adminId = adminId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public List<Employee> getEmployees() {
        return employees;
    }

    public void setEmployees(List<Employee> employees) {
        this.employees = employees;
    }
}


