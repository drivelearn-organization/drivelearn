package com.example.drivelearnbackend.Controllers;

import com.example.drivelearnbackend.Controllers.DTO.DashboardDTO;
import com.example.drivelearnbackend.Controllers.DTO.EmployeeDTO;
import com.example.drivelearnbackend.Controllers.DTO.StudentDTO;
import com.example.drivelearnbackend.Repositories.Entity.Payment;
import com.example.drivelearnbackend.Sevices.AdminService;
import com.example.drivelearnbackend.Sevices.DashboardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedList;

@RestController
@CrossOrigin("*")
@RequestMapping(value = "/drivelearn")
public class DashbordController {
    @Autowired
    private DashboardService dashboardService;

    @GetMapping(value = "/branchDetails")
    public DashboardDTO getAllDetails(){
        return dashboardService.getAllDetails();
    }

    @GetMapping(value = "/monthDetails")
    public DashboardDTO getmonthDetails(){
        return dashboardService.getmonthDetails();
    }

    @GetMapping(value = "/Income")
    public LinkedList<Payment> getIncomeDetails(){
        return dashboardService.getIncomeDetails();
    }

    @GetMapping(value = "/mybranchDetails/{branchid}")
    public DashboardDTO getAllBranchDetails(@PathVariable("branchid") int id){ return dashboardService.getAllBranchDetails(id); }

    @GetMapping(value = "/monthBranchDetails/{branchid}")
    public DashboardDTO getBranchmonthDetails(@PathVariable("branchid") int id){ return dashboardService.getBranchmonthDetails(id); }
}
