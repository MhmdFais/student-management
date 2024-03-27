package com.sms.BackEnd.model;

import jakarta.persistence.*;

import java.util.Set;

@Entity
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long courseId;
    private String courseName;
    @ManyToMany(mappedBy = "courses")
    private Set<Student> students;
    @OneToMany(mappedBy = "course")
    private Set<Enrollment> enrollments;

}
