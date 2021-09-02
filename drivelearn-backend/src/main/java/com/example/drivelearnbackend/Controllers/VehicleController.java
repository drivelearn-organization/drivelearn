package com.example.drivelearnbackend.Controllers;

import com.example.drivelearnbackend.Controllers.DTO.VehicleDTO;
import com.example.drivelearnbackend.Sevices.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedList;

@RestController
@RequestMapping(value = "vehicle")
public class VehicleController {
    @Autowired
    private VehicleService vehicleService;

//    {
//        "regiNumner":"ABC-1234",
//            "ChacieNumber":"rkvd4234243",
//            "startingMilage":2000,
//            "status":1,
//            "branchName":"mathugama",
//            "vehicleType":"bike"
//    }
//    this is called when the function initially loading
    @PostMapping(value = "addvehicle")
    public void addVehicle(@RequestBody VehicleDTO dto){
        vehicleService.addVehicle(dto);
    }

//    this is called to load all vehicles
//    spec(admin-1,branchmanager-2)
//    if the admin branchid=0, if the branch manager branchid=certain branch id
    @GetMapping(value = "getvehicle/{spec}/{branchid}")
    public LinkedList<VehicleDTO> getAllVehicles(@PathVariable int spec,@PathVariable int branchid){
        return vehicleService.giveAllVehicles(spec,branchid);
    }
}
