package com.example.drivelearnbackend.Repositories;

import com.example.drivelearnbackend.Repositories.Entity.Employee;
import org.springframework.data.repository.CrudRepository;

public interface EmployeeRepository extends CrudRepository<Employee,Integer> {
}
