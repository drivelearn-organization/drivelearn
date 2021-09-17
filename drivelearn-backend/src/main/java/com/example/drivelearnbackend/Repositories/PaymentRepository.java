package com.example.drivelearnbackend.Repositories;


import com.example.drivelearnbackend.Repositories.Entity.Employee;
import com.example.drivelearnbackend.Repositories.Entity.Payment;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.LinkedList;

public interface PaymentRepository extends CrudRepository<Payment,Integer> {
//    @Query("SELECT p FROM Payment p WHERE p.date> :date ")
//    LinkedList<Payment> searchByDate(@Param("date")LocalDate date);

    LinkedList<Payment> findAllByDate(LocalDate date);
    LinkedList<Payment> findByDateBetween(LocalDate date, LocalDate date2);
}
