package com.example.drivelearnbackend.Controllers;

import com.example.drivelearnbackend.Controllers.DTO.StudentDTO;
import com.example.drivelearnbackend.Repositories.Entity.Student;
import com.example.drivelearnbackend.Sevices.StudentServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedList;

@RestController
@RequestMapping(value = "/student")
public class StudentController {
    @Autowired
    private StudentServices studentServices;

    @PostMapping(value = "/addstudent")
    public void addStudent(@RequestBody StudentDTO studentDTO){
        studentServices.addStudent(studentDTO);
    }
    @PostMapping(value = "/isAvail")
    public boolean isAvailableUsernane(@RequestBody StudentDTO studentDTO){
        return studentServices.isAvailableUsernane(studentDTO.getUsername());
    }

    @GetMapping()
    public void testCustomer(){
        studentServices.test();
//        System.out.println("we are passed the test");
    }
    @PostMapping(value = "/getStudent")
    public StudentDTO findStudent(@RequestBody StudentDTO dto){
        Student student= studentServices.findStudent(dto);
        return new StudentDTO(student.getName(),student.getAddress(), student.getIdnum(), student.getContact(),null,null,null,null,null,null);
    }

    @PostMapping(value = "/isavalacc")
    public boolean isAvailableAccount(@RequestBody StudentDTO dto){
        return studentServices.isAvailAccounut(dto);
    }

//    this is used to get student by branch
//    localhost:8080/student/getstudentbybranch/1
//    branchId is required
    @GetMapping(value = "getstudentbybranch/{branchid}")
    public LinkedList<StudentDTO> getStudentByBranch(@PathVariable int branchid){
        return studentServices.getStudenutBybranch(branchid);
    }

    @PostMapping(value = "updatestudent")
    public void updateStudent(@RequestBody StudentDTO dto){
        studentServices.updateStudent(dto);
    }

}
