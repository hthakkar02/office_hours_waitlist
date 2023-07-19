package com.officehours.Office_Hours_Queue.service;
import java.util.List;

import com.officehours.Office_Hours_Queue.model.Office;

public interface OfficeService {
    public Office saveOffice(Office office);
    public List<Office> getAllOffices();
    public Office getOfficeByOHCode(String OHCode);
    public List<Office> getAllOfficesByUsername(String mentorUsername);
}
