package com.example.drivelearnbackend.Sevices;

import com.example.drivelearnbackend.Controllers.DTO.PaymentDTO;
import com.example.drivelearnbackend.Repositories.Entity.Payment;
import com.example.drivelearnbackend.Repositories.Entity.Student;
import com.example.drivelearnbackend.Repositories.Entity.TotalPayment;
import com.example.drivelearnbackend.Repositories.PaymentRepository;
import com.example.drivelearnbackend.Repositories.StudentRepository;
import com.example.drivelearnbackend.Repositories.TotalPaymentRepository;
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

    @Autowired
    private TotalPaymentRepository totalPaymentRepository;

    public Payment addCourcePayment(PaymentDTO dto){
        LinkedList<Student> stuList=studentRepository.findByUsername(dto.getUsername());
        Student student=null;
        for (Student student1 : stuList) {
            student=student1;
        }
        System.out.println("done");
        return paymentRepository.save(new Payment(dto.getAmount(), LocalDate.now(),student,null));

    }


    public void addCourceInitialPayment(PaymentDTO dto){
        Student student=studentRepository.findById(dto.getUserId()).get();
        TotalPayment totalPayment=totalPaymentRepository.save(new TotalPayment(dto.getAmount(), LocalDate.now(),student));
//        Payment payment=paymentRepository.save(new Payment(dto.getAmount(), LocalDate.now(),student,null,totalPayment));

    }

    public void addInstallmentPayment(int totalPaymentId,double amount){
        TotalPayment totalPayment=totalPaymentRepository.findById(totalPaymentId).get();
        paymentRepository.save(new Payment(amount,LocalDate.now(), totalPayment.getStudent(),null,totalPayment));
    }


    public LinkedList<PaymentDTO> getAllPayment(int spec, int branchId){
        LinkedList<PaymentDTO> paymentDTOS=new LinkedList<>();

        if(spec==1){
            for (TotalPayment totalPayment : totalPaymentRepository.findAll()) {
                double paymentAmount=totalPayment.getAmount();
                for (Payment payment : totalPayment.getPayments()) {
                    paymentAmount=paymentAmount-payment.getAmount();
                }
                paymentDTOS.add(new PaymentDTO(totalPayment.getAmount(), totalPayment.getDate(), totalPayment.getStudent().getStuId(), totalPayment.getStudent().getName(), totalPayment.getStudent().getIdnum(), paymentAmount, totalPayment.getId()));
            }
        }else{
            LinkedList<TotalPayment> payments=new LinkedList<>();
            for (TotalPayment totalPayment : totalPaymentRepository.findAll()) {
                if(totalPayment.getStudent().getBranch().getBranchid()==branchId){
                    payments.add(totalPayment);
                }
            }
            for (TotalPayment payment : payments) {
                double paymentAmount=0;
                for (Payment payment1 : payment.getPayments()) {
                    paymentAmount=payment1.getAmount();
                }
                paymentDTOS.add(new PaymentDTO(payment.getAmount(), payment.getDate(), payment.getStudent().getStuId(), payment.getStudent().getName(), payment.getStudent().getIdnum(), paymentAmount, payment.getId()));
            }

        }
        return paymentDTOS;
    }

}
