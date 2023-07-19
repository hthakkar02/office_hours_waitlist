package com.officehours.Office_Hours_Queue.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.officehours.Office_Hours_Queue.model.Student;
import com.officehours.Office_Hours_Queue.repository.StudentRepository;

@Service
public class StudentServiceImplementation implements StudentService {

    @Autowired
    private StudentRepository studentRepository;

    @Override
    public Student saveStudent(Student student){
        return studentRepository.save(student);
    }

    @Override
    public List<Student> getAllStudents(){
        return studentRepository.findAll();
    }

    @Override
    public List<Student> getAllByOHCode(String OHCode) {
        return studentRepository.findAllByOHCode(OHCode);
    }

    @Override
    public void removeStudentById(int id){
        studentRepository.deleteById(id);
    }
}
