package com.officehours.Office_Hours_Queue.repository;

import com.officehours.Office_Hours_Queue.model.Office;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OfficeRepository extends JpaRepository<Office, Integer> {
    Office findByOHCode(String OHCode);
    List<Office> findAllByMentorUsername(String mentorUsername);
}
