package com.example.drivelearnbackend.Sevices;

import com.example.drivelearnbackend.Repositories.Entity.Student;
import com.example.drivelearnbackend.Repositories.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentServices {

    @Autowired
    private StudentRepository repository;

    public void addStudent(){
        repository.save(new Student());
    }
    public void test(){
        System.out.println("we are in the service of the test now");
    }
}
