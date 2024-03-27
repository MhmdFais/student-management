package com.sms.BackEnd.model;

import jakarta.persistence.*;

import java.util.Set;

@Entity
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long regNo;
    @Column
    private String firstName;
    @Column
    private String lastName;
    @Column
    private int phoneNo;
    @Column
    private String address;
    @Column(unique = true)
    private int nicNo;
    @Column
    private String gender;
    @Column
    private String dob;
    @Column
    private String degree;
    @Column
    private int intake;
    @Column
    private int year;

    @ManyToMany
    @JoinTable(
        name = "student_course",
        joinColumns = @JoinColumn(name = "regNo"),
        inverseJoinColumns = @JoinColumn(name = "courseId")
    )
    private Set<Course> courses;

    @OneToMany(mappedBy = "student")
    private Set<Enrollment> enrollments;

}
