package com.example.drivelearnbackend.Repositories.Entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
public class Notification {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int notificationId;
    private String header;
    private String message;
    private LocalDate date;
    private int status;

    @OneToMany(mappedBy = "notification")
    @JsonManagedReference
    private List<UserReceiveNotification> usersReceivedotificaction=new ArrayList<>();



    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "sender_id",referencedColumnName = "userId")
    private User Sender;

    public Notification() {
    }

    public Notification(String header, String message, LocalDate date, int status, List<UserReceiveNotification> usersReceivedotificaction, User sender) {
        this.header = header;
        this.message = message;
        this.date = date;
        this.status = status;
        this.usersReceivedotificaction = usersReceivedotificaction;
        Sender = sender;
    }

    public Notification(String header, String message, LocalDate date, List<UserReceiveNotification> usersReceivedotificaction, User sender) {
        this.header = header;
        this.message = message;
        this.date = date;
        this.usersReceivedotificaction = usersReceivedotificaction;
        Sender = sender;
    }

    public int getNotificationId() {
        return notificationId;
    }

    public void setNotificationId(int notificationId) {
        this.notificationId = notificationId;
    }

    public String getHeader() {
        return header;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public void setHeader(String header) {
        this.header = header;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public List<UserReceiveNotification> getUsersReceivedotificaction() {
        return usersReceivedotificaction;
    }

    public void setUsersReceivedotificaction(List<UserReceiveNotification> usersReceivedotificaction) {
        this.usersReceivedotificaction = usersReceivedotificaction;
    }

    public User getSender() {
        return Sender;
    }

    public void setSender(User sender) {
        Sender = sender;
    }
}
