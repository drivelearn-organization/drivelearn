package com.example.drivelearnbackend.Controllers;

import com.example.drivelearnbackend.Controllers.DTO.AdminDTO;
import com.example.drivelearnbackend.Sevices.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/admin")
public class AdminController {
    @Autowired
    private AdminService adminService;


    @PostMapping(value = "/addAdmin")
    public void addStudent(@RequestBody AdminDTO AdminDTO){
        adminService.addAdmin(AdminDTO);
    }

}
