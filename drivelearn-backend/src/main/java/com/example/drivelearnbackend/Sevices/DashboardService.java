package com.example.drivelearnbackend.Sevices;


import com.example.drivelearnbackend.Controllers.DTO.DashboardDTO;
import com.example.drivelearnbackend.Controllers.DTO.EmployeeDTO;
import com.example.drivelearnbackend.Controllers.DTO.StudentDTO;
import com.example.drivelearnbackend.Repositories.AdminRepository;
import com.example.drivelearnbackend.Repositories.BranchRepository;
import com.example.drivelearnbackend.Repositories.EmployeeRepository;
import com.example.drivelearnbackend.Repositories.Entity.Employee;
import com.example.drivelearnbackend.Repositories.Entity.Student;
import com.example.drivelearnbackend.Repositories.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.LinkedList;

@Service
public class DashboardService {

    @Autowired
    private com.example.drivelearnbackend.Repositories.AdminRepository AdminRepository;

    @Autowired
    private EmployeeRepository repository;

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private BranchRepository branchRepository;

    public DashboardDTO getAllDetails(){
        int branchManagerCount = 0;
        int instructorlistCount = 0;
        int studentlistCount = 0;


        LinkedList<Employee> branchManagerlist = repository.findAllByRoleAndIsActive(1, 2);
        LinkedList<Employee> instructorlist = repository.findAllByRoleAndIsActive(2, 2);
        LinkedList<Student> studentlist = studentRepository.findAll();

        for (Employee employee:branchManagerlist){
            branchManagerCount++;
        }
        for (Employee employee:instructorlist){
            instructorlistCount++;
        }
        for (Student student:studentlist){
            studentlistCount++;
        }
        DashboardDTO employee = null;
        return employee;

//        return  new DashboardDTO();
    }
}
