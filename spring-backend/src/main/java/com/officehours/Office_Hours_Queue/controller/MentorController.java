package com.officehours.Office_Hours_Queue.controller;

import java.util.List;
import java.util.Map;

import com.officehours.Office_Hours_Queue.model.Mentor;
import com.officehours.Office_Hours_Queue.service.MentorService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/mentor")
@CrossOrigin
public class MentorController {

    @Autowired
    private MentorService mentorService;

    /**
     * Add a mentor to the database 
     * @param mentor Mentor Entity to add to database
     * @return String that adding the mentor was successful
     */
    @PostMapping("/add")
    public String add(@RequestBody Mentor mentor) {
        mentorService.saveMentor(mentor);
        return "New mentor is added";
    }
    /**
     * Get all mentors in the database
     * @return List of mentors in the database
     */
    @GetMapping("/getAll")
    public List<Mentor> getAllMentors() {
        return mentorService.getAllMentors();
    }
    /**
     * Authentic a mentor for sign in
     * @param credentials Username and password of mentor that is signing in
     * @return A valid response if authentication was successful, otherwise fail
     */
    @PostMapping("/authenticate")
    public ResponseEntity<String> authenticate(@RequestBody Map<String, String> credentials) {
        String username = credentials.get("username");
        String password = credentials.get("password");

        if (mentorService.authenticateMentor(username, password))
            return ResponseEntity.ok("Authentication successful");
        else
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Authentication failed");
    }

    /**
     * Find Mentor by Username
     * 
     * @param username Username of mentor we want to find. Needs to be in JSON
     *                 format
     * @return Mentor if found or null otherwise
     */
    @GetMapping("/getMentor")
    public Mentor getMentor(@RequestParam("username") String username) {
        return mentorService.getMentor(username);
    }
}
