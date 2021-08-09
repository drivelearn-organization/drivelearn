package com.example.drivelearnbackend.Sevices;


import com.example.drivelearnbackend.Controllers.DTO.AdminDTO;
import com.example.drivelearnbackend.Repositories.AdminRepository;
import com.example.drivelearnbackend.Repositories.EmployeeRepository;
import com.example.drivelearnbackend.Repositories.Entity.Admin;
import com.example.drivelearnbackend.Repositories.Entity.Employee;
import com.example.drivelearnbackend.Sevices.Support.HashMD5;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

@Service
public class AdminService {
    @Autowired
    private AdminRepository AdminRepository;

    @Autowired
    private EmployeeRepository repository;


    public void addAdmin(AdminDTO dto) {
        System.out.println("before the branch search");
        String pass = "";
        try {
            pass = new HashMD5().giveHash(dto.getPassword());
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        List<Employee> EmployeeList=new ArrayList<>();
//          MyAdminRepository.save(new MyAdmin(dto.getAdminId(), dto.getName(),dto.getUsername(),pass));
        AdminRepository.save(new Admin(dto.getName(), pass,dto.getUsername()));
    }

    public String loginEmployee(AdminDTO dto){
        String password="";
        try {
            password=new HashMD5().giveHash(dto.getPassword());
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }

        LinkedList<Employee> list=repository.findByUsernameAndPassword(dto.getUsername(), password);

        int role;
        String isActive = "false";
        if(list.isEmpty()){
            isActive="false";
        }else {
            for (Employee employee: list) {
                if(employee.getIsActive()==1){
                    role = employee.getRole();
                    if(role == 1)
                    {
                        isActive="branch manageger";
                    }else if(role == 4){
                        isActive="admin";
                    }


                }else{
                    isActive="false";
                }
            }
        }


        return isActive;

    }
    public String getEmployeeRole() {


       return "hello";
    }
}