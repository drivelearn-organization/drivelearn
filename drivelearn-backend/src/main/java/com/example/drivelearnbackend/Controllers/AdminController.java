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
    public EmployeeDTO loginEmployee(@RequestBody EmployeeDTO dto){
        return adminService.loginEmployee(dto);
    }

    @GetMapping(value = "/students")
    public LinkedList<StudentDTO> getAllStudents(){
        return adminService.getAllStudents();
    }

    @GetMapping(value = "/student/{stuId}")
    public StudentDTO getStudent(@PathVariable("stuId") int id){return adminService.getStudent(id);}

    @GetMapping(value = "/employee")
    public LinkedList<EmployeeDTO> getAllEmployee(){
        return adminService.getAllEmployee();
    }

    @GetMapping(value = "/employee/{empid}")
    public EmployeeDTO getEmployee(@PathVariable("empid") int id){return adminService.getEmployee(id);}

    @PostMapping(value = "/serchStudent")
    public  LinkedList<StudentDTO> registerEmployee(@RequestBody StudentDTO dto){ return adminService.getSearchStudent(dto);}

    @GetMapping(value = "/trainer")
    public LinkedList<EmployeeDTO> getAllTrainer(){
        return adminService.getAllTrainer();
    }

    @PostMapping(value = "/serchEmployee")
    public  LinkedList<EmployeeDTO> searchEmployee(@RequestBody EmployeeDTO dto){ return adminService.getSearchEmployee(dto);}

    @PostMapping(value = "/serchTrainer")
    public  LinkedList<EmployeeDTO> searchTrainer(@RequestBody EmployeeDTO dto){ return adminService.getSearchTrainer(dto);}

    @GetMapping(value = "/trainer/{empid}")
    public EmployeeDTO getTrainer(@PathVariable("empid") int id){return adminService.getEmployee(id);}

//    @PostMapping(value = "/addStudent")
//    public  string searchTrainer(@RequestBody StudentDTO dto){ return adminService.addNewStudent(dto);}

}
