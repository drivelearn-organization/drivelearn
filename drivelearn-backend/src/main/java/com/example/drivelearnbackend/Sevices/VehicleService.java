package com.example.drivelearnbackend.Sevices;

import com.example.drivelearnbackend.Controllers.DTO.VehicleDTO;
import com.example.drivelearnbackend.Repositories.BranchRepository;
import com.example.drivelearnbackend.Repositories.Entity.Branch;
import com.example.drivelearnbackend.Repositories.Entity.VechileType;
import com.example.drivelearnbackend.Repositories.Entity.Vehicle;
import com.example.drivelearnbackend.Repositories.VehicleTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VehicleService {
    @Autowired
    private BranchRepository branchRepository;

    @Autowired
    private VehicleTypeRepository vehicleTypeRepository;

    public void addVehicle(VehicleDTO dto){
        Branch branch=branchRepository.findBranchByBranchName(dto.getBranchName());
        VechileType type1;
        for (VechileType type : vehicleTypeRepository.findByTypeName(dto.getVehicleType())) {
            type1=type;
        }


    }
}
