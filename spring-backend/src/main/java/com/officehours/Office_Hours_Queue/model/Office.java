package com.officehours.Office_Hours_Queue.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.util.List;

@Entity
public class Office {
    @Id // Sets id as the primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY) // auto-increment the id
    private int id;
    private String officeName;
    private List<String> days;
    private String OHCode;
    private String mentorUsername;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getOfficeName() {
        return officeName;
    }

    public void setOfficeName(String officeName) {
        this.officeName = officeName;
    }

    public List<String> getDays() {
        return days;
    }

    public void setDays(List<String> days) {
        this.days = days;
    }

    public String getOHCode() {
        return OHCode;
    }

    public void setOHCode(String OHCode) {
        this.OHCode = OHCode;
    }

    public String getMentorUsername() {
        return mentorUsername;
    }

    public void setMentorUsername(String mentorUsername) {
        this.mentorUsername = mentorUsername;
    }
}

