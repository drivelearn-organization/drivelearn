package com.example.drivelearnbackend.Sevices;


import com.example.drivelearnbackend.Controllers.DTO.DashboardDTO;
import com.example.drivelearnbackend.Controllers.DTO.EmployeeDTO;
import com.example.drivelearnbackend.Controllers.DTO.StudentDTO;
import com.example.drivelearnbackend.Repositories.*;
import com.example.drivelearnbackend.Repositories.Entity.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Calendar;
import java.util.LinkedList;

@Service
public class DashboardService {

    @Autowired
    private com.example.drivelearnbackend.Repositories.AdminRepository AdminRepository;

    @Autowired
    private EmployeeRepository repository;

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private BranchRepository branchRepository;

    @Autowired
    private VehicleRepository vehicleRepository;

    @Autowired
    private PaymentRepository paymentRepository;

    public DashboardDTO getAllDetails(){
        int branchManagerCount = 0;
        int instructorlistCount = 0;
        int studentlistCount = 0;
        int vehiclelistCount = 0;
        double paymentDetailsCount = 0;
        double paymentDetailsCount1 = 0;
        double paymentDetailsCount2 = 0;
        double paymentDetailsCount3 = 0;

        LinkedList<Employee> branchManagerlist = repository.findAllByRoleAndIsActive(1, 2);
        LinkedList<Employee> instructorlist = repository.findAllByRoleAndIsActive(2, 2);
        LinkedList<Student> studentlist = studentRepository.findAll();
        LinkedList<Vehicle> vehiclelist = vehicleRepository.findAll();
        LocalDate todayDate = LocalDate.now();
        LocalDate oldDate = todayDate.minusDays(7);
        LocalDate oldDate1 = todayDate.minusDays(30);
        LocalDate oldDate2 = todayDate.minusDays(365);
        LinkedList<Payment> todayPaymentDetails3 = paymentRepository.findAllByDate(todayDate);
        LinkedList<Payment> todayPaymentDetails = paymentRepository.findAllByDateGreaterThanEqual(oldDate);
        LinkedList<Payment> todayPaymentDetails1 = paymentRepository.findAllByDateGreaterThanEqual(oldDate1);
        LinkedList<Payment> todayPaymentDetails2 = paymentRepository.findAllByDateGreaterThanEqual(oldDate2);
        for (Employee employee:branchManagerlist){
            branchManagerCount++;
        }
        for (Employee employee:instructorlist){
            instructorlistCount++;
        }
        for (Student student:studentlist){
            studentlistCount++;
        }

        for (Vehicle vehicle:vehiclelist){
            vehiclelistCount++;
        }
        for (Payment payment:todayPaymentDetails){
            paymentDetailsCount = paymentDetailsCount+payment.getAmount();
        }
        for (Payment payment1:todayPaymentDetails1){
            paymentDetailsCount1 = paymentDetailsCount1+payment1.getAmount();
        }
        for (Payment payment2:todayPaymentDetails2){
            paymentDetailsCount2 = paymentDetailsCount2+payment2.getAmount();
        }
        for (Payment payment3:todayPaymentDetails3){
            paymentDetailsCount3 = paymentDetailsCount3+payment3.getAmount();
        }
//        DashboardDTO employee = null;
//        return employee;

        return  new DashboardDTO(branchManagerCount,instructorlistCount,studentlistCount,vehiclelistCount,paymentDetailsCount,paymentDetailsCount2, paymentDetailsCount2, paymentDetailsCount3);
    }

    public LinkedList<Payment> getIncomeDetails(){

        LocalDate todayDate = LocalDate.now();
        LocalDate oldDate = todayDate.minusDays(7);

        LinkedList<Payment> todayPaymentDetails = paymentRepository.findAllByDateGreaterThanEqual(oldDate);
//        DashboardDTO employee = null;
       return todayPaymentDetails;
    }

