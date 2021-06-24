package com.example.drivelearnbackend.Repositories.Entity;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;

@Entity
public class CourceTypeAssoc {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int courseAssocId;
    private int numHours;
    private int numSession;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "courseId",referencedColumnName = "courseId")
    private Cource cource;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "typeId",referencedColumnName = "typeId")
    private VechileType vechileType;

    public CourceTypeAssoc(int numHours, int numSession, Cource cource, VechileType vechileType) {
        this.numHours = numHours;
        this.numSession = numSession;
        this.cource = cource;
        this.vechileType = vechileType;
    }

    public CourceTypeAssoc() {

    }

    public int getCourseAssocId() {
        return courseAssocId;
    }

    public void setCourseAssocId(int courseAssocId) {
        this.courseAssocId = courseAssocId;
    }

    public int getNumHours() {
        return numHours;
    }

    public void setNumHours(int numHours) {
        this.numHours = numHours;
    }

    public int getNumSession() {
        return numSession;
    }

    public void setNumSession(int numSession) {
        this.numSession = numSession;
    }

    public Cource getCource() {
        return cource;
    }

    public void setCource(Cource cource) {
        this.cource = cource;
    }

    public VechileType getVechileType() {
        return vechileType;
    }

    public void setVechileType(VechileType vechileType) {
        this.vechileType = vechileType;
    }
}
