package com.sms.BackEnd.controller;

import com.sms.BackEnd.model.Enrollment;
import com.sms.BackEnd.repository.EnrollmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class EnrollmentController {

    @Autowired
    private EnrollmentRepository enrollmentRepository;

    @PostMapping("/enrollment")
    Enrollment newEnrollment(@RequestBody Enrollment newEnrollment){
        return enrollmentRepository.save(newEnrollment);
    }

    @GetMapping("/enrollments")
    List<Enrollment> getAllEnrollments(){
        return enrollmentRepository.findAll();
    }


}
