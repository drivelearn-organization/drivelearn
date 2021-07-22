package com.example.drivelearnbackend.Controllers.DTO;

public class FeedbackDTO {
    private int feedbacId;
    private int start;
    private int end;
    private int reverse;
    private int searingBalance;
    private int cluchBalance;
    private int gear;

    private int sessionId;
    private int studentId;

    public FeedbackDTO() {
    }

    public int getFeedbacId() {
        return feedbacId;
    }

    public void setFeedbacId(int feedbacId) {
        this.feedbacId = feedbacId;
    }

    public int getStart() {
        return start;
    }

    public void setStart(int start) {
        this.start = start;
    }

    public int getEnd() {
        return end;
    }

    public void setEnd(int end) {
        this.end = end;
    }

    public int getReverse() {
        return reverse;
    }

    public void setReverse(int reverse) {
        this.reverse = reverse;
    }

    public int getSearingBalance() {
        return searingBalance;
    }

    public void setSearingBalance(int searingBalance) {
        this.searingBalance = searingBalance;
    }

    public int getCluchBalance() {
        return cluchBalance;
    }

    public void setCluchBalance(int cluchBalance) {
        this.cluchBalance = cluchBalance;
    }

    public int getGear() {
        return gear;
    }

    public void setGear(int gear) {
        this.gear = gear;
    }

    public int getSessionId() {
        return sessionId;
    }

    public void setSessionId(int sessionId) {
        this.sessionId = sessionId;
    }

    public int getStudentId() {
        return studentId;
    }

    public void setStudentId(int studentId) {
        this.studentId = studentId;
    }
}
