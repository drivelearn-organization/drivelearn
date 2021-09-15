package com.example.drivelearnbackend.Controllers;

import com.example.drivelearnbackend.Controllers.DTO.NotificationDTO;
import com.example.drivelearnbackend.Repositories.Entity.Notification;
import com.example.drivelearnbackend.Sevices.ListNotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedList;

@RestController
@CrossOrigin("*")
@RequestMapping(value = "/listnotification")
public class ListNotificationController {

    @Autowired
    private ListNotificationService notificationService;

    @PostMapping("/addnotification")
    public Notification add_notification(@RequestBody NotificationDTO DTO){
        return notificationService.save_notification(DTO);

    }
}
