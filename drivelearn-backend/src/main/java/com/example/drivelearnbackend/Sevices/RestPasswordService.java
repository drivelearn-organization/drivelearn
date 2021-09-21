package com.example.drivelearnbackend.Sevices;

import com.example.drivelearnbackend.Controllers.DTO.EmployeeDTO;
import com.example.drivelearnbackend.Repositories.EmployeeRepository;
import com.example.drivelearnbackend.Repositories.Entity.Branch;
import com.example.drivelearnbackend.Repositories.Entity.Employee;
import com.example.drivelearnbackend.Sevices.Support.HashMD5;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.NoSuchAlgorithmException;
import java.util.LinkedList;

@Service
public class RestPasswordService {

    @Autowired
    private EmployeeRepository repository;


    public EmployeeDTO getSettingProfile(String username){
        String branchId = null;
        Branch branch = null;

        LinkedList<Employee> list= repository.findByUsername(username);



        Employee employee=null;
        for (Employee newemployee : list) {
            employee = newemployee;
        }

        branch = employee.getBranch();
        if(branch == null){
            branchId = "nan";
        }else{
            branchId =branch.getBranchName();
        }

        return  new EmployeeDTO(employee.getEmpid(), employee.getMoNumber(),employee.getFullName(),employee.getNid(), branchId,0,employee.getRegisteredDate());
    }


    public String settingMyProfilePassword(EmployeeDTO dto){
        String error = "";
        String pass = "";
        String newPass = "";
        LinkedList<Employee> list= repository.findByUsername(dto.getUsername());


        Employee employee=null;
        for (Employee newemployee : list) {
            employee = newemployee;
        }

        if(!dto.getPassword2().isEmpty() && !dto.getPassword3().isEmpty()){

                if(dto.getPassword2().equals(dto.getPassword3())){
                    try {
                        newPass=new HashMD5().giveHash(dto.getPassword2());
                    } catch (NoSuchAlgorithmException e) {
                        e.printStackTrace();
                    }

                    employee.setPassword(newPass);
                    repository.save(employee);
                    error = "Updated successfully";
                }else{
                    error = "password mismatch";
                }



        }

        return error;
    }
}
