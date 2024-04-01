package com.sms.BackEnd.controller;

import com.sms.BackEnd.model.Enrollment;
import com.sms.BackEnd.repository.EnrollmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class EnrollmentController {

    @Autowired
    private EnrollmentRepository enrollmentRepository;

    @PostMapping("/enrollment/add")
    public Enrollment newEnrollment(@RequestBody Enrollment newEnrollment) {
        return enrollmentRepository.save(newEnrollment);
    }

    @GetMapping("/enrollment/get")
    List<Enrollment> getAllEnrollments() {
        return enrollmentRepository.findAll();
    }

}
