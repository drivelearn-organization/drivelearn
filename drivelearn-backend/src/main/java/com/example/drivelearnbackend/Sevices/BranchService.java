package com.example.drivelearnbackend.Sevices;

import com.example.drivelearnbackend.Repositories.BranchRepository;
import com.example.drivelearnbackend.Repositories.Entity.Branch;
import com.example.drivelearnbackend.Repositories.Entity.Employee;
import com.example.drivelearnbackend.Repositories.Entity.Student;
import com.example.drivelearnbackend.Repositories.Entity.Vehicle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BranchService {
    @Autowired
    private BranchRepository repository;

    public Branch addBranch(String branch){
        List<Employee> employeeList=new ArrayList<>();
        List<Vehicle> vehicleList=new ArrayList<>();
        List<Student> studentList=new ArrayList<>();
        return repository.save(new Branch(branch,employeeList,vehicleList,studentList));
    }

}
