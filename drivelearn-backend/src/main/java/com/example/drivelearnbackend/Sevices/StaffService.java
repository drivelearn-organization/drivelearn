package com.example.drivelearnbackend.Sevices;

import com.example.drivelearnbackend.Controllers.DTO.StaffDTO;
import com.example.drivelearnbackend.Repositories.AdminRepository;
import com.example.drivelearnbackend.Repositories.EmployeeRepository;
import com.example.drivelearnbackend.Repositories.Entity.Employee;
import com.example.drivelearnbackend.Sevices.Support.HashMD5;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.NoSuchAlgorithmException;

@Service
public class StaffService {
    @Autowired
    private AdminRepository adminRepository;

    @Autowired
    private EmployeeRepository employeeRepository;

    public StaffDTO getEmploy(int spec,String username){
        StaffDTO dto=null;
        if(spec==1){
//            for (Admin admin : adminRepository.findByUsername(username)) {
//                dto=new StaffDTO(admin.getAdminId(), admin.getUsername(), admin.getPassword(), admin.getName());
//            }
//            return dto;

            for (Employee employee : employeeRepository.findByUsername(username)) {
                dto=new StaffDTO(employee.getEmpid(), employee.getUsername(), employee.getPassword(), employee.getFullName(), employee.getNid(), employee.getMoNumber());
            }
            return dto;
        }else if(spec==2){
            for (Employee employee : employeeRepository.findByUsername(username)) {
                dto=new StaffDTO(employee.getEmpid(), employee.getUsername(), employee.getPassword(), employee.getFullName(), employee.getNid(), employee.getMoNumber());
            }
            return dto;
        }else if(spec==3){
//            if want student
            return null;
        }else{
//            if want teacher
            return null;
        }
    }

    public void updatePassword(StaffDTO dto){
        String pass="";
        try {
            pass=new HashMD5().giveHash(dto.getPassword());
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        if(dto.getSpec()==1){
//            Admin adminref=null;
//            for (Admin admin : adminRepository.findByUsername(dto.getUsername())) {
//                adminref=admin;
//            }
//            adminref.setPassword(pass);
//            adminRepository.save(adminref);

            Employee employee=null;
            for (Employee employee1 : employeeRepository.findByUsername(dto.getUsername())) {
                employee=employee1;
            }
            employee.setPassword(pass);
            employeeRepository.save(employee);
        }else if(dto.getSpec()==2){
            Employee employee=null;
            for (Employee employee1 : employeeRepository.findByUsername(dto.getUsername())) {
                employee=employee1;
            }
            employee.setPassword(pass);
            employeeRepository.save(employee);
        }else if(dto.getSpec()==3){
//            if want to student
        }else{
//            if want to teacher
        }
    }

    public void updateDetails(StaffDTO dto){
        if(dto.getSpec()==1){
//            Admin adminref=null;
//            for (Admin admin : adminRepository.findByUsername(dto.getUsername())) {
//                adminref=admin;
//            }
//            if(dto.getNewUsername()!="" && dto.getNewUsername()!=null){
//                adminref.setUsername(dto.getNewUsername());
//            }
//            if(dto.getName()!="" && dto.getName()!=null){
//                adminref.setName(dto.getName());
//            }
//            adminRepository.save(adminref);

            Employee employee=null;
            for (Employee employee1 : employeeRepository.findByUsername(dto.getUsername())) {
                employee=employee1;
            }

            if(dto.getNewUsername()!="" && dto.getNewUsername()!=null){
                employee.setUsername(dto.getNewUsername());
            }
            if(dto.getName()!=""&& dto.getName()!=null){
                employee.setFullName(dto.getName());
            }
            if(dto.getNic()!=""&& dto.getNic()!=null){
                employee.setNid(dto.getNic());
            }
            if(dto.getMobileNumber()!="" && dto.getMobileNumber()!=null){
                employee.setMoNumber(dto.getMobileNumber());
            }
            employeeRepository.save(employee);
        }else if(dto.getSpec()==2){
            Employee employee=null;
            for (Employee employee1 : employeeRepository.findByUsername(dto.getUsername())) {
                employee=employee1;
            }

            if(dto.getNewUsername()!="" && dto.getNewUsername()!=null){
                employee.setUsername(dto.getNewUsername());
            }
            if(dto.getName()!=""&& dto.getName()!=null){
                employee.setFullName(dto.getName());
            }
            if(dto.getNic()!=""&& dto.getNic()!=null){
                employee.setNid(dto.getNic());
            }
            if(dto.getMobileNumber()!="" && dto.getMobileNumber()!=null){
                employee.setMoNumber(dto.getMobileNumber());
            }
            employeeRepository.save(employee);
        }else if(dto.getSpec()==3){
//            if want to student
        }else{
//            if want to teacher
        }
    }

    public boolean isUsernameAvailable(int spec,String username){
        int count=0;
        if(spec==1){
//            for (Admin admin : adminRepository.findByUsername(username)) {
//                count++;
//            }

            for (Employee employee : employeeRepository.findByUsername(username)) {
                count++;
            }
        }else if(spec==2){
            for (Employee employee : employeeRepository.findByUsername(username)) {
                count++;
            }
        }else if(spec==3){
//            this is for students
        }else{
//            this is for trainer
        }

        if(count==0){
            return true;
        }else{
            return false;
        }
    }

}
