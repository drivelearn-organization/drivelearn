package com.example.drivelearnbackend.Repositories.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Trainer {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int trainerId;
    private int trainLiceId;
    private double rating;

    public Trainer() {
    }

    public Trainer(int trainerId, int trainLiceId, double rating) {
        this.trainerId = trainerId;
        this.trainLiceId = trainLiceId;
        this.rating = rating;
    }

    public int getTrainerId() {
        return trainerId;
    }

    public void setTrainerId(int trainerId) {
        this.trainerId = trainerId;
    }

    public int getTrainLiceId() {
        return trainLiceId;
    }

    public void setTrainLiceId(int trainLiceId) {
        this.trainLiceId = trainLiceId;
    }

    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }
}
