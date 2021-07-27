package com.example.drivelearnbackend.Repositories;

import com.example.drivelearnbackend.Repositories.Entity.MyAdmin;
import org.springframework.data.repository.CrudRepository;

public interface MyAdminRepository extends CrudRepository<MyAdmin,Integer> {
}
