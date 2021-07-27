package com.example.drivelearnbackend.Repositories.Entity;


import javax.persistence.*;

@Entity
public class MyAdmin {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "adminId")
    private int adminId;
    private String name;
    private String password;
    private String username;

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

    public MyAdmin() {

    }

    public MyAdmin(int adminId, String name, String password, String username) {
        this.adminId = adminId;
        this.name = name;
        this.password = password;
        this.username = username;
    }
}
