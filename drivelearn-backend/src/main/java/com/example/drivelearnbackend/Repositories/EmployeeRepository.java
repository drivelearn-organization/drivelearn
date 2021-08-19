package com.example.drivelearnbackend.Repositories;

import antlr.collections.List;
import com.example.drivelearnbackend.Repositories.Entity.Employee;
import com.example.drivelearnbackend.Repositories.Entity.Student;
import org.springframework.data.repository.CrudRepository;

import java.util.LinkedList;

public interface EmployeeRepository extends CrudRepository<Employee,Integer> {
   LinkedList<Employee> findByUsername(String username);
//   LinkedList<Employee> findById(int id);
   LinkedList<Employee> findByEmpid(int id);

   LinkedList<Employee> findAllByRoleAndIsActive(int id, int active);
   LinkedList<Employee> findByUsernameAndPassword(String username, String password);
   LinkedList<Employee> findAll();
}
