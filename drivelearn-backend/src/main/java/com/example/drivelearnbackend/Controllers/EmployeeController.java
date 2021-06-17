package com.example.drivelearnbackend.Controllers;

import com.example.drivelearnbackend.Controllers.DTO.EmployeeDTO;
import com.example.drivelearnbackend.Controllers.DTO.StudentDTO;
import com.example.drivelearnbackend.Repositories.Entity.Employee;
import com.example.drivelearnbackend.Sevices.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
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
}
