package com.example.drivelearnbackend.Controllers.DTO;

public class BranchDTO {
    private String name;

    public BranchDTO() {
    }

    public BranchDTO(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
