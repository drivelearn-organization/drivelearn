package com.example.drivelearnbackend.Controllers.DTO;

public class StaffDTO {
    private int id;
    private String username;
    private String password;
    private String name;

    private String nic;
    private String mobileNumber;
    private int spec;

    private String newUsername;


    public StaffDTO() {
    }

    public StaffDTO(int id, String username, String password, String name) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.name = name;
    }

    public StaffDTO(int id, String username, String password, String name, String nic, String mobileNumber) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.name = name;
        this.nic = nic;
        this.mobileNumber = mobileNumber;
    }

    public String getNewUsername() {
        return newUsername;
    }

    public void setNewUsername(String newUsername) {
        this.newUsername = newUsername;
    }

    public int getSpec() {
        return spec;
    }

    public void setSpec(int spec) {
        this.spec = spec;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getNic() {
        return nic;
    }

    public void setNic(String nic) {
        this.nic = nic;
    }

    public String getMobileNumber() {
        return mobileNumber;
    }

    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }
}
