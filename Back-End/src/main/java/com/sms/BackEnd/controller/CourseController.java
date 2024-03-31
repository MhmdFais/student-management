package com.sms.BackEnd.controller;

import com.sms.BackEnd.exception.ExceptionList;
import com.sms.BackEnd.model.Course;
import com.sms.BackEnd.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CourseController {

    @Autowired
    private CourseRepository courseRepository;

    @PostMapping("/course")
    Course newCourse(@RequestBody Course newCourse){
        return courseRepository.save(newCourse);
    }

    @GetMapping("/courses")
    List<Course> getAllCourses(){
        try{
            return courseRepository.findAll();
        }
        catch (Exception e){
            throw new RuntimeException(ExceptionList.RSP_NOT_FOUND);
        }
    }

    @PutMapping("/course/{courseId}")
    public ResponseEntity<Course> updateCourse(
          @PathVariable(value = "courseId") Long courseId,
            @RequestBody Course courseDetails
    ){

        Course course = courseRepository.findById(courseId)
                .orElseThrow();

        course.setCourseName(courseDetails.getCourseName());
        course.setEnrollments(courseDetails.getEnrollments());

        Course updatedCourse = courseRepository.save(course);
        return ResponseEntity.ok(updatedCourse);
    }

    @DeleteMapping("/course/{courseId}")
    public ResponseEntity<Void> deleteCourse(@PathVariable(value = "courseId") Long courseId) {
        Course course = courseRepository.findById(courseId)
                .orElseThrow();
        courseRepository.delete(course);
        return ResponseEntity.ok().build();
    }

}
