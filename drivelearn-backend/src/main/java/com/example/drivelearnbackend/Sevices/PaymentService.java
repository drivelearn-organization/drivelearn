package com.example.drivelearnbackend.Sevices;

import com.example.drivelearnbackend.Controllers.DTO.PaymentDTO;
import com.example.drivelearnbackend.Repositories.Entity.Payment;
import com.example.drivelearnbackend.Repositories.Entity.Student;
import com.example.drivelearnbackend.Repositories.PaymentRepository;
import com.example.drivelearnbackend.Repositories.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.LinkedList;

@Service
public class PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    @Autowired
    private StudentRepository studentRepository;

    public Payment addCourcePayment(PaymentDTO dto){
        LinkedList<Student> stuList=studentRepository.findByUsername(dto.getUsername());
        Student student=null;
        for (Student student1 : stuList) {
            student=student1;
        }
        return paymentRepository.save(new Payment(dto.getAmount(), LocalDate.now(),student,null));

    }

}
