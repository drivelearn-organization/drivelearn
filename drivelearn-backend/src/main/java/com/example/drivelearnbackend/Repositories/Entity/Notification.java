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

    @ManyToMany
    @JsonIgnore
    List<User> receiver=new ArrayList<>();

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "sender_id",referencedColumnName = "userId")
    private User Sender;

    public Notification() {
    }

    public Notification(int notificationId, String message, Date date, List<User> receiver, User sender) {
        this.notificationId = notificationId;
        this.message = message;
        this.date = date;
        this.receiver = receiver;
        Sender = sender;
    }

    public int getNotificationId() {
        return notificationId;
    }

    public void setNotificationId(int notificationId) {
        this.notificationId = notificationId;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public List<User> getReceiver() {
        return receiver;
    }

    public void setReceiver(List<User> receiver) {
        this.receiver = receiver;
    }

    public User getSender() {
        return Sender;
    }

    public void setSender(User sender) {
        Sender = sender;
    }
}
