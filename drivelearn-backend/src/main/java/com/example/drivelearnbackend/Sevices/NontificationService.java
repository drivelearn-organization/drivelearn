package com.example.drivelearnbackend.Sevices;

import com.example.drivelearnbackend.Controllers.DTO.NotificationDTO;
import com.example.drivelearnbackend.Repositories.Entity.Notification;
import com.example.drivelearnbackend.Repositories.Entity.User;
import com.example.drivelearnbackend.Repositories.Entity.UserReceiveNotification;
import com.example.drivelearnbackend.Repositories.NotificationRepository;
import com.example.drivelearnbackend.Repositories.UserReceiveNotificationRepository;
import com.example.drivelearnbackend.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.convert.threeten.Jsr310JpaConverters;
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
