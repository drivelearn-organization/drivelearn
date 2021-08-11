package com.example.drivelearnbackend.Controllers;

import com.example.drivelearnbackend.Controllers.DTO.AdminDTO;
import com.example.drivelearnbackend.Controllers.DTO.EmployeeDTO;
import com.example.drivelearnbackend.Controllers.DTO.StudentDTO;
import com.example.drivelearnbackend.Repositories.Entity.Student;
import com.example.drivelearnbackend.Sevices.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedList;

@RestController
@CrossOrigin
@RequestMapping(value = "/drivelearn")
public class AdminController {
    @Autowired
    private AdminService adminService;

    @PostMapping(value = "/addAdmin")
    public void addStudent(@RequestBody AdminDTO AdminDTO){
        adminService.addAdmin(AdminDTO);
    }

    @PostMapping(value = "/login")
    public String loginEmployee(@RequestBody AdminDTO AdminDTO){
        return adminService.loginEmployee(AdminDTO);
    }

    @GetMapping(value = "/students")
    public LinkedList<StudentDTO> getAllStudents(){
        return adminService.getAllStudents();
    }

//    @GetMapping(value = "/employee")
//    public LinkedList<EmployeeDTO> getAllStudents(){
//        return adminService.getAllStudents();
//    }
    @GetMapping(value = "/student/{stuId}")
    public StudentDTO getStudent(@PathVariable("stuId") int id){return adminService.getStudent(id);}





}
