package com.example.drivelearnbackend.Sevices;

import com.example.drivelearnbackend.Controllers.DTO.EmployeeDTO;
import com.example.drivelearnbackend.Repositories.BranchRepository;
import com.example.drivelearnbackend.Repositories.EmployeeRepository;
import com.example.drivelearnbackend.Repositories.Entity.Branch;
import com.example.drivelearnbackend.Repositories.Entity.Employee;
import com.example.drivelearnbackend.Repositories.Entity.Installment;
import com.example.drivelearnbackend.Repositories.Entity.Session;
import com.example.drivelearnbackend.Sevices.Support.HashMD5;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.NoSuchAlgorithmException;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class EmployeeService {
    @Autowired
    private EmployeeRepository repository;

    @Autowired
    private BranchRepository branchRepository;

    public void addTrainer(EmployeeDTO dto){

        String pass="";
        try {
            pass=new HashMD5().giveHash(dto.getPassword());
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        Branch branch =branchRepository.findBranchByBranchName(dto.getBranch());
        List<Installment> installmentList=new ArrayList<>();
        List<Session> trainersSessionList=new ArrayList<>();
        List<Session> assinersSessionList=new ArrayList<>();
        repository.save(new Employee(dto.getMoNumber(),"0",2, dto.getFullName(), dto.getNid(), 1, dto.getUsername(), pass, LocalDate.now(),null,branch,installmentList,trainersSessionList,assinersSessionList));
    }

    public boolean isAccouuntAvailable(EmployeeDTO dto){

        String pass="";
        try {
            pass=new HashMD5().giveHash(dto.getPassword());
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }

        List list=repository.findByUsernameAndPassword(dto.getUsername(), pass);
        if(list.isEmpty()){
            return false;
        }else {
            return true;
        }
    }

    public boolean isEmplAvailable(String usernane){
        List list=repository.findByUsername(usernane);
        if(list.isEmpty()){
            return true;
        }else{
            return false;
        }
    }
}
