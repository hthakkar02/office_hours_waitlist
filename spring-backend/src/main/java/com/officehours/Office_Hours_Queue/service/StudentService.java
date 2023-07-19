package com.officehours.Office_Hours_Queue.service;

import java.util.List;

import com.officehours.Office_Hours_Queue.model.Student;

public interface StudentService {
    
    public Student saveStudent(Student student);
    public List<Student> getAllStudents();
    public List<Student> getAllByOHCode(String OHCode);
    public void removeStudentById(int id);
}
