package com.example.drivelearnbackend.Sevices;

import com.example.drivelearnbackend.Controllers.DTO.StudentDTO;
import com.example.drivelearnbackend.Repositories.BranchRepository;
import com.example.drivelearnbackend.Repositories.Entity.*;
import com.example.drivelearnbackend.Repositories.StudentRepository;
import com.example.drivelearnbackend.Sevices.Support.HashMD5;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.NoSuchAlgorithmException;
import java.time.LocalDate;
import java.util.*;


@Service
public class StudentServices {
    @Autowired
    BranchRepository branchRepository;

    @Autowired
    private StudentRepository repository;

    public Student addStudent(StudentDTO dto){
        System.out.println("before the branch search");
        String pass="";
        try {
            pass=new HashMD5().giveHash(dto.getPassword());
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }

        List<Feedback> feedbacks=new ArrayList<>();
        Branch branch=branchRepository.findBranchByBranchName(dto.getBranch());
        List<StuSession> stuSessionList=new ArrayList<>();
        List<Cource> courceList=new ArrayList<>();
        List<Payment> paymentList=new ArrayList<>();
        List<VechileType> vechileTypes=new ArrayList<>();
//        Calendar DOB = Calendar.getInstance();
        System.out.println("year is"+Integer.parseInt(dto.getYear()));
        LocalDate date=LocalDate.of(Integer.parseInt(dto.getYear()),Integer.parseInt(dto.getMonth()),Integer.parseInt(dto.getDay()));

//        Date DOB=new Date(Integer.parseInt(dto.getYear())+1-1,Integer.parseInt(dto.getMonth())-1,Integer.parseInt(dto.getDay()));



        repository.save(new Student(dto.getName(),LocalDate.now(), dto.getNid(), dto.getAddress(),date, dto.getUsername(), pass, dto.getContact(), feedbacks,branch,stuSessionList,courceList,paymentList,vechileTypes));
        System.out.println(branch.getBranchName());
        return null;
    }


    public boolean isAvailableUsernane(String username){
        List list=repository.findByUsername(username);
        if(list.isEmpty()){
            return true;
        }else {
            return false;
        }
    }

    public boolean isAvailAccounut(StudentDTO dto){
        String pass="";
        try {
            pass=new HashMD5().giveHash(dto.getPassword());
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        List list= repository.findByUsernameAndPassword(dto.getUsername(), pass);
        if(list.isEmpty()){
            return false;
        }else {
        return true;
        }
    }

    public Student findStudent(StudentDTO dto){
        LinkedList<Student> list =repository.findByUsername(dto.getUsername());
        Student studentRet=null;
        for (Student student : list) {
            studentRet=student;
        }
        return studentRet;
    }

    public void addStudent(){
        repository.save(new Student());
    }
    public void test(){
        System.out.println("we are in the service of the test now");
    }
}
