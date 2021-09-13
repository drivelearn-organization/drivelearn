package com.example.drivelearnbackend.Controllers;

import com.example.drivelearnbackend.Controllers.DTO.EmployeeTypeDTO;
import com.example.drivelearnbackend.Controllers.DTO.VehicleDTO;
import com.example.drivelearnbackend.Controllers.DTO.VehicleTypeDTO;
import com.example.drivelearnbackend.Sevices.VehicleTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedList;

@RestController
@CrossOrigin
@RequestMapping(value = "vehicletype")
public class VehicleTypeController {

@Autowired
    private VehicleTypeService vehicletype;

@GetMapping("showtype")
    public LinkedList<VehicleTypeDTO> gettypes(){
        return vehicletype.getvehiclelist();
    }


    @GetMapping(value = "getemployeetype/{branchid}")
    public LinkedList<EmployeeTypeDTO> getAllVehicles(@PathVariable int branchid){
        return vehicletype.giveAllInstructors(branchid);
    }
}
