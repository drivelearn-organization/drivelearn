package com.example.drivelearnbackend.Controllers;

import com.example.drivelearnbackend.Controllers.DTO.StudentDTO;
import com.example.drivelearnbackend.Repositories.Entity.Student;
import com.example.drivelearnbackend.Sevices.StudentServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/student")
public class StudentController {
    @Autowired
    private StudentServices studentServices;

    @PostMapping(value = "/addstudent")
    public void addStudent(@RequestBody StudentDTO studentDTO){
        studentServices.addStudent(studentDTO);

        System.out.println(studentDTO.getName());
        System.out.println(studentDTO.getUsername());
        System.out.println(studentDTO.getNid());
        System.out.println(studentDTO.getAddress());
        System.out.println(studentDTO.getPassword());
        System.out.println(studentDTO.getContact());
        System.out.println(studentDTO.getDay());
        System.out.println(studentDTO.getMonth());
        System.out.println(studentDTO.getYear());
        System.out.println(studentDTO.getBranch());


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
}
