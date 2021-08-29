package com.example.drivelearnbackend.Controllers.DTO;
import java.util.Date;
public class AdminDTO {
    private int adminId;
    private String name;
    private String password;
    private String username;


    public AdminDTO(int adminId,String name, String password, String username) {

        this.name = name;
        this.password = password;
        this.username = username;
        this.adminId = adminId;
    }

    public int getAdminId() {
        return adminId;
    }

    public void setAdminId(int admin_id) {
        this.adminId = admin_id;
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

}
