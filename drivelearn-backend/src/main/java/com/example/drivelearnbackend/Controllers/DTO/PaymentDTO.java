package com.example.drivelearnbackend.Controllers.DTO;
import java.time.LocalDate;

public class PaymentDTO {
    private int paymentId;
    private double amount;
    private LocalDate date;
    private String username;
    private int userId;

    public PaymentDTO() {
    }

    public PaymentDTO(int paymentId, double amount, LocalDate date) {
        this.paymentId = paymentId;
        this.amount = amount;
        this.date = date;
    }

    public PaymentDTO(int paymentId, double amount, LocalDate date, String username) {
        this.paymentId = paymentId;
        this.amount = amount;
        this.date = date;
        this.username = username;
    }

    public PaymentDTO(int paymentId, double amount, LocalDate date, int userId) {
        this.paymentId = paymentId;
        this.amount = amount;
        this.date = date;
        this.userId = userId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getPaymentId() {
        return paymentId;
    }

    public void setPaymentId(int paymentId) {
        this.paymentId = paymentId;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }
}
