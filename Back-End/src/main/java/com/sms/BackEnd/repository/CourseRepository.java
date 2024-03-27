package com.sms.BackEnd.repository;

import com.sms.BackEnd.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepository extends JpaRepository<Course, Long>{
}
