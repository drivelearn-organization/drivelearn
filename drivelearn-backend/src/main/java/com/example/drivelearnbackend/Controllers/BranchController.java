package com.example.drivelearnbackend.Controllers;

import com.example.drivelearnbackend.Controllers.DTO.BranchDTO;
import com.example.drivelearnbackend.Repositories.Entity.Branch;
import com.example.drivelearnbackend.Sevices.BranchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/branch")
public class BranchController {
    @Autowired
    private BranchService branchService;

    @PostMapping(value = "/add")
    public void addbranch(@RequestBody BranchDTO branchDTO){
        System.out.println(branchDTO.getName() );
        Branch branch=branchService.addBranch(branchDTO.getName());
        System.out.println(branch.getBranchid()+"/"+branch.getBranchName());

    }
}
