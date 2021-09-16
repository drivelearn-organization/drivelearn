package com.example.drivelearnbackend.Controllers;

import com.example.drivelearnbackend.Controllers.DTO.EmployeeDTO;
import com.example.drivelearnbackend.Sevices.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping(value = "employee")
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;

//    registration method
    @PostMapping(value = "/addtrainer")
    public void addTrainer(@RequestBody EmployeeDTO dto){
        employeeService.addTrainer(dto);
    }

//    register search for username availability
    @PostMapping(value = "/empisavail")
    public boolean isAvail(@RequestBody EmployeeDTO dto){
        return employeeService.isEmplAvailable(dto.getUsername());
    }

//    login search
    @PostMapping(value = "/isAccoAvail")
    public boolean isAccountAvailable(@RequestBody EmployeeDTO dto){
        return employeeService.isAccouuntAvailable(dto);
    }

    @PostMapping(value = "/getemployee")
    public EmployeeDTO getEmployee(@RequestBody EmployeeDTO dto){return employeeService.getEmployee(dto);}

//  sign up branch
    @PostMapping(value = "/register")
    public String registerEmployee(@RequestBody EmployeeDTO dto){ return employeeService.registerEmployee(dto);}

    @PostMapping(value = "updateemploy")
    public void employUpdate(@RequestBody EmployeeDTO dto){
        employeeService.updateEmploy(dto);
    }

    @PostMapping(value = "gettrainer")
    public boolean isTrainerAvailable(@RequestBody EmployeeDTO dto){
        return employeeService.getTrainer(dto);
    }
}