    public DashboardDTO getmonthDetails(){

        double jan = 0;
        double feb = 0;
        double march = 0;
        double apr = 0;
        double may = 0;
        double jun = 0;
        double jul = 0;
        double aug = 0;
        double sep = 0;
        double oct = 0;
        double nov = 0;
        double dec = 0;

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");

        Calendar now = Calendar.getInstance();
        int year = now.get(Calendar.YEAR);
        String yearInString = String.valueOf(year);

        String date =yearInString+"-01-01";
        LocalDate jan1 = LocalDate.parse(date, formatter);

        String enddate =yearInString+"-01-31";
        LocalDate jan2 = LocalDate.parse(enddate, formatter);
        LinkedList<Payment> janDetails = paymentRepository.findAllByDateGreaterThanEqualAndDateLessThanEqual(jan1,jan2);

        for (Payment payment:janDetails){
            jan = jan+payment.getAmount();
        }

        String date1 =yearInString+"-02-01";
        LocalDate jan3 = LocalDate.parse(date1, formatter);

        String enddate1 =yearInString+"-02-28";
        LocalDate jan4 = LocalDate.parse(enddate1, formatter);
        LinkedList<Payment> FebDetails = paymentRepository.findAllByDateGreaterThanEqualAndDateLessThanEqual(jan3,jan4);

        for (Payment payment:FebDetails){
            feb = feb+payment.getAmount();
        }

        String date2 =yearInString+"-03-01";;
        LocalDate jan5 = LocalDate.parse(date2, formatter);

        String enddate2 =yearInString+"-03-31";
        LocalDate jan6 = LocalDate.parse(enddate2, formatter);
        LinkedList<Payment> marchDetails = paymentRepository.findAllByDateGreaterThanEqualAndDateLessThanEqual(jan5,jan6);

        for (Payment payment:marchDetails){
            march = march+payment.getAmount();
        }


        String date3 =yearInString+"-04-01";;
        LocalDate jan7 = LocalDate.parse(date3, formatter);

        String enddate3 =yearInString+"-04-30";
        LocalDate jan8 = LocalDate.parse(enddate3, formatter);
        LinkedList<Payment> aprDetails = paymentRepository.findAllByDateGreaterThanEqualAndDateLessThanEqual(jan7,jan8);

        for (Payment payment:aprDetails){
            apr = apr+payment.getAmount();
        }

        String date4 =yearInString+"-05-01";;
        LocalDate jan9 = LocalDate.parse(date4, formatter);

        String enddate4 =yearInString+"-05-31";
        LocalDate jan10 = LocalDate.parse(enddate4, formatter);
        LinkedList<Payment> mayDetails = paymentRepository.findAllByDateGreaterThanEqualAndDateLessThanEqual(jan9,jan10);

        for (Payment payment:mayDetails){
            may = may+payment.getAmount();
        }

        String date5 =yearInString+"-06-01";;
        LocalDate jan11 = LocalDate.parse(date5, formatter);

        String enddate5 =yearInString+"-06-30";
        LocalDate jan12 = LocalDate.parse(enddate5, formatter);
        LinkedList<Payment> junDetails = paymentRepository.findAllByDateGreaterThanEqualAndDateLessThanEqual(jan11,jan12);

        for (Payment payment:junDetails){
            jun = jun+payment.getAmount();
        }

        String date6 =yearInString+"-07-01";;
        LocalDate jan13 = LocalDate.parse(date6, formatter);

        String enddate6 =yearInString+"-07-31";
        LocalDate jan14 = LocalDate.parse(enddate6, formatter);
        LinkedList<Payment> julyDetails = paymentRepository.findAllByDateGreaterThanEqualAndDateLessThanEqual(jan13,jan14);

        for (Payment payment:julyDetails){
            jul = jul+payment.getAmount();
        }

        String date7 =yearInString+"-08-01";;
        LocalDate jan15 = LocalDate.parse(date7, formatter);

        String enddate7 =yearInString+"-08-31";
        LocalDate jan16 = LocalDate.parse(enddate7, formatter);
        LinkedList<Payment> AugDetails = paymentRepository.findAllByDateGreaterThanEqualAndDateLessThanEqual(jan15,jan16);

        for (Payment payment:AugDetails){
            aug = aug+payment.getAmount();
        }


        String date8 =yearInString+"-09-01";
        LocalDate jan17 = LocalDate.parse(date8, formatter);

        String enddate8 =yearInString+"-09-30";
        LocalDate jan18 = LocalDate.parse(enddate8, formatter);
        LinkedList<Payment> sepDetails = paymentRepository.findAllByDateGreaterThanEqualAndDateLessThanEqual(jan17,jan18);

        for (Payment payment:sepDetails){
            sep = sep+payment.getAmount();
        }

        String date9 =yearInString+"-10-01";
        LocalDate jan19 = LocalDate.parse(date9, formatter);

        String enddate9 =yearInString+"-10-31";
        LocalDate jan20 = LocalDate.parse(enddate9, formatter);
        LinkedList<Payment> octDetails = paymentRepository.findAllByDateGreaterThanEqualAndDateLessThanEqual(jan19,jan20);

        for (Payment payment:octDetails){
            oct = oct+payment.getAmount();
        }

        String date10 =yearInString+"-11-01";
        LocalDate jan21 = LocalDate.parse(date10, formatter);

        String enddate10 =yearInString+"-11-30";
        LocalDate jan22 = LocalDate.parse(enddate10, formatter);
        LinkedList<Payment> novDetails = paymentRepository.findAllByDateGreaterThanEqualAndDateLessThanEqual(jan21,jan22);

        for (Payment payment:novDetails){
            nov = nov+payment.getAmount();
        }

        String date11 =yearInString+"-12-01";
        LocalDate jan23 = LocalDate.parse(date11, formatter);

        String enddate11 =yearInString+"-12-31";
        LocalDate jan24 = LocalDate.parse(enddate11, formatter);
        LinkedList<Payment> decDetails = paymentRepository.findAllByDateGreaterThanEqualAndDateLessThanEqual(jan23,jan24);

        for (Payment payment:decDetails){
            dec = dec+payment.getAmount();
        }


        return  new DashboardDTO(jan, feb, march, apr, may, jun, jul, aug, sep, oct, nov, dec);


    }



