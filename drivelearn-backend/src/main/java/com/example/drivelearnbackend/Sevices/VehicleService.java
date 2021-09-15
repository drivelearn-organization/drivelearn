package com.example.drivelearnbackend.Sevices;

import com.example.drivelearnbackend.Controllers.DTO.StudentDTO;
import com.example.drivelearnbackend.Controllers.DTO.UpdateVehicleDTO;
import com.example.drivelearnbackend.Controllers.DTO.VehicleDTO;
import com.example.drivelearnbackend.Repositories.*;
import com.example.drivelearnbackend.Repositories.Entity.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.LinkedList;
import java.util.NoSuchElementException;

@Service
public class VehicleService {
    @Autowired
    private BranchRepository branchRepository;

    @Autowired
    private VehicleTypeRepository vehicleTypeRepository;

    @Autowired
    private VehicleRepository vehiclRepository;

    @Autowired
    private InsuaranceRepository insuaranceRepository;

    @Autowired
    private LicenseRepository licenseRepository;

    public void addVehicle(VehicleDTO dto){
        Branch branch=branchRepository.findBranchByBranchName(dto.getBranchName());
        VechileType type1 = null;
        for (VechileType type : vehicleTypeRepository.findByTypeName(dto.getVehicleType())) {
            type1=type;
        }
        Vehicle vehicle=vehiclRepository.save(new Vehicle(dto.getRegiNumner(), dto.getChacieNumber(),dto.getStartingMilage(),dto.getStatus(), LocalDate.now(),branch,type1));
        License license=null;
        Insuarance insuarance=null;
        if(dto.getLicencePayedDate()!=null && dto.getLicenceExpireDate()!=null){
            license=licenseRepository.save(new License(dto.getPayedDate(),dto.getLicenceExpireDate(), vehicle));
            vehicle.setCurrentLicenId(license.getLicenseId());
        }
        if(dto.getPayedDate()!=null && dto.getExpireDate()!=null){
            insuarance=insuaranceRepository.save(new Insuarance(dto.getPayedDate(),dto.getLicenceExpireDate(), vehicle));
            vehicle.setCurrentInsuranceId(insuarance.getInsuaranceId());
        }
        vehiclRepository.save(vehicle);
    }

    public LinkedList<VehicleDTO> giveAllVehicles(int spec,int branchid){
        LinkedList<VehicleDTO> list=new LinkedList<>();
        if(spec==1){
            LocalDate isuranceDate=null;
            LocalDate licensDate=null;
            for (Vehicle vehicle : vehiclRepository.findAll()) {
                try{
                    isuranceDate= insuaranceRepository.findById(vehicle.getCurrentInsuranceId()).get().getExpireDate();
                    licensDate= licenseRepository.findById(vehicle.getCurrentLicenId()).get().getExpireDate();
                }catch (NoSuchElementException exception){}
                list.add(new VehicleDTO(vehicle.getVechicleId(),vehicle.getRegiNumner(),vehicle.getChacieNumber(),vehicle.getStartingMilage(),vehicle.getVechileType().getTypeName() ,isuranceDate,licensDate));
            }
        }else{
            LocalDate isuranceDate=null;
            LocalDate licensDate=null;
            for (Vehicle vehicle : vehiclRepository.findVehicleByBranch(branchRepository.findById(branchid).get())) {
                try{
                    isuranceDate= insuaranceRepository.findById(vehicle.getCurrentInsuranceId()).get().getExpireDate();
                    licensDate= licenseRepository.findById(vehicle.getCurrentLicenId()).get().getExpireDate();
                }catch (NoSuchElementException exception){}
                list.add(new VehicleDTO(vehicle.getVechicleId(),vehicle.getRegiNumner(),vehicle.getChacieNumber(),vehicle.getStartingMilage(),vehicle.getVechileType().getTypeName() ,isuranceDate,licensDate));
            }

        }
        return list;
    }

    public void updateVehicle(VehicleDTO dto){
        System.out.println(dto.getLicenseId());
        Vehicle vehicle=vehiclRepository.findById(dto.getVechicleId()).get();
        License license=null;
        Insuarance insuarance=null;
        if(dto.getLicencePayedDate()!=null && dto.getLicenceExpireDate()!=null){
            license=licenseRepository.save(new License(dto.getPayedDate(),dto.getLicenceExpireDate(), vehicle));
            vehicle.setCurrentLicenId(license.getLicenseId());
        }
        if(dto.getPayedDate()!=null && dto.getExpireDate()!=null){
            insuarance=insuaranceRepository.save(new Insuarance(dto.getPayedDate(),dto.getLicenceExpireDate(), vehicle));
            vehicle.setCurrentInsuranceId(insuarance.getInsuaranceId());
        }
        if(dto.getRegiNumner()!=null && dto.getRegiNumner()!=""){
            vehicle.setRegiNumner(dto.getRegiNumner());
        }
        if(dto.getStartingMilage()!=0 ){
            vehicle.setStartingMilage(dto.getStartingMilage());
        }
        if(dto.getVehicleType()!=null && dto.getVehicleType()!=""){
            VechileType type=null;
            for (VechileType vechileType : vehicleTypeRepository.findByTypeName(dto.getVehicleType())) {
                type=vechileType;
            }
            vehicle.setVechileType(type);
        }
        if(dto.getChacieNumber()!=null && dto.getChacieNumber()!=""){
            vehicle.setChacieNumber(dto.getChacieNumber());
        }
        vehiclRepository.save(vehicle);
    }

    public UpdateVehicleDTO getVehicle(int id){

        LocalDate isuranceDate=null;
        LocalDate licensDate=null;
        LocalDate isurancepayDate=null;
        LocalDate licenspayDate=null;

        Vehicle vehicle= vehiclRepository.findById(id).get();

        isuranceDate= insuaranceRepository.findById(vehicle.getCurrentInsuranceId()).get().getExpireDate();
        licensDate= licenseRepository.findById(vehicle.getCurrentLicenId()).get().getExpireDate();
        isurancepayDate =insuaranceRepository.findById(vehicle.getCurrentInsuranceId()).get().getPayedDate();
        licenspayDate = licenseRepository.findById(vehicle.getCurrentLicenId()).get().getPayedDate();

        return  new UpdateVehicleDTO(vehicle.getVechicleId(),vehicle.getRegiNumner(),vehicle.getChacieNumber(),vehicle.getStartingMilage(),vehicle.getVechileType().getTypeName(),isuranceDate,licensDate,isurancepayDate,licenspayDate);
    }

    public void deleteVehicle(int vehicleId){
        vehiclRepository.delete(vehiclRepository.findById(vehicleId).get());
    }
}
