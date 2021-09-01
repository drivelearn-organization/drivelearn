package com.example.drivelearnbackend.Controllers;

import com.example.drivelearnbackend.Controllers.DTO.StaffDTO;
import com.example.drivelearnbackend.Sevices.StaffService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "staffcontroller")
public class StaffController {
    @Autowired
    private StaffService staffService;

//    spec(admin-1,branch manager-2),username
    @GetMapping(value = "getemploy/{spesi}/{username}")
    public StaffDTO giveEmploy(@PathVariable int spesi, @PathVariable String username){
        return staffService.getEmploy(spesi,username);
    }

//    username,spec(admin-1,branch manager-2),password,
    @PutMapping(value = "updatepassword")
    public void updatePassword(@RequestBody StaffDTO dto){
        staffService.updatePassword(dto);
    }

//    spec(admin-1,branch manager-2)
//    admin-username,name one or both
//    branch manager-username,name,nic,mobile number all or few
    @PutMapping(value = "updatedetails")
    public void updateDetails(@RequestBody StaffDTO dto){
        staffService.updateDetails(dto);
    }

//    spec(admin-1,branch manager-2),username
    @GetMapping(value = "isaval/{spec}/{username}")
    public boolean isUsernameAvailable(@PathVariable int spec,@PathVariable String username){
        return staffService.isUsernameAvailable(spec,username);
    }
}
