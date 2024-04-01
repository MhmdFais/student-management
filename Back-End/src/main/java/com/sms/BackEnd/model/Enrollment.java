package com.sms.BackEnd.model;

import jakarta.persistence.*;

@Entity
public class Enrollment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "reg_no", referencedColumnName = "regNo")
    private Student student;

    @Column
    private String semester;
    @Column
    private String intake;

    @Column
    private String courseOne;

    @Column
    private String courseTwo;

    @Column
    private String courseThree;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }

    public String getSemester() {
        return semester;
    }

    public void setSemester(String semester) {
        this.semester = semester;
    }

    public String getIntake() {
        return intake;
    }

    public void setIntake(String intake) {
        this.intake = intake;
    }

    public String getCourseOne() {
        return courseOne;
    }

    public void setCourseOne(String courseOne) {
        this.courseOne = courseOne;
    }

    public String getCourseTwo() {
        return courseTwo;
    }

    public void setCourseTwo(String courseTwo) {
        this.courseTwo = courseTwo;
    }

    public String getCourseThree() {
        return courseThree;
    }

    public void setCourseThree(String courseThree) {
        this.courseThree = courseThree;
    }
}
