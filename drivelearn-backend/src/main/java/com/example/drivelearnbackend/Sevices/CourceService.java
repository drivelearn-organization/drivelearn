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

import java.awt.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

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

    private int getVehiclcleTypeId(String name){
        LinkedList<VechileType> listType =vehicleTypeRepository.findByTypeName(name);
        VechileType vechileType=null;
        for (VechileType vechileType1 : listType) {
            vechileType=vechileType1;
        }
        return vechileType.getTypeId();
    }




    public CourceDTO sendCourses(CourceDTO dto){
        LinkedList<Student> list=studentRepository.findByUsername(dto.getUsername());
        Student student=null;
        for (Student student1 : list) {
            student = student1;
        }

        List<Cource> cources=student.getCourceList();
        Cource cource=null;
        for (Cource cource1 : cources) {
            if(cource1.getStatus()==0){
                cource=cource1;
            }
        }
        List<CourceTypeAssoc> courceTypeAssocs=null;
        CourceDTO courceDTO=new CourceDTO();
        if(cource!=null){
            courceTypeAssocs=cource.getListCourceTypeAssoc();
            courceDTO.setCourseId(cource.getCourseId());
            courceDTO.setExamDate1(cource.getExamDate1());
            courceDTO.setExamDate2(cource.getExamDate2());
            courceDTO.setExamDate3(cource.getExamDate3());
        }





//        getting ids
        int examId=getVehiclcleTypeId("exam");
        int carAutoId=getVehiclcleTypeId("car_auto");
        int wheelerId=getVehiclcleTypeId("wheeler");
        int bikeId=getVehiclcleTypeId("bike");
        int heavyId=getVehiclcleTypeId("heavy");
        int carManualId=getVehiclcleTypeId("car_manual");

        int examVal=0;
        int carAutoVal=0;
        int wheelerVal=0;
        int bikeVal=0;
        int heavyVal=0;
        int carManualVal=0;

        if(!(courceTypeAssocs==null || courceTypeAssocs.isEmpty())){
            for (CourceTypeAssoc courceTypeAssoc : courceTypeAssocs) {

                if (courceTypeAssoc.getVechileType().getTypeId() == examId) {

                    courceDTO.setExam(courceTypeAssoc.getNumHours());
                }else if(courceTypeAssoc.getVechileType().getTypeId() == carAutoId){

                    courceDTO.setCarAuto(courceTypeAssoc.getNumHours());
                }else if(courceTypeAssoc.getVechileType().getTypeId() ==wheelerId){

                    courceDTO.setWheeler(courceTypeAssoc.getNumHours());
                }else if(courceTypeAssoc.getVechileType().getTypeId() ==bikeId){
                    courceDTO.setBike(courceTypeAssoc.getNumHours());
                }else if(courceTypeAssoc.getVechileType().getTypeId() ==heavyId){
                    courceDTO.setHeavy(courceTypeAssoc.getNumHours());
                }else if(courceTypeAssoc.getVechileType().getTypeId()==carManualId){
                    courceDTO.setCarManual(courceTypeAssoc.getNumHours());
                }
            }
        }

        return courceDTO;
    }
    public boolean isEnroll(CourceDTO dto){
        LinkedList<Student> list=studentRepository.findByUsername(dto.getUsername());
        Student student=null;
        for (Student student1 : list) {
            student = student1;
        }

        List<Cource> cources=student.getCourceList();
        Cource cource=null;
        for (Cource cource1 : cources) {
            if(cource1.getStatus()==0){
                cource=cource1;
            }
        }
        return cource!=null ?true:false;
    }

    public void setCourseClosed(CourceDTO dto){
        Cource cource=courseRepository.findById(dto.getCourseId()).get();
        cource.setStatus(1);
        courseRepository.save(cource);
    }

}
