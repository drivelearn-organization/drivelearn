package com.example.drivelearnbackend.Controllers;

import com.example.drivelearnbackend.Controllers.DTO.PaymentDTO;
import com.example.drivelearnbackend.Repositories.Entity.Payment;
import com.example.drivelearnbackend.Sevices.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/payment")
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    @PostMapping(value = "/addpayment")
    public PaymentDTO addPayment(@RequestBody PaymentDTO dto){
        Payment payment= paymentService.addCourcePayment(dto);
        return new PaymentDTO(payment.getPaymentId(), payment.getAmount(), payment.getDate());
    }
}
