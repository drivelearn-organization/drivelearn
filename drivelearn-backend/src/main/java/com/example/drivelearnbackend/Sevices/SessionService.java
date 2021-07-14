package com.example.drivelearnbackend.Sevices;

import com.example.drivelearnbackend.Controllers.DTO.SessionDTO;
import com.example.drivelearnbackend.Controllers.DTO.StudentDTO;
import com.example.drivelearnbackend.Repositories.*;
import com.example.drivelearnbackend.Repositories.Entity.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

@Service
public class SessionService {

    @Autowired
    private SessionRepository sessionRepository;

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private NotificationRepository notificationRepository;

    @Autowired
    private UserReceiveNotificationRepository  userReceiveNotificationRepository;

    @Autowired
    private StudentRepository studentRepository;

    private User giveUser(int id,String username,int userType){
        User user = null;
        int count=0;
        LinkedList<User> userList;
        if(id==0){
            userList=userRepository.findByUsernameAndAndUserType(username, userType);
            for (User user1 : userList) {
                user = user1;
            }
        }else{
            userList=userRepository.findByExternalIdAndUserType(id,userType);
            for (User user1 : userList) {
                user = user1;
            }
            System.out.println(user.getUsername());
        }
        return user;
    }

    public void addSession(SessionDTO dto){
        Employee manager=employeeRepository.findById(dto.getManagerId()).get();
        Employee trainer=employeeRepository.findById(dto.getTrainerId()).get();

        sessionRepository.save(new Session(dto.getDate(),1, dto.getNumOfStudent(), dto.getRoute(), dto.getStartTime(), dto.getEndTime(), trainer,manager, manager.getBranch()));

        User TrainerUser=giveUser(dto.getTrainerId(), dto.getTrainerUsername(), 2);

        List<UserReceiveNotification> usersReceivedotificaction=new ArrayList<>();
        Notification notification=notificationRepository.save(new Notification("Assigned for a session", "you are assigned as the the instructor for a training session at "+dto.getDate()+" from "+dto.getStartTime()+" to "+dto.getEndTime(), LocalDate.now(),1,usersReceivedotificaction,null));
        userReceiveNotificationRepository.save(new UserReceiveNotification(1, LocalDateTime.now(),TrainerUser,notification));

    }

    private Branch getUserBranch(int id,String username){
        System.out.println(username);
        Student student=null;
        LinkedList<Student> stuList;
        if(id==0){
            stuList=studentRepository.findByUsername(username);
            for (Student student1 : stuList) {
                student = student1;
            }
        }else{
            student=studentRepository.findById(id).get();
        }
        return student.getBranch();
    }

    public LinkedList<SessionDTO> getAllSessions(StudentDTO dto){
        Branch branch =getUserBranch(dto.getStuID(), dto.getUsername());
        LinkedList<Session> sessions=sessionRepository.findAllByBranch(branch);
        LinkedList<SessionDTO> retList=new LinkedList<>();
        for (Session session : sessions) {
            if(session.getStatus()==1){
                retList.add(new SessionDTO(session.getSessionId(), session.getTrainer().getFullName(),session.getDate(), session.getStatus(), session.getNumOfStudent(), session.getRoute(), session.getStartTime(), session.getEndTime()));//code to complete
            }
        }
        return retList;
    }
}
