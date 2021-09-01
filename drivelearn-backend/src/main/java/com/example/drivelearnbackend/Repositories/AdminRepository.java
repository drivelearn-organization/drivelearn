package com.example.drivelearnbackend.Repositories;

import com.example.drivelearnbackend.Repositories.Entity.Admin;
import org.springframework.data.repository.CrudRepository;

import java.util.LinkedList;

public interface AdminRepository extends CrudRepository<Admin,Integer> {
    LinkedList<Admin> findByUsername(String username);
}
