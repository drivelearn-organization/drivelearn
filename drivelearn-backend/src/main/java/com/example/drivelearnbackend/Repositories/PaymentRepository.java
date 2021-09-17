package com.example.drivelearnbackend.Repositories;


import com.example.drivelearnbackend.Repositories.Entity.Employee;
import com.example.drivelearnbackend.Repositories.Entity.Payment;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.LinkedList;

public interface PaymentRepository extends CrudRepository<Payment,Integer> {


    LinkedList<Payment> findAllByDate(LocalDate date);
    LinkedList<Payment> findAllByDateGreaterThanEqual(LocalDate date);
    LinkedList<Payment> findByDateBetween(LocalDate date, LocalDate date2);
    LinkedList<Payment> findAllByDateGreaterThanEqualAndDateLessThanEqual(LocalDate date, LocalDate date2);

//    LinkedList<Payment> findAllByDateAndB(LocalDate date);
}
