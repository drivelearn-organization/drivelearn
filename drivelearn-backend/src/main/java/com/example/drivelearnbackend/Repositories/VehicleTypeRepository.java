package com.example.drivelearnbackend.Repositories;

import com.example.drivelearnbackend.Repositories.Entity.VechileType;
import org.springframework.data.repository.CrudRepository;

import java.util.LinkedList;

public interface VehicleTypeRepository extends CrudRepository<VechileType,Integer> {
    LinkedList<VechileType> findByTypeName(String typeName);
}
