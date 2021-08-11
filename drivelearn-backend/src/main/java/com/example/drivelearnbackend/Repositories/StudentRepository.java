package com.example.drivelearnbackend.Repositories;

import com.example.drivelearnbackend.Repositories.Entity.Student;
import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;
import org.springframework.data.repository.CrudRepository;

import java.util.LinkedList;

public interface StudentRepository extends CrudRepository<Student,Integer> {
    LinkedList<Student> findByUsername(String username);
    LinkedList<Student> findByUsernameAndPassword(String username, String password);
//    @LazyCollection(LazyCollectionOption.FALSE)
    LinkedList<Student> findAll();
    LinkedList<Student> findByStuId(int id);
}
