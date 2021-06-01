package com.example.drivelearnbackend.Repositories.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class User {
    @Id
    private int userId;
    private int externalId;
    private int userType;

//    @ManyToMany
//    @JsonIgnore
//    @JoinTable(
//            name = "receive_message_user_assoc",
//            joinColumns = @JoinColumn(name = "userId",referencedColumnName = "userId"),
//            inverseJoinColumns = @JoinColumn(name = "notificationId",referencedColumnName = "notificationId")
//    )
//    private List<Notification> receivedMessageList=new ArrayList<>();
//
//
//    @OneToMany(mappedBy = "Sender")
//    @JsonManagedReference
//    List<Notification> sentMessage=new ArrayList<>();


}
