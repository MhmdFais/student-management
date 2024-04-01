package com.sms.BackEnd.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;
import java.util.HashSet;
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
    private String phoneNo;
    @Column
    private String address;
    @Column
    private String nicNo;
    @Column
    private String gender;
    @Column
    private String dob;
    @Column
    private String age;
    @Column
    private String degree;
    @Column
    private String intake;
    @Column
    private String semester;

    @Column
    private String courseOne;

    @Column
    private String courseTwo;

    @Column
    private String courseThree;

    @OneToMany(mappedBy = "student", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Enrollment> enrollments = new HashSet<>();

    public Set<Enrollment> getEnrollments() {
        return enrollments;
    }

    public void setEnrollments(Set<Enrollment> enrollments) {
        this.enrollments = enrollments;
    }

    public void addEnrollment(Enrollment enrollment) {
        enrollments.add(enrollment);
        enrollment.setStudent(this);
    }

    public void removeEnrollment(Enrollment enrollment) {
        enrollments.remove(enrollment);
        enrollment.setStudent(null);
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


    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public Long getRegNo() {
        return regNo;
    }

    public void setRegNo(Long regNo) {
        this.regNo = regNo;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getPhoneNo() {
        return phoneNo;
    }

    public void setPhoneNo(String phoneNo) {
        this.phoneNo = phoneNo;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getNicNo() {
        return nicNo;
    }

    public void setNicNo(String nicNo) {
        this.nicNo = nicNo;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public String getDegree() {
        return degree;
    }

    public void setDegree(String degree) {
        this.degree = degree;
    }

    public String getIntake() {
        return intake;
    }

    public void setIntake(String intake) {
        this.intake = intake;
    }

    public String getSemester() {
        return semester;
    }

    public void setSemester(String year) {
        this.semester = year;
    }


}