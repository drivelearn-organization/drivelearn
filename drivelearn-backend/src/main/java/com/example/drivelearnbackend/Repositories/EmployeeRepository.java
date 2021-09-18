package com.example.drivelearnbackend.Repositories;

import com.example.drivelearnbackend.Repositories.Entity.Branch;
import com.example.drivelearnbackend.Repositories.Entity.Employee;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.LinkedList;

public interface EmployeeRepository extends CrudRepository<Employee,Integer> {
   LinkedList<Employee> findByUsername(String username);
   LinkedList<Employee> findByPassword(String password);
//   LinkedList<Employee> findById(int id);
   LinkedList<Employee> findByEmpid(int id);

   LinkedList<Employee> findAllByRoleAndIsActive(int id, int active);
   LinkedList<Employee> findAllByRoleAndIsActiveAndBranch(int id, int active, Branch branch);
   LinkedList<Employee> findAllByIsActive(int active);
   LinkedList<Employee> findByUsernameAndPassword(String username, String password);
   LinkedList<Employee> findAll();
   Employee findEmployeeByBranch(Branch branch);



   @Query("SELECT e FROM Employee e WHERE (e.fullName LIKE %:name% or e.empid = :name) AND e.isActive = 2 AND e.role = 1")
   LinkedList<Employee> searchByUsernam(@Param("name")String name);

   @Query("SELECT e FROM Employee e WHERE (e.fullName LIKE %:name% or e.empid = :name) AND e.isActive = 2 AND e.role = 2")
   LinkedList<Employee> searchByTrainerUsernam(@Param("name")String name);

   LinkedList<Employee> findAllByBranchAndRole(Branch branch,int role);
   LinkedList<Employee> findByUsernameAndRole(String username,int role);
}
