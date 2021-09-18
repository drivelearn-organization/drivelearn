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
    @GetMapping(value = "/deactiveEmployee")
    public LinkedList<EmployeeDTO> getdeactiveEmployee(){
        return adminService.getdeactiveEmployee();
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

    @PostMapping(value = "/addStudent")
    public  String addNewStudent(@RequestBody StudentDTO dto){ return adminService.addNewStudent(dto);}

    @PostMapping(value = "/addInstructors")
    public  String addNewInstructor(@RequestBody EmployeeDTO dto){ return adminService.addNewInstructor(dto);}

    @PostMapping(value = "/addInstructorsByManager")
    public  String addNewInstructorByManager(@RequestBody EmployeeDTO dto){ return adminService.addNewInstructorByManager(dto);}

//    @GetMapping(value = "/loginUser/")
//    public LinkedList<StudentDTO> getAllStudents(){
//        return adminService.getAllStudents();
//    }

    @GetMapping(value = "/settingProfile/{username}")
    public EmployeeDTO getSettingProfile(@PathVariable("username") String username){return adminService.getSettingProfile(username);}

    @PostMapping(value = "/updateEmployee")
    public String updateEmployee(@RequestBody EmployeeDTO dto){return adminService.updateEmployee(dto);}

    @PostMapping(value = "/updateStudent")
    public  String updateStudent(@RequestBody StudentDTO dto){ return adminService.updateStudent(dto);}

    @PostMapping(value = "/settingMyProfile")
    public  String settingMyProfile(@RequestBody EmployeeDTO dto){ return adminService.settingMyProfile(dto);}

    @PostMapping(value = "/settingMyProfilePassword")
    public  String settingMyProfilePassword(@RequestBody EmployeeDTO dto){ return adminService.settingMyProfilePassword(dto);}

    @PostMapping(value = "/activeEmployee")
    public  String activeEmployee(@RequestBody EmployeeDTO dto){ return adminService.activeEmployee(dto);}

    @PostMapping(value = "/deactiveEmployee")
    public  String deactiveEmployee(@RequestBody EmployeeDTO dto){ return adminService.deactiveEmployee(dto);}

//    @PostMapping(value = "/deactiveStudent")
//    public  String deactivateStudent(@RequestBody StudentDTO dto){ return adminService.deactivatStudent(dto);}

    @GetMapping(value = "/branchtrainer/{branchName}")
    public LinkedList<EmployeeDTO> getBranchTrainer(@PathVariable("branchName") String branchName){ return adminService.getBranchTrainer(branchName); }

    @GetMapping(value = "/branchstudents/{branchName}")
    public LinkedList<StudentDTO> getBranchStudents(@PathVariable("branchName") String branchName){ return adminService.getBranchStudents(branchName); }
}
