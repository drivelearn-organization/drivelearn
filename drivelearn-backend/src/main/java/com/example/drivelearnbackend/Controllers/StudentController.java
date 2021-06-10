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
        System.out.println(studentDTO.getAddress());
    }

    @GetMapping()
    public void testCustomer(){
        studentServices.test();
//        System.out.println("we are passed the test");
    }
}
