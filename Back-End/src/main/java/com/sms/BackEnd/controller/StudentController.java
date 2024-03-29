package com.sms.BackEnd.controller;

import com.sms.BackEnd.exception.ExceptionList;
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
       try{
           Student alreadyExists = studentRepository.findBynicNo(newStudent.getNicNo());
           if(alreadyExists != null){
               throw new RuntimeException(ExceptionList.RSP_STUDENT_ALREADY_EXISTS);
           }
           return studentRepository.save(newStudent);
       }
       catch (Exception e){
           throw new RuntimeException(ExceptionList.RSP_INTERNAL_ERROR);
       }
    }

    @GetMapping("/students")
    List<Student> getAllStudents(){
        try{
            return studentRepository.findAll();
        }
        catch (Exception e){
            throw new RuntimeException(ExceptionList.RSP_STUDENT_NOT_FOUND);
        }
    }

    @PutMapping("/student/{regNo}")
    public ResponseEntity<Student> updateStudent(
          @PathVariable(value = "regNo") Long regNo,
            @RequestBody Student studentDetails
    ){
        try{
            Student student = studentRepository.findById(regNo)
                    .orElseThrow(() -> new RuntimeException(ExceptionList.RSP_STUDENT_NOT_FOUND));

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
        catch (Exception e){
            throw new RuntimeException(ExceptionList.RSP_INTERNAL_ERROR);
        }
    }

    @DeleteMapping("/student/{regNo}")
    public ResponseEntity<Void> deleteStudent(@PathVariable(value = "regNo") Long regNo) {
        try{
            Student student = studentRepository.findById(regNo)
                    .orElseThrow(() -> new RuntimeException(ExceptionList.RSP_STUDENT_NOT_FOUND));

            studentRepository.delete(student);
            return ResponseEntity.noContent().build();
        }
        catch (Exception e){
            throw new RuntimeException(ExceptionList.RSP_INTERNAL_ERROR);
        }
    }
}
