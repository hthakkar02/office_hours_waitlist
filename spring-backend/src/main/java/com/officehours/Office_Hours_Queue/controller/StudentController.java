package com.officehours.Office_Hours_Queue.controller;

import com.officehours.Office_Hours_Queue.model.Student;
import com.officehours.Office_Hours_Queue.service.StudentService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/student")
@CrossOrigin
public class StudentController {
    @Autowired
    private StudentService studentService;

    /**
     * Add a student to the database
     * 
     * @param student Student Entity to add
     * @return String that student was added
     */
    @PostMapping("/add")
    public String add(@RequestBody Student student) {
        studentService.saveStudent(student);
        return "New student is added";
    }
    /**
     * Get all students in database
     * 
     * @return A list of all students in the database
     */
    @GetMapping("/getAll")
    public List<Student> getAllStudents() {
        return studentService.getAllStudents();
    }
    /**
     * Get all students in a specific Office Hours
     * 
     * @param OHCode Office Hours Code we want to find students for
     * @return List of students in the office hours
     */
    @GetMapping("/getAllByOHCode")
    public ResponseEntity<List<Student>> getAllByOHCode(@RequestParam("OHCode") String OHCode) {
        List<Student> students = studentService.getAllByOHCode(OHCode);
        return new ResponseEntity<>(students, HttpStatus.OK);
    }
    /**
     * Find queue Spot of a student in a specific Office Hours.
     * 
     * @param OHCode Office Hours that Student is waiting for
     * @param name Student's exact name
     * @return Index of spot + 1 or -1 if student cannot be found
     */
    @GetMapping("/queueSpot")
    public ResponseEntity<Integer> getQueueSpot(@RequestParam("OHCode") String OHCode, @RequestParam("Name") String name) {
        List<Student> students = studentService.getAllByOHCode(OHCode);
        for(int i = 0; i < students.size(); i++){
            if(students.get(i).getName().equals(name)){
                return new ResponseEntity<>(i, HttpStatus.OK);
            }
        }
        return new ResponseEntity<>(-1, HttpStatus.NOT_FOUND);
    }

     @PostMapping("/remove")
     public String remove(@RequestParam("id") int id) {
         studentService.removeStudentById(id);
         return "Student removed";
     }
    
}
