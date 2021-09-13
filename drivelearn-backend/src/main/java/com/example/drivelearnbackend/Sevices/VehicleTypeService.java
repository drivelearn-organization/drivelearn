package com.example.drivelearnbackend.Sevices;

import com.example.drivelearnbackend.Controllers.DTO.EmployeeDTO;
import com.example.drivelearnbackend.Controllers.DTO.EmployeeTypeDTO;
import com.example.drivelearnbackend.Controllers.DTO.VehicleDTO;
import com.example.drivelearnbackend.Controllers.DTO.VehicleTypeDTO;
import com.example.drivelearnbackend.Repositories.EmployeeRepository;
import com.example.drivelearnbackend.Repositories.Entity.Employee;
import com.example.drivelearnbackend.Repositories.Entity.VechileType;
import com.example.drivelearnbackend.Repositories.Entity.Vehicle;
import com.example.drivelearnbackend.Repositories.VehicleTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.LinkedList;
import java.util.NoSuchElementException;

@Service
public class VehicleTypeService {
    @Autowired
    private VehicleTypeRepository vehicletyperepo;
    @Autowired
    private EmployeeRepository employeerepo;

    public LinkedList<VehicleTypeDTO> getvehiclelist(){
        LinkedList<VehicleTypeDTO> list = new LinkedList<>();
        for(VechileType vehicletype : vehicletyperepo.findAll()){
            list.add(new VehicleTypeDTO(vehicletype.getTypeId(),vehicletype.getTypeName()));
        }
        return list;

    }

    public LinkedList<EmployeeTypeDTO> giveAllInstructors(int branchid){
        LinkedList<EmployeeTypeDTO> list=new LinkedList<>();
        for (Employee employee:employeerepo.findAll()){
            if(employee.getRole()==2) {
                list.add(new EmployeeTypeDTO(employee.getEmpid(), employee.getFullName(),employee.getUsername()));
            }
        }
        return list;
    }


}
