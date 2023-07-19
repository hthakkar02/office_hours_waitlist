package com.officehours.Office_Hours_Queue.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.officehours.Office_Hours_Queue.model.Mentor;
import com.officehours.Office_Hours_Queue.repository.MentorRepository;

@Service
public class MentorServiceImplementation implements MentorService {

    @Autowired
    private MentorRepository mentorRepository;

    @Override
    public Mentor saveMentor(Mentor student) {
        return mentorRepository.save(student);
    }

    @Override
    public List<Mentor> getAllMentors() {
        return mentorRepository.findAll();
    }

    @Override
    public boolean authenticateMentor(String username, String password) {
        Mentor mentor = mentorRepository.findByUsername(username);

        if (mentor != null && password.equals(mentor.getPassword()))
            return true;
        else
            return false;
    }

    @Override
    public Mentor getMentor(String username) {
        return mentorRepository.findByUsername(username);
    }
}
