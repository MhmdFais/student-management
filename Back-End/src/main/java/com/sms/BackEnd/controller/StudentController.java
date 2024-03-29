package com.sms.BackEnd.controller;

import com.sms.BackEnd.model.Student;
import com.sms.BackEnd.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class StudentController {
    @Autowired
    private StudentRepository studentRepository;

    @PostMapping("/student")
    Student newStudent(@RequestBody Student newStudent){
        return studentRepository.save(newStudent);
    }

    @GetMapping("/students")
    List<Student> getAllStudents(){
        return studentRepository.findAll();
    }

    @PutMapping("/student/{regNo}")
    public ResponseEntity<Student> updateStudent(
          @PathVariable(value = "regNo") Long regNo,
            @RequestBody Student studentDetails
    ){

        Student student = studentRepository.findById(regNo)
                .orElseThrow();

        student.setFirstName(studentDetails.getFirstName());
        student.setLastName(studentDetails.getLastName());
        student.setPhoneNo(studentDetails.getPhoneNo());
        student.setAddress(studentDetails.getAddress());
        student.setNicNo(studentDetails.getNicNo());
        student.setGender(studentDetails.getGender());
        student.setDob(studentDetails.getDob());
        student.setIntake(studentDetails.getIntake());
        student.setDegree(studentDetails.getDegree());
        student.setYear(studentDetails.getYear());
        student.setCourses(studentDetails.getCourses());

        Student updatedStudent = studentRepository.save(student);
        return ResponseEntity.ok(updatedStudent);
    }

    @DeleteMapping("/student/{regNo}")
    public ResponseEntity<Void> deleteStudent(@PathVariable(value = "regNo") Long regNo) {
        Student student = studentRepository.findById(regNo)
                .orElseThrow();
        studentRepository.delete(student);
        return ResponseEntity.ok().build();
    }
}
