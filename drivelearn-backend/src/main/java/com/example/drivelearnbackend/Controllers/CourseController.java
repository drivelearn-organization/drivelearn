package com.example.drivelearnbackend.Controllers;

import com.example.drivelearnbackend.Controllers.DTO.CourceDTO;
import com.example.drivelearnbackend.Sevices.CourceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/course")
public class CourseController {

    @Autowired
    private CourceService courceService;

    @PostMapping(value = "/addcource")
    public void addCource(@RequestBody CourceDTO dto){
        courceService.addCource(dto);
    }
}
