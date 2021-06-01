package com.example.drivelearnbackend.Repositories;

import com.example.drivelearnbackend.Repositories.Entity.Student;
import org.springframework.data.repository.CrudRepository;

public interface StudentRepository extends CrudRepository<Student,Integer> {
}
