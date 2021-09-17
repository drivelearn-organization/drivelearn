package com.example.drivelearnbackend.Repositories;

import com.example.drivelearnbackend.Repositories.Entity.Branch;
import com.example.drivelearnbackend.Repositories.Entity.Vehicle;
import org.springframework.data.repository.CrudRepository;

import java.util.LinkedList;

public interface VehicleRepository extends CrudRepository<Vehicle,Integer> {
    LinkedList<Vehicle> findVehicleByBranch(Branch branch);
    LinkedList<Vehicle> findAll();
    LinkedList<Vehicle> findAllByBranch(Branch branch);
}
