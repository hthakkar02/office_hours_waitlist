package com.officehours.Office_Hours_Queue.repository;

import com.officehours.Office_Hours_Queue.model.Student;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<Student, Integer> {
    List<Student> findAllByOHCode(String OHCode);
}
