package com.sms.BackEnd.model;

import jakarta.persistence.*;

@Entity
public class Enrollment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private int year;
    private int intake;
    @ManyToOne
    private Student student;
    @ManyToOne
    private Course course;
}
