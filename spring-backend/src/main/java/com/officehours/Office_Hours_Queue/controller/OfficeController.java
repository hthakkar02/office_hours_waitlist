package com.officehours.Office_Hours_Queue.controller;

import java.util.List;

import com.officehours.Office_Hours_Queue.model.Office;

import com.officehours.Office_Hours_Queue.service.OfficeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/office")
@CrossOrigin
public class OfficeController {
    @Autowired
    private OfficeService officeService;

    // Create a new Office
    @PostMapping("/add")
    public ResponseEntity<Office> createOffice(@RequestBody Office office) {
        Office savedOffice = officeService.saveOffice(office);
        return new ResponseEntity<>(savedOffice, HttpStatus.CREATED);
    }

    // Get all Offices
    @GetMapping("/getAll")
    public ResponseEntity<List<Office>> getAllOffices() {
        List<Office> offices = officeService.getAllOffices();
        return new ResponseEntity<>(offices, HttpStatus.OK);
    }

    // Get an Office by OHCode
    @GetMapping("/getOfficeByCode")
    public ResponseEntity<Office> getOfficeByOHCode(@RequestParam("OHCode") String OHCode) {
        Office office = officeService.getOfficeByOHCode(OHCode);
        if (office == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(office, HttpStatus.OK);
    }

    // Get all Offices by Mentor's username
    @GetMapping("/getAllByUsername")
    public ResponseEntity<List<Office>> getAllOfficesByUsername(@RequestParam("username") String mentorUsername) {
        List<Office> offices = officeService.getAllOfficesByUsername(mentorUsername);
        return new ResponseEntity<>(offices, HttpStatus.OK);
    }
}


