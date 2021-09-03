package com.example.drivelearnbackend.Controllers;

import com.example.drivelearnbackend.Controllers.DTO.EmployeeDTO;
import com.example.drivelearnbackend.Controllers.DTO.StaffSessionDTO;
import com.example.drivelearnbackend.Controllers.DTO.VehicleDTO;
import com.example.drivelearnbackend.Sevices.StaffSessionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedList;

@RestController
@RequestMapping(value = "staffsessioncontroller")
public class StaffSessionController {
    @Autowired
    private StaffSessionService staffSessionService;

//    this is used to get allSession regarding the branch
    @GetMapping(value = "getallsession/{branchid}")
    public LinkedList<StaffSessionDTO> getAllSession(@PathVariable int branchid){
        return staffSessionService.getAllSession(branchid);
    }
//    this is used to get the list of managers in certain branch
    @GetMapping(value = "getallmanagers/{branchid}")
    public LinkedList<EmployeeDTO> getAllTrainers(@PathVariable int branchid){
        return staffSessionService.getAllTrainers(branchid);
    }
//    this is used to get the all vehicles regarding to the branch
    @GetMapping(value = "getallvehicles/{branchid}")
    public LinkedList<VehicleDTO> getAllVehicles(@PathVariable int branchid){
        return staffSessionService.getAllVehicles(branchid);
    }
    @PutMapping(value = "updatesession")
    public void updateSession(@RequestBody StaffSessionDTO dto){
        staffSessionService.updateSession(dto);
    }
}
