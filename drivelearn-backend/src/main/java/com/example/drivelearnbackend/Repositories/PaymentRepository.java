package com.example.drivelearnbackend.Repositories;


import com.example.drivelearnbackend.Repositories.Entity.Payment;
import org.springframework.data.repository.CrudRepository;

public interface PaymentRepository extends CrudRepository<Payment,Integer> {
}
