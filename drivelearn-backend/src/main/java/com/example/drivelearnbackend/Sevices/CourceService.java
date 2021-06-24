package com.example.drivelearnbackend.Sevices;

import com.example.drivelearnbackend.Controllers.DTO.CourceDTO;
import com.example.drivelearnbackend.Repositories.CourceTypeAssocRepository;
import com.example.drivelearnbackend.Repositories.CourseRepository;
import com.example.drivelearnbackend.Repositories.Entity.Cource;
import com.example.drivelearnbackend.Repositories.Entity.CourceTypeAssoc;
import com.example.drivelearnbackend.Repositories.Entity.Student;
import com.example.drivelearnbackend.Repositories.Entity.VechileType;
import com.example.drivelearnbackend.Repositories.StudentRepository;
import com.example.drivelearnbackend.Repositories.VehicleTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.LinkedList;

@Service
public class CourceService {

    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private CourceTypeAssocRepository courceTypeAssocRepository;

    @Autowired
    private VehicleTypeRepository vehicleTypeRepository;

    public void addCource(CourceDTO dto){
        LinkedList<Student>  students=studentRepository.findByUsername(dto.getUsername());
        Student student=null;
        for (Student student1 : students) {
            student = student1;
        }
        Cource cource=courseRepository.save(new Cource(LocalDateTime.now(),student));
        if(dto.getTransportState()==1){
            LinkedList<VechileType> list =vehicleTypeRepository.findByTypeName("exam");
            VechileType vechileType=null;
            for (VechileType vechileType1 : list) {
                vechileType=vechileType1;
            }
            courceTypeAssocRepository.save(new CourceTypeAssoc(dto.getExam(),dto.getExam()*2,cource,vechileType));
        }else if(dto.getTransportState()==2){
            LinkedList<VechileType> list =vehicleTypeRepository.findByTypeName("exam");
            VechileType vechileType=null;
            for (VechileType vechileType1 : list) {
                vechileType=vechileType1;
            }
            courceTypeAssocRepository.save(new CourceTypeAssoc(dto.getExam(),dto.getExam()*2,cource,vechileType));




            list =vehicleTypeRepository.findByTypeName("bike");
            for (VechileType vechileType1 : list) {
                vechileType=vechileType1;
            }
            courceTypeAssocRepository.save(new CourceTypeAssoc(dto.getBike(),dto.getBike()*2,cource,vechileType));




            list =vehicleTypeRepository.findByTypeName("car_manual");
            for (VechileType vechileType1 : list) {
                vechileType=vechileType1;
            }
            courceTypeAssocRepository.save(new CourceTypeAssoc(dto.getCarManual(),dto.getCarManual()*2,cource,vechileType));


            list =vehicleTypeRepository.findByTypeName("wheeler");
            for (VechileType vechileType1 : list) {
                vechileType=vechileType1;
            }
            courceTypeAssocRepository.save(new CourceTypeAssoc(dto.getWheeler(),dto.getWheeler()*2,cource,vechileType));

        }else if(dto.getTransportState()==3){
            LinkedList<VechileType> list =vehicleTypeRepository.findByTypeName("exam");
            VechileType vechileType=null;
            for (VechileType vechileType1 : list) {
                vechileType=vechileType1;
            }
            courceTypeAssocRepository.save(new CourceTypeAssoc(dto.getExam(),dto.getExam()*2,cource,vechileType));



            list =vehicleTypeRepository.findByTypeName("heavy");
            for (VechileType vechileType1 : list) {
                vechileType=vechileType1;
            }
            courceTypeAssocRepository.save(new CourceTypeAssoc(dto.getHeavy(),dto.getHeavy()*2,cource,vechileType));
        }else if(dto.getTransportState()==4){

            //auto
            LinkedList<VechileType> list =vehicleTypeRepository.findByTypeName("exam");
            VechileType vechileType=null;
            for (VechileType vechileType1 : list) {
                vechileType=vechileType1;
            }
            courceTypeAssocRepository.save(new CourceTypeAssoc(dto.getExam(),dto.getExam()*2,cource,vechileType));



            list =vehicleTypeRepository.findByTypeName("car_auto");
            for (VechileType vechileType1 : list) {
                vechileType=vechileType1;
            }
            courceTypeAssocRepository.save(new CourceTypeAssoc(dto.getCarAuto(),dto.getCarAuto()*2,cource,vechileType));

        }else if(dto.getTransportState()==5){

            //manual

            LinkedList<VechileType> list =vehicleTypeRepository.findByTypeName("exam");
            VechileType vechileType=null;
            for (VechileType vechileType1 : list) {
                vechileType=vechileType1;
            }
            courceTypeAssocRepository.save(new CourceTypeAssoc(dto.getExam(),dto.getExam()*2,cource,vechileType));



            list =vehicleTypeRepository.findByTypeName("car_manual");
            for (VechileType vechileType1 : list) {
                vechileType=vechileType1;
            }
            courceTypeAssocRepository.save(new CourceTypeAssoc(dto.getCarManual(),dto.getCarManual()*2,cource,vechileType));

        }else if(dto.getTransportState()==6){

            //wheel
            LinkedList<VechileType> list =vehicleTypeRepository.findByTypeName("exam");
            VechileType vechileType=null;
            for (VechileType vechileType1 : list) {
                vechileType=vechileType1;
            }
            courceTypeAssocRepository.save(new CourceTypeAssoc(dto.getExam(),dto.getExam()*2,cource,vechileType));



            list =vehicleTypeRepository.findByTypeName("wheeler");
            for (VechileType vechileType1 : list) {
                vechileType=vechileType1;
            }
            courceTypeAssocRepository.save(new CourceTypeAssoc(dto.getWheeler(),dto.getWheeler()*2,cource,vechileType));

        }else if(dto.getTransportState()==7){

            //bike
            LinkedList<VechileType> list =vehicleTypeRepository.findByTypeName("exam");
            VechileType vechileType=null;
            for (VechileType vechileType1 : list) {
                vechileType=vechileType1;
            }
            courceTypeAssocRepository.save(new CourceTypeAssoc(dto.getExam(),dto.getExam()*2,cource,vechileType));



            list =vehicleTypeRepository.findByTypeName("bike");
            for (VechileType vechileType1 : list) {
                vechileType=vechileType1;
            }
            courceTypeAssocRepository.save(new CourceTypeAssoc(dto.getBike(),dto.getBike()*2,cource,vechileType));

        }


    }
}
