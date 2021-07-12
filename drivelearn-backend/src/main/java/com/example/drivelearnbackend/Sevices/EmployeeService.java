package com.example.drivelearnbackend.Sevices;

import com.example.drivelearnbackend.Controllers.DTO.EmployeeDTO;
import com.example.drivelearnbackend.Repositories.BranchRepository;
import com.example.drivelearnbackend.Repositories.EmployeeRepository;
import com.example.drivelearnbackend.Repositories.Entity.*;
import com.example.drivelearnbackend.Repositories.UserRepository;
import com.example.drivelearnbackend.Sevices.Support.HashMD5;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.NoSuchAlgorithmException;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

@Service
public class EmployeeService {

    @Autowired
    private UserRepository userRepository;

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
        Employee employee=repository.save(new Employee(dto.getMoNumber(),"0",2, dto.getFullName(), dto.getNid(), 1, dto.getUsername(), pass, LocalDate.now(),null,branch,installmentList,trainersSessionList,assinersSessionList));

        LinkedList<UserReceiveNotification> userReceiveNotifications=new LinkedList<>();
        LinkedList<Notification> sentMessage=new LinkedList<>();

        userRepository.save(new User(employee.getEmpid(), 2, dto.getUsername(), userReceiveNotifications,sentMessage));
    }

    public boolean isAccouuntAvailable(EmployeeDTO dto){

        String pass="";
        try {
            pass=new HashMD5().giveHash(dto.getPassword());
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }

        LinkedList<Employee> list=repository.findByUsernameAndPassword(dto.getUsername(), pass);
        boolean temp;
        boolean ret = false;
        if(list.isEmpty()){
            temp= false;
        }else {
            temp= true;
        }
        for (Employee employee: list) {
            if(employee.getIsActive()==2){
                ret=true;
            }else{
                ret=false;
            }
        }

        return ret && temp;
    }

    public boolean isEmplAvailable(String usernane){
        List list=repository.findByUsername(usernane);
        if(list.isEmpty()){
            return true;
        }else{
            return false;
        }
    }

    public EmployeeDTO getEmployee(EmployeeDTO dto){
        LinkedList<Employee> list=repository.findByUsername(dto.getUsername());
        Employee employee=null;
        for (Employee employee1 : list) {
            employee = employee1;
        }

        return new EmployeeDTO(employee.getMoNumber(), null, employee.getFullName(), employee.getNid(), null,null,null);
    }
}
