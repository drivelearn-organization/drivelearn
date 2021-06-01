package com.example.drivelearnbackend.Repositories.Entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
public class Notification {

    @Id
    private int notificationId;
    private String message;
    private Date date;

//    @ManyToMany
//    @JsonIgnore
//    List<User> receiver=new ArrayList<>();
//
//    @ManyToOne
//    @JsonBackReference
//    @JoinColumn(name = "sender_id",referencedColumnName = "userId")
//    private User Sender;


}
