package com.example.drivelearnbackend.Repositories;

import antlr.collections.List;
import com.example.drivelearnbackend.Repositories.Entity.Branch;
import org.springframework.data.repository.CrudRepository;

import java.util.LinkedList;

public interface BranchRepository extends CrudRepository<Branch,Integer> {
   Branch findBranchByBranchName(String branchName);
   Branch findBranchByBranchid(int id);
}
