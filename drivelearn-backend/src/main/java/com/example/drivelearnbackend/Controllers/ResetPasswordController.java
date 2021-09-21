package com.example.drivelearnbackend.Controllers;

import com.example.drivelearnbackend.Controllers.DTO.EmployeeDTO;
import com.example.drivelearnbackend.Sevices.RestPasswordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping(value = "/resetpassword")
public class ResetPasswordController {

    @Autowired
    private RestPasswordService restpassword;

    @GetMapping(value = "/settingProfile/{username}")
    public EmployeeDTO getSettingProfile(@PathVariable("username") String username){return restpassword.getSettingProfile(username);}

    @PostMapping(value = "/resetEmployee")
    public String updateEmployee(@RequestBody EmployeeDTO dto){return restpassword.settingMyProfilePassword(dto);}

}
