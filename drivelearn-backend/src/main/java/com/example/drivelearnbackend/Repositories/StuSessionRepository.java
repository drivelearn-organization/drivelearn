package com.example.drivelearnbackend.Repositories;

import com.example.drivelearnbackend.Repositories.Entity.StuSession;
import com.example.drivelearnbackend.Repositories.Entity.Student;
import org.springframework.data.repository.CrudRepository;

import java.util.LinkedList;

public interface StuSessionRepository extends CrudRepository<StuSession,Integer> {
    LinkedList<StuSession> findAllByStudentAndStatus(Student student,int status);
}
