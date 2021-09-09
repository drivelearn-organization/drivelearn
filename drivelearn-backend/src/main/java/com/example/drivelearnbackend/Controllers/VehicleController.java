package com.example.drivelearnbackend.Controllers;

import com.example.drivelearnbackend.Controllers.DTO.StudentDTO;
import com.example.drivelearnbackend.Controllers.DTO.UpdateVehicleDTO;
import com.example.drivelearnbackend.Controllers.DTO.VehicleDTO;
import com.example.drivelearnbackend.Sevices.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedList;

@RestController
@CrossOrigin("*")
@RequestMapping(value = "vehicle")
public class VehicleController {
    @Autowired
    private VehicleService vehicleService;

//    {
//        "regiNumner":"ABC-1578",
//            "chacieNumber":"svdffsd4243",
//            "startingMilage":20564,
//            "status":1,
//            "branchName":"kaluthatara",
//            "vehicleType":"bike",
//            "payedDate":"2021-01-01",
//            "expireDate":"2021-10-01",
//            "licencePayedDate":"2021-01-01",
//            "licenceExpireDate":"2021-10-01"
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

//    this is used to update form
//{
//    "vechicleId":522,
//        "regiNumner":"ABC-1818",
//        "chacieNumber":"abcsvdffsd4243",
//        "startingMilage":2,
//        "status":1,
//        "branchName":"mathugama",
//        "vehicleType":"bike",
//        "payedDate":"2021-01-01",
//        "expireDate":"2021-10-01",
//        "licencePayedDate":"2021-01-01",
//        "licenceExpireDate":"2021-10-01"
//}
//    vehicleid is must
    @PutMapping(value = "updatevehicle")
    public void updateVehicle(@RequestBody VehicleDTO dto){
        vehicleService.updateVehicle(dto);
    }

//    this is for delete vehicle vehicleid is must there
    @DeleteMapping(value = "deletevehicle/{vehicleid}")
    public void deleteVehicle(@PathVariable int vehicleid){
        vehicleService.deleteVehicle(vehicleid);
    }

    @GetMapping(value = "/getvehicles/{vehiId}")
    public UpdateVehicleDTO getStudent(@PathVariable("vehiId") int id){return vehicleService.getVehicle(id);}
}
