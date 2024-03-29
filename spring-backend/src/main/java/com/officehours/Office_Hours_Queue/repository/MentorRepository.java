package com.officehours.Office_Hours_Queue.repository;

import com.officehours.Office_Hours_Queue.model.Mentor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MentorRepository extends JpaRepository<Mentor, Integer> {
    Mentor findByUsername(String username);
}