    public DashboardDTO getAllBranchDetails(int id){
        int branchManagerCount = 0;
        int instructorlistCount = 0;
        int studentlistCount = 0;
        int vehiclelistCount = 0;
        double paymentDetailsCount = 0;
        double paymentDetailsCount1 = 0;
        double paymentDetailsCount2 = 0;
        double paymentDetailsCount3 = 0;

        Branch branch = branchRepository.findBranchByBranchid(id);

        LinkedList<Employee> branchManagerlist = repository.findAllByRoleAndIsActiveAndBranch(1, 2, branch);
        LinkedList<Employee> instructorlist = repository.findAllByRoleAndIsActiveAndBranch(2, 2, branch);
        LinkedList<Student> studentlist = studentRepository.findAllByBranch(branch);
        LinkedList<Vehicle> vehiclelist = vehicleRepository.findAllByBranch(branch);
        LocalDate todayDate = LocalDate.now();
        LocalDate oldDate = todayDate.minusDays(7);
        LocalDate oldDate1 = todayDate.minusDays(30);
        LocalDate oldDate2 = todayDate.minusDays(365);
        LinkedList<Payment> todayPaymentDetails3 = paymentRepository.findAllByDate(todayDate);
        LinkedList<Payment> todayPaymentDetails = paymentRepository.findAllByDateGreaterThanEqual(oldDate);
        LinkedList<Payment> todayPaymentDetails1 = paymentRepository.findAllByDateGreaterThanEqual(oldDate1);
        LinkedList<Payment> todayPaymentDetails2 = paymentRepository.findAllByDateGreaterThanEqual(oldDate2);
        for (Employee employee:branchManagerlist){
            branchManagerCount++;
        }
        for (Employee employee:instructorlist){
            instructorlistCount++;
        }
        for (Student student:studentlist){
            studentlistCount++;
        }

        for (Vehicle vehicle:vehiclelist){
            vehiclelistCount++;
        }
        for (Payment payment:todayPaymentDetails){
            Student student = payment.getStudent();
            Branch newbranch = student.getBranch();
            int bid = newbranch.getBranchid();
            if(bid == id){
                paymentDetailsCount = paymentDetailsCount+payment.getAmount();
            }

        }
        for (Payment payment1:todayPaymentDetails1){
            Student student1 = payment1.getStudent();
            Branch newbranch1 = student1.getBranch();
            int bid1 = newbranch1.getBranchid();
            if(bid1 == id){
                paymentDetailsCount1 = paymentDetailsCount1+payment1.getAmount();
            }

        }
        for (Payment payment2:todayPaymentDetails2){
            Student student2 = payment2.getStudent();
            Branch newbranch2 = student2.getBranch();
            int bid2 = newbranch2.getBranchid();
            if(bid2 == id){
                paymentDetailsCount2 = paymentDetailsCount2+payment2.getAmount();
            }

        }
        for (Payment payment3:todayPaymentDetails3){
            Student student3 = payment3.getStudent();
            Branch newbranch3 = student3.getBranch();
            int bid3 = newbranch3.getBranchid();
            if(bid3 == id){
                paymentDetailsCount3 = paymentDetailsCount3+payment3.getAmount();
            }


        }


        return  new DashboardDTO(branchManagerCount,instructorlistCount,studentlistCount,vehiclelistCount,paymentDetailsCount,paymentDetailsCount2, paymentDetailsCount2, paymentDetailsCount3);
    }


