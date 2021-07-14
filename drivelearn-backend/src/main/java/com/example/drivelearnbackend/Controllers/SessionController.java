package com.example.drivelearnbackend.Controllers;

import com.example.drivelearnbackend.Controllers.DTO.SessionDTO;
import com.example.drivelearnbackend.Sevices.SessionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/session")
public class SessionController {

    @Autowired
    private SessionService sessionService;

    @PostMapping(value = "/checkDate")
    public void checkDate(@RequestBody SessionDTO dto){
        System.out.println(dto.getDate());
    }

    @PostMapping(value = "/addSession")
    public void addSession(@RequestBody SessionDTO dto){
        sessionService.addSession(dto);
    }


}
