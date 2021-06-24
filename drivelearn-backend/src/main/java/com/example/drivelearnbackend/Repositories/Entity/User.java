package com.example.drivelearnbackend.Repositories.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int userId;
    private int externalId;
    private int userType;
    private String username;

    @OneToMany(mappedBy = "reciever",fetch = FetchType.EAGER)
    @JsonManagedReference
    private List<UserReceiveNotification> userReceiveNotifications=new LinkedList<>();



    @OneToMany(mappedBy = "Sender")
    @JsonManagedReference
    private List<Notification> sentMessage=new LinkedList<>();

    public User() {
    }

    public User( int externalId, int userType, String username, LinkedList<UserReceiveNotification> userReceiveNotifications, LinkedList<Notification> sentMessage) {
        this.externalId = externalId;
        this.userType = userType;
        this.username = username;
        this.userReceiveNotifications = userReceiveNotifications;
        this.sentMessage = sentMessage;
    }

    public User( int externalId, int userType, LinkedList<UserReceiveNotification> userReceiveNotifications, LinkedList<Notification> sentMessage) {
        this.externalId = externalId;
        this.userType = userType;
        this.userReceiveNotifications = userReceiveNotifications;
        this.sentMessage = sentMessage;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getExternalId() {
        return externalId;
    }

    public void setExternalId(int externalId) {
        this.externalId = externalId;
    }

    public int getUserType() {
        return userType;
    }

    public void setUserType(int userType) {
        this.userType = userType;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public List<UserReceiveNotification> getUserReceiveNotifications() {
        return userReceiveNotifications;
    }


    public List<Notification> getSentMessage() {
        return sentMessage;
    }

    public void setUserReceiveNotifications(LinkedList<UserReceiveNotification> userReceiveNotifications) {
        this.userReceiveNotifications = userReceiveNotifications;
    }

    public void setSentMessage(LinkedList<Notification> sentMessage) {
        this.sentMessage = sentMessage;
    }
}
