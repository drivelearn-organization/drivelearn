package com.example.drivelearnbackend.Repositories.Entity;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
public class UserReceiveNotification {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int accocId;
    private int status;
    private LocalDateTime date;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "reciverId",referencedColumnName = "userId")
    private User reciever;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "notificId",referencedColumnName = "notificationId")
    private Notification notification;

    public UserReceiveNotification(int status, LocalDateTime date, User reciever, Notification notification) {
        this.status = status;
        this.date = date;
        this.reciever = reciever;
        this.notification = notification;
    }

    public UserReceiveNotification() {
    }

    public int getAccocId() {
        return accocId;
    }

    public void setAccocId(int accocId) {
        this.accocId = accocId;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public LocalDateTime getDate() {
        return date;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }

    public User getReciever() {
        return reciever;
    }

    public void setReciever(User reciever) {
        this.reciever = reciever;
    }

    public Notification getNotification() {
        return notification;
    }

    public void setNotification(Notification notification) {
        this.notification = notification;
    }
}
