package com.example.drivelearnbackend.Repositories;

import com.example.drivelearnbackend.Repositories.Entity.Branch;
import com.example.drivelearnbackend.Repositories.Entity.Session;
import org.springframework.data.repository.CrudRepository;

import java.util.LinkedList;

public interface SessionRepository extends CrudRepository<Session,Integer> {
    LinkedList<Session> findAllByBranch(Branch branch);
}
