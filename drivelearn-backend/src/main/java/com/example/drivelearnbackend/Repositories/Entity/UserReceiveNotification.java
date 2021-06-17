package com.example.drivelearnbackend.Repositories.Entity;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;

@Entity
public class UserReceiveNotification {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int accocId;
    private int status;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "reciverId",referencedColumnName = "userId")
    private User reciever;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "notificId",referencedColumnName = "notificationId")
    private Notification notification;


}
