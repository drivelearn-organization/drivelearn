package com.example.drivelearnbackend.Sevices;

import com.example.drivelearnbackend.Controllers.DTO.NotificationDTO;
import com.example.drivelearnbackend.Repositories.Entity.Notification;
import com.example.drivelearnbackend.Repositories.Entity.User;
import com.example.drivelearnbackend.Repositories.Entity.UserReceiveNotification;
import com.example.drivelearnbackend.Repositories.NotificationRepository;
import com.example.drivelearnbackend.Repositories.UserReceiveNotificationRepository;
import com.example.drivelearnbackend.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

@Service
public class ListNotificationService {

    @Autowired
    private NotificationRepository notificationrepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserReceiveNotificationRepository userReceiveNotificationRepository;


    public Notification save_notification(NotificationDTO dto){
        User user = null;
        Notification notification = null;
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
        System.out.println("for testing"+dto.getHeader());
        notification = notificationrepository.save(new Notification(dto.getHeader(), dto.getMessage(), LocalDate.now(),1,usersReceivedotificaction,user));

        int[] array=dto.getReceiverUserIdAtrray();
        System.out.println("array"+array[0]);
        for (int i=0;i< array.length;i++){
            System.out.println("array "+array[i]);
            addReceiver(new NotificationDTO(notification.getNotificationId(), array[i], dto.getReceiverType()));
        }

        for (int i : dto.getReceiverUserIdAtrray()) {
            System.out.println(i);

        }

        return notification;

    }

    public void addReceiver(NotificationDTO dto){
        Notification notification=notificationrepository.findById(dto.getNotificationId()).get();
        User user = null;
        LinkedList<User> userList;
        if(dto.getReceiverUserId()==0){
            userList=userRepository.findByUsernameAndAndUserType(dto.getReceiverUsername(), dto.getReceiverType());
            for (User user1 : userList) {
                user = user1;
            }
        }else{
            userList=userRepository.findByExternalIdAndUserType(dto.getReceiverUserId(),3);
            for (User user1 : userList) {
                user = user1;
               // System.out.println("for test"+user.getUsername());
            }
        }

        if(user!=null){
            System.out.println("user is  not null");
        }else{
            System.out.println("user is null");
        }
        //System.out.println("for test->"+user.getUsername());
        userReceiveNotificationRepository.save(new UserReceiveNotification(1, LocalDateTime.now(),user,notification));
    }


}
