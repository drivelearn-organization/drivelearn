package com.example.drivelearnbackend.Sevices;

import com.example.drivelearnbackend.Controllers.DTO.StudentDTO;
import com.example.drivelearnbackend.Repositories.*;
import com.example.drivelearnbackend.Repositories.Entity.*;
import com.example.drivelearnbackend.Sevices.Support.HashMD5;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.NoSuchAlgorithmException;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;


@Service
public class StudentServices {
    @Autowired
    BranchRepository branchRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private StudentRepository repository;

    @Autowired
    private NotificationRepository notificationRepository;

    @Autowired
    private UserReceiveNotificationRepository userReceiveNotificationRepository;

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



        Student student=repository.save(new Student(dto.getName(),LocalDate.now(), dto.getNid(), dto.getAddress(),date, dto.getUsername(), pass, dto.getContact(), feedbacks,branch,stuSessionList,courceList,paymentList,vechileTypes));
        System.out.println(branch.getBranchName());

        LinkedList<UserReceiveNotification> userReceiveNotifications=new LinkedList<>();
        LinkedList<Notification> sentMessage=new LinkedList<>();


        User user=userRepository.save(new User(student.getStuId(), 3, dto.getUsername(), userReceiveNotifications,sentMessage));

//        below part must be adjusted after database implemented
        Notification notification=notificationRepository.findById(85).get();
        userReceiveNotificationRepository.save(new UserReceiveNotification(1,LocalDateTime.now(),user,notification));
//        user.setUserReceiveNotifications(new LinkedList<UserReceiveNotification>().add(new UserReceiveNotification(1, LocalDateTime.now(),user,notificationRepository.findById(50).get())));
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

    public LinkedList<StudentDTO> getStudenutBybranch(int branchId){
        LinkedList<StudentDTO> studentDTOS=new LinkedList<>();
        for (Student student : repository.findAll()) {
            if(student.getBranch()!=null){
                if(student.getBranch().getBranchid()==branchId){
                    studentDTOS.add(new StudentDTO(student.getName(), student.getIdnum(), student.getStuId()));
                }
            }
        }
        return studentDTOS;
    }

    public void updateStudent(StudentDTO dto){
        Student student1=null;
        for (Student student : repository.findByUsername(dto.getUsername())) {
            student1=student;
        }
        if(dto.getAddress()!="" && dto.getAddress()!=null){
            student1.setAddress(dto.getAddress());
        }
        if(dto.getName()!="" && dto.getName()!=null){
            student1.setName(dto.getName());
        }
        if(dto.getContact()!="" && dto.getContact()!=null){
            student1.setContact(dto.getContact());
        }
        if(dto.getNid()!="" && dto.getNid()!=null){
            student1.setIdnum(dto.getNid());
        }
        repository.save(student1);

    }

    public void addStudent(){
        repository.save(new Student());
    }
    public void test(){
        System.out.println("we are in the service of the test now");
    }
}
