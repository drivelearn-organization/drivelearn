package com.example.drivelearnbackend.Controllers;

import com.example.drivelearnbackend.Controllers.DTO.PaymentDTO;
import com.example.drivelearnbackend.Repositories.Entity.Payment;
import com.example.drivelearnbackend.Sevices.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedList;

@RestController
@CrossOrigin
@RequestMapping(value = "/payment")
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    @PostMapping(value = "/addpayment")
    public PaymentDTO addPayment(@RequestBody PaymentDTO dto){
        Payment payment= paymentService.addCourcePayment(dto);
        return new PaymentDTO(payment.getPaymentId(), payment.getAmount(), payment.getDate());
    }
// this is for getting all payments spec(admin-1,branch manager-2)
    @GetMapping(value = "getallpayment/{spec}/{branchid}")
    public LinkedList<PaymentDTO> getAllPayments(@PathVariable int spec, @PathVariable int branchid){
        return paymentService.getAllPayment(spec, branchid);
    }

//    {
//            "userId":44,
//            "amount":5000
//    }
    @PostMapping(value = "addinitialpayment")
    public void addInitialPayment(@RequestBody PaymentDTO dto){
        paymentService.addCourceInitialPayment(dto);
    }

//    {
//            "paymentId": 543,
//            "amount": 4000.0,
//            "userId": 44
//    }
    @PostMapping(value = "addinstalmentpayment")
    public void addInstallmentPayment(@RequestBody PaymentDTO dto){
        paymentService.addInstallmentPayment(dto.getPaymentId(), dto.getAmount());
    }
}
