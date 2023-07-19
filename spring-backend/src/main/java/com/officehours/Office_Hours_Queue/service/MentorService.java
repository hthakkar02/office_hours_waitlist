package com.officehours.Office_Hours_Queue.service;

import java.util.List;

import com.officehours.Office_Hours_Queue.model.Mentor;

public interface MentorService {

    public Mentor saveMentor(Mentor Mentor);

    public List<Mentor> getAllMentors();

    public boolean authenticateMentor(String username, String password);

    public Mentor getMentor(String username);
}
