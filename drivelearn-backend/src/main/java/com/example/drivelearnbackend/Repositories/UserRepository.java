package com.example.drivelearnbackend.Repositories;

import com.example.drivelearnbackend.Repositories.Entity.User;
import org.springframework.data.repository.CrudRepository;

import java.util.LinkedList;

public interface UserRepository extends CrudRepository<User,Integer> {
    LinkedList<User> findByUsernameAndAndUserType(String username, int userType);
    LinkedList<User> findByExternalIdAndUserType(int externalId, int userType);
    LinkedList<User> findUserByExternalId(int externalId);
}
