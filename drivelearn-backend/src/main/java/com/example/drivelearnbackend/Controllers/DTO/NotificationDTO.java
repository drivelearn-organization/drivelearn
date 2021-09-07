package com.example.drivelearnbackend.Controllers.DTO;

import java.time.LocalDate;

public class NotificationDTO {
    private int notificationId;
    private String senderUsername;
    private int senderUserId;
    private int senderType;
    private String header;
    private String message;
    private LocalDate date;
    private int status;
    private int receiverUserId;
    private String receiverUsername;
    private int receiverType;

    private int[] receiverUserIdAtrray;

    public NotificationDTO() {
    }

    public NotificationDTO(int notificationId, int receiverUserId, int receiverType) {
        this.notificationId = notificationId;
        this.receiverUserId = receiverUserId;
        this.receiverType = receiverType;
    }

    public NotificationDTO(int notificationId, String header, String message) {
        this.notificationId = notificationId;
        this.header = header;
        this.message = message;
    }

    public NotificationDTO(int notificationId, String header, String message, LocalDate date, int status) {
        this.notificationId = notificationId;
        this.header = header;
        this.message = message;
        this.date = date;
        this.status = status;
    }

    public NotificationDTO(String header, String message, LocalDate date, int status) {
        this.header = header;
        this.message = message;
        this.date = date;
        this.status = status;
    }

    public NotificationDTO(String header, String message, int status) {
        this.header = header;
        this.message = message;
        this.status = status;
    }

    public int[] getReceiverUserIdAtrray() {
        return receiverUserIdAtrray;
    }

    public void setReceiverUserIdAtrray(int[] receiverUserIdAtrray) {
        this.receiverUserIdAtrray = receiverUserIdAtrray;
    }

    public int getReceiverUserId() {
        return receiverUserId;
    }

    public void setReceiverUserId(int receiverUserId) {
        this.receiverUserId = receiverUserId;
    }

    public String getReceiverUsername() {
        return receiverUsername;
    }

    public void setReceiverUsername(String receiverUsername) {
        this.receiverUsername = receiverUsername;
    }

    public int getReceiverType() {
        return receiverType;
    }

    public void setReceiverType(int receiverType) {
        this.receiverType = receiverType;
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

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getSenderUsername() {
        return senderUsername;
    }

    public void setSenderUsername(String senderUsername) {
        this.senderUsername = senderUsername;
    }

    public int getSenderUserId() {
        return senderUserId;
    }

    public void setSenderUserId(int senderUserId) {
        this.senderUserId = senderUserId;
    }

    public int getSenderType() {
        return senderType;
    }

    public void setSenderType(int senderType) {
        this.senderType = senderType;
    }
}
