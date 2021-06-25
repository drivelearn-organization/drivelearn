package com.example.drivelearnbackend.Controllers.DTO;

import java.time.LocalDateTime;

public class CourceDTO {
    private int courseId;
    private String username;
    private int transportState;
    private int carAuto;
    private int wheeler;
    private int bike;
    private int heavy;
    private int exam;
    private int carManual;

    private int carAutoProgreess;
    private int wheelerProgreess;
    private int bikeProgreess;
    private int heavyProgreess;
    private int examProgreess;
    private int carManualProgreess;

    private int carAutoFullCount;
    private int wheelerFullCount;
    private int bikeFullCount;
    private int heavyFullCount;
    private int examFullCount;
    private int carManualFullCount;

    private LocalDateTime examDate1;
    private LocalDateTime examDate2;
    private LocalDateTime examDate3;
    private LocalDateTime trailDate;
    private int barcodeNumber;


    public CourceDTO() {
    }

    public CourceDTO(String username, int transportState, int carAuto, int wheeler, int bike, int heavy, int exam, int carManual, LocalDateTime examDate1, LocalDateTime examDate2, LocalDateTime examDate3, LocalDateTime trailDate, int barcodeNumber) {
        this.username = username;
        this.transportState = transportState;
        this.carAuto = carAuto;
        this.wheeler = wheeler;
        this.bike = bike;
        this.heavy = heavy;
        this.exam = exam;
        this.carManual = carManual;
        this.examDate1 = examDate1;
        this.examDate2 = examDate2;
        this.examDate3 = examDate3;
        this.trailDate = trailDate;
        this.barcodeNumber = barcodeNumber;
    }

    public CourceDTO(int courseId, int transportState, int carAuto, int wheeler, int bike, int heavy, int exam, int carManual) {
        this.courseId = courseId;
        this.transportState = transportState;
        this.carAuto = carAuto;
        this.wheeler = wheeler;
        this.bike = bike;
        this.heavy = heavy;
        this.exam = exam;
        this.carManual = carManual;
    }

    public LocalDateTime getExamDate1() {
        return examDate1;
    }

    public void setExamDate1(LocalDateTime examDate1) {
        this.examDate1 = examDate1;
    }

    public LocalDateTime getExamDate2() {
        return examDate2;
    }

    public void setExamDate2(LocalDateTime examDate2) {
        this.examDate2 = examDate2;
    }

    public LocalDateTime getExamDate3() {
        return examDate3;
    }

    public void setExamDate3(LocalDateTime examDate3) {
        this.examDate3 = examDate3;
    }

    public LocalDateTime getTrailDate() {
        return trailDate;
    }

    public void setTrailDate(LocalDateTime trailDate) {
        this.trailDate = trailDate;
    }

    public int getBarcodeNumber() {
        return barcodeNumber;
    }

    public void setBarcodeNumber(int barcodeNumber) {
        this.barcodeNumber = barcodeNumber;
    }

    public int getCourseId() {
        return courseId;
    }

    public void setCourseId(int courseId) {
        this.courseId = courseId;
    }

    public int getTransportState() {
        return transportState;
    }

    public void setTransportState(int transportState) {
        this.transportState = transportState;
    }

    public int getCarAuto() {
        return carAuto;
    }

    public void setCarAuto(int carAuto) {
        this.carAuto = carAuto;
    }

    public int getWheeler() {
        return wheeler;
    }

    public void setWheeler(int wheeler) {
        this.wheeler = wheeler;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public int getBike() {
        return bike;
    }

    public void setBike(int bike) {
        this.bike = bike;
    }

    public int getHeavy() {
        return heavy;
    }

    public void setHeavy(int heavy) {
        this.heavy = heavy;
    }

    public int getExam() {
        return exam;
    }

    public void setExam(int exam) {
        this.exam = exam;
    }

    public int getCarManual() {
        return carManual;
    }

    public void setCarManual(int carManual) {
        this.carManual = carManual;
    }

    public int getCarAutoProgreess() {
        return carAutoProgreess;
    }

    public void setCarAutoProgreess(int carAutoProgreess) {
        this.carAutoProgreess = carAutoProgreess;
    }

    public int getWheelerProgreess() {
        return wheelerProgreess;
    }

    public void setWheelerProgreess(int wheelerProgreess) {
        this.wheelerProgreess = wheelerProgreess;
    }

    public int getBikeProgreess() {
        return bikeProgreess;
    }

    public void setBikeProgreess(int bikeProgreess) {
        this.bikeProgreess = bikeProgreess;
    }

    public int getHeavyProgreess() {
        return heavyProgreess;
    }

    public void setHeavyProgreess(int heavyProgreess) {
        this.heavyProgreess = heavyProgreess;
    }

    public int getExamProgreess() {
        return examProgreess;
    }

    public void setExamProgreess(int examProgreess) {
        this.examProgreess = examProgreess;
    }

    public int getCarManualProgreess() {
        return carManualProgreess;
    }

    public void setCarManualProgreess(int carManualProgreess) {
        this.carManualProgreess = carManualProgreess;
    }

    public int getCarAutoFullCount() {
        return carAutoFullCount;
    }

    public void setCarAutoFullCount(int carAutoFullCount) {
        this.carAutoFullCount = carAutoFullCount;
    }

    public int getWheelerFullCount() {
        return wheelerFullCount;
    }

    public void setWheelerFullCount(int wheelerFullCount) {
        this.wheelerFullCount = wheelerFullCount;
    }

    public int getBikeFullCount() {
        return bikeFullCount;
    }

    public void setBikeFullCount(int bikeFullCount) {
        this.bikeFullCount = bikeFullCount;
    }

    public int getHeavyFullCount() {
        return heavyFullCount;
    }

    public void setHeavyFullCount(int heavyFullCount) {
        this.heavyFullCount = heavyFullCount;
    }

    public int getExamFullCount() {
        return examFullCount;
    }

    public void setExamFullCount(int examFullCount) {
        this.examFullCount = examFullCount;
    }

    public int getCarManualFullCount() {
        return carManualFullCount;
    }

    public void setCarManualFullCount(int carManualFullCount) {
        this.carManualFullCount = carManualFullCount;
    }
}
