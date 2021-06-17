package com.example.drivelearnbackend.Controllers;

import com.example.drivelearnbackend.Controllers.DTO.NotificationDTO;
import com.example.drivelearnbackend.Repositories.Entity.Notification;
import com.example.drivelearnbackend.Repositories.Entity.Student;
import com.example.drivelearnbackend.Sevices.NontificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/notification")
public class NotificationController {

    @Autowired
    private NontificationService nontificationService;

    @PostMapping(value = "/addNotification")
    public NotificationDTO addNotification(@RequestBody NotificationDTO dto){
        Notification notification=nontificationService.addNotification(dto);
        return new NotificationDTO(notification.getNotificationId(), notification.getHeader(), dto.getMessage(), dto.getDate(), dto.getStatus());
    }
}
