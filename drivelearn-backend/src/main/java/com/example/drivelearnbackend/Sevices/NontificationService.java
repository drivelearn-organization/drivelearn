package com.example.drivelearnbackend.Sevices;

import com.example.drivelearnbackend.Controllers.DTO.NotificationDTO;
import com.example.drivelearnbackend.Repositories.*;
import com.example.drivelearnbackend.Repositories.Entity.Employee;
import com.example.drivelearnbackend.Repositories.Entity.Notification;
import com.example.drivelearnbackend.Repositories.Entity.User;
import com.example.drivelearnbackend.Repositories.Entity.UserReceiveNotification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.*;

@Service
public class NontificationService {

    @Autowired
    private NotificationRepository repository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserReceiveNotificationRepository userReceiveNotificationRepository;

    @Autowired
    private BranchRepository branchRepository;

    @Autowired
    private EmployeeRepository employeeRepository;

    public Notification addNotification(NotificationDTO dto){
        User user = null;
        LinkedList<User> userList;
        if(dto.getSenderUserId()==0){
            userList=userRepository.findByUsernameAndAndUserType(dto.getSenderUsername(), dto.getSenderType());
            for (User user1 : userList) {
                user = user1;
            }
        }else{
            userList=userRepository.findByExternalIdAndUserType(dto.getSenderUserId(),dto.getSenderType());
            for (User user1 : userList) {
                user = user1;
            }
        }
        List<UserReceiveNotification> usersReceivedotificaction=new ArrayList<>();

        return repository.save(new Notification(dto.getHeader(), dto.getMessage(), LocalDate.now(),1,usersReceivedotificaction,user));
    }

    public void addReceiver(NotificationDTO dto){
        Notification notification=repository.findById(dto.getNotificationId()).get();
        User user = null;
        LinkedList<User> userList;
        if(dto.getReceiverUserId()==0){
            userList=userRepository.findByUsernameAndAndUserType(dto.getReceiverUsername(), dto.getReceiverType());
            for (User user1 : userList) {
                user = user1;
            }
        }else{
            userList=userRepository.findByExternalIdAndUserType(dto.getReceiverUserId(),dto.getReceiverType());
            for (User user1 : userList) {
                user = user1;
            }
        }
        userReceiveNotificationRepository.save(new UserReceiveNotification(1, LocalDateTime.now(),user,notification));
    }

    public LinkedList<NotificationDTO> sendAllNotification(NotificationDTO dto){
        User user = null;
        LinkedList<User> userList;
        if(dto.getReceiverUserId()==0){
            userList=userRepository.findByUsernameAndAndUserType(dto.getReceiverUsername(), dto.getReceiverType());
            for (User user1 : userList) {
                user = user1;
            }
        }else{
            userList=userRepository.findByExternalIdAndUserType(dto.getReceiverUserId(),dto.getReceiverType());
            for (User user1 : userList) {
                user = user1;
            }
            System.out.println(user.getUsername());
        }
        List<UserReceiveNotification> userReceiveNotifications= user.getUserReceiveNotifications();

        if(userReceiveNotifications.isEmpty()){
            return null;

        }else{
            Comparator<UserReceiveNotification> com =new Comparator<UserReceiveNotification>() {
                @Override
                public int compare(UserReceiveNotification userReceiveNotification, UserReceiveNotification t1) {
                    if(userReceiveNotification.getDate().isAfter(t1.getDate())){
                        return 1;
                    }else{
                        return 0;
                    }
                }
            };

//        Collections.sort(userReceiveNotifications,com);
            Collections.reverse(userReceiveNotifications);




            List<NotificationDTO> notificationDTOS=new LinkedList<>();

            for (UserReceiveNotification notification : userReceiveNotifications) {
                notificationDTOS.add(new NotificationDTO(notification.getAccocId(),notification.getNotification().getHeader(),notification.getNotification().getMessage(),notification.getDate().toLocalDate(),notification.getStatus()));
            }
            return (LinkedList<NotificationDTO>) notificationDTOS;
        }


    }


    public void changeState(NotificationDTO dto){
        UserReceiveNotification notification=userReceiveNotificationRepository.findById(dto.getNotificationId()).get();
        notification.setStatus(2);
        userReceiveNotificationRepository.save(notification);
    }


    public int countOfUnReadMessages(NotificationDTO dto){

        User user = null;
        int count=0;
        LinkedList<User> userList;
        if(dto.getReceiverUserId()==0){
            userList=userRepository.findByUsernameAndAndUserType(dto.getReceiverUsername(), dto.getReceiverType());
            for (User user1 : userList) {
                user = user1;
            }
        }else{
            userList=userRepository.findByExternalIdAndUserType(dto.getReceiverUserId(),dto.getReceiverType());
            for (User user1 : userList) {
                user = user1;
            }
            System.out.println(user.getUsername());
        }
            List<UserReceiveNotification> userReceiveNotifications= user.getUserReceiveNotifications();
        if(userReceiveNotifications.isEmpty()){
            return 0;
        }else{

            for (UserReceiveNotification notification : userReceiveNotifications) {
                if(notification.getStatus()==1){
                    count++;
                }
            }
            return count;
        }

    }

    public LinkedList<NotificationDTO> getAllNotificationByBranch(int branchId){
        LinkedList<NotificationDTO> notificationDTOS=new LinkedList<>();
        for (Notification notification : repository.findAll()) {
            if(notification.getSender()!=null){

                User user=notification.getSender();
                int id=0;
                id=user.getExternalId();

                if(id!=0){
                    System.out.println("print id"+id);
                    Employee employee=null;
                    try{
                        employee =employeeRepository.findById(id).get();
                    }catch (Exception e){

                    }
                    if(employee!=null){
                        if(employee.getBranch().getBranchid()==branchId){
                            notificationDTOS.add(new NotificationDTO(notification.getNotificationId(), notification.getHeader(), notification.getMessage()));
                        }

                    }
                }

//                if(branchRepository.findById(employeeRepository.findById(notification.getSender().getExternalId()).get().getBranch().getBranchid()).get()!=null){
//                    if(employeeRepository.findById(notification.getSender().getExternalId()).get().getBranch().getBranchid()==branchId){
//                        notificationDTOS.add(new NotificationDTO(notification.getNotificationId(), notification.getHeader(), notification.getMessage()));
//                    }
//                }
            }
        }

        return notificationDTOS;
    }
}
