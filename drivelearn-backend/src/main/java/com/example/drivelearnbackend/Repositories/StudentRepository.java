package com.example.drivelearnbackend.Repositories;

import com.example.drivelearnbackend.Controllers.DTO.StudentDTO;
import com.example.drivelearnbackend.Repositories.Entity.Student;
import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.LinkedList;

public interface StudentRepository extends CrudRepository<Student,Integer> {
    LinkedList<Student> findByUsername(String username);
    LinkedList<Student> findByUsernameAndPassword(String username, String password);
    LinkedList<Student> findByPassword(String password);

    @Query("SELECT s FROM Student s WHERE s.name = :name or s.stuId = :name")
    LinkedList<Student> searchByUsernam(@Param("name")String name);
    LinkedList<Student> findAll();
    LinkedList<Student> findByStuId(int id);
}
