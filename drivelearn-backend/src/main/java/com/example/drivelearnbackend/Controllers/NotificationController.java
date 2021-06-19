package com.example.drivelearnbackend.Controllers;

import antlr.collections.List;
import com.example.drivelearnbackend.Controllers.DTO.NotificationDTO;
import com.example.drivelearnbackend.Repositories.Entity.Notification;
import com.example.drivelearnbackend.Sevices.NontificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.LinkedList;

//notification adding is done with two servises
//        1.creating the notification - addNotification()
//        2.enter the certai students into that - addRcceivers()
//
//all the methods are needed a NotificationDTO, all are post requests becase react-native is recomending the post

//third service is used to display all the notifications



@RestController
@RequestMapping(value = "/notification")
public class NotificationController {

    @Autowired
    private NontificationService nontificationService;

//    senderUsername,senderUserId,senderType,header,message should be specipied to call this in the  the frontend
    @PostMapping(value = "/addNotification")
    public NotificationDTO addNotification(@RequestBody NotificationDTO dto){
        Notification notification=nontificationService.addNotification(dto);
        return new NotificationDTO(notification.getNotificationId(), notification.getHeader(), dto.getMessage(), dto.getDate(), dto.getStatus());
    }

//    notificationId,receiverUserType,receiverUsername or receiverUserId should be specified in the frontend to call this
    @PostMapping(value = "/addreceiver")
    public void addRcceivers(@RequestBody NotificationDTO dto){
        nontificationService.addReceiver(dto);
    }

//   receiverUserType,receiverUsername or receiverUserId should be specified in the frontend to call this
    @PostMapping(value = "/sendallnotification")
    public LinkedList<NotificationDTO> sendAllNotification(@RequestBody NotificationDTO dto){
        return nontificationService.sendAllNotification(dto);
    }

//    this function is for update whether the read or not some notification
    @PostMapping(value = "/changestate")
    public void changeState(@RequestBody NotificationDTO dto){
        nontificationService.changeState(dto);
    }

//    this is used to specify the numner of unread messages
//   receiverUserType,receiverUsername or receiverUserId should be specified in the frontend to call this
    @PostMapping(value = "/unreads")
    public int countOfUnReadMessages(@RequestBody NotificationDTO dto){
        return nontificationService.countOfUnReadMessages(dto);
    }
}