    public DashboardDTO getBranchmonthDetails(int id){

        double jan = 0;
        double feb = 0;
        double march = 0;
        double apr = 0;
        double may = 0;
        double jun = 0;
        double jul = 0;
        double aug = 0;
        double sep = 0;
        double oct = 0;
        double nov = 0;
        double dec = 0;

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");

        Calendar now = Calendar.getInstance();
        int year = now.get(Calendar.YEAR);
        String yearInString = String.valueOf(year);

        String date =yearInString+"-01-01";
        LocalDate jan1 = LocalDate.parse(date, formatter);

        String enddate =yearInString+"-01-31";
        LocalDate jan2 = LocalDate.parse(enddate, formatter);
        LinkedList<Payment> janDetails = paymentRepository.findAllByDateGreaterThanEqualAndDateLessThanEqual(jan1,jan2);

        for (Payment payment:janDetails){
            Student student = payment.getStudent();
            Branch newbranch = student.getBranch();
            int bid = newbranch.getBranchid();
            if(bid == id){
                jan = jan+payment.getAmount();
            }


        }

        String date1 =yearInString+"-02-01";
        LocalDate jan3 = LocalDate.parse(date1, formatter);

        String enddate1 =yearInString+"-02-28";
        LocalDate jan4 = LocalDate.parse(enddate1, formatter);
        LinkedList<Payment> FebDetails = paymentRepository.findAllByDateGreaterThanEqualAndDateLessThanEqual(jan3,jan4);

        for (Payment payment:FebDetails){
            Student student = payment.getStudent();
            Branch newbranch = student.getBranch();
            int bid = newbranch.getBranchid();
            if(bid == id){
                feb = feb+payment.getAmount();
            }

        }

        String date2 =yearInString+"-03-01";;
        LocalDate jan5 = LocalDate.parse(date2, formatter);

        String enddate2 =yearInString+"-03-31";
        LocalDate jan6 = LocalDate.parse(enddate2, formatter);
        LinkedList<Payment> marchDetails = paymentRepository.findAllByDateGreaterThanEqualAndDateLessThanEqual(jan5,jan6);

        for (Payment payment:marchDetails){
            Student student = payment.getStudent();
            Branch newbranch = student.getBranch();
            int bid = newbranch.getBranchid();
            if(bid == id){march = march+payment.getAmount();}

        }


        String date3 =yearInString+"-04-01";;
        LocalDate jan7 = LocalDate.parse(date3, formatter);

        String enddate3 =yearInString+"-04-30";
        LocalDate jan8 = LocalDate.parse(enddate3, formatter);
        LinkedList<Payment> aprDetails = paymentRepository.findAllByDateGreaterThanEqualAndDateLessThanEqual(jan7,jan8);

        for (Payment payment:aprDetails){
            Student student = payment.getStudent();
            Branch newbranch = student.getBranch();
            int bid = newbranch.getBranchid();
            if(bid == id){
                apr = apr+payment.getAmount();
            }

        }

        String date4 =yearInString+"-05-01";;
        LocalDate jan9 = LocalDate.parse(date4, formatter);

        String enddate4 =yearInString+"-05-31";
        LocalDate jan10 = LocalDate.parse(enddate4, formatter);
        LinkedList<Payment> mayDetails = paymentRepository.findAllByDateGreaterThanEqualAndDateLessThanEqual(jan9,jan10);

        for (Payment payment:mayDetails){
            Student student = payment.getStudent();
            Branch newbranch = student.getBranch();
            int bid = newbranch.getBranchid();
            if(bid == id){
                may = may+payment.getAmount();
            }

        }

        String date5 =yearInString+"-06-01";;
        LocalDate jan11 = LocalDate.parse(date5, formatter);

        String enddate5 =yearInString+"-06-30";
        LocalDate jan12 = LocalDate.parse(enddate5, formatter);
        LinkedList<Payment> junDetails = paymentRepository.findAllByDateGreaterThanEqualAndDateLessThanEqual(jan11,jan12);

        for (Payment payment:junDetails){
            Student student = payment.getStudent();
            Branch newbranch = student.getBranch();
            int bid = newbranch.getBranchid();
            if(bid == id){
                jun = jun+payment.getAmount();
            }

        }

        String date6 =yearInString+"-07-01";;
        LocalDate jan13 = LocalDate.parse(date6, formatter);

        String enddate6 =yearInString+"-07-31";
        LocalDate jan14 = LocalDate.parse(enddate6, formatter);
        LinkedList<Payment> julyDetails = paymentRepository.findAllByDateGreaterThanEqualAndDateLessThanEqual(jan13,jan14);

        for (Payment payment:julyDetails){
            Student student = payment.getStudent();
            Branch newbranch = student.getBranch();
            int bid = newbranch.getBranchid();
            if(bid == id){
                jul = jul+payment.getAmount();
            }

        }

        String date7 =yearInString+"-08-01";;
        LocalDate jan15 = LocalDate.parse(date7, formatter);

        String enddate7 =yearInString+"-08-31";
        LocalDate jan16 = LocalDate.parse(enddate7, formatter);
        LinkedList<Payment> AugDetails = paymentRepository.findAllByDateGreaterThanEqualAndDateLessThanEqual(jan15,jan16);

        for (Payment payment:AugDetails){
            Student student = payment.getStudent();
            Branch newbranch = student.getBranch();
            int bid = newbranch.getBranchid();
            if(bid == id){
                aug = aug+payment.getAmount();
            }


        }


        String date8 =yearInString+"-09-01";
        LocalDate jan17 = LocalDate.parse(date8, formatter);

        String enddate8 =yearInString+"-09-30";
        LocalDate jan18 = LocalDate.parse(enddate8, formatter);
        LinkedList<Payment> sepDetails = paymentRepository.findAllByDateGreaterThanEqualAndDateLessThanEqual(jan17,jan18);

        for (Payment payment:sepDetails){
            Student student = payment.getStudent();
            Branch newbranch = student.getBranch();
            int bid = newbranch.getBranchid();
            if(bid == id){
                sep = sep+payment.getAmount();
            }

        }

        String date9 =yearInString+"-10-01";
        LocalDate jan19 = LocalDate.parse(date9, formatter);

        String enddate9 =yearInString+"-10-31";
        LocalDate jan20 = LocalDate.parse(enddate9, formatter);
        LinkedList<Payment> octDetails = paymentRepository.findAllByDateGreaterThanEqualAndDateLessThanEqual(jan19,jan20);

        for (Payment payment:octDetails){
            Student student = payment.getStudent();
            Branch newbranch = student.getBranch();
            int bid = newbranch.getBranchid();
            if(bid == id){
                oct = oct+payment.getAmount();
            }

        }

        String date10 =yearInString+"-11-01";
        LocalDate jan21 = LocalDate.parse(date10, formatter);

        String enddate10 =yearInString+"-11-30";
        LocalDate jan22 = LocalDate.parse(enddate10, formatter);
        LinkedList<Payment> novDetails = paymentRepository.findAllByDateGreaterThanEqualAndDateLessThanEqual(jan21,jan22);

        for (Payment payment:novDetails){
            Student student = payment.getStudent();
            Branch newbranch = student.getBranch();
            int bid = newbranch.getBranchid();
            if(bid == id){
                nov = nov+payment.getAmount();
            }

        }

        String date11 =yearInString+"-12-01";
        LocalDate jan23 = LocalDate.parse(date11, formatter);

        String enddate11 =yearInString+"-12-31";
        LocalDate jan24 = LocalDate.parse(enddate11, formatter);
        LinkedList<Payment> decDetails = paymentRepository.findAllByDateGreaterThanEqualAndDateLessThanEqual(jan23,jan24);

        for (Payment payment:decDetails){
            Student student = payment.getStudent();
            Branch newbranch = student.getBranch();
            int bid = newbranch.getBranchid();
            if(bid == id){
                dec = dec+payment.getAmount();
            }

        }


        return  new DashboardDTO(jan, feb, march, apr, may, jun, jul, aug, sep, oct, nov, dec);


    }
}
