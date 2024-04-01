package com.sms.BackEnd.controller;

import com.sms.BackEnd.exception.ExceptionList;
import com.sms.BackEnd.model.Student;
import com.sms.BackEnd.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class StudentController {
    @Autowired
    private StudentRepository studentRepository;

    @PostMapping("/student/add")
    Student newStudent(@RequestBody Student newStudent){
        return studentRepository.save(newStudent);
    }

    @GetMapping("/student/get")
    List<Student> getAllStudents(){
        try{
            return studentRepository.findAll();
        }
        catch (Exception e){
            throw new RuntimeException(ExceptionList.RSP_STUDENT_NOT_FOUND);
        }
    }

    @PutMapping("/student/update/{regNo}")
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
            student.setAge(studentDetails.getAge());
            student.setIntake(studentDetails.getIntake());
            student.setDegree(studentDetails.getDegree());
            student.setSemester(studentDetails.getSemester());
            student.setCourseOne(studentDetails.getCourseOne());
            student.setCourseTwo(studentDetails.getCourseTwo());
            student.setCourseThree(studentDetails.getCourseThree());

            Student updatedStudent = studentRepository.save(student);
            return ResponseEntity.ok(updatedStudent);
        }
        catch (Exception e){
            throw new RuntimeException(ExceptionList.RSP_INTERNAL_ERROR);
        }
    }

    @DeleteMapping("/student/delete/{regNo}")
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