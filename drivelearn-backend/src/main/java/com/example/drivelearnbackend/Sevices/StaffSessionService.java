package com.example.drivelearnbackend.Sevices;

import com.example.drivelearnbackend.Controllers.DTO.EmployeeDTO;
import com.example.drivelearnbackend.Controllers.DTO.StaffSessionDTO;
import com.example.drivelearnbackend.Controllers.DTO.VehicleDTO;
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
public class StaffSessionService {
    @Autowired
    private SessionRepository sessionRepository;

    @Autowired
    private BranchRepository branchRepository;

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private VehicleRepository vehicleRepository;

    @Autowired
    private VehicleTypeRepository vehicleTypeRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserReceiveNotificationRepository userReceiveNotificationRepository;

    @Autowired
    private NotificationRepository notificationRepository;

    public LinkedList<StaffSessionDTO> getAllSession(int branchId){
        LinkedList<StaffSessionDTO> sessionDTOS=new LinkedList<>();
        for (Session session : sessionRepository.findAllByBranch(branchRepository.findById(branchId).get())) {
            if(session.getStatus()==1){
                sessionDTOS.add(new StaffSessionDTO(session.getSessionId(), session.getTrainer().getFullName(),session.getDate(),session.getStatus(),session.getNumOfStudent(),session.getStartTime(),session.getStuSessions().size()));
            }

        }
        return sessionDTOS;
    }

    public LinkedList<EmployeeDTO> getAllTrainers(int branchId){
        LinkedList<EmployeeDTO> list=new LinkedList<>();
        for (Employee employee : employeeRepository.findAllByBranchAndRole(branchRepository.findById(branchId).get(), 2)) {
            list.add(new EmployeeDTO(employee.getFullName(),employee.getEmpid()));
        }

        return list;
    }

    public LinkedList<VehicleDTO> getAllVehicles(int branchId){
        LinkedList<VehicleDTO> list=new LinkedList<>();
        for (Vehicle vehicleByBranch : vehicleRepository.findVehicleByBranch(branchRepository.findById(branchId).get())) {
            list.add(new VehicleDTO(vehicleByBranch.getVechicleId(),vehicleByBranch.getRegiNumner()));
        }

        return list;
    }

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

    public void updateSession(StaffSessionDTO dto){
        Session session=sessionRepository.findById(dto.getSessionId()).get();
        if(dto.getTrainerId()!=0){
            Employee trainer=employeeRepository.findById(dto.getTrainerId()).get();
            session.setTrainer(trainer);
        }
        if(dto.getDate()!=null){
            session.setDate(dto.getDate());
        }
        if(dto.getStartTime()!=null && dto.getStartTime()!=""){
            session.setStartTime(dto.getStartTime());
        }
        if(dto.getNumOfStudent()!=0){
            session.setNumOfStudent(dto.getNumOfStudent());
        }
        if(dto.getVehicleType()!=null && dto.getVehicleType()!=""){
            VechileType type=null;
            for (VechileType vechileType : vehicleTypeRepository.findByTypeName(dto.getVehicleType())) {
                type=vechileType;
            }

            session.setType(type);
        }
        sessionRepository.save(session);

        User TrainerUser=giveUser(dto.getTrainerId(), dto.getTrainerUsername(), 2);

        List<UserReceiveNotification> usersReceivedotificaction=new ArrayList<>();
        Notification notification=notificationRepository.save(new Notification("Your session is updated", "your training session was update, when the time is at "+dto.getDate()+" from "+dto.getStartTime()+" to "+dto.getEndTime(), LocalDate.now(),1,usersReceivedotificaction,null));
        userReceiveNotificationRepository.save(new UserReceiveNotification(1, LocalDateTime.now(),TrainerUser,notification));


        for (StuSession stuSession : session.getStuSessions()) {
            User user=null;
            for (User user1 : userRepository.findUserByExternalId(stuSession.getStudent().getStuId())) {
                user=user1;
            }
            userReceiveNotificationRepository.save(new UserReceiveNotification(1, LocalDateTime.now(),user,notification));
        }
    }

    public void makeClose(int id){
        Session session=sessionRepository.findById(id).get();
        session.setStatus(6);
        sessionRepository.save(session);
    }

}
