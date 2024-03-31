package com.sms.BackEnd.repository;

import com.sms.BackEnd.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {
}
