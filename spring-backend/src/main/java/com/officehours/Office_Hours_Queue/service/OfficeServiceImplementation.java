package com.officehours.Office_Hours_Queue.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.officehours.Office_Hours_Queue.model.Office;
import com.officehours.Office_Hours_Queue.repository.OfficeRepository;

import java.util.List;

@Service
public class OfficeServiceImplementation implements OfficeService {

    @Autowired
    private OfficeRepository officeRepository;

    @Override
    public Office saveOffice(Office office) {
        return officeRepository.save(office);
    }

    @Override
    public List<Office> getAllOffices() {
        return officeRepository.findAll();
    }

    @Override
    public Office getOfficeByOHCode(String OHCode) {
        return officeRepository.findByOHCode(OHCode);
    }

    @Override
    public List<Office> getAllOfficesByUsername(String mentorUsername) {
        return officeRepository.findAllByMentorUsername(mentorUsername);
    }
}
