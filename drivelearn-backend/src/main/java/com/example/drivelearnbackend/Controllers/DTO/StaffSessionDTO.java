package com.example.drivelearnbackend.Controllers.DTO;

import java.time.LocalDate;

public class StaffSessionDTO {
    private int sessionId;
    private String trainerUsername;
    private LocalDate date;
    private int status;
    private int numOfStudent;
    private String route;
    private String startTime;
    private String endTime;
    private String vehicleType;
    private int currentFilled;
    private String vehicleId;

    private int managerId;
    private int trainerId;
    private String studentUsername;


    private String laditude;
    private String longititude;

    public StaffSessionDTO() {
    }



    public StaffSessionDTO(int sessionId, String trainerUsername, LocalDate date, int status, int numOfStudent, String startTime, int currentFilled) {
        this.sessionId = sessionId;
        this.trainerUsername = trainerUsername;
        this.date = date;
        this.status = status;
        this.numOfStudent = numOfStudent;
        this.startTime = startTime;
        this.currentFilled = currentFilled;
    }

    public int getSessionId() {
        return sessionId;
    }

    public void setSessionId(int sessionId) {
        this.sessionId = sessionId;
    }

    public String getTrainerUsername() {
        return trainerUsername;
    }

    public void setTrainerUsername(String trainerUsername) {
        this.trainerUsername = trainerUsername;
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

    public int getNumOfStudent() {
        return numOfStudent;
    }

    public void setNumOfStudent(int numOfStudent) {
        this.numOfStudent = numOfStudent;
    }

    public String getRoute() {
        return route;
    }

    public void setRoute(String route) {
        this.route = route;
    }

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public String getEndTime() {
        return endTime;
    }

    public void setEndTime(String endTime) {
        this.endTime = endTime;
    }

    public String getVehicleType() {
        return vehicleType;
    }

    public void setVehicleType(String vehicleType) {
        this.vehicleType = vehicleType;
    }

    public int getManagerId() {
        return managerId;
    }

    public void setManagerId(int managerId) {
        this.managerId = managerId;
    }

    public int getTrainerId() {
        return trainerId;
    }

    public void setTrainerId(int trainerId) {
        this.trainerId = trainerId;
    }

    public String getStudentUsername() {
        return studentUsername;
    }

    public void setStudentUsername(String studentUsername) {
        this.studentUsername = studentUsername;
    }

    public String getLaditude() {
        return laditude;
    }

    public void setLaditude(String laditude) {
        this.laditude = laditude;
    }

    public String getLongititude() {
        return longititude;
    }

    public void setLongititude(String longititude) {
        this.longititude = longititude;
    }
}
